/* =========================================================================
   태화라이온스클럽 웹사이트 데이터 파일
   -------------------------------------------------------------------------
   ★ 이 파일만 수정하면 사이트 내용이 모두 바뀝니다.
   ★ 따옴표("")와 쉼표(,)는 지우지 말고 그 안의 글자만 고쳐주세요.
   ★ 수정 후 저장하면 됩니다.
   ========================================================================= */

const SITE_DATA = {

  /* -----------------------------------------------------------------------
     0. 사이트 접속 비밀번호  ★중요
     - 회원들에게만 알려주세요. 이 비번을 입력해야 사이트가 열립니다.
     ----------------------------------------------------------------------- */
  sitePassword: "1",

  /* -----------------------------------------------------------------------
     1. 클럽 기본 정보
     ----------------------------------------------------------------------- */
  club: {
    name: "태화라이온스클럽",
    district: "국제라이온스협회 355D(울산·양산)지구",
    logo: "logo.jpg",      // 초기화면·헤더에 쓰이는 로고 이미지 파일
    slogan: "Serve to Change 세상을 바꾸는 봉사",
    intro:
      "태화라이온스클럽은 지역사회 봉사와 회원 간의 친목을 바탕으로, " +
      "더 나은 우리 마을을 만들어가는 봉사단체입니다. " +
      "어려운 이웃을 돕고, 함께 나누는 따뜻한 활동을 이어가고 있습니다.",
    foundedYear: "1990",     // 창립 연도 (모르면 빈 칸으로 두세요)
    region: "울산광역시",     // 활동 지역
    contactPhone: "010-0000-0000",   // 대표 연락처
    contactEmail: "taehwa.lions@example.com", // 대표 이메일
  },

  /* -----------------------------------------------------------------------
     2. 임원진 (회장단)
     ----------------------------------------------------------------------- */
  officers: [
    { role: "회장",   name: "홍길동", phone: "010-1111-1111" },
    { role: "총무",   name: "김총무", phone: "010-2222-2222" },
    { role: "재무",   name: "이재원", phone: "010-3333-3333" },
    { role: "부회장", name: "박부회", phone: "010-4444-4444" },
  ],

  /* -----------------------------------------------------------------------
     3. 안내자료 (클럽 소개 카드)
     - 자유롭게 추가/삭제 가능합니다.
     ----------------------------------------------------------------------- */
  guides: [
    {
      icon: "🦁",
      title: "라이온스란?",
      body:
        "라이온스 클럽 국제협회(LCI)는 전 세계 회원이 활동하는 " +
        "세계 최대 규모의 봉사단체입니다. 'We Serve(우리는 봉사한다)'를 " +
        "모토로 지역사회에 봉사합니다.",
    },
    {
      icon: "🤝",
      title: "주요 봉사활동",
      body:
        "독거노인 돕기, 장학금 전달, 환경정화, 헌혈 캠페인, " +
        "소외계층 후원 등 다양한 봉사활동을 진행합니다.",
    },
    {
      icon: "📋",
      title: "가입 안내",
      body:
        "지역사회 봉사에 뜻이 있는 분이라면 누구나 함께할 수 있습니다. " +
        "가입 문의는 총무에게 연락 주세요.",
    },
    {
      icon: "💛",
      title: "회비 안내",
      body:
        "연회비 및 월회비 안내입니다. 자세한 내용은 재무에게 문의해 주세요. " +
        "(예시: 입회비 OO만원 / 월회비 OO만원)",
    },
  ],

  /* -----------------------------------------------------------------------
     4. 행사 일정표 (월별 드롭다운)
     - 월(month)별로 묶고, 각 월 안에 일정(items)을 적습니다.
     - day 는 날짜 숫자(예: 5), title 은 행사 내용입니다.
     - open: true 로 둔 월은 처음부터 펼쳐집니다.
     - 새 달을 추가하려면 { } 블록을 통째로 복사해서 month/items를 고치세요.
     ----------------------------------------------------------------------- */
  schedule: [
    {
      year: 2026,
      month: 7,
      open: false,
      items: [
        { day: 5,  title: "산악회\n발대식" },
        { day: 8,  title: "골프회\n정기라운딩" },
        { day: 11, title: "보은라이온스클럽\n이·취임식" },
        { day: 14, title: "본회 이사회" },
        { day: 24, title: "본회 월례회 및 정기총회,\n도산급식 봉사활동" },
      ],
    },
    {
      year: 2026,
      month: 8,
      open: true,           // 8월은 처음부터 펼쳐서 보이기
      items: [
        { day: 12, title: "골프회\n정기라운딩" },
        { day: 14, title: "이사회" },
        { day: 15, title: "부부합동월례회" },
        { day: 28, title: "도산급식 봉사활동" },
      ],
    },
  ],

  /* -----------------------------------------------------------------------
     4-0. 월별 활동내역 (사진 앨범)
     - month 별로 묶고, 그 안 posts 에 게시물을 하나씩 넣습니다.
     - 각 게시물: title(제목), date(날짜), body(본문), photos(사진 파일 목록)
     - 본문(body)은 백틱(`)으로 감싸면 여러 줄을 그대로 쓸 수 있습니다.
     - 사진은 photos 폴더에 넣고 "photos/파일명.jpg" 처럼 적습니다.
     - open: true 인 달은 처음부터 펼쳐집니다.
     ----------------------------------------------------------------------- */
  activities: [
    {
      year: 2026,
      month: 8,
      open: true,
      posts: [
        {
          title: "1지역 4역 세미나 참석 · 영주 부석사",
          date: "8월 30일",
          body: `지난 8월 30일, 태화라이온스클럽이 1지역 4역 세미나에 참석하였습니다.

이번 세미나는 영주 부석사 일원에서 진행되어, 새 회기의 클럽 운영 방향과 4역의 역할을 함께 나누는 뜻깊은 시간을 가졌습니다. 유서 깊은 부석사의 정취 속에서 1지역 클럽들이 화합을 다지며 알찬 연수를 마쳤습니다.

우리 클럽에서는 최연식 현 회장, 장태원 총무, 이재원 재무가 참석하여 자리를 함께하였습니다.

같은 1지역 클럽들과 교류하며 우애를 다진 값진 자리였습니다. 앞으로도 태화라이온스클럽은 1지역과 발맞추어 지역사회를 위한 봉사에 최선을 다하겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-seminar-1.jpg",
            "photos/2026-08-seminar-2.jpg",
            "photos/2026-08-seminar-3.jpg",
            "photos/2026-08-seminar-4.jpg",
            "photos/2026-08-seminar-5.jpg",
            "photos/2026-08-seminar-6.jpg",
          ],
        },
        {
          title: "도산노인복지회관 급식봉사 활동",
          date: "8월 28일",
          body: `지난 8월 28일, 태화라이온스클럽 회원들이 도산노인복지회관을 찾아 어르신들을 위한 급식봉사 활동을 펼쳤습니다.

회원들은 정성껏 음식을 준비하고 배식하며 어르신 한 분 한 분께 따뜻한 한 끼를 대접해 드렸습니다. 맛있게 드시는 어르신들의 환한 미소에 회원 모두가 큰 보람을 느낀 하루였습니다.

작은 나눔이지만 어르신들께 따뜻한 정이 전해졌기를 바랍니다. 우리 태화라이온스클럽은 앞으로도 지역 어르신들을 위한 급식봉사를 꾸준히 이어가겠습니다.

함께 땀 흘려 봉사에 참여해 주신 회원 여러분, 수고 많으셨습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-dosan-1.jpg",
          ],
        },
        {
          title: "김성호 L 자녀 돌잔치 축하",
          date: "8월 23일",
          body: `지난 8월 23일 일요일, 태화라이온스클럽 회원 김성호 L의 자녀 돌잔치가 열렸습니다.

가정에 찾아온 큰 경사를 진심으로 축하드리며, 함께 자리한 회원들도 아이의 첫 생일을 축복하며 기쁨을 나누었습니다.

무럭무럭 건강하게 자라나 온 가족에게 늘 웃음과 행복을 안겨주는 아이가 되기를 바랍니다. 김성호 L 가정에 늘 사랑과 행복이 가득하시길 기원합니다.

축하드립니다!

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-dol-1.jpg",
            "photos/2026-08-dol-2.jpg",
            "photos/2026-08-dol-3.jpg",
            "photos/2026-08-dol-4.jpg",
            "photos/2026-08-dol-5.jpg",
          ],
        },
        {
          title: "1지역 소속 클럽 행사 참석",
          date: "8월 16일 · 23일",
          body: `태화라이온스클럽이 같은 1지역에 속한 여러 클럽의 뜻깊은 자리에 함께하였습니다.

· 8월 16일 — 황룡 MJF 행사
· 8월 23일 — 태양 L.C 부부 합동 월례회
· 8월 23일 — 울산중부 L.C 부부 합동 월례회

각 행사에는 우리 클럽 최연식 현 회장과 장태원 총무가 참석하여 함께 자리를 빛내고 축하의 뜻을 전하였습니다.

같은 지역 클럽들과의 따뜻한 교류를 통해 라이온스의 우애를 다지고 1지역의 화합을 더욱 굳건히 하는 소중한 시간이었습니다. 앞으로도 태화라이온스클럽은 1지역 클럽들과 긴밀히 협력하며 함께 성장해 나가겠습니다.

행사를 준비하고 반갑게 맞아주신 각 클럽 회원 여러분께 깊이 감사드립니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-region-1.jpg",
            "photos/2026-08-region-2.jpg",
            "photos/2026-08-region-3.jpg",
            "photos/2026-08-region-4.jpg",
          ],
        },
        {
          title: "부부 합동 연수회 및 8월 월례회",
          date: "8월 15일",
          body: `지난 8월 15일, 태화라이온스클럽 부부 합동 연수회 및 8월 월례회가 해운대 일원에서 열렸습니다.

이날은 회원과 배우자분들이 함께한 뜻깊은 자리로, 아쿠아리움 관람과 해운대 요트 투어를 즐기며 잊지 못할 추억을 만들었습니다. 시원한 바닷바람을 맞으며 떠난 요트 투어에서는 회원 가족 모두가 환한 웃음 속에서 하나 되는 시간을 보냈습니다.

일상을 벗어나 함께 화합을 다진 이번 연수회를 통해 회원 간의 정과 유대가 한층 깊어졌습니다. 늘 클럽을 응원해 주시는 배우자분들께도 감사의 마음을 전합니다.

앞으로도 태화라이온스클럽은 화합과 봉사의 정신으로 힘차게 나아가겠습니다. 함께해 주신 회원과 가족 여러분, 감사합니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-training-1.jpg",
            "photos/2026-08-training-2.jpg",
            "photos/2026-08-training-3.jpg",
            "photos/2026-08-training-4.jpg",
            "photos/2026-08-training-5.jpg",
            "photos/2026-08-training-6.jpg",
            "photos/2026-08-training-7.jpg",
            "photos/2026-08-training-8.jpg",
            "photos/2026-08-training-9.jpg",
            "photos/2026-08-training-10.jpg",
            "photos/2026-08-training-11.jpg",
            "photos/2026-08-training-12.jpg",
            "photos/2026-08-training-13.jpg",
            "photos/2026-08-training-14.jpg",
            "photos/2026-08-training-15.jpg",
            "photos/2026-08-training-16.jpg",
            "photos/2026-08-training-17.jpg",
            "photos/2026-08-training-18.jpg",
            "photos/2026-08-training-19.jpg",
            "photos/2026-08-training-20.jpg",
            "photos/2026-08-training-21.jpg",
            "photos/2026-08-training-22.jpg",
            "photos/2026-08-training-23.jpg",
            "photos/2026-08-training-24.jpg",
            "photos/2026-08-training-25.jpg",
            "photos/2026-08-training-26.jpg",
            "photos/2026-08-training-27.jpg",
            "photos/2026-08-training-28.jpg",
            "photos/2026-08-training-29.jpg",
          ],
        },
        {
          title: "태화라이온스클럽 8월 이사회 개최",
          date: "8월 14일",
          body: `지난 8월 14일, 선바위한우갈비에서 태화라이온스클럽 8월 이사회가 진행되었습니다.

참석하신 이사진께서 클럽 운영과 봉사 사업에 관한 여러 안건을 함께 논의하며 뜻깊은 시간을 보냈습니다. 화기애애한 분위기 속에서 알찬 회의를 마무리하였습니다.

바쁜 일정에도 참석해 주신 이사진 여러분께 감사드립니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-08-board-1.jpg",
            "photos/2026-08-board-2.jpg",
          ],
        },
      ],
    },
    {
      year: 2026,
      month: 7,
      open: false,
      posts: [
        {
          title: "2025–26 · 2026–27 회기 인수인계 완료",
          date: "7월 6일",
          body: `지난 7월 6일 저녁 6시, 직전 회장이신 원용철 L의 사업장 선바위한우갈비에서 2025–26회기부터 2026–27회기로의 인수인계가 진행되었습니다.

관련 서류 확인 후 이상 없이 날인하여 인수인계를 무사히 마쳤습니다.
이날 자리에는
· 본회장 최연식 L
· 총무 장태원 L
· 재무 이재원 L
· 직전 회장 원용철 L
· 직전 총·재무 김성림 L
이상 다섯 분이 함께해 주셨습니다.

지난 한 회기 동안 클럽을 위해 헌신해 주신 원용철 직전 회장님과 김성림 직전 총·재무님께 다시 한번 깊은 감사의 마음을 전합니다. 두 분의 노고 덕분에 클럽이 한 걸음 더 나아갈 수 있었습니다.

새 회기에도 회원 여러분과 함께 뜻깊은 봉사의 길을 걸어가겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-handover-1.jpg",
            "photos/2026-07-handover-2.jpg",
            "photos/2026-07-handover-3.jpg",
          ],
        },
        {
          title: "2026–27 보은라이온스클럽 이·취임식 방문",
          date: "7월 11일",
          body: `지난 7월 11일 오후 5시, 보은컨벤션에서 열린 2026–27 보은라이온스클럽 이·취임식에 우리 클럽이 함께 자리하였습니다.
이날 축하 방문에는
· 본회장 최연식 L
· 31대 회장 김호식 L
· 1부회장 이재환 L
· 2부회장 박정기 L
· 김관현 L, 장태원 L, 정범근 L, 이재원 L
이상 본회 8명과 부인회 3명, 총 11명의 회원 및 부인회원께서 함께해 주셨습니다.
바쁜 일정 속에서도 뜻깊은 자리를 빛내주신 모든 분들께 깊이 감사드립니다.
앞으로도 따뜻한 교류를 이어가며 함께 성장해 나가겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-boeun-1.jpg",
            "photos/2026-07-boeun-2.jpg",
            "photos/2026-07-boeun-3.jpg",
            "photos/2026-07-boeun-4.jpg",
            "photos/2026-07-boeun-5.jpg",
            "photos/2026-07-boeun-6.jpg",
            "photos/2026-07-boeun-7.jpg",
            "photos/2026-07-boeun-8.jpg",
            "photos/2026-07-boeun-9.jpg",
          ],
        },
        {
          title: "태화라이온스클럽 제437차 이사회 결과보고",
          date: "7월 14일",
          body: `지난 7월 14일(화) 오후 6시 30분, 지구본부 2층 회의실에서 제437차 이사회가 진행되었습니다.
주요 안건과 결과는 다음과 같습니다.

제1호 의안 : 2025–2026 결산안 보고의 건
→ 결산안에 보완 사항이 있어 승인 보류되었으며, 다음 월례회까지 보완하기로 하였습니다.

제2호 의안 : 2026–2027 예산안 승인의 건
→ 이사회에서 원안대로 승인되었습니다.

참석 이사진 (13명)
최연식 L, 원용철 L, 박정기 L, 이주형 L, 장태원 L, 김호식 L, 김창룡 L, 김춘택 L, 김명주 L, 김관현 L, 김성림 L, 정범근 L, 김두한 L

참석해 주신 이사진 여러분께 감사드리며, 앞으로도 클럽 발전을 위해 함께 힘써 주시기를 부탁드립니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-board437-1.jpg",
            "photos/2026-07-board437-2.jpg",
            "photos/2026-07-board437-3.jpg",
            "photos/2026-07-board437-4.jpg",
          ],
        },
        {
          title: "김태운 L 병문안",
          date: "7월 16일",
          body: `지난 7월 16일 오후 3시 30분, 사고로 동강병원에 입원하신 김태운 L을 찾아뵙고 태화라이온스클럽 4역이 함께 병문안을 다녀왔습니다.

다행히 시술은 잘 마무리되었고, 경과도 좋아지고 있다는 반가운 소식을 전해 들었습니다. 직접 뵈니 생각보다 안색이 밝으셔서 한시름 놓았습니다.

갑작스러운 사고 소식에 회원 모두가 걱정이 많았는데, 하루빨리 쾌차하시어 건강한 모습으로 다시 함께하시기를 진심으로 기원합니다.

김태운 L, 힘내십시오! 우리 클럽 회원 모두가 응원하고 있습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: ["photos/2026-07-visit-1.jpg"],
        },
        {
          title: "2026–2027 지구임원 및 클럽 4역 세미나 · 취임축하연 참석",
          date: "7월 18일",
          body: `지난 7월 18일(토), 울산전시컨벤션센터(UECO)에서 열린 국제라이온스협회 355–D(울산·양산)지구 2026–2027 지구임원 및 클럽 4역 세미나와 함께, 총재·지구 제1부총재·지구임원 취임축하연에 우리 태화라이온스클럽이 함께 자리하였습니다.

우리 클럽에서는 클럽 4역과 배기업 전 총재님께서 참석하여 자리를 빛내주셨습니다.
새로이 지구를 이끌어 가실 엄말섭 총재님(2026–2027)의 취임을 진심으로 축하드리며, 새 회기 동안 지구와 각 클럽이 힘차게 나아가기를 기원합니다.

이날 세미나에서는 새 회기의 사업 방향과 각 클럽 4역의 역할을 함께 나누는 뜻깊은 시간을 가졌습니다. 축하 공연과 각 지역의 열띤 응원 열기 속에서 회원 모두가 하나 되는 자리였습니다.

새 회기에도 태화라이온스클럽은 지구와 발맞추어 지역사회를 위한 봉사에 최선을 다하겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-seminar-1.jpg",
            "photos/2026-07-seminar-2.jpg",
            "photos/2026-07-seminar-3.jpg",
            "photos/2026-07-seminar-4.jpg",
            "photos/2026-07-seminar-5.jpg",
            "photos/2026-07-seminar-6.jpg",
            "photos/2026-07-seminar-7.jpg",
            "photos/2026-07-seminar-8.jpg",
            "photos/2026-07-seminar-9.jpg",
            "photos/2026-07-seminar-10.jpg",
            "photos/2026-07-seminar-11.jpg",
          ],
        },
        {
          title: "태화라이온스클럽 부인회 행사 참석 및 운영비 후원",
          date: "7월 20일",
          body: `지난 7월 20일, 태화라이온스클럽 부인회 행사가 열렸습니다.
이날 행사에 클럽 4역이 함께 참석하여 부인회원 여러분과 뜻깊은 시간을 나누었습니다. 아울러 본회에서는 부인회의 원활한 활동을 응원하는 마음을 담아 운영비 50만 원을 후원하였습니다.

늘 클럽의 든든한 버팀목이 되어주시는 부인회원 여러분께 깊이 감사드립니다. 여러분의 헌신과 따뜻한 마음이 있기에 우리 클럽의 봉사활동이 더욱 빛날 수 있습니다.
이번 후원이 부인회의 활동에 작은 보탬이 되기를 바라며, 앞으로도 부인회와 클럽이 한마음으로 화합하여 지역사회를 위한 봉사의 길을 함께 걸어가겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-buinhoe-1.jpg",
            "photos/2026-07-buinhoe-2.jpg",
            "photos/2026-07-buinhoe-3.jpg",
          ],
        },
        {
          title: "7월 도산노인복지회관 급식봉사 활동",
          date: "7월 24일",
          body: `지난 7월 24일, 태화라이온스클럽 회원들이 도산노인복지회관을 찾아 어르신들을 위한 급식봉사 활동을 펼쳤습니다.

무더운 날씨 속에서도 회원들은 정성껏 음식을 준비하고 배식하며, 어르신 한 분 한 분께 따뜻한 한 끼를 대접해 드렸습니다. 맛있게 드시는 어르신들의 환한 미소에 회원 모두가 큰 보람을 느낀 하루였습니다.

작은 나눔이지만 어르신들께 따뜻한 위로와 정이 전해졌기를 바랍니다. 우리 태화라이온스클럽은 앞으로도 지역 어르신들을 위한 봉사를 꾸준히 이어가겠습니다.

함께 땀 흘려 봉사에 참여해 주신 회원 여러분, 수고 많으셨습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽
회장 최연식 L 드림`,
          photos: [
            "photos/2026-07-dosan-1.jpg",
            "photos/2026-07-dosan-2.jpg",
            "photos/2026-07-dosan-3.jpg",
            "photos/2026-07-dosan-4.jpg",
            "photos/2026-07-dosan-5.jpg",
          ],
        },
        {
          title: "7월 월례회 개최",
          date: "7월 24일",
          body: `지난 7월 24일, 태화라이온스클럽 7월 월례회가 개최되었습니다.
이날 월례회에는 역대 회장님들과 여러 회원님들께서 많이 참석해 주시어 자리를 더욱 빛내주셨습니다. 오랜만에 한자리에 모인 선후배 회원들이 반갑게 인사를 나누며 화기애애한 분위기 속에서 모임이 진행되었습니다.

새 회기의 클럽 운영 방향과 봉사 계획을 함께 나누는 뜻깊은 시간이었으며, 역대 회장님들의 값진 조언과 회원 여러분의 따뜻한 관심 덕분에 새 회기를 힘차게 시작할 수 있게 되었습니다.

바쁜 일정에도 불구하고 참석해 주신 역대 회장님들과 회원 여러분께 진심으로 감사드립니다. 앞으로도 태화라이온스클럽은 하나 된 마음으로 지역사회를 위한 봉사에 최선을 다하겠습니다.

— 세상을 바꾸는 봉사, Serve to Change —

2026–2027 태화라이온스클럽`,
          photos: [
            "photos/2026-07-monthly-1.jpg",
            "photos/2026-07-monthly-2.jpg",
          ],
        },
      ],
    },
  ],

  /* -----------------------------------------------------------------------
     찬조현황 = 회원별 누적(자진봉사금·발전기금·써클활동비) (엑셀에서 자동 생성)
     ----------------------------------------------------------------------- */
  donations: {
    title: "회원별 자진봉사금 · 발전기금 · 써클활동비 [누적]",
    round: "438차 ~ 439차",
    members: [
    { no: 1, name: "최연식", jajin: 4160000, fund: 0, golf: 250000, san: 400000, meal: 300000, sub: 950000, total: 5110000 },
    { no: 2, name: "원용철", jajin: 720000, fund: 0, golf: 0, san: 200000, meal: 0, sub: 200000, total: 920000 },
    { no: 3, name: "이재환", jajin: 1850000, fund: 100000, golf: 500000, san: 400000, meal: 200000, sub: 1100000, total: 3050000 },
    { no: 4, name: "박정기", jajin: 1150000, fund: 100000, golf: 250000, san: 200000, meal: 0, sub: 450000, total: 1700000 },
    { no: 5, name: "이주형", jajin: 800000, fund: 100000, golf: 500000, san: 400000, meal: 100000, sub: 1000000, total: 1900000 },
    { no: 6, name: "장태원", jajin: 330000, fund: 0, golf: 250000, san: 200000, meal: 200000, sub: 650000, total: 980000 },
    { no: 7, name: "이재원", jajin: 0, fund: 0, golf: 250000, san: 0, meal: 0, sub: 250000, total: 250000 },
    { no: 8, name: "이상봉", jajin: 100000, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 100000 },
    { no: 9, name: "박정현", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 10, name: "이병관", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 11, name: "임인득", jajin: 200000, fund: 100000, golf: 250000, san: 400000, meal: 0, sub: 650000, total: 950000 },
    { no: 12, name: "배기업", jajin: 100000, fund: 100000, golf: 0, san: 400000, meal: 0, sub: 400000, total: 600000 },
    { no: 13, name: "한동균", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 14, name: "김철성", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 15, name: "장기환", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 16, name: "김태운", jajin: 100000, fund: 0, golf: 0, san: 400000, meal: 0, sub: 400000, total: 500000 },
    { no: 17, name: "박종언", jajin: 300000, fund: 0, golf: 250000, san: 400000, meal: 0, sub: 650000, total: 950000 },
    { no: 18, name: "김호식", jajin: 200000, fund: 100000, golf: 250000, san: 200000, meal: 100000, sub: 550000, total: 850000 },
    { no: 19, name: "엄재일", jajin: 300000, fund: 100000, golf: 0, san: 400000, meal: 0, sub: 400000, total: 800000 },
    { no: 20, name: "김철홍", jajin: 100000, fund: 100008, golf: 0, san: 400000, meal: 200000, sub: 600000, total: 800008 },
    { no: 21, name: "김창룡", jajin: 550000, fund: 100000, golf: 250000, san: 200000, meal: 100000, sub: 550000, total: 1200000 },
    { no: 22, name: "황순만", jajin: 1190000, fund: 0, golf: 500000, san: 200000, meal: 100000, sub: 800000, total: 1990000 },
    { no: 23, name: "주성대", jajin: 100000, fund: 0, golf: 0, san: 200000, meal: 0, sub: 200000, total: 300000 },
    { no: 24, name: "김두한", jajin: 100000, fund: 100000, golf: 250000, san: 400000, meal: 100000, sub: 750000, total: 950000 },
    { no: 25, name: "김성호", jajin: 300000, fund: 100000, golf: 250000, san: 400000, meal: 0, sub: 650000, total: 1050000 },
    { no: 26, name: "김명주", jajin: 0, fund: 0, golf: 250000, san: 0, meal: 0, sub: 250000, total: 250000 },
    { no: 27, name: "허용", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 28, name: "김춘택", jajin: 0, fund: 100000, golf: 0, san: 0, meal: 200000, sub: 200000, total: 300000 },
    { no: 29, name: "이양진", jajin: 0, fund: 100000, golf: 0, san: 0, meal: 0, sub: 0, total: 100000 },
    { no: 30, name: "허성욱", jajin: 200000, fund: 100000, golf: 250000, san: 200000, meal: 0, sub: 450000, total: 750000 },
    { no: 31, name: "안종익", jajin: 80000, fund: 0, golf: 0, san: 400000, meal: 100000, sub: 500000, total: 580000 },
    { no: 32, name: "정일만", jajin: 500000, fund: 0, golf: 250000, san: 200000, meal: 0, sub: 450000, total: 950000 },
    { no: 33, name: "김성동", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 34, name: "조 현", jajin: 0, fund: 0, golf: 0, san: 0, meal: 100000, sub: 100000, total: 100000 },
    { no: 35, name: "이진희", jajin: 0, fund: 0, golf: 250000, san: 0, meal: 0, sub: 250000, total: 250000 },
    { no: 36, name: "김성림", jajin: 300000, fund: 0, golf: 0, san: 0, meal: 100000, sub: 100000, total: 400000 },
    { no: 37, name: "정범근", jajin: 400000, fund: 100000, golf: 250000, san: 200000, meal: 0, sub: 450000, total: 950000 },
    { no: 38, name: "김관현", jajin: 400000, fund: 100000, golf: 250000, san: 200000, meal: 200000, sub: 650000, total: 1150000 },
    { no: 39, name: "이동기", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 40, name: "김도겸", jajin: 0, fund: 0, golf: 0, san: 0, meal: 0, sub: 0, total: 0 },
    { no: 41, name: "조현명", jajin: 0, fund: 0, golf: 0, san: 0, meal: 100000, sub: 100000, total: 100000 },
    ],
    extra: [
    { no: 42, name: "1지역위원장오중철", jajin: 0, fund: 100000, golf: 0, san: 0, meal: 0, sub: 0, total: 100000 },
    { no: 43, name: "1지역3지대위원장김효은", jajin: 0, fund: 100000, golf: 0, san: 0, meal: 0, sub: 0, total: 100000 },
    { no: 44, name: "1지역회장단일동", jajin: 0, fund: 200000, golf: 0, san: 0, meal: 0, sub: 0, total: 200000 },
    ],
    totals: { jajin: 14530000, fund: 2000008, golf: 5500000, san: 7000000, meal: 2200000, sub: 14700000, total: 31230008 },
  },

  /* -----------------------------------------------------------------------
     운영현황 = 회차별 수지계산서 + 계정별원장 (엑셀에서 자동 생성)
     ----------------------------------------------------------------------- */
  operations: {
    rounds: [
    {
      round: 439,
      statement: {
        title: "제439차 수지계산서",
        org: "2026-2027 태화라이온스클럽",
        period: "2026.08.01 ~ 2026.08.31",
        incomes: [
          { name: "전월 이월금", amount: 7896080 },
          { name: "회비", amount: 3110000 },
          { name: "봉사금", amount: 2000008 },
          { name: "입회금", amount: 0 },
          { name: "대회비", amount: 0 },
          { name: "기타수입", amount: 0 },
        ],
        expenses: [
          { name: "회의비", amount: 4769330 },
          { name: "봉사사업비", amount: 0 },
          { name: "우편료,통신비", amount: 8320 },
          { name: "제의무금", amount: 367500 },
          { name: "기타지출", amount: 4400 },
          { name: "기념품 및 도서인쇄비", amount: 0 },
          { name: "경조사비", amount: 420000 },
        ],
        subIn: 13006088, subOut: 5569550, monthTotal: 7436538,
        jajinIn: 500000, jajinOut: 500000, circleIn: 900000, circleOut: 900000,
        totIn: 14406088, totOut: 6969550, balance: 7436538, deposit: 45000000, assets: 52436538,
      },
      ledger: [
        {
          title: "[수입] 회비",
          subIn: 3110000, subOut: null,
          rows: [
            { date: "08-12", desc: "연회비", member: "정윤제L", in: 2080000, out: null, note: "25-26, 26-27 2개년치" },
            { date: "08-14", desc: "연회비", member: "김관현L", in: 1030000, out: null, note: "" },
            { sub: true, label: "└ 연회비 소계 (2건)", in: 3110000, out: null },
          ],
        },
        {
          title: "[수입] 봉사금",
          subIn: 2000008, subOut: null,
          rows: [
            { date: "08-14", desc: "발전기금", member: "임인득L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "엄재일L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김철홍L", in: 100008, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "배기업L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김창룡L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김호식L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "이양진L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김춘택L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김관현L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김두한L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "허성욱L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "정범근L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "김성호L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "이주형L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "이재환L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "박정기L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "1지역위원장 오중철L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "1지역3지대위원장 김효은L", in: 100000, out: null, note: "" },
            { date: "08-15", desc: "발전기금", member: "1지역 회장단 일동", in: 200000, out: null, note: "" },
            { sub: true, label: "└ 발전기금 소계 (19건)", in: 2000008, out: null },
          ],
        },
        {
          title: "[수입] 자진봉사금",
          subIn: 500000, subOut: null,
          rows: [
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "엄재일L", in: 200000, out: null, note: "3차 식대" },
            { date: "08-23", desc: "김성호L 돌잔치", member: "최연식L", in: 300000, out: null, note: "2차 식대" },
          ],
        },
        {
          title: "[지출] 회의비",
          subIn: null, subOut: 4769330,
          rows: [
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 800000, note: "요트렌탈비" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 800000, note: "버스렌탈비 잔금, 기사팁" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 1146000, note: "저녁식대" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 500000, note: "모바일 상품권" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 824000, note: "아쿠아리움 입장권" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 369930, note: "간식비, 주류등" },
            { date: "08-15", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 40000, note: "현수막 제작비용" },
            { date: "08-28", desc: "부부합동 연수회 및 월례회", member: "", in: null, out: 250000, note: "답례품(5,000원*50개)" },
            { sub: true, label: "└ 부부합동 연수회 및 월례회 소계 (8건)", in: null, out: 4729930 },
            { date: "08-28", desc: "도산급식봉사", member: "", in: null, out: 39400, note: "커피값" },
          ],
        },
        {
          title: "[지출] 우편료,통신비",
          subIn: null, subOut: 8320,
          rows: [
            { date: "08-12", desc: "카드수수료", member: "", in: null, out: 8320, note: "" },
          ],
        },
        {
          title: "[지출] 제의무금",
          subIn: null, subOut: 367500,
          rows: [
            { date: "08-12", desc: "관리비", member: "", in: null, out: 367500, note: "현회원41*7500+클럽분담금 60,000" },
          ],
        },
        {
          title: "[지출] 기타지출",
          subIn: null, subOut: 4400,
          rows: [
            { date: "08-06", desc: "공인인증서 수수료", member: "", in: null, out: 4400, note: "" },
          ],
        },
        {
          title: "[지출] 경조사비",
          subIn: null, subOut: 420000,
          rows: [
            { date: "08-22", desc: "김성호L 돌잔치", member: "김성호L", in: null, out: 420000, note: "" },
          ],
        },
      ],
      attendance: [
        { group: "골프회", unit: 250000, amount: 0, count: 0, note: "" },
        { group: "산악회", unit: 200000, amount: 0, count: 0, note: "" },
        { group: "급식봉사", unit: 100000, amount: 900000, count: 9, note: "조현, 김관현, 김철홍, 김창룡, 최연식, 김춘택, 김성림, 장태원, 황순만" },
        { group: "합  계", unit: null, amount: 900000, count: 9, note: "" },
      ],
    },
    {
      round: 438,
      statement: {
        title: "제438차 수지계산서",
        org: "2026-2027 태화라이온스클럽",
        period: "2026.07.01 ~ 2026.07.31",
        incomes: [
          { name: "전월 이월금", amount: 10928466 },
          { name: "회비", amount: 5150000 },
          { name: "봉사금", amount: 0 },
          { name: "입회금", amount: 0 },
          { name: "대회비", amount: 0 },
          { name: "기타수입", amount: 1108253 },
        ],
        expenses: [
          { name: "회의비", amount: 2987300 },
          { name: "봉사사업비", amount: 1100000 },
          { name: "우편료,통신비", amount: 54120 },
          { name: "제의무금", amount: 4704219 },
          { name: "기타지출", amount: 115000 },
          { name: "기념품 및 도서인쇄비", amount: 230000 },
          { name: "경조사비", amount: 100000 },
        ],
        subIn: 17186719, subOut: 9290639, monthTotal: 7896080,
        jajinIn: 14030000, jajinOut: 14030000, circleIn: 13800000, circleOut: 13800000,
        totIn: 45016719, totOut: 37120639, balance: 7896080, deposit: 45000000, assets: 52896080,
      },
      ledger: [
        {
          title: "[수입] 회비",
          subIn: 5150000, subOut: null,
          rows: [
            { date: "07-03", desc: "연회비", member: "정범근L", in: 1030000, out: null, note: "" },
            { date: "07-07", desc: "연회비", member: "김성림L", in: 1030000, out: null, note: "" },
            { date: "07-08", desc: "연회비", member: "이재환L", in: 1030000, out: null, note: "" },
            { date: "07-15", desc: "연회비", member: "이재원L", in: 1030000, out: null, note: "" },
            { date: "07-20", desc: "연회비", member: "엄재일L", in: 1030000, out: null, note: "" },
            { sub: true, label: "└ 연회비 소계 (5건)", in: 5150000, out: null },
          ],
        },
        {
          title: "[수입] 기타수입",
          subIn: 1108253, subOut: null,
          rows: [
            { date: "07-12", desc: "보은회", member: "", in: 100000, out: null, note: "기사팁 대납" },
            { date: "07-18", desc: "정기예금이자수입", member: "", in: 1008253, out: null, note: "" },
          ],
        },
        {
          title: "[수입] 자진봉사금",
          subIn: 14030000, subOut: null,
          rows: [
            { date: "07-01", desc: "차기 3역 및 3부회장 부부 간담회", member: "최연식L", in: 600000, out: null, note: "1차 식대" },
            { date: "07-01", desc: "차기 3역 및 3부회장 부부 간담회", member: "최연식L", in: 250000, out: null, note: "2차 식대" },
            { sub: true, label: "└ 차기 3역 및 3부회장 부부 간담회 소계 (2건)", in: 850000, out: null },
            { date: "07-01", desc: "신입회원 간담회", member: "최연식L", in: 300000, out: null, note: "1차 식대" },
            { date: "07-01", desc: "신입회원 간담회", member: "김성호L", in: 200000, out: null, note: "2차 식대" },
            { date: "07-01", desc: "신입회원 간담회", member: "정일만L", in: 100000, out: null, note: "2차 식대" },
            { date: "07-01", desc: "신입회원 간담회", member: "최연식L", in: 100000, out: null, note: "3차 식대" },
            { date: "07-01", desc: "신입회원 간담회", member: "최연식L", in: 200000, out: null, note: "1차 식대" },
            { sub: true, label: "└ 신입회원 간담회 소계 (5건)", in: 900000, out: null },
            { date: "07-01", desc: "중부라이온스클럽 이취임식", member: "최연식L", in: 300000, out: null, note: "참석인원 뒷풀이 식대" },
            { date: "07-01", desc: "차기집행부 업무 인수인계", member: "최연식L", in: 460000, out: null, note: "1차 식대" },
            { date: "07-01", desc: "차기집행부 업무 인수인계", member: "원용철L", in: 460000, out: null, note: "1차 식대" },
            { sub: true, label: "└ 차기집행부 업무 인수인계 소계 (2건)", in: 920000, out: null },
            { date: "07-05", desc: "산악회 찬조금", member: "이재환L", in: 1000000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "이재환L", in: 80000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "안종익L", in: 80000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "이상봉L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "이주형L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김철홍L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "최연식L", in: 200000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "배기업L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "임인득L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김태운L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김호식L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "엄재일L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김창룡L", in: 150000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "황순만L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "주성대L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "박정기L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김두한L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "정일만L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김성호L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "박종언L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "원용철L", in: 160000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "정범근L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "김관현L", in: 100000, out: null, note: "" },
            { date: "07-05", desc: "산악회 찬조금", member: "장태원L", in: 30000, out: null, note: "" },
            { sub: true, label: "└ 산악회 찬조금 소계 (24건)", in: 3400000, out: null },
            { date: "07-08", desc: "골프회 회비", member: "황순만L", in: 500000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "정범근L", in: 300000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "이재환L", in: 500000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "정일만L", in: 300000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "이주형L", in: 500000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "김성림L", in: 300000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "김관현L", in: 300000, out: null, note: "" },
            { date: "07-08", desc: "골프회 회비", member: "장태원L", in: 300000, out: null, note: "" },
            { sub: true, label: "└ 골프회 회비 소계 (8건)", in: 3000000, out: null },
            { date: "07-08", desc: "골프회 찬조금", member: "황순만L", in: 590000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "김창룡L", in: 200000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "최연식L", in: 100000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "임인득L", in: 100000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "박종언L", in: 200000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "김호식L", in: 100000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "원용철L", in: 100000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "이재환L", in: 100000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "이주형L", in: 200000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "허성욱L", in: 200000, out: null, note: "" },
            { date: "07-08", desc: "골프회 찬조금", member: "박정기L", in: 1000000, out: null, note: "" },
            { sub: true, label: "└ 골프회 찬조금 소계 (11건)", in: 2890000, out: null },
            { date: "07-11", desc: "보은회 참석인원 커피값", member: "박정기L", in: 50000, out: null, note: "" },
            { date: "07-11", desc: "보은회 참석 해단식 식대", member: "최연식L", in: 150000, out: null, note: "" },
            { date: "07-14", desc: "이사회 식대", member: "최연식L", in: 200000, out: null, note: "" },
            { date: "07-14", desc: "이사회 2차 식대", member: "김창룡L", in: 100000, out: null, note: "" },
            { date: "07-20", desc: "이사회 2차 식대", member: "김창룡L", in: 100000, out: null, note: "" },
            { sub: true, label: "└ 이사회 2차 식대 소계 (2건)", in: 200000, out: null },
            { date: "07-20", desc: "부인회 참석 4역 식대", member: "최연식L", in: 50000, out: null, note: "" },
            { date: "07-20", desc: "부인회 참석 4역 커피값", member: "이재환L", in: 20000, out: null, note: "" },
            { date: "07-20", desc: "부인회 점심 식대", member: "최연식L", in: 650000, out: null, note: "" },
            { date: "07-31", desc: "4역 모임 저녁식대", member: "최연식L", in: 300000, out: null, note: "" },
            { date: "07-31", desc: "4역 모임 2차 저녁식대", member: "이재환L", in: 150000, out: null, note: "" },
          ],
        },
        {
          title: "[지출] 회의비",
          subIn: null, subOut: 2987300,
          rows: [
            { date: "07-10", desc: "보은회", member: "", in: null, out: 120000, note: "참석자 간식비" },
            { date: "07-10", desc: "보은회", member: "", in: null, out: 333500, note: "참석자 간식비" },
            { date: "07-12", desc: "보은회", member: "", in: null, out: 300000, note: "이취임식 발전기금" },
            { date: "07-12", desc: "보은회", member: "", in: null, out: 1200000, note: "버스렌탈비" },
            { sub: true, label: "└ 보은회 소계 (4건)", in: null, out: 1953500 },
            { date: "07-25", desc: "월례회 생수 구입비", member: "", in: null, out: 5800, note: "" },
            { date: "07-25", desc: "월례회 1차 식대", member: "", in: null, out: 584000, note: "" },
            { date: "07-25", desc: "월례회 2차 식대", member: "", in: null, out: 190000, note: "" },
            { date: "07-25", desc: "급식봉사 커피값", member: "", in: null, out: 54000, note: "" },
            { date: "07-25", desc: "부부합동월례회 래프팅 예약금", member: "", in: null, out: 100000, note: "" },
            { date: "07-25", desc: "부부합동월례회 버스렌탈 예약금", member: "", in: null, out: 100000, note: "" },
          ],
        },
        {
          title: "[지출] 봉사사업비",
          subIn: null, subOut: 1100000,
          rows: [
            { date: "07-10", desc: "산악회 활동비 지원", member: "", in: null, out: 300000, note: "" },
            { date: "07-10", desc: "골프회 활동비 지원", member: "", in: null, out: 300000, note: "" },
            { date: "07-20", desc: "부인회 활동비 지원", member: "", in: null, out: 500000, note: "" },
          ],
        },
        {
          title: "[지출] 우편료,통신비",
          subIn: null, subOut: 54120,
          rows: [
            { date: "07-15", desc: "카드수수료", member: "이재원L", in: null, out: 4120, note: "" },
            { date: "07-21", desc: "문자발송비 충전금", member: "", in: null, out: 50000, note: "" },
          ],
        },
        {
          title: "[지출] 제의무금",
          subIn: null, subOut: 4704219,
          rows: [
            { date: "07-20", desc: "7월 관리비", member: "", in: null, out: 367500, note: "현회원41*7500+클럽분담금 60,000" },
            { date: "07-20", desc: "상반기 제의무금", member: "", in: null, out: 2754000, note: "" },
            { date: "07-20", desc: "신입회원 제의무금", member: "", in: null, out: 25000, note: "" },
            { date: "07-20", desc: "국제회비", member: "", in: null, out: 1557719, note: "$1,014.14*1,536원" },
          ],
        },
        {
          title: "[지출] 기타지출",
          subIn: null, subOut: 115000,
          rows: [
            { date: "07-16", desc: "김태운L 병문안 음료비", member: "", in: null, out: 15000, note: "" },
            { date: "07-25", desc: "간사휴가비", member: "", in: null, out: 100000, note: "" },
          ],
        },
        {
          title: "[지출] 기념품 및 도서인쇄비",
          subIn: null, subOut: 230000,
          rows: [
            { date: "07-16", desc: "회장명판제작비", member: "", in: null, out: 160000, note: "" },
            { date: "07-23", desc: "부인회, 급식봉사 현수막", member: "", in: null, out: 70000, note: "" },
          ],
        },
        {
          title: "[지출] 경조사비",
          subIn: null, subOut: 100000,
          rows: [
            { date: "07-10", desc: "보은회", member: "", in: null, out: 100000, note: "이취임식 화환" },
          ],
        },
      ],
      attendance: [
        { group: "골프회", unit: 250000, amount: 5500000, count: 22, note: "박정기, 이주형 x2, 최연식, 김호식, 정일만, 정범근, 장태원, 김명주, 이재환 x2, 김관현, 이진희, 임인득, 박종언, 황순만 x2, 김성호, 김창룡, 김두한, 허성욱, 이재원" },
        { group: "산악회", unit: 200000, amount: 7000000, count: 35, note: "최연식 x2, 배기업 x2, 임인득 x2, 엄재일 x2, 김태운 x2, 김창룡, 김호식, 김철홍 x2, 황순만, 주성대, 원용철, 이재환 x2, 박정기, 이주형 x2, 정일만, 안종익 x2, 김관현, 정범근, 김두한 x2, 허성욱, 김성호 x2, 박종언 x2, 장태원" },
        { group: "급식봉사", unit: 100000, amount: 1300000, count: 13, note: "이재환 x2, 안종익, 김관현, 김철홍, 이주형, 최연식 x2, 김춘택, 김호식, 장태원, 조현명, 김두한" },
        { group: "합  계", unit: null, amount: 13800000, count: 70, note: "" },
      ],
    },
    ],
  },

  /* -----------------------------------------------------------------------
     5. 회원명부
     - name 이름, role 직책, phone 연락처
     - 직책이 여러 줄이면 \n 으로 구분합니다. (예: "1부회장\n산악회장")
     ----------------------------------------------------------------------- */

  // (참고) 사이트 접속 비밀번호는 아래 0번 항목에서 설정합니다.

  members: [
    { name: "최연식", role: "제38대 현회장", phone: "010-8558-4223" },
    { name: "원용철", role: "직전회장", phone: "010-5704-3693" },
    { name: "이재환", role: "1부회장\n산악회장", phone: "010-3421-2131", paid: true },
    { name: "박정기", role: "2부회장\n골프회장", phone: "010-6866-4474" },
    { name: "이주형", role: "3부회장", phone: "010-8602-4764" },
    { name: "장태원", role: "총무", phone: "010-7676-7633" },
    { name: "이재원", role: "재무", phone: "010-6659-1560", paid: true },
    { name: "이상봉", role: "LT", phone: "010-2252-6636" },
    { name: "박정현", role: "TT", phone: "010-8337-1613" },
    { name: "이병관", role: "초대 및 2대 회장\n전총재고문", phone: "010-3573-3371" },
    { name: "임인득", role: "제12대 회장", phone: "010-3850-1188" },
    { name: "배기업", role: "전지구총재\n제15대 회장", phone: "010-3566-3455" },
    { name: "한동균", role: "제21대 회장", phone: "010-4181-2838" },
    { name: "김철성", role: "제24대 회장", phone: "010-8607-6802" },
    { name: "장기환", role: "제25대 회장", phone: "010-6394-9677" },
    { name: "김태운", role: "제28대 회장", phone: "010-3844-9842" },
    { name: "박종언", role: "제30대 회장\n자문위원", phone: "010-9730-1124" },
    { name: "김호식", role: "제31대 회장\n봉사특별위원회위원", phone: "010-3862-0489" },
    { name: "엄재일", role: "제32대 회장", phone: "010-9609-6660", paid: true },
    { name: "김철홍", role: "제33대 회장", phone: "010-3560-9202" },
    { name: "김창룡", role: "제34대 회장", phone: "010-9299-8439" },
    { name: "황순만", role: "제35대 회장\n기획위원장\n골프회 총무", phone: "010-7597-1111" },
    { name: "주성대", role: "제36대회장", phone: "010-3438-1211" },
    { name: "김두한", role: "회원", phone: "010-9396-6931" },
    { name: "김성호", role: "회원", phone: "010-9889-4278" },
    { name: "김명주", role: "회원", phone: "010-2562-8842" },
    { name: "허용", role: "회원", phone: "010-2391-7899" },
    { name: "김춘택", role: "회원", phone: "010-3591-4747" },
    { name: "이양진", role: "회원", phone: "010-4858-1087" },
    { name: "허성욱", role: "회원", phone: "010-4432-9152" },
    { name: "안종익", role: "회원", phone: "010-3588-6996" },
    { name: "정일만", role: "회원", phone: "010-4846-3000" },
    { name: "김성동", role: "회원", phone: "010-3645-9104" },
    { name: "조 현", role: "회원", phone: "010-3408-5570" },
    { name: "이진희", role: "회원", phone: "010-2695-1387" },
    { name: "김성림", role: "전총무", phone: "010-8320-0300", paid: true },
    { name: "정범근", role: "회원", phone: "010-4337-5507", paid: true },
    { name: "김관현", role: "회원\n산악회 총무", phone: "010-4859-3083", paid: true },
    { name: "이동기", role: "회원", phone: "010-7515-7023" },
    { name: "김도겸", role: "회원", phone: "010-4611-2321" },
    { name: "조현명", role: "회원", phone: "010-3974-9887" },
    { name: "정윤제", role: "회원", phone: "010-6769-8114", paid: true },
  ],

  /* -----------------------------------------------------------------------
     6. 회비 납부안내
     - items: 회비 항목별 내역(항목명 / 산출 / 금액)
     - account: 입금계좌 (강조 박스로 표시)
     ----------------------------------------------------------------------- */
  fee: {
    greeting:
      "안녕하십니까, 존경하는 라이온스 회원 여러분\n태화 L.C 회비 납부를 안내드립니다.",
    items: [
      { name: "월회비", detail: "60,000원 × 12회", amount: "720,000원" },
      { name: "의무봉사금", detail: "50,000원 × 2회", amount: "100,000원" },
      { name: "부부합동연수회", detail: "", amount: "50,000원" },
      { name: "주년행사", detail: "", amount: "50,000원" },
      { name: "이·취임식", detail: "", amount: "50,000원" },
      { name: "지역합동월례회", detail: "", amount: "30,000원" },
      { name: "지구연차대회", detail: "", amount: "30,000원" },
    ],
    total: "1,030,000원",
    totalNote: "전 회원 동일 / 경조사 시 당사자 1만원 제외",
    closing: "내용 참고하셔서 회비 납부 부탁드립니다.",
    account: {
      bank: "수협",
      number: "2010-0951-6660",
      holder: "태화라이온스클럽",
    },
    signature: "2026-2027 재무 이재원 올림",
  },

  /* -----------------------------------------------------------------------
     7. 클럽정관
     - note: 상단 안내(예: "2026년 3월 개정"). 없으면 "".
     - sections: 장(章)별로 { title(장 제목), body(조문 본문) }
       body 는 백틱(`)으로 감싸 여러 줄을 그대로 씁니다.
     - (정관 원문 .docx 파일을 주시면 이 아래에 자동으로 채워 넣습니다)
     ----------------------------------------------------------------------- */
  bylaws: {
    note: "",
    sections: [
      {
        title: "태화라이온스클럽 헌장",
        body: `제1장 명칭.슬로우건.모토

제1조 본클럽은 태화(太和)라이온스클럽(TAWHWALIONS CLUB)이라 부르며 국제라이온스 협회 헌장을 받아 그 관리하에 둔다.
제2조 본 클럽의 슬로건은 「자유, 지성, 우리 국가의 안전」(Liberty,Intelegence, Our Nation's Safety)으로 한다.
제3조 본 클럽의 모토는 「우리는 봉사한다」(We Serve)로 한다.

제 2장 목적

제4조 본 클럽의 목적은 다음과 같다.
1. 세계 인류 상호간의 이해심을 가꾸고 증진시키고
2. 건전한 국가 정신과 시민정신을 고취시키며
3. 지역 사회의 시민, 문화, 사회 및 도덕적 분야의 복지 향상을 위하여 적극적으로 노력하고
4. 우의와 상호 이해의 정신으로 클럽간의 유대를 돈독히 하며
5. 정당이나 종파를 초월하여 시민이 관심을 가지는 모든 문제를 자유롭게 토론할 수 있는 장을 마련하고
6. 지역사회의 숨은 봉사자를 격려하고 상업, 산업, 전문직, 공직 및 개인사업 활동에 있어서 능률을 제고하고 도덕적 수준을 향상시키는데 있다

제3장 회원

제5조 선량한 덕성과 지역사회에 있어서 덕망이 높고 울산지역에 주소를 둔 남자는 본장의 규정에 따라 정식으로 승인된 라이온스클럽의 회원이 될 자격이 있다.
제6조 본 클럽 회원은 정회원.자유회원. 명예회원.우대회원 및 평생회원으로 구분한다.
제7조 정회원은 라이온스클럽의 회원으로서 모든 권리와 의무를 지니는 회원이다. 이 권리는 클럽.지구 및 국제협회의 임원이 되는 권리와 모든 사항에 대한 투표권을 포함한다. 또 의무는 정례회 출석, 조속한 회비 납부, 클럽사업 참가 및 클럽이 지역사회에 좋은 인상을 주는 봉사활동을 포함한다.
제8조 자유회원은 클럽소재지에서 전출한 클럽회원 또는 건강 기타 정당한 사유로 규칙대로 클럽의 정례회에 출석하기 어려운 회원으로서 클럽에 그대로 남아 있기를 희망하고 이를 클럽이사회가 적당하다고 인정한 자로 한다. 다만 자유회원의 자격은 6개월마다 클럽이사회에서 재검토하는 것이다.
자유회원은 모든 임원에 취임하거나 지구 또는 국제대회 기타 화합에 있어서 투표권을 가지지 못한다. 자유회원은 클럽이 부과하는 회비를 납부하여야 한다. 또한 6개월이상 지방 혹은 해외에서 거주하는 회원도 자유회원으로 간주한다.
제9조 명예회원은 클럽회원 이외의 자로서 그 지역사회 또는 라이온스클럽을 위하여 현저한 공헌을 하고 명예회원의 칭호를 부여 할 것을 희망한자로 한다. 명예회원의 입회금 및 국제회비는 본 클럽에서 납부한다. 명예회원은 회합에 출석할 수 있으나 정회원이 가지는 권리는 가지지 못한다.
제10조 우대회원은 15년이상 클럽 회원인 자로 질병, 노령, 기타 클럽이사회가 인정하는 정당한 사유로 정회원을 포기한자로 한다. 우대회원은 클럽이 부과하는 회비를 납부하여야 한다. 우대회원은 투표권 및 회원으로서의 기타 모든 권리를 가지나 클럽, 지구 및 국제협회의 임원에 취임할 수 없다.
제11조 평생회원은 20년이상 계속 정회원으로서 소속클럽과 지역사회, 국제협회에 현저한 공로가 있거나 15년이상 계속하여 정회원으로서 연령이 70세에 달하였거나 국제 이사 또는 국제임원을 지낸자로 한다.
평생회원은 다음 절차를 거쳐 그 자격을 얻는다.
① 본 클럽의 추천
② 국제회비 650달러의 일시납부(본인부담)
③ 국제이사회의 승인
본 클럽은 평생회원에 대하여 적당한 액수의 회비를 부과할 수 있다.
(각종 대회비는 정회원과 동일하게 납부한다,)
평생회원은 정회원으로서 의무를 대행하고 정회원이 가지는 모든 권리를 가진다. 평생회원이 정회원을 희망하거나 다른 클럽의 정회원으로서 초청받을 경우 평생회원으로 있었던 기간의 그의 의무금을 청구할 수 없으며 새 클럽에서도 할 수 없다.
제12조 본 클럽의 회원이 되고자 하는 자는 본 클럽 정회원의 추천으로 소정양식의 입회원서를 제출하고 회원위원회의 심사를 거쳐 이사회의 승인을 얻은 다음 소정의 입회금을 납부함으로써 회원의 자격을 얻으며 국제 본부에 회원으로서 보고한다.
제13조 본 클럽 퇴회후 6개월이상 경과한자로써 재입회하거나 타클럽에서 본클럽으로 전입하고자 하는 자에 대하여도 전조의 규정을 준용한다.
제 14조 평생회원 및 명예 회원을 제외한 어떤 회원도 동시에 2개 이상의 라이온스클럽의 회원이 될 수 없다. 명예 회원을 제외한 어떤 회원도 동시에 라이온스클럽과 같은 성격을 가진 봉사단체의 회원이 될 수 없다.

제4장 입회금 및 회비

제15조 신입회원은 본 클럽 이사회에서 정한 입회금을 정한 날짜 안에 납부하여야 입회가 인정된다.
총무는 입회금중 국제본부가 정한 소정의 금액을 첨부하여 이를 국제본부에 보고한다.
제16조 정회원 및 우대회원은 본 클럽 이사회에서 정한 월회비를 정한 날짜 안에 납부하여야 한다.
본 클럽은 국제협회 헌장에 의거 정해진 금액을 국제회비로 납부한다.
제 17조 자유 회원은 회비는 부칙으로 정한다.
제18조 명예 회원은 회비를 납부하지 아니하며 국제본부에 대한 의무금은 본 클럽에서 납부한다.
제19조 평생회원의 회비는 부칙으로 정한다.
제20조 전입 및 재입회회원에 대하여 본 클럽 이사회는 전 클럽에서 전입 또는 퇴회후 6개월이내에 재입회를 승인한 회원의 입회금중에서 클럽입회금 전액 또는 일부를 면제할 수 있다.

제 5장 퇴회

제21조 본 클럽 회원이 탈회할 경우에는 총무에게 서면으로 자퇴서를 제출하여야 하며 이사회가 수리함으로써 발효된다. 다만 자퇴시까지 미납된 모든 미납금은 이를 완납하여야 한다. 미납시 탈퇴 수리를 보류할 수 있다.

제6장 회원자격의 상실

제22조 총무는 월회비 3회 이상 미납된 회원 및 기타 부담금의 납부를 거부하거나 태만히 하는 회원을 이사회에 보고하고 이사회는 제명 여부를 결정한다.
제23조 본 클럽의 헌장과 목적에 위반되는 행위를 자행하는 회원은 이사회의 결의로써 이를 제명한다.
제24조 회원 위원장 또는 총무에게 정당한 이유의 보고 없이 계속 4회 이상 정례회에 출석치 아니하는 회원은 총무가 이를 이사회에 보고하여야 하며 이사회는 그 제명여부를 결정하여야 한다. 다만 명예회원.평생회원.우대회원 및 자유회원에게는 이를 적용치 아니한다.
제25조 회원을 제명할 경우에는 이사회에서 출석이사 2/3이상의 찬성투표를 얻어야 한다.

제7장 임원 및 이사의 임기

제26조 본 클럽은 회장. 직전 회장. 제1부 회장/제2부 회장. 제3부 회장·총무·재무.라이온테이머.테일 트위스트, 감사의 임기는 1년으로 하고 이사의 임기는 2년으로 한다.
제27조 이사회는 임원과 4명이상의 이사로써 구성한다.
이사회는 임원 및 이사의 과반수로 출석으로 성립한다. 이사회는 본 헌장에 특별한 규정이 있는 경우를 제외하고는 출석이사 과반수의 찬성투표로 결의한다.

제8장 선거

제28조 본클럽은 임원 및 이사의 선출 방법은 다음과 같다.
1. 선거관리위원회는 매년2월에 개최하고 회장,제1,2,3부회장, 감사를 선출하며 자세한 가항은 임원 선임에 관한 규정에 따른다.
2. 단 회장,제1,2,3부회장 선출은 국제라이온스헌장 제4조 5항(a)(1)에 (b)에 준하여 선출한다.
제29조 본클럽의 임원과 이사는 매년 2월 선거회(정례회)에서 승인되고 그해 7월1일에 취임한다.
이사의 반수는 매년 선출되며, 선거직후 7월 1일에 취임한다. 임기는 7월1일부터 2년간 혹은 후임자가 선출되어 취임할 때까지로 한다.
직전총무 재무는 당연직 2년이사로 임명된다.

제9장 임원등의 자격과 권리

제30조 임원,이사,위원장 및 위원은 본클럽 활동에 대하여 성심껏 참여하는 정회원중에서 선출 또는 임명한다.
제31조 선거는 임원선임에 관한 규정에 의한다.
제32조 임원과 이사는 무보수다

제10장 임원의 임무

제33조 회장은 본클럽 운영의 최고책임자로서 모든 집회와 이사회를 소집하고 의장이 되며 국제협회의 클럽조직표에 대하여 각위원장 및 위원을 임명하고 각위원회의 당연직 위원이 된다.
회장은 위원회의 임무에 유의하며 그 목적 달성을 돕기 위하여 각 위원회와 협력하고 정례보고를 받는다. 회장은 선거가 국제헌장과 본클럽 헌장에 의해 시행되도록 본클럽 소속지대에서 지구 총재 자문위원회의 정회원 자격으로서 동위원회에 협력하여야 한다.
제34조 각 부회장은 회장 유고시에 석차에 따라 그 직책을 대행하고 회장과 동등한 권한을 갖는다.
제35조 회장 궐석시는 차석 부회장이 회장으로 되고 이로 인하여 공석이 된 부회장에는 다음 순위 부회장이 취임한다.
제3부회장을 포함하여 그 밖 임원에 궐석이 생긴 때에는 당해 임원의 재임기간을 맡은 후임자가 임원선임에 관한 규정에 의거 선출함.
3부회장 선출은 집행부(총무,재무)를 역임한자를 우선으로 하며 해당자가 없을 경우 본클럽 발전에 기여한자로 임원 선임에 관한 규정에 따라 선출한다.
제36조 총무는 회장과 이사회의 지도 감독을 받아 본클럽과 지구 및 국제 협회와의 연락사무를 담당한다.
그 직무는 다음과 같다.
① 국제본부의 소정양식을 이용, 국제이사회가 요구하는 월말보고서 및 기타 보고서를 본부에 제출한다.
② 정기회원 현황 및 봉사활동 보고서를 포함한 지구임원회가 요구하는 보고서를 지구임원회에 제출한다.
③ 클럽이 소속된 지대의 지구총재 자문위원회의 정규위원으로서 동 위원회에 협력한다.
④ 클럽회의 및 이사회의 회의록, 출석현황, 위원임명, 선거, 회원들의 주소 및 전화번호, 회원의 회비납입 기록을 포함한 제반 기록을 보관한다.
⑤ 4분기 혹은 반기마다 각 회원에게 회비 및 기타 납부금을 청구하고 이를 수행한 후 클럽재무에게 인계한다.
⑥ 이사회가 요구할 때는 그 직무수행에 대하여 보증금 혹은 담보를 제공한다.
제37조 재무는
① 총무 또는 기타 회원으로부터 모든 금전을 영수하고 이사회가 승인한 은행에 예금한다.
② 클럽납부금은 이사회가 승인을 득하여 지출한다. 모든 수표 및 영수증에는 재무의 서명 외에 이사회가 선정한 임원의 연서가 필요하다.
③ 클럽의 수입과 지출의 전반적인 기록을 보관한다.
④ 재정보고서를 작성하여 본 클럽 이사회에 매월 보고하고 국제 본부에 반기별로 제출한다.
⑤ 이사회가 요구할 때 그 직무수행에 대하여 보증금 혹은 담보를 제공한다.
제38조 부회장은 회장 또는 상위의 부회장이 부재중이거나 궐석일 때에 순위에 따라 그 직무를 대행 또는 승계한다. 그리고 부회장들은 회장을 보좌하며 아래와 같이 각 위원회를 분담 감독한다.
제1부회장 : 회원확장분과, 산악회장
제2부회장 : 클럽활성화. 재난구호분과
제3부회장 : 홍보. 경조친목분과
제39조 직전회장은 당연직 감사이며 이사회의 일원으로서 다른 이사와 동일한 권리를 가진다. 직전회장과 전 회장들은 회원 및 내빈을 영접하고 지역사회에 전입해 온 실업가와 전문가를 환영함에 있어 본 클럽을 대표한다.
제40조 라이온 테이머는 본클럽의 재산과 비품관리에 대한 책임을 지며 집회시에 국기, 클럽기, 타종, 라이온 노래책, 명찰등을 배치 정리하며 훌륭한 집회를 운영하는데 역할을 한다.
제41조 테일트위스트는 집회시 조화, 친목 활기 열의를 가지게 한다. 회원에게서 벌금을 징수할 수 있으며 누구도 이 벌금 결정에 반대하지 못한다.
참석자의 만장일치의 결의 이외에는 벌금을 징수당하지 아니한다. 다만 벌금은 이사회에서 결정한 금액을 받되 동일회원에게 2회이상 이를 받지 못한다.
제42조 이사회의 임무는 다음과 같다.
1. 이사회는 본클럽의 집행부로서 본클럽에서 승인된 방침을 임원을 통하여 실행할 의무를 지며 클럽의 새로운 사업계획 및 예산안을 정례회에 제출하기 전에 이를 검토하고 그 구체안을 작성한다.
2. 본 클럽의 일체 비용 지출을 승인하며 클럽 목적에 불필요한 지출을 억제한다.
3 본클럽 임원의 활동 취소 또는 변경할 수 있다.
4. 신입회원의 입회승인 여부를 결정한다.
5 매년 선거회의 일시 장소를 결정하고 총무로 하여금 그 회의를 소집케 한다.
6 매월 정례이사회를 개최한다. 그 일시와 장소는 월례회와 같이 할 수도 있다.
7 회장 또는 회원 1/4이상의 요구가 있을 때는 임시이사회를 소집하여야 한다.
8 각 위원회 보고서 및 토의사항을 접수하고 본클럽 운영과 사업면에 좋은 영향을 준다고 인정되면 월례회에 제출한다.
9. 각종 운영규정의 제정 및 개정을 심의하여 월례회에 제출한다.
10. 지구대회 및 국제대회에 파견할 대의원을 지명한다.
제43조 전회장들은 이사회의 결정에 따라 접대요원, 병상에 있는 위원과 연락하는 방문위원 및 전형위원으로 봉사한다.
제44조 감사는 2명으로 구성되며 직전회장은 당연직이며 1명은 임원 선임에 따른 규정에 의해 선출한다. 감사는 이사회의, 본회의, 회계등을 감사하며 적어도 년1회이상 감사를 실시한다
감사는 총회에서 감사보고를 한다.

제11장 집회

제45조 본클럽 전회원이 참석하는 집회의 명칭은 월례회. 임시회 및 선거회로 구분하고 각 집회의 성원은 재적회원의 과반수 출석으로 한다.
제46조 이사회는 매월 14일에 월례회는 매월 24일에 정례회를 개최하며 필요시에는 이사회의 결의로 이를 변경할 수 있다. 정례회에서 여흥, 지역사회와 사업상의 제반문제를 토론함으로써 회원간의 친목을 증진시켜야 한다.
제47조 임시회는 이사회가 필요하다고 인정할 때 또는 회원의 1/3이상의 요구가 있을 때 이를 소집한다.
제48조 임시회는 회장이 회의내용을 5일전에 회원에게 통보하여야 한다.
제49조 선거회는 매년2월에 개최한다.
제50조 매년 헌장의밤 기념회를 개최한다. 그 행사는 월례회와 겹쳐서 할 수 있으며 라이오니즘의 목적과 윤리 강령에 대한 인식증진에 노력한다
제51조 모든 집회는 개최5일전에 전회원에게 주지되어야 한다.

제12장 휘장

제52조 본 클럽 공식휘장은 라이온스국제클럽 국제협회의 그것과 동일한 것으로 한다.
단 이와는 따로 본클럽 고유의 휘장을 만들어 패용할 수 있다.

제 13장 국제대회 및 지구대회 대표

제53조 매년 개회되는 국제 대회에 대의원을 파견한다.
이에 필요한 경비는 이사회에서 결정한 금액을 본클럽에서 지출하고 부족액은 대의원 자부담으로 한다.
제54조 매년 개최되는 지구대회에 대의원을 파견한다. 이에 필요한 경비는 본 클럽에서 부담한다.

제14장 헌장 개정

제55조 본클럽의 헌장은 이사회의 제안으로 정례회에서 재적 3분의2이상의 찬성투표로서 개정할 수 있다.

제15장 부칙

제56조 본클럽의 이사회와 모든 집회의 의사진행 기타 모든 클럽운영에 관하여 본 헌장에 미비된 사항은 표준라이온스클럽 헌장에 준한다.
제57조 본 헌장은 1989년 10월 24일 본클럽 조직총회에서 표준라이온스클럽 헌장을 준용 의결하고 본 헌장을 제정하여 즉일로 효력을 발생한다.
제58조 2003년 10월 8일
본클럽은 세계대회 및 동남아대회 참가인원에 한 등록비 전액을 본 클럽에서 지원하기로 함.
제59조 제19조 1차개정(2008.7.1.)
제38조 1차 개정(2015.7.1.)
제60조 본 부칙은 월례회에서 정족수의 출석과 과반의 찬성으로 개정,수정 및 폐기할 수 있다.
제61조 태화라이온스 클럽 회비는 다음과 같다.
1) 입회비는 50만원으로 한다.
2) 월회비는 월 6만원으로 한다.
3) 의무봉사금으로 반기별 5만원으로 한다.
4) 대회비로 연차대회비 3만원, 합동월례회비 3만원 부부연수회 5만원 주년행사 5만원 이취임식 5만원으로 한다.
5) 평생회원의 회비는 반기별 20만원으로 한다.
6) 자유회원의 회비는 반기별 20만원으로 한다.
제62조 장기 재직 기념상은 다음과 같다.
1) 모나크 셰브론상
10년 재직 : 10년 셰브론 탭 , 10만원상당 소정의 상품
15년 재직 : 15년 셰브론 탭 , 15만원상당 소정의 상품
20년 재직 : 20년 셰브론 탭 , 20만원상당 소정의 상품
5년 간격으로 셰브론 탭 증정 및 20만원 상당의 상품
2) 회장 역임후 5년차 역대 회장 : 20만원상당 소정의 상품
제63조 본 헌장은 2021년 10월 22일 임시총회에서 개정하여 7월1일부터 소급 적용한다.`,
      },
      {
        title: "임원 선임에 관한 규정",
        body: `제 1장 총칙
제 1조 (목적)
본 규정은 태화라이온스클럽의 선거직 임원선출을 규정함을 목적으로 한다.

제 2조 (선거직 임원)
본 회의 선거직 임원이라 함은 회장, 부회장, 감사를 말한다. 단, 회장 1, 2, 3부 회장이 결원시 모두 선거로 선출하며 1, 2, 3부 회장 중 1명이라도 있을시 자동 승계하며, 나머지 결원 부분은 선거로 선출한다.

제 3조 (선거직 관리위원회)
임원의 선거에 관한 사무를 관리하기 위하여 선거관리위원회를 둔다.

제 2장 선거관리위원회
제 4조 (구성)
선거관리위원회의 위원회는 선거관리 위원장을 포함하여 4명으로 한다.
선거관리위원회 위원장은 직전 회장이 되며, 위원은 당해연도 회장, 총무, 재무로 구성한다.
선거관리위원회 및 위원이 유고시 전 회장단으로 구성되며, 전임회장이 위원장이 된다.
제 5조 (직무)
선거관리위원장은 선거관리 위원회를 대표하며 선거관리위원회의 회무를 통괄하고 선거에 관한 제반업무를 보고하고 의견을 진술하여야 한다.
선거관리위원은 선거관리위원장을 보필하고 공정히 선거관리를 하여야 한다.
제 6조 (의무)
입후보자의 자격심사
선거인 명부의 작성 및 확인
총투표권 수의 확정
입후보자의 등록 및 선거일 공고
투표용지 양식결정 및 투개표 방법 결정
선거운동 방법 결정
당선자 확정보고
제 7조 (선거권 및 선거권의 제약)
선거권은 본회의 회원으로 한다.
선거일 기준으로 제반의무금을 납부치 아니한 회원은 선거권을 가질 수 없다.
제 8조 (피선거권의 제약)
당해연도 제반의무금을 선거일 기준으로 납부치 않았을 때
선거와 관련하여 불리한 사례가 인지되었을 때는 선거관리위원회가 그 자격을 박탈할 수 있다.
제 9조 (선거임원의 자격)
당 클럽의 이사회 임원으로써(분과위원장 포함) 직무를 수행한 자로써 1년(취임을 기준)이 경과한 자로 한다.
제 10조 (입후보 등록)
선거직 임원에 입후보하는 회원은 다음 각호의 서류를 첨부하여 선거관리위원회에 등록하여야 한다.
가. 입후보 등록 신청서 1통
나. 입후보자 등록금 영수증 사본

2. 입후보자 등록금은 다음과 같다.
(현금 및 자기앞 수표)
가. 회장: 300만원
나. 1부회장: 150만원
다. 2부회장: 100만원
라. 3부회장: 50만원
3부회장에서 2부회장, 1부회장으로 궐석으로 인한 차석부회장이 승계시 등록금의 차액을 납부한다.

제 11조 (등록금 귀속처분 및 운영)
입후보자의 등록금은 본회의 재정에 귀속시키며 후보자가 사퇴한 때 등 어떠한 경우에도 일단 접수된 등록금은 반환하지 않는다.
제 12조 (입후보자의 공석시의 추천)
입후보 등록 마감일까지 입후보자가 없거나 입후보 등록 마감 후 후보자의 자격 박탈 등의 사유로 입후보가 공석이 되었을 때에는 본회의 이사회 또는 월례회시 후보자를 추천할 수 있다.

제 3장 투표와 개표
제 13조 (투표와 개표)
투표는 비밀 무기명 투표로 하며 재적회원 과반수 이상의 출석에 과반수 이상 득표자로 한다.
개표에 관한 사항에 특별한 규정이 없는 한 선거관리 위원회가 정하는 바에 따른다.
제 14조 (재투표)
투표 결과 최다 득표자가 출석회원 과반수의 득표를 얻지 못하였을 경우에는 차점자와 재투표를 실시한다.
차점자가 2인 이상일 경우에는 차점자 간에 결선투표를 실시하여 최다득표자를 차점자로 한다.
재투표에서는 당선자가 없을 경우에 1, 2위 득표자 간에 결선 투표를 실시하여 최다 득점자를 당선자로 한다.
제 15조 (참관인)
투표 및 개표에 있어서 각 후보자는 1명의 참관인을 둘 수 있다.
참관인은 본회 회원으로써 입후보 등록시 선거관리위원회에 보고한 자여야 한다.
제 16조 (당선자의 결정)
출석회원 과반수를 득표함으로써 당선자가 된다.
단일 후보인 경우에는 전항과 같다.
제 17조 (당선자의 발표)
선거관리위원장은 당선자가 확정되면 지체없이 해당 월례회시 확정 발표하여야 한다.
제 18조 (개정)
본 규정의 개정을 이사회에서 이사회 구성원의 3분의 2 이상의 찬성으로 한다.

부 칙
본 규정은 제정한 날로부터 시행한다.
(1995. 1. . )
2. 10조 2항 1차 개정 (2003. 7. 1.)
3. 10조 2항 2차 개정 (2008. 7. 1.)
4. 2장 4조 2항 1차 개정 (2015. 7. 1.)
5. 제2조 제10조 2항 개정(2021.10.22)`,
      },
      {
        title: "회원 경조에 관한 규정",
        body: `제 1조 (목적)
회원 상호간 상부상조 정신을 배양하고 유대를 돈독히 하며, 서로 이해와 협조로서 단합하는 화목한 클럽 발전에 그 목적을 둔다.

제 2조 (연락)
경 · 조사가 발생하였을시 클럽에서는 지체없이 서신 또는 전화로 전 회원에게 연락한다.

제 3조 (재정)
경 · 조사의 기금은 특별회계 및 일반회계로 한다.

제 4조 (범위)
길사는 회원이 개업 및 자녀의 결혼식, 흉사는 초상에 한한다.
경사: 2회에 한한다.
가) 자녀의 결혼: 회원당 10,000원의 축의금을 클럽에 납부하고 회장이 일괄하여 당가에 전한다.
나) 회원의 개업: 화환 1조를 전달한다.
2. 조사
가) 회원 및 부인회원의 별세
① 회원의 별세시 장례식은 상가와 협의하여 태화라이온스 클럽 장으로 할 수 있다.
② 회원의 별세시 회원당 현금 5만원 상당액의 조의금을 클럽에 납부하고 회장이 이를 일괄하여 상가에 전하며 전 회원은 장지까지 수행 조문한다.
③ 부인회원의 별세시 회원당 현금 25000원 상당액의 조의금을 클럽에 납부하고 회장이 이를 일괄하여 상가에 전하며 전 회원은 장지까지 수행 조문한다.
④ 총무는 즉시 355 – D지구에 통보하여야 하며, 연락과 동시에 추모비(사자상)를 인수하여 상주에게 전한다.
나) 존속, 비속의 사망: 2회에 한한다.
① 존속: 회원당 10,000원의 조의금을 납부하고 회장이 일괄하여 상가에 전한다.
② 비속: 회원당 10,000원의 조의금을 납부하고 회장이 이를 상가에 전한다. (단, 결혼한 자녀는 제외)
③ 조문은 전 회원의 단체 조문을 원칙으로 한다.
제5조 본 규정의 혜택은 정회원에 한한다.
제 6조 (기록)
경 · 조의 기록에 관한 모든 기록은 영구 보관한다.
제 7조 (클럽기 및 화환의 계기)
경사시 축의를 표하기 위하여 화환 1조와 클럽기를 식장에 게양할 수 있다.
흉사시 조화 1조를 헌화하고 클럽조기를 게양한다.
제 8조 (참석)
전 회원은 참석을 원칙으로 한다.
제 9조 (회원의 재해와 기타)
재해 및 기타
가) 천재지변을 당하여 재산상의 많은 피해를 입었을 때, 이사회는 의결을 거쳐 위로금을 전달할 수 있다.
나) 회원이 질병 또는 불의의 사고로 인하여 거동이 불가능하여, 회원으로서 참여할 수 없는 입장이라고 판단될 경우에는 전 회원은 10,000원을 의무적으로 클럽에 납부하고, 회장은 위로금을 전달한다.
제 10조 (부칙)
상기 조항 이외의 사항은 일반 관례에 준한다.
본 규정은 FY’ 96 ’ 97정관 개정위원회의 개정안 심의를 거쳐 이사회 의결 후 공고한 날 (1996년 7월 1일)로부터 시행한다.
본 클럽 회원중 자녀가 없을 경우에는 축의금을 1회 한하여 지급하며, 본인 의사에 따라 집행한다. (2003년 7월 14일)
제 4조 1차 개정(2015. 7. 1.)
제4조 2 나 ③ 추가(2021.10.22.)`,
      },
    ],
  },
};
