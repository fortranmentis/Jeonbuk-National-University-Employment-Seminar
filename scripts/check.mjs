import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const root = path.resolve(import.meta.dirname,'..');
const ctx = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'slides.js'),'utf8'),ctx);
const slides = ctx.window.SEMINAR_SLIDES;
if(slides.length!==38)throw Error('Expected 38 slides');
if(slides.slice(0,-1).reduce((sum,s)=>sum+s.seconds,0)!==3000)throw Error('Expected 50-minute talk');
if(slides.at(-1).seconds!==600)throw Error('Expected 10-minute Q&A');
const assets = new Set(['favicon.svg','seminar-qr.svg']);
for(const s of slides){
 if(!s.title||!s.chapter||!s.notes)throw Error('Missing slide content');
 if(s.image){if(!s.alt)throw Error('Image alt required');assets.add(s.image);}
 for(const [src,alt]of s.images??[]){if(!alt)throw Error('Image alt required');assets.add(src);}
 for(const t of s.tools??[]){if(!t.name||!t.role||!t.url.startsWith('https://'))throw Error('Missing tool description');assets.add(t.logo);}
 for(const [label,url]of s.links??[]){if(!label)throw Error('Link label required');if(url.startsWith('assets/'))assets.add(url.slice(7));else if(!url.startsWith('https://')&&!url.startsWith('#'))throw Error('Unexpected URL');}
}
for(const asset of assets)if(!fs.existsSync(path.join(root,'assets',asset)))throw Error('Missing '+asset);
for(const file of fs.readdirSync(path.join(root,'assets')))if(!assets.has(file))throw Error('Unused '+file);
for(const file of fs.readdirSync(root))if(/\.(pptx|pdf|jpeg)$/i.test(file))throw Error('Unexpected original source file');
console.log(`Content and asset checks passed: ${slides.length} slides, 50+10 minutes, ${assets.size} local assets.`);
