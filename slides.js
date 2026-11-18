const seminarContent = [
  {
    "title": "지구환경과학과 졸업 후,\n데이터 엔지니어로 일하기",
    "layout": "cover",
    "chapter": "시작",
    "image": "campus-gate.jpg",
    "alt": "밤의 전북대학교 정문",
    "eyebrow": "전북대학교 · 취업페스티벌 세미나",
    "subtitle": "지구환경 빅데이터와 AI",
    "byline": "이상학 · GeoSR Data Engineer",
    "seconds": 60
  },
  {
    "title": "어떤 일을\n해보고 싶나요?",
    "layout": "words",
    "chapter": "시작",
    "items": [
      "현장에서 관찰하기",
      "데이터에서 답 찾기",
      "연구하고 설명하기",
      "도구와 서비스 만들기"
    ],
    "footer": "지금 관심 있는 것 하나만 골라보세요",
    "seconds": 30
  },
  {
    "title": "저도 이 캠퍼스의\n학생이었습니다",
    "layout": "photo",
    "chapter": "나의 출발점",
    "image": "campus-mt.jpg",
    "alt": "대학 MT에서 친구들과 찍은 단체사진",
    "eyebrow": "전북대학교 지구환경과학과",
    "subtitle": "강의, 친구들, 그리고 조금씩 넓어진 시야",
    "seconds": 60
  },
  {
    "title": "대학에서\n현업까지",
    "layout": "timeline-photo",
    "chapter": "나의 출발점",
    "items": [
      [
        "2016",
        "전북대학교 입학"
      ],
      [
        "2018–2020",
        "서울지방경찰청 219중대 복무"
      ],
      [
        "2021",
        "공동연구 · 기상위성 여름캠프"
      ],
      [
        "2022",
        "졸업 · 한국기상산업기술원 인턴"
      ],
      [
        "2023–",
        "GeoSR · 해양·기상 데이터 업무"
      ]
    ],
    "seconds": 60,
    "images": [
      [
        "graduation.jpg",
        "전북대학교 졸업 사진",
        "2022 · 졸업"
      ],
      [
        "police.jpg",
        "의무경찰 복무 당시 사진",
        "2018–2020 · 의무경찰"
      ]
    ]
  },
  {
    "title": "오창환 교수님과 함께했던\n야외지질조사",
    "layout": "photo",
    "chapter": "나의 출발점",
    "image": "fieldwork.jpg",
    "alt": "야외지질조사 중 동료들과 쉬며 기록을 살펴보는 모습",
    "subtitle": "요즘에도 야외지질조사 하나요?",
    "seconds": 40
  },
  {
    "title": "처음 데이터를\n분석해 본 경험",
    "layout": "research",
    "chapter": "나의 출발점",
    "image": "thesis-regression.webp",
    "alt": "2021년 공동 졸업논문의 회귀장 분석 그림",
    "eyebrow": "2021 · 공동 졸업연구",
    "subtitle": "전주 겨울 강설과 전 지구 해양·대기의 관계",
    "items": [
      "Fortran·GrADS로 자료처리와 그림 만들기",
      "분석 결과를 설명하고 함께 검토하기"
    ],
    "seconds": 60
  },
  {
    "title": "학교 밖에서\n일하는 방식을 배우다",
    "layout": "duo",
    "chapter": "나의 출발점",
    "images": [
      [
        "satellite-camp.jpg",
        "국가기상위성센터의 안테나와 건물",
        "2021 · 기상위성 여름캠프"
      ],
      [
        "kmi.jpg",
        "한국기상산업기술원 관측장비 전시 현장",
        "2022 · 한국기상산업기술원"
      ]
    ],
    "subtitle": "자료를 찾고, 정리하고, 설명하고, 기한에 맞춰 전달하기",
    "seconds": 70
  },
  {
    "title": "제가 하는 일은\n해양·기상 빅데이터를 연결하는 일",
    "layout": "role",
    "chapter": "빅데이터 실무",
    "eyebrow": "GeoSR · 공간융합부 · Data Engineer",
    "items": [
      [
        "해양·기상 자료",
        "검토 · 처리 · 데이터베이스 적재"
      ],
      [
        "공간정보 분석",
        "모델 격자 · AIS 궤적 · 지도 시각화"
      ],
      [
        "현업 서비스",
        "분석 보고 · 산출물 모니터링 · 운영 지원"
      ]
    ],
    "seconds": 90
  },
  {
    "title": "빅데이터 분석 결과는\n관계자가 모두 함께 쓸 수 있어야 합니다.",
    "layout": "words",
    "chapter": "빅데이터 실무",
    "items": [
      "요구사항을 듣고 정리하기",
      "검토 가능한 문서 만들기",
      "오류와 변경 사항 공유하기",
      "운영과 재처리까지 생각하기"
    ],
    "seconds": 95,
    "emphasis": "빅데이터 실무: 자료 처리 + 설명 + 협업 + 운영"
  },
  {
    "title": "분석 결과가 상이하다면\n해당 이유에 대해 설명이 가능해야 합니다.",
    "layout": "comparison",
    "chapter": "빅데이터 실무",
    "items": [
      [
        "관측",
        "실제로 관측한 값"
      ],
      [
        "예측",
        "모델이 계산한 값"
      ],
      [
        "서비스",
        "규칙을 적용해 제공한 정보"
      ]
    ],
    "subtitle": "자료 비교·집계 → 통계 산출 → 보고서 자동 생성",
    "links": [
      [
        "비교·집계 코드",
        "https://github.com/fortranmentis/marine-forecast-index-stats"
      ]
    ],
    "seconds": 150,
    "tools": [
      {
        "name": "pandas",
        "logo": "pandas-logo.svg",
        "role": "표 · 시계열 · 집계",
        "url": "https://pandas.pydata.org/",
        "showName": false,
        "context": "예보 분석 / 관측·예측·서비스",
        "detail": {
          "intro": "행과 열로 이루어진 표와 시계열 자료를 다루는 Python 라이브러리입니다.",
          "role": "예측·서비스 표를 읽고 조건별로 집계합니다. 날짜·지역·활동과 레코드 대응 관계를 맞춘 뒤 차이를 계산하고 보고서로 내보냅니다.",
          "steps": [
            "표 읽기",
            "레코드 정렬",
            "조건별 비교·집계",
            "보고서 출력"
          ],
          "takeaway": "자료 정렬과 조건·결측 처리 기준을 명시하고 결과를 검토하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "NumPy",
        "logo": "numpy-logo.svg",
        "role": "배열 · 수치 계산",
        "url": "https://numpy.org/",
        "showName": false,
        "context": "예보 분석 / 관측·예측·서비스",
        "detail": {
          "intro": "여러 수치를 배열로 저장하고 계산하는 Python 라이브러리입니다.",
          "role": "값 배열과 수치 조건을 계산할 때 사용합니다. 비교 대상의 자료형·결측·단위를 먼저 맞추고 동일한 기준으로 수치 연산을 수행합니다.",
          "steps": [
            "수치 배열 준비",
            "조건·결측 확인",
            "배열 연산",
            "집계값 확인"
          ],
          "takeaway": "자료 정렬과 조건·결측 처리 기준을 명시하고 결과를 검토하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ],
    "stageDetails": [
      {
        "name": "관측",
        "role": "실제로 관측한 값",
        "context": "예보 분석 / 관측·예측·서비스",
        "url": "https://github.com/fortranmentis/marine-forecast-index-stats",
        "detail": {
          "intro": "관측장비나 현장 기록으로 얻은 값입니다. 관측에도 오차·결측·측정 간격이 있습니다.",
          "role": "관측과 예측을 비교하려면 같은 위치·시각·변수·단위를 맞춰야 합니다. 발표자의 업무에는 관측 비교가 포함되지만 연결된 공개 통계 코드는 예측·서비스 제품 비교를 다룹니다.",
          "steps": [
            "관측 품질 확인",
            "시각·위치 정렬",
            "단위·변수 일치",
            "같은 조건에서 비교"
          ],
          "takeaway": "서로 다른 장소나 시각의 값을 그대로 비교하면 차이의 이유를 잘못 해석할 수 있습니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "예측",
        "role": "모델이 계산한 값",
        "context": "예보 분석 / 관측·예측·서비스",
        "url": "https://github.com/fortranmentis/marine-forecast-index-stats",
        "detail": {
          "intro": "관측과 물리 법칙·계산 등을 바탕으로 미래나 특정 조건의 상태를 추정한 값입니다.",
          "role": "모델 버전·예측 생산시각·대상시각이 다르면 결과가 달라질 수 있습니다. 같은 대상을 연결하고 파고·수온·특보 등 어떤 입력이 함께 바뀌었는지 살펴봅니다.",
          "steps": [
            "모델·생산시각 확인",
            "대상시각 정렬",
            "변수별 변화 비교",
            "해석 근거 기록"
          ],
          "takeaway": "예측 제품끼리 차이가 있다는 사실만으로 어느 쪽의 정확도가 더 높은지 알 수는 없습니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "서비스",
        "role": "규칙을 적용해 제공한 정보",
        "context": "예보 분석 / 관측·예측·서비스",
        "url": "https://github.com/fortranmentis/marine-forecast-index-stats",
        "detail": {
          "intro": "예측 자료에 활동별 기준과 운영 규칙을 적용해 이용자가 이해할 수 있게 제공하는 정보입니다.",
          "role": "해양 활동별 지수와 예측 제품을 연결해 변경 건수·변수 변화·특보 조건을 집계합니다. 공개 코드에서는 통계 결과를 Excel·CSV·HTML 등으로 내보내며 일부 결과는 콘솔에 표시합니다.",
          "steps": [
            "예측·서비스 자료 정렬",
            "활동별 규칙 확인",
            "변경 건수·조건 집계",
            "통계·보고서 출력"
          ],
          "takeaway": "지수가 바뀐 이유를 설명하는 통계와 관측 대비 예측 정확도 평가는 목적이 다릅니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ]
  },
  {
    "title": "빅데이터가\n서비스가 되기까지",
    "layout": "flow",
    "chapter": "빅데이터 실무",
    "items": [
      [
        "확인",
        "규격 · 시간 · 좌표"
      ],
      [
        "변환",
        "공간 처리 · 산출물"
      ],
      [
        "적재",
        "PostgreSQL 갱신"
      ],
      [
        "기록",
        "판정 · 오류 · 재처리"
      ]
    ],
    "links": [
      [
        "공개 구현·문서",
        "https://github.com/fortranmentis/ocean-forecast-geopipeline"
      ]
    ],
    "seconds": 55,
    "subtitle": "파일이 들어오면\n확인하고, 바꾸고, 저장하고, 기록합니다",
    "tools": [
      {
        "name": "Python",
        "logo": "python-logo.svg",
        "role": "자료처리 · 자동화",
        "url": "https://www.python.org/",
        "showName": false,
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "자료를 읽고 검사·계산·변환하는 절차를 코드로 작성하는 프로그래밍 언어입니다.",
          "role": "NetCDF·CSV 규격 비교, 공간자료 변환, 유속 계산과 산출물 생성을 처리합니다. 파일 감시·순차 실행과 잠금은 Shell 스크립트와 함께 구성합니다.",
          "steps": [
            "자료 읽기",
            "규격 검사",
            "변환·계산",
            "결과·보고서 저장"
          ],
          "takeaway": "반복 작업을 함수와 실행 파일로 남기면 같은 입력을 다시 처리하고 비교하기 쉽습니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?"
        }
      },
      {
        "name": "Docker",
        "logo": "docker-logo.svg",
        "role": "실행 환경 · 반복 배포",
        "url": "https://docs.docker.com/get-started/docker-overview/",
        "showName": true,
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "코드와 실행에 필요한 라이브러리를 이미지로 묶고 컨테이너로 실행하는 도구입니다.",
          "role": "동일한 Python 의존성과 실행 환경을 서버에 배포하고 역할별 프로세스를 실행합니다. 처리 순서·중복 실행 방지는 감시 스크립트와 잠금이 담당합니다.",
          "steps": [
            "코드·의존성 정의",
            "이미지 구성",
            "컨테이너 실행",
            "같은 환경으로 재배포"
          ],
          "takeaway": "Docker가 실행 환경을 맞춰주더라도 처리 순서나 분석 속도를 자동 보장하지는 않습니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?"
        }
      },
      {
        "name": "PostgreSQL",
        "logo": "postgresql-logo.png",
        "role": "SQL · DBMS · 트랜잭션",
        "url": "https://www.postgresql.org/",
        "showName": true,
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "SQL은 자료를 조회·갱신하는 언어이고, PostgreSQL은 자료를 저장·관리하며 SQL을 실행하는 DBMS입니다.",
          "role": "처리 자료와 점검·관리 정보를 테이블에 저장하고 갱신합니다. 스키마와 트랜잭션을 사용해 자료 구조와 관련 변경을 관리합니다.",
          "steps": [
            "저장 구조 정의",
            "SQL로 조회·갱신",
            "트랜잭션 관리",
            "이력·결과 확인"
          ],
          "takeaway": "SQL이 요청을 적는 언어라면 DBMS는 그 요청을 받아 자료를 관리하는 시스템입니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?"
        }
      }
    ],
    "stageDetails": [
      {
        "name": "확인",
        "role": "규격 · 시간 · 좌표",
        "url": "https://github.com/fortranmentis/ocean-forecast-geopipeline",
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "들어온 자료가 약속한 형식과 규격에 맞는지 먼저 비교하는 단계입니다.",
          "role": "로컬 NetCDF·CSV 파일과 제공된 규격을 비교합니다. 변수·단위·시간·좌표 등 보고된 검사 결과를 남기고, 보고된 항목이 모두 일치하는 입력을 다음 처리 대상으로 넘깁니다.",
          "steps": [
            "입력 파일 감시",
            "규격 비교",
            "항목별 판정 기록",
            "처리 대상 선별"
          ],
          "takeaway": "규격이 맞는다는 것은 예측이 과학적으로 정확하다는 뜻과 다릅니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?",
          "introTitle": "어떤 단계인가요?"
        }
      },
      {
        "name": "변환",
        "role": "공간 처리 · 산출물",
        "url": "https://github.com/fortranmentis/ocean-forecast-geopipeline",
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "분석용 자료를 지도나 서비스에서 쓰기 좋은 구조로 바꾸는 단계입니다.",
          "role": "격자·좌표계·시간·깊이를 처리하고 GeoTIFF와 유속 벡터 CSV를 만듭니다. U/V 성분에서 속도·방향을 계산하며, 실제 산출물은 입력 자료와 설정에 따라 달라집니다.",
          "steps": [
            "격자·좌표 확인",
            "재격자·재투영",
            "유속·방향 계산",
            "지도·벡터 산출물"
          ],
          "takeaway": "자료를 보기 좋게 바꾸더라도 좌표·단위·시간의 의미를 유지해야 합니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?",
          "introTitle": "어떤 단계인가요?"
        }
      },
      {
        "name": "적재",
        "role": "PostgreSQL 갱신",
        "url": "https://github.com/fortranmentis/ocean-forecast-geopipeline",
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "처리한 자료를 서비스가 조회할 수 있도록 데이터베이스에 반영하는 단계입니다.",
          "role": "정해진 테이블과 스키마에 맞춰 자료와 점검 정보를 갱신합니다. 트랜잭션으로 관련 변경을 묶고 중복·실패와 재실행 시의 처리 방식을 관리합니다.",
          "steps": [
            "테이블·스키마 확인",
            "자료 반영",
            "트랜잭션 처리",
            "반영 결과 점검"
          ],
          "takeaway": "파일이 생성됐다는 사실만으로 DB 반영이나 서비스 게시까지 성공한 것은 아닙니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?",
          "introTitle": "어떤 단계인가요?"
        }
      },
      {
        "name": "기록",
        "role": "판정 · 오류 · 재처리",
        "url": "https://github.com/fortranmentis/ocean-forecast-geopipeline",
        "context": "GeoPipeline / 처리 단계와 구현 기술",
        "detail": {
          "intro": "처리 결과를 설명하고 문제가 난 지점부터 다시 살펴볼 수 있게 근거를 남기는 일입니다.",
          "role": "규격 판정 보고서에는 파일명·검사 항목·기준값·실제값 등을 남깁니다. 처리 상태와 오류를 확인해 재처리 대상을 정합니다. 기록은 마지막에만 하는 일이 아니라 각 단계에 걸쳐 남깁니다.",
          "steps": [
            "파일·기준 기록",
            "항목별 결과 보관",
            "오류 지점 추적",
            "재처리·최종 확인"
          ],
          "takeaway": "“왜 이 결과가 나왔고 어디까지 성공했는가?”를 다시 확인할 수 있어야 합니다.",
          "roleTitle": "파이프라인에서는 무엇을 하나요?",
          "introTitle": "어떤 단계인가요?"
        }
      }
    ]
  },
  {
    "title": "내 PC에선 되는데\n서버에선 안 된다면?",
    "layout": "docker-intro",
    "chapter": "빅데이터 실무",
    "subtitle": "Docker는 코드와 라이브러리를 묶어\n어디서나 같은 환경으로 실행하는 도구입니다",
    "items": [
      [
        "환경을 묶기",
        "코드 · Python · 라이브러리를 이미지로 함께 관리"
      ],
      [
        "충돌을 줄이기",
        "업무별 실행 환경을 나누어 의존성 충돌 줄이기"
      ],
      [
        "반복 운영하기",
        "같은 이미지를 배포하고 역할별 프로세스 실행"
      ]
    ],
    "tools": [
      {
        "name": "Docker",
        "logo": "docker-logo.svg",
        "role": "실행 환경 · 반복 배포",
        "url": "https://docs.docker.com/get-started/docker-overview/",
        "showName": true
      }
    ],
    "toolScope": "자동처리 운영을 위한 실행 도구",
    "footer": "ETL: 추출 → 변환 → 적재 · 처리 순서는 감시·잠금으로, 실행 환경은 Docker로 관리",
    "seconds": 45
  },
  {
    "title": "TB 단위 AIS를,\n선박의 움직임을 읽는 화면으로",
    "layout": "ais-case",
    "chapter": "빅데이터 실무",
    "image": "ais-workshop-navigation.webp",
    "alt": "부산 해역 과거 AIS를 재생한 타임랩스. 선종별 색상과 정박·정류·항로 이탈 후보 표시가 시간에 따라 움직임",
    "links": [
      [
        "발표·포스터·코드",
        "https://github.com/fortranmentis/Busan-AIS-ship-behavior-analysis#research-presentations"
      ],
      [
        "2025 워크숍 그림",
        "assets/ais-workshop-navigation.webp"
      ]
    ],
    "seconds": 175,
    "metrics": [
      [
        "TB 단위",
        "전체 자료"
      ],
      [
        "78.8만 건 · 1,070척",
        "공개 표본"
      ]
    ],
    "inputFields": [
      "선박 ID · 일시",
      "경도 · 위도",
      "속력 · 선수방위 · 선종"
    ],
    "processing": [
      "선박별 시간 정렬 · 항로·정박지 결합",
      "멀티프로세싱으로 독립 렌더링 작업 분담",
      "Pool.imap으로 작업을 나눠 순서대로 결과 수집",
      "정박·정류·항로 이탈 후보 및 접안·조업·예인 등 선박활동 실시간 감시·표출"
    ],
    "tools": [
      {
        "name": "Python",
        "logo": "python-logo.svg",
        "role": "처리·자동화",
        "url": "https://www.python.org/",
        "showName": false,
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "detail": {
          "intro": "자료 처리와 계산 절차를 코드로 작성하는 프로그래밍 언어입니다.",
          "role": "AIS 전처리·상태 규칙·지도 렌더링과 프로세스 풀 실행을 연결합니다. 작업별 입력과 결과를 코드로 남깁니다.",
          "steps": [
            "입력 준비",
            "규칙 계산",
            "병렬 렌더링",
            "결과 저장"
          ],
          "takeaway": "자료 정렬과 조건·결측 처리 기준을 명시하고 결과를 검토하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "pandas",
        "logo": "pandas-logo.svg",
        "role": "표·시계열 처리",
        "url": "https://pandas.pydata.org/",
        "showName": false,
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "detail": {
          "intro": "행과 열로 이루어진 표와 시계열 자료를 다루는 Python 라이브러리입니다.",
          "role": "시간·선박 식별자·속력 등의 표 자료를 정리합니다. 선박별 그룹과 시간 정렬을 바탕으로 궤적을 구성할 수 있도록 준비합니다.",
          "steps": [
            "표 읽기",
            "시간·ID 정리",
            "선박별 정렬",
            "분석용 표 준비"
          ],
          "takeaway": "자료 정렬과 조건·결측 처리 기준을 명시하고 결과를 검토하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "NumPy",
        "logo": "numpy-logo.svg",
        "role": "배열·수치 계산",
        "url": "https://numpy.org/",
        "showName": false,
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "detail": {
          "intro": "여러 수치를 배열로 저장하고 계산하는 Python 라이브러리입니다.",
          "role": "선박별 시계열에서 필요한 시점을 검색하고 수치 조건을 계산합니다. 공개 코드에서는 numpy.searchsorted로 정렬된 시간 배열의 위치를 찾습니다.",
          "steps": [
            "시간 배열 준비",
            "대상 시점 검색",
            "수치 조건 계산",
            "상태·표출에 전달"
          ],
          "takeaway": "자료 정렬과 조건·결측 처리 기준을 명시하고 결과를 검토하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ],
    "processingDetails": [
      {
        "name": "선박별 시간 정렬",
        "role": "선박 ID · 시간 · 공간 맥락",
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "url": "https://github.com/fortranmentis/Busan-AIS-ship-behavior-analysis",
        "detail": {
          "intro": "같은 선박의 위치 기록을 시간순으로 연결하고 항로·정박지 같은 공간정보를 붙이는 작업입니다.",
          "role": "MMSI별 기록을 정렬하고 GeoPandas 공간 결합으로 항로·정박지 포함 여부를 계산합니다. 속력·방위·연속 위치를 주변 지형과 함께 해석할 준비를 합니다.",
          "steps": [
            "선박 ID로 구분",
            "시간순 정렬",
            "항로·정박지 결합",
            "궤적과 공간 맥락 확인"
          ],
          "takeaway": "AIS 위치만 읽는 것보다 시간과 공간의 맥락을 함께 보면 움직임을 설명하기 쉽습니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "멀티프로세싱",
        "role": "독립 렌더링 작업 분담",
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "url": "https://github.com/fortranmentis/Busan-AIS-ship-behavior-analysis",
        "detail": {
          "intro": "서로 독립적인 작업을 여러 프로세스에 나누어 실행하는 방식입니다.",
          "role": "시각별 지도 프레임 생성 작업을 프로세스 풀에 나눕니다. 상태를 공유해야 하는 계산은 미리 정리하고, 각 프레임이 독립적으로 처리되도록 구성합니다.",
          "steps": [
            "작업 단위 분리",
            "상태·입력 준비",
            "프로세스에 분담",
            "결과 취합"
          ],
          "takeaway": "프로세스 수를 늘리면 메모리와 자료 전달 비용도 늘 수 있으므로 항상 빨라지는 것은 아닙니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "Pool.imap",
        "role": "입력 순서대로 결과 수집",
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "url": "https://github.com/fortranmentis/Busan-AIS-ship-behavior-analysis",
        "detail": {
          "intro": "Python 프로세스 풀의 결과를 반복자로 받는 방법입니다. 입력 순서에 맞춰 결과를 돌려줍니다.",
          "role": "각 시각의 렌더링을 분담한 뒤 프레임을 입력 순서대로 받습니다. 임시 PNG를 저장하고 FFmpeg로 영상을 인코딩하는 공개 코드 흐름에 사용됩니다.",
          "steps": [
            "시각별 작업 전달",
            "병렬 렌더링",
            "입력 순서로 결과 수집",
            "프레임 저장·영상 생성"
          ],
          "takeaway": "결과를 받는 순서와 실제 작업 완료 순서는 다를 수 있습니다. 이메일 IMAP과는 다른 개념입니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "선박활동 후보 표출",
        "role": "정박 · 정류 · 항로 이탈 · 활동",
        "context": "AIS 분석 / 처리·병렬화·시각화",
        "url": "https://github.com/fortranmentis/Busan-AIS-ship-behavior-analysis",
        "detail": {
          "intro": "속력·방위·이동량·공간 포함 여부를 규칙으로 결합해 움직임과 활동 후보를 표시합니다.",
          "role": "정박·정류·항로 이탈과 접안·조업·예인 후보를 지도에 표현합니다. 워크숍은 1초 갱신 예시를 소개하며, 공개 코드는 과거 AIS를 PNG·MP4로 렌더링합니다. 현재 실시간 서비스 운영을 검증한 것은 아닙니다.",
          "steps": [
            "속력·변위 확인",
            "공간·시간 조건 적용",
            "상태 후보 표출",
            "지도·근거로 검토"
          ],
          "takeaway": "후보 표시는 실제 조업·예인·위험 행위가 확인됐다는 뜻이 아닙니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ],
    "video": "ais-motion.mp4",
    "poster": "ais-motion-poster.webp",
    "figcaption": "처리 후 · 정박·정류·항로 이탈 후보 타임랩스"
  },
  {
    "title": "데이터에서\nAI 에이전트까지",
    "layout": "research",
    "chapter": "빅데이터 실무",
    "image": "marine-travel-example.jpg",
    "alt": "바다결 첫 화면. 앱 소개와 전국 바다여행지수 카드",
    "items": [
      "공공데이터 수집·정제 → Python 도구",
      "일정 생성 → 검증 → 선택 → 재검증",
      "실행 단계·시간·토큰을 기록해 개선"
    ],
    "links": [
      [
        "공개 기술 소개",
        "https://github.com/fortranmentis/marine-travel-AI-agent"
      ]
    ],
    "seconds": 85,
    "tools": [
      {
        "name": "LangGraph",
        "logo": "langgraph-badge.svg",
        "role": "흐름·상태 관리",
        "url": "https://github.com/fortranmentis/marine-travel-AI-agent/blob/main/docs/LANGGRAPH.md",
        "detail": {
          "intro": "여러 처리 단계를 연결하고, 현재 어디까지 진행됐는지 관리하는 워크플로 도구입니다.",
          "role": "바다결의 폼 기반 일정 요청에서 생성·검증·사용자 선택·재검증을 연결합니다. SQLite 체크포인트로 진행 상태를 저장하고 정해진 범위 안에서 복구합니다.",
          "steps": [
            "일정 초안 생성",
            "조건 검증",
            "필요 시 사용자 선택",
            "재검증·완료"
          ],
          "takeaway": "“어떤 순서로 처리하고, 중간에 멈추면 어디서 이어갈까?”를 설계합니다."
        }
      },
      {
        "name": "FastAPI",
        "logo": "fastapi-badge.svg",
        "role": "서비스 API",
        "url": "https://github.com/fortranmentis/marine-travel-AI-agent",
        "detail": {
          "intro": "Python 함수와 데이터를 웹 서비스의 API로 제공하는 프레임워크입니다.",
          "role": "화면의 여행 계획 요청을 받아 계획 생성·조회·수정 기능을 연결합니다. 모델 실행은 Ollama가, 일정 조건 확인은 Python 규칙이 담당합니다.",
          "steps": [
            "화면에서 요청",
            "API에서 입력 확인",
            "계획·도구 호출 연결",
            "상태·결과 응답"
          ],
          "takeaway": "“내 분석 코드를 다른 사람이나 화면에서 어떻게 호출하게 할까?”를 해결합니다."
        }
      },
      {
        "name": "n8n",
        "logo": "n8n-badge.svg",
        "role": "정기 수집 자동화",
        "url": "https://github.com/fortranmentis/marine-travel-AI-agent/blob/main/docs/WORKFLOWS.md",
        "detail": {
          "intro": "정해진 시점과 조건에 따라 작업을 연결해 실행하는 자동화 도구입니다.",
          "role": "관광·해양 공공데이터 수집 작업을 정기적으로 실행합니다. 정책을 확인해 일별 해양 자료와 주별 관광 자료를 따로 갱신하고 실행 결과를 확인합니다.",
          "steps": [
            "갱신 시점 확인",
            "공공데이터 수집",
            "검증 후 저장",
            "실행 결과 확인"
          ],
          "takeaway": "“매번 손으로 하던 수집을 어떻게 반복 가능하게 만들까?”를 생각합니다."
        }
      },
      {
        "name": "Langfuse",
        "logo": "langfuse-badge.svg",
        "role": "실행 추적·관측",
        "url": "https://github.com/fortranmentis/marine-travel-AI-agent/blob/main/docs/OBSERVABILITY.md",
        "detail": {
          "intro": "AI 실행이 어떤 단계를 거쳤고 얼마나 걸렸는지 관찰하는 도구입니다.",
          "role": "같은 실행 ID로 모델·도구 단계, 소요 시간, 보고된 토큰 수를 연결해 살펴봅니다. 바다결은 허용된 실행 정보만 남기며 원문 프롬프트·내부 추론·출력 전문은 기록하지 않습니다.",
          "steps": [
            "AI 실행",
            "허용된 단계 기록",
            "시간·토큰 확인",
            "지연·오류 구간 개선"
          ],
          "takeaway": "“결과만 보지 말고, 비용과 병목을 설명할 수 있을까?”를 확인합니다."
        }
      }
    ]
  },
  {
    "title": "빅데이터 학습,\n도구를 역할별로 익혀보세요",
    "layout": "mapping",
    "chapter": "빅데이터 시작해보기",
    "items": [
      [
        "Python · 멀티프로세싱",
        "코드 작성 · 독립 작업을 여러 프로세스로 분담"
      ],
      [
        "NumPy · pandas · Polars",
        "배열 계산 · 표·시계열 분석 · 열 단위 처리"
      ],
      [
        "SQL · DBMS",
        "SQL로 조회하기 · PostgreSQL·DuckDB로 자료 관리"
      ],
      [
        "Git · Linux 기초",
        "코드 버전 관리 · 서버에서 명령어로 실행하기"
      ]
    ],
    "seconds": 90
  },
  {
    "title": "노트북으로 시작해,\n더 적은 자원으로 같은 결과를",
    "layout": "timeline",
    "chapter": "빅데이터 시작해보기",
    "subtitle": "대용량 자료(공공데이터포털 등)를 분석했다면,\n다음에는 처리 방식을 개선해보세요",
    "items": [
      [
        "찾기",
        "질문 하나와 공개 자료 선택"
      ],
      [
        "분석",
        "Python으로 작은 표본부터 전체로"
      ],
      [
        "개선",
        "열 선택 · Parquet · Polars · DuckDB"
      ],
      [
        "비교",
        "같은 결과인지, 시간·메모리는 어떤지"
      ]
    ],
    "seconds": 100,
    "tools": [
      {
        "name": "Python",
        "logo": "python-logo.svg",
        "role": "실습 코드의 출발점",
        "url": "https://www.python.org/",
        "showName": false,
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "detail": {
          "intro": "자료 처리와 계산 절차를 코드로 작성하는 프로그래밍 언어입니다.",
          "role": "공개 자료의 작은 표본으로 분석을 작성하고, 같은 계산을 전체 자료로 확장해보는 학습 출발점입니다.",
          "steps": [
            "자료 읽기",
            "기준 분석",
            "전체로 확장",
            "코드·결과 기록"
          ],
          "takeaway": "같은 결과인지 확인한 다음 시간·메모리를 비교하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "pandas",
        "logo": "pandas-logo.svg",
        "role": "표·집계부터 익히기",
        "url": "https://pandas.pydata.org/",
        "showName": false,
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "detail": {
          "intro": "행과 열로 이루어진 표와 시계열 자료를 다루는 Python 라이브러리입니다.",
          "role": "표를 읽고 날짜·결측을 처리한 뒤 그룹별 집계를 익힙니다. 전체 읽기와 열 선택·분할 읽기 등의 차이를 같은 자료로 비교해보세요.",
          "steps": [
            "표 읽기",
            "자료형·결측 확인",
            "그룹별 집계",
            "기준 결과 보관"
          ],
          "takeaway": "같은 결과인지 확인한 다음 시간·메모리를 비교하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "Polars",
        "logo": "polars-logo.png",
        "role": "지연 실행 · 열 선택",
        "url": "https://docs.pola.rs/user-guide/lazy/",
        "showName": true,
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "detail": {
          "intro": "열 기반 표 처리와 지연 실행을 제공하는 데이터 처리 라이브러리입니다.",
          "role": "바로 계산하지 않고 작업 계획을 만드는 Lazy API를 학습해보세요. 필요한 열·필터를 먼저 적용하는 실행 계획을 살펴보고 pandas 기준 결과와 비교합니다.",
          "steps": [
            "지연 읽기",
            "열·필터 지정",
            "실행 계획 확인",
            "실행·결과 비교"
          ],
          "takeaway": "같은 결과인지 확인한 다음 시간·메모리를 비교하세요.",
          "introTitle": "어떤 기술인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ],
    "stageDetails": [
      {
        "name": "찾기",
        "role": "질문 하나와 공개 자료 선택",
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "url": "https://www.data.go.kr/",
        "detail": {
          "intro": "먼저 답하고 싶은 작은 질문을 정하고 그 질문에 맞는 공개 자료를 고르는 단계입니다.",
          "role": "예를 들어 특정 지역의 월별 관측값을 집계하는 질문을 정합니다. 이용 조건·컬럼·기간·파일 크기와 저장공간을 확인하고 작은 표본부터 시작합니다.",
          "steps": [
            "질문 하나 정하기",
            "공개 자료 찾기",
            "스키마·조건 확인",
            "표본과 목표 정의"
          ],
          "takeaway": "용량이 크다는 이유만으로 고르기보다 어떤 결과를 설명할지 먼저 정하세요.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "분석",
        "role": "작은 표본부터 전체로",
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "url": "https://www.data.go.kr/",
        "detail": {
          "intro": "작은 자료에서 올바른 계산을 완성한 뒤 같은 규칙을 더 큰 자료에 적용하는 단계입니다.",
          "role": "Python과 pandas로 자료형·날짜·결측을 확인하고 기준 집계 결과를 만듭니다. 이후 분할 읽기나 파일별 처리를 적용하면서 전체 자료로 범위를 늘립니다.",
          "steps": [
            "표본 읽기",
            "결측·자료형 확인",
            "기준 집계 완성",
            "전체 자료로 확장"
          ],
          "takeaway": "코드·자료 출처·실행 방법과 결과를 Markdown에 남겨 다시 확인할 수 있게 만드세요.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "개선",
        "role": "열 선택 · Parquet · Polars · DuckDB",
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "url": "https://docs.pola.rs/user-guide/lazy/",
        "detail": {
          "intro": "계산의 의미는 유지하면서 읽는 자료와 연산·메모리 사용을 줄이는 단계입니다.",
          "role": "필요한 열과 기간만 읽고, 반복 분석에는 Parquet 같은 열 기반 파일을 검토합니다. Polars의 지연 실행과 DuckDB의 SQL 집계를 같은 문제에 적용해 비교해봅니다.",
          "steps": [
            "필요한 열·행 선택",
            "파일 형식 검토",
            "실행 계획·도구 비교",
            "같은 집계 재실행"
          ],
          "takeaway": "Polars·DuckDB는 학습·비교 후보입니다. 특정 도구가 모든 작업에서 더 빠르다는 뜻은 아닙니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      },
      {
        "name": "비교",
        "role": "같은 결과 · 시간 · 최대 메모리",
        "context": "빅데이터 실습 / 찾기·분석·개선·비교",
        "url": "https://duckdb.org/docs/stable/guides/performance/how_to_tune_workloads",
        "detail": {
          "intro": "개선 전후의 결과가 같은지 확인한 뒤 자원 사용과 실행 시간을 비교하는 단계입니다.",
          "role": "같은 입력과 환경에서 행 수·집계값·결측 처리·정렬을 맞춥니다. 실행 시간과 최대 메모리를 기록하고 캐시·병렬 수·반복 횟수 등 측정 조건도 남깁니다.",
          "steps": [
            "동일 입력·환경 준비",
            "결과 일치 확인",
            "시간·메모리 측정",
            "조건·한계 기록"
          ],
          "takeaway": "속도만 빨라지고 계산 의미가 달라졌다면 같은 작업을 개선한 것으로 보기 어렵습니다.",
          "introTitle": "어떤 개념인가요?",
          "roleTitle": "이 화면에서는 어떻게 쓰나요?"
        }
      }
    ]
  },
  {
    "title": "실무에서 만나게 될 상황,\n학교에서도 겪어보지 않았나요?",
    "layout": "mapping",
    "chapter": "AI 활용과 프로젝트",
    "items": [
      [
        "요구가 흐릿한 고객",
        "원하는 결과를 아직 말하기 어려운 고객\n↔ 나도 뭘 쓰고 싶은지 모르겠는 학부논문"
      ],
      [
        "사양이 없는 요청",
        "구체적인 기준이 정해지지 않은 업무 지시\n↔ 앞으로 정확히 뭘 하고 싶은지 모르는 나"
      ],
      [
        "AI에 기댄 협업",
        "AI 초안을 검토 없이 넘기는 동료\n↔ AI로 끝냈지만 내용을 설명하기 어려운 과제"
      ]
    ],
    "footer": "모호함을 질문으로 좁히고, 완료 기준을 함께 정하는 연습",
    "seconds": 80
  },
  {
    "title": "초안은 AI가,\n판단과 수정은 내가",
    "layout": "mapping",
    "chapter": "AI 활용과 프로젝트",
    "items": [
      [
        "보고서",
        "자료 요약 · 비교표 · 반복 보고 초안"
      ],
      [
        "발표자료",
        "구성안 · 핵심 메시지 · 슬라이드 제작 지원"
      ],
      [
        "사업계획",
        "참고자료 조사 · 요구사항 정리 · 대안 검토"
      ],
      [
        "개발",
        "코드 작성 · 테스트 · 리뷰·수정 지원"
      ]
    ],
    "seconds": 70
  },
  {
    "title": "‘그럴듯한 비약’을\n그냥 넘기지 마세요",
    "layout": "mapping",
    "chapter": "AI 활용과 프로젝트",
    "subtitle": "출처가 맞아도, 결론까지 맞는 것은 아닙니다",
    "items": [
      [
        "관찰한 내용",
        "특정 기간·표본에서 수온과 지수가 함께 변했다"
      ],
      [
        "그럴듯한 비약",
        "“그러므로 수온이 지수 변화의 원인이다”"
      ],
      [
        "검토자의 질문",
        "표본·기간·다른 요인·계산 코드는 적절한가?"
      ]
    ],
    "seconds": 110,
    "emphasis": "근거를 읽고, 코드를 실행하고, 설명되지 않는 부분은 수정 요청하기"
  },
  {
    "title": "결과물 완성은 기본,\n프로젝트를 운영하는 힘까지",
    "layout": "flow",
    "chapter": "AI 활용과 프로젝트",
    "subtitle": "대학교에서의 과제는 범위·일정·소통·검증을 연습할 기회입니다",
    "items": [
      [
        "문제·기준",
        "누구에게 무엇이 필요한가"
      ],
      [
        "초안·수정",
        "AI 초안에 맥락과 표현 더하기"
      ],
      [
        "PoC·MVP",
        "작게 구현하고 피드백 받기"
      ],
      [
        "검증·전달",
        "완료 기준과 수정 요청 반영"
      ]
    ],
    "seconds": 100,
    "footer": "PoC(개념 검증)는 아이디어나 기술의 실현 가능성을 확인하는 실험입니다.\nMVP(최소 기능 제품)는 핵심 기능으로 사용자 반응을 확인하는 제품입니다."
  },
  {
    "title": "과제를 ‘잘’하기\n좋은 시대입니다",
    "layout": "mapping",
    "chapter": "AI 활용과 프로젝트",
    "subtitle": "학생일 때 충분히 실험하고, 실무에서는 효율을 높이세요",
    "items": [
      [
        "README.md",
        "질문 · 자료 출처 · 가정 · 실행 방법 · 해석"
      ],
      [
        "Python·SQL 코드",
        "전처리 · 집계 · 시각화 · 결과 검증"
      ],
      [
        "실행·결과 기록",
        "그림 · 통계 · 시간 · 메모리 · 토큰 사용량"
      ]
    ],
    "seconds": 70,
    "emphasis": "목표는 같은 품질의 결과를 더 적은 연산자원과 토큰으로 만드는 것"
  },
  {
    "title": "관심을\n실제로 쓰는 도구로",
    "layout": "project-showcase",
    "chapter": "AI 활용과 프로젝트",
    "images": [
      [
        "gputerm-terminal.webp",
        "GPUTERM iOS 터미널 화면",
        "GPUTERM"
      ],
      [
        "toilet-map.webp",
        "한국 화장실 지도 iOS 지도 화면",
        "한국 화장실 지도"
      ],
      [
        "pocket-weather-home.jpg",
        "Pocket Weather Station（기상대）의 기압·강수 전망 화면",
        "기상대 · Pocket Weather Station"
      ]
    ],
    "subtitle": "원격 서버 · 생활 공간정보 · 개인 기상 관측",
    "links": [
      [
        "GPUTERM",
        "https://fortranmentis.github.io/GPUTERM/ko/"
      ],
      [
        "한국 화장실 지도",
        "https://fortranmentis.github.io/Korea-Toilet-Map/"
      ],
      [
        "Pocket Weather Station",
        "https://fortranmentis.github.io/pocket_weather_station_hp/ko/"
      ]
    ],
    "seconds": 50,
    "eyebrow": "개인 개발 프로젝트"
  },
  {
    "title": "GeoSR은\n어떤 회사인가요?",
    "layout": "company",
    "chapter": "회사 소개와 채용",
    "eyebrow": "GEOSYSTEM RESEARCH CORPORATION",
    "subtitle": "해양·연안·하천의 현상을 조사하고,\n분석·예측해 활용 가능한 정보로 연결합니다",
    "items": [
      "관측과 현장조사",
      "환경 분석과 수치모델링",
      "빅데이터·AI·서비스"
    ],
    "seconds": 50
  },
  {
    "title": "여러 분야의 기관이 필요로 하는\n연구를 함께 수행합니다",
    "layout": "partners",
    "chapter": "회사 소개와 채용",
    "items": [
      [
        "해양",
        "해양수산부 · 해양환경공단 · 한국해양교통안전공단 · 해양수산과학기술진흥원 · 한국해양과학기술원 · 한국해양조사협회 · 한국수산자원공단 · 한국어촌어항공단 · 한국해양수산연구원 · 항만공사 · 한국항로표지기술원 · 국립해양조사원 · 국립해양생물자원관 · 국립수산과학원 · 지방해양수산청 등"
      ],
      [
        "환경·기상",
        "기후에너지환경부 · 기상청 · 한국기상산업기술원 · 국립환경과학원 · 한국환경산업기술원 · 한국환경정책·평가연구원 등"
      ],
      [
        "에너지",
        "기후에너지환경부 · 한국수자원공사 · 한국수력원자력 · 한국동서발전 · 한국에너지기술평가원 · 한국전력기술 등"
      ],
      [
        "기타",
        "국립재난안전연구원 등"
      ]
    ],
    "subtitle": "해양·환경·기상·에너지 분야의 연구 수요를 데이터와 기술로 연결",
    "seconds": 50
  },
  {
    "title": "같은 전공에서\n여러 직무로",
    "layout": "recruitment-fields",
    "chapter": "회사 소개와 채용",
    "items": [
      [
        "현장조사 및 자료분석",
        "조석·해류·조류·파랑과 퇴적물을 조사하고, 물의 흐름과 퇴적물 이동 자료를 분석합니다."
      ],
      [
        "해양융합정보분석 및 서비스개발",
        "해양·기상 모델과 관측자료를 가공·분석해 서비스를 개발하고, 빅데이터 분석과 문헌 조사를 지원합니다."
      ],
      [
        "해양관측장비 현장운영",
        "관측 센서와 전원·통신 설비를 점검·교정하고, 장비를 조립·시험하며 원격 전송 상태를 확인합니다."
      ],
      [
        "수치모델링",
        "하천과 해양의 움직임을 수치모델로 구현하고, 하천·해양·기상 관측자료를 수집·분석합니다."
      ],
      [
        "해양위성 검보정 연구 및 자료처리",
        "해양위성 자료의 정확도를 검증·보정하는 알고리즘을 개발하고, 위성자료를 처리·분석합니다."
      ],
      [
        "초분광센서 운영 및 분석",
        "초분광센서로 자료를 모으고, 영상에서 대상을 찾아 분류한 뒤 특성 정보를 추출합니다."
      ]
    ],
    "links": [
      [
        "공식 모집분야",
        "https://www.geosr.com/sub/career/recruit.asp"
      ]
    ],
    "seconds": 74,
    "subtitle": "모집 분야"
  },
  {
    "title": "채용은\n이렇게 진행됩니다",
    "layout": "recruitment",
    "chapter": "회사 소개와 채용",
    "items": [
      [
        "01",
        "서류"
      ],
      [
        "02",
        "인적성"
      ],
      [
        "03",
        "면접"
      ],
      [
        "04",
        "채용건강검진"
      ],
      [
        "05",
        "최종합격"
      ]
    ],
    "seconds": 74,
    "interviewNote": "석사 이상 지원자: PT 면접"
  },
  {
    "title": "신입 연봉 안내",
    "layout": "salary",
    "chapter": "회사 소개와 채용",
    "items": [
      [
        "학사",
        "3,840",
        "만원 / 연"
      ],
      [
        "석사",
        "4,390",
        "만원 / 연"
      ]
    ],
    "seconds": 73
  },
  {
    "title": "입사 후에도\n배움을 이어갈 수 있습니다",
    "layout": "statement",
    "chapter": "회사 소개와 채용",
    "eyebrow": "협업과 대학원 진학 지원",
    "subtitle": "약 200명 규모의 조직에서 석박사 전문인력과 협업하고,\n석사·박사 진학 지원 제도를 활용할 수 있습니다",
    "seconds": 58
  },
  {
    "title": "일하는 환경도\n함께 살펴보세요",
    "layout": "mapping",
    "chapter": "회사 소개와 채용",
    "eyebrow": "GeoSR 주요 복리후생",
    "items": [
      [
        "근무와 휴가",
        "유연근무 · 단축근무일 · 시간 단위 휴가 · 자율복장"
      ],
      [
        "성장과 생활",
        "직원 학자금 · 신입직원 주거 지원 · 자격증 수당"
      ],
      [
        "건강과 가족",
        "본인·가족 건강검진·입원비 지원 · 상해보험 · 경조 지원"
      ],
      [
        "보상과 지원",
        "성과급 · 퇴직연금 · 복지포인트 · 명절귀향비"
      ]
    ],
    "seconds": 75
  },
  {
    "title": "면접과 자소서도,\n혼자 준비하지 마세요",
    "layout": "mapping",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "면접 강의",
        "유튜브 공개 강의로 답변 구조·직무 질문 익히기"
      ],
      [
        "실전 연습",
        "직접 말하고 녹화하기 → 모의면접·피드백"
      ],
      [
        "자소서 첨삭",
        "학교의 무료 첨삭을 적극 활용하기\n초안 → 첨삭 → 수정 → 다시 피드백"
      ]
    ],
    "seconds": 73
  },
  {
    "title": "자격증도\n목표 직무에 맞춰",
    "layout": "credential-cards",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "발표자 보유",
        "기상기사 · 해양환경기사\n기상예보사 면허"
      ],
      [
        "검토할 준비 후보\n(데이터 관련 직무)",
        "빅데이터분석기사\nSQLD(SQL 개발자)\n정보처리기사"
      ]
    ],
    "seconds": 73
  },
  {
    "title": "진로별 준비 예시,\n내 경로를 골라보세요",
    "layout": "mapping",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "사기업",
        "OPIc · 기업별 인적성(GSAT 등)\n직무 관련 기사 · 포트폴리오"
      ],
      [
        "공기업·공공기관",
        "NCS · 토익 · 한능검 · 컴활 · 기사\n기관·직무별 요건과 가점 확인"
      ],
      [
        "공무원",
        "5·7급 공채: PSAT 등 / 9급: 직렬별 시험\n영어 검정(토익 등)·기사 가점은 공고 확인"
      ]
    ],
    "seconds": 100
  },
  {
    "title": "공고와 회사 이야기를\n함께 읽어보세요",
    "layout": "mapping",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "채용 탐색",
        "잡코리아 · 사람인\n캐치(대기업·중견 위주) · 인크루트(공기업)\n링커리어(인턴) · LinkedIn(외국계)"
      ],
      [
        "공고 읽기",
        "담당 업무 · 필수/우대 조건 · 전형 · 마감"
      ],
      [
        "회사 평판",
        "잡플래닛(회사 평점 3.0 이상)\n최근 리뷰·직무·근무지 맥락도 함께 살펴보기"
      ]
    ],
    "seconds": 50,
    "subtitle": "채용공고는 여기서 확인하세요"
  },
  {
    "title": "대학생활을 정리하면,\n포트폴리오의 재료가 됩니다",
    "layout": "mapping",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "모두 적어보기",
        "동아리 · 인턴 · 수업 · 개인연구 · 졸업연구\n공모전 · 아르바이트 · 팀 활동"
      ],
      [
        "내 역할 찾기",
        "문제 → 내 역할 → 결과 → 근거\n내가 맡은 일과 팀 전체 성과를 나눠 적기"
      ],
      [
        "근거 연결하기",
        "사진 · 보고서 · 발표자료 · 그림 · 코드\n대표 경험 2–3개부터 상세 페이지로 정리"
      ]
    ],
    "links": [
      [
        "이상학 포트폴리오 예시",
        "https://fortranmentis.github.io/ko/"
      ],
      [
        "GitHub 기록 예시",
        "https://github.com/fortranmentis"
      ]
    ],
    "footer": "처음에는 경험 전체 목록, 공개할 때는 직무와 관련된 사례 중심으로",
    "seconds": 130,
    "footerProminent": true
  },
  {
    "title": "이력서에는\n무엇을 적어야 할까요?",
    "layout": "research",
    "chapter": "취업 준비와 실행",
    "image": "resume-example.webp",
    "alt": "발표자의 1쪽 이력서 예시. 지원 직무, 요약, 경력, 대표 프로젝트, 기술, 자격·학력 순서로 구성",
    "items": [
      "지원 직무 한 줄 + 연락처",
      "요약 2–3줄: 공고의 핵심 단어로",
      "경력: 내 역할 → 한 일 → 결과·근거",
      "대표 경험 2–3개: 기간과 산출물",
      "기술·자격·학력: 직무와 관련된 것만"
    ],
    "footer": "하지 않은 일은 쓰지 않고, 한 일은 구체적으로",
    "seconds": 90,
    "zoomImage": true
  },
  {
    "title": "R&D로 가고 싶다면,\n석사 진학도 추천합니다",
    "layout": "graduate-advice",
    "chapter": "취업 준비와 실행",
    "subtitle": "관심 주제를 깊게 연구하고,\n분석·실험·논문 작성 경험을 쌓는 선택",
    "items": [
      "희망 R&D 공고의 학위 요건부터 확인하기",
      "연구 주제·지도교수·연구실을 살펴보고 컨택하기"
    ],
    "seconds": 50
  },
  {
    "title": "앞으로 8주,\n내 경로에 맞춰 준비하기",
    "layout": "action-plan",
    "chapter": "취업 준비와 실행",
    "items": [
      [
        "1–2주",
        "경로 선택 · 공고 3개 비교 · 대학생활 경험 목록"
      ],
      [
        "3–4주",
        "내게 필요한 시험·어학·자격 준비 진단"
      ],
      [
        "5–6주",
        "대표 경험 2–3개 정리 · 작은 프로젝트 해보기"
      ],
      [
        "7–8주",
        "피드백 · 지원서 작성 · 다음 학습 계획"
      ]
    ],
    "seconds": 130,
    "footer": "이번 주: 관심 공고 3개와 내 경험 목록부터 시작하세요",
    "caption": "NCS·PSAT·GSAT 등은 매일 조금씩 풀며 문제 유형과 시간 감각을 익혀보세요."
  },
  {
    "title": "과학이라는 기틀 위에,\n빅데이터라는 현실을 구현하기",
    "layout": "closing",
    "chapter": "마무리",
    "subtitle": "후배들에게 전하고 싶은 네 가지",
    "seconds": 65,
    "items": [
      [
        "이해",
        "AI 결과를 내가 설명하기"
      ],
      [
        "효율",
        "연산·토큰 낭비 줄이기"
      ],
      [
        "기록",
        "MD·코드·결과 남기기"
      ],
      [
        "운영",
        "내가 PM이라는 마음으로"
      ]
    ]
  },
  {
    "title": "무엇이\n궁금한가요?",
    "layout": "qa",
    "chapter": "질의응답",
    "items": [
      "학사 취업과 대학원 진학",
      "인턴과 첫 지원 준비",
      "코딩을 처음 시작하는 방법",
      "실제 데이터 업무와 회사생활"
    ],
    "seconds": 600
  }
];

// Build the transition agendas from the chapters in presentation order.
const introChapter = seminarContent[0].chapter;
const chapters = [...new Set(seminarContent.map(slide => slide.chapter))]
  .filter(chapter => chapter !== introChapter);
const agendaItems = chapters.map((chapter, index) => [String(index + 1).padStart(2, '0'), chapter]);
window.SEMINAR_SLIDES = seminarContent.flatMap((slide, index) => {
  const entersChapter = slide.chapter !== introChapter
    && seminarContent[index - 1]?.chapter !== slide.chapter;
  if (!entersChapter) return [slide];

  return [{
    title: '오늘의 이야기',
    layout: 'agenda',
    items: agendaItems,
    chapter: slide.chapter,
    agendaHighlight: slide.chapter,
    seconds: 5
  }, slide];
});
