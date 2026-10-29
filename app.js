(() => {
  'use strict';
  const slides = window.SEMINAR_SLIDES;
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  let index = 0, reading = false, running = false, started = 0, total = 0, lastFocus;
  const dialogs = ['overview', 'help', 'resources'].map($);
  const lines = value => escape(value).replace(/\n/g, '<br>');
  function links(s) {
    return s.links ? `<div class="slide-links">${s.links.map(([label,url]) => `<a href="${escape(url)}"${url.startsWith('https:') || url.startsWith('assets/') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escape(label)}</a>`).join('')}</div>` : '';
  }
  function heading(s, i) {
    return `${s.eyebrow ? `<p class="eyebrow">${escape(s.eyebrow)}</p>` : ''}<${i ? 'h2' : 'h1'} id="title-${i+1}">${escape(s.title)}</${i ? 'h2' : 'h1'}>${s.subtitle ? `<p class="subtitle">${lines(s.subtitle)}</p>` : ''}`;
  }
  function list(s, kind) {
    if (!s.items) return '';
    if (kind === 'words' || kind === 'company' || kind === 'qa' || kind === 'research') return `<ul class="word-list">${s.items.map(x => `<li>${escape(x)}</li>`).join('')}</ul>`;
    if (kind === 'timeline' || kind === 'timeline-photo') return `<div class="timeline-list">${s.items.map(([a,b])=>`<div><strong>${escape(a)}</strong><p>${escape(b)}</p></div>`).join('')}</div>`;
    if (kind === 'salary') return `<div class="salary-pair">${s.items.map(([a,b,c])=>`<div><p class="degree">${escape(a)}</p><strong>${escape(b)}</strong><p class="unit">${escape(c)}</p></div>`).join('')}</div>`;
    if (['mapping','role','roles','credentials','service-photo'].includes(kind)) return `<div class="role-list">${s.items.map(([a,b])=>`<div><strong>${escape(a)}</strong><p>${lines(b)}</p></div>`).join('')}</div>`;
    return `<div class="flow-list">${s.items.map(([a,b])=>`<div><strong>${escape(a)}</strong><span>${escape(b)}</span></div>`).join('')}</div>`;
  }
  function pictures(s) {
    return `<div class="image-pair">${s.images.map(([src,alt,caption])=>`<figure><img src="assets/${escape(src)}" alt="${escape(alt)}" loading="lazy" decoding="async"><figcaption>${escape(caption)}</figcaption></figure>`).join('')}</div>`;
  }
  $('slides').innerHTML = slides.map((s,i) => {
    let content = heading(s,i) + list(s,s.layout) + links(s);
    if (s.layout === 'ais-case') content = heading(s,i)
      + `<div class="case-metrics">${s.metrics.map(([value,label])=>`<div><strong>${escape(value)}</strong><p>${escape(label)}</p></div>`).join('')}</div>`
      + `<div class="case-comparison"><div class="case-input"><h3>처리 전 · 위치·시간 기록</h3><div class="case-fields" aria-label="입력 필드 개념도">${s.inputFields.map(field=>`<p>${escape(field)}</p>`).join('')}</div><ol>${s.processing.map(step=>`<li>${escape(step)}</li>`).join('')}</ol></div><span class="case-arrow" aria-hidden="true">→</span><figure><figcaption>처리 후 · 상태 후보 시각화</figcaption><a href="assets/${escape(s.image)}" target="_blank" rel="noopener noreferrer"><img src="assets/${escape(s.image)}" alt="${escape(s.alt)}" loading="lazy"></a></figure></div>`
      + `<p class="case-usage"><strong>연구 활용</strong> ${escape(s.usage)}</p>` + links(s);
    if (s.layout === 'timeline-photo') content += `<figure class="timeline-photo-image"><img src="assets/${escape(s.image)}" alt="${escape(s.alt)}" loading="lazy"></figure>`;
    if (s.layout === 'research' || s.layout === 'service-photo') content = `<div>${content}</div><figure><img src="assets/${escape(s.image)}" alt="${escape(s.alt)}" loading="lazy" decoding="async"></figure>`;
    if (s.layout === 'duo') content = heading(s,i) + pictures(s) + links(s);
    if (s.layout === 'apps') content = `<div>${content}</div>${pictures(s)}`;
    if (s.layout === 'closing') content += '<img class="qr" src="assets/seminar-qr.svg" alt="강연 웹페이지 주소 QR 코드">';
    if (s.byline) content += `<p class="byline">${escape(s.byline)}</p>`;
    if (s.footer) content += `<p class="slide-footer">${escape(s.footer)}</p>`;
    return `<section class="slide ${escape(s.layout)}" id="slide-${i+1}" data-slide="${i+1}" aria-labelledby="title-${i+1}"${s.image && ['photo','cover'].includes(s.layout) ? ` style="--photo:url('assets/${escape(s.image)}')"` : ''}${i ? ' hidden' : ''}>${content}</section>`;
  }).join('');
  const panels = [...document.querySelectorAll('.slide')];
  $('slide-index').innerHTML = slides.map((s,i)=>`<button data-go="${i}"><span>${String(i+1).padStart(2,'0')}</span>${escape(s.title.replace(/\n/g,' '))}</button>`).join('');
  function notesUpdate() {
    const s = slides[index];
    $('notes-title').textContent = s.title.replace(/\n/g,' ');
    $('notes-time').textContent = `${s.chapter} · 권장 ${Math.floor(s.seconds/60)}분 ${s.seconds%60}초`;
    $('notes-body').textContent = s.notes;
  }
  function show(n, writeHash = true, announce = true) {
    index = Math.min(slides.length-1, Math.max(0,n));
    panels.forEach((panel,i) => {
      panel.hidden = !reading && i !== index;
      panel.classList.toggle('entering',i===index && !reading);
    });
    $('counter').textContent = `${String(index+1).padStart(2,'0')} / ${slides.length}`;
    $('chapter').textContent = slides[index].chapter;
    $('prev').disabled = index===0;
    $('next').disabled = index===slides.length-1;
    $('progress').style.width = `${(index+1)/slides.length*100}%`;
    document.querySelectorAll('[data-go]').forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
    notesUpdate();
    if (writeHash) history.replaceState(null,'',`#slide-${index+1}`);
    if (announce) $('announcement').textContent = `${index+1} / ${slides.length}. ${slides[index].title.replace(/\n/g,' ')}`;
    if (!reading) window.scrollTo({top:0,behavior:'instant'});
    else if (announce) panels[index].scrollIntoView({block:'start',behavior:'instant'});
  }
  function open(dialog) { lastFocus=document.activeElement; if(!dialog.open)dialog.showModal(); }
  function close(dialog) { dialog.close(); if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true}); }
  function setReading(value) {
    reading=value;
    document.body.classList.toggle('reading',reading);
    $('read-button').textContent=reading?'발표 보기':'전체 읽기';
    show(index,false,false);
    if(reading)panels[index].scrollIntoView({block:'start',behavior:'instant'});
  }
  function parseHash() {
    const match=location.hash.match(/^#slide-(\d+)$/);
    if(match)show(Number(match[1])-1,false);
    else if(location.hash==='#resources')open($('resources'));
  }
  $('next').addEventListener('click',()=>show(index+1));
  $('prev').addEventListener('click',()=>show(index-1));
  $('overview-button').addEventListener('click',()=>open($('overview')));
  $('help-button').addEventListener('click',()=>open($('help')));
  $('resources-link').addEventListener('click',event=>{event.preventDefault();close($('overview'));open($('resources'));});
  document.querySelectorAll('dialog [data-close]').forEach(button=>button.addEventListener('click',()=>close(button.closest('dialog'))));
  dialogs.forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close(dialog);}}));
  document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>{close($('overview'));show(Number(button.dataset.go));if(reading)panels[index].scrollIntoView({block:'start',behavior:'instant'});}));
  function toggleNotes() { $('notes').hidden=!$('notes').hidden;$('notes-button').setAttribute('aria-pressed',String(!$('notes').hidden)); }
  $('notes-button').addEventListener('click',toggleNotes);
  $('notes-close').addEventListener('click',toggleNotes);
  $('read-button').addEventListener('click',()=>{close($('overview'));setReading(!reading);});
  $('print-button').addEventListener('click',()=>{close($('overview'));window.print();});
  async function fullscreen() {
    try {if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else open($('help'));}
    catch { $('announcement').textContent='브라우저에서 전체화면을 허용하지 않았습니다. 브라우저의 전체화면 메뉴를 사용할 수 있습니다.'; }
  }
  $('fullscreen-button').addEventListener('click',fullscreen);
  document.addEventListener('fullscreenchange',()=>{$('fullscreen-button').textContent=document.fullscreenElement?'전체화면 종료':'전체화면 F';});
  document.addEventListener('click',event=>{const a=event.target.closest('a[href="#resources"]');if(a){event.preventDefault();open($('resources'));}});
  document.addEventListener('keydown',event=>{
    if(event.defaultPrevented||event.ctrlKey||event.metaKey||event.altKey||/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;
    if(dialogs.some(dialog=>dialog.open))return;
    const key=event.key.toLowerCase();
    if(['arrowright','pagedown',' ','arrowleft','pageup','home','end','g','n','f','?','escape'].includes(key))event.preventDefault();
    if(['arrowright','pagedown',' '].includes(key)){if(reading)panels[Math.min(index+1,slides.length-1)].scrollIntoView();show(index+1);}
    else if(['arrowleft','pageup'].includes(key)){if(reading)panels[Math.max(index-1,0)].scrollIntoView();show(index-1);}
    else if(key==='home')show(0);
    else if(key==='end')show(slides.length-1);
    else if(key==='g')open($('overview'));
    else if(key==='n')toggleNotes();
    else if(key==='f')fullscreen();
    else if(key==='?')open($('help'));
    else if(key==='escape'){if(!$('notes').hidden)toggleNotes();else if(reading)setReading(false);}
  });
  let pointer;
  $('stage').addEventListener('pointerdown',event=>{if(event.pointerType==='touch'&&!event.target.closest('a,button'))pointer={x:event.clientX,y:event.clientY};});
  $('stage').addEventListener('pointerup',event=>{if(!pointer||reading)return;const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;pointer=null;if(Math.abs(dx)>80&&Math.abs(dx)>Math.abs(dy)*1.5)show(index+(dx<0?1:-1));});
  function format(ms) { const seconds=Math.floor(ms/1000);return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`; }
  function clock() {const ms=total+(running?Date.now()-started:0);$('elapsed').textContent=format(ms);document.querySelector('.timer').classList.toggle('overrun',ms>=50*60*1000);}
  $('timer-button').addEventListener('click',()=>{if(running){total+=Date.now()-started;running=false;}else{started=Date.now();running=true;}$('timer-button').textContent=running?'일시정지':'타이머 계속';$('timer-button').setAttribute('aria-label',running?'발표 타이머 일시정지':'발표 타이머 계속');clock();});
  $('timer-reset').addEventListener('click',()=>{total=0;running=false;started=0;$('timer-button').textContent='타이머 시작';$('timer-button').setAttribute('aria-label','발표 타이머 시작');clock();});
  setInterval(clock,500);
  window.addEventListener('hashchange',parseHash);
  show(0,false,false);parseHash();
})();
