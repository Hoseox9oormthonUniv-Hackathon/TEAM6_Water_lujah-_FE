## [호서대 X 구름톤 단장상] 물은 답을 알고 있다 물렐루야!
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/978cc8d9-4223-4d35-97ba-6b834fa0989b" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/fede3939-5690-431a-aa13-1c991c6f9fa7" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/55f38b39-73ff-4e6c-ba1e-5b9d47b4937c" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/3dcf2b81-0ff1-41f2-8882-d56e563d700e" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/d6ea9f46-86e3-48f3-9153-f5423f951266" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/c299af9b-e6de-40f0-a7dd-4d935fa94cdf" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/6c3076ef-aa3f-473d-918c-ff97fdd15472" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/d067c1a4-9e96-4464-aaa3-d0c340fb0516" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/fd30c8e8-05ee-4f73-bd74-f43cb4cea9d0" />
<img width="4000" height="2250" alt="image" src="https://github.com/user-attachments/assets/436090bb-9173-4c6c-ae1e-4ba780955f7e" />


## 서비스 소개

수분 섭취량의 중요성이 점점 부각되는 가운데, 마시는 음료의 종류에 따라 사용자의 수분 섭취량을 기록하고 관리해주는 서비스입니다. 사용자는 음료를 기록하여 개인별 섭취량을 추적할 수 있고, 통계 및 루틴 기능을 통해 꾸준한 수분 섭취 습관을 만들 수 있도록 돕습니다.

주요 컨셉
- 음료 종류별(예: 물, 커피, 우유, 주스 등) 섭취량 기록
- 일별/주별 통계 제공으로 섭취 추이 확인
- 루틴(습관) 생성으로 규칙적인 수분 섭취 유도

## 사용한 기술 스택

- Frontend: React (create-react-app / react-scripts)
- Routing: react-router-dom
- HTTP: axios
- Styling: SCSS (node-sass), styled-components, Tailwind CSS (dev dependency)
- 기타: react-simple-wheel-picker, http-proxy-middleware, web-vitals

## 주요 기능

- 로그인/회원 관련 UI
- 메인 대시보드: 오늘의 섭취량 요약 및 빠른 기록
- 음료 기록: 마신 음료 종류와 양을 기록
- 루틴 생성: 정기적인 물 마시기 루틴을 만들어 관리
- 기록 조회 및 편집: 과거 기록 확인 및 수정
- 통계 화면: 일/주 단위의 섭취량 그래프 및 통계

## 설치 및 실행

1. 저장소 루트로 이동

```bash
cd /Users/hyeon-yongchan/Desktop/re/TEAM6_Water_lujah-_FE
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 시작

```bash
npm start
```

문제 해결 팁
- `npm install` 실행 중 권한(permissions) 오류가 발생하면 캐시 디렉터리(`~/.npm`)의 소유권을 현재 사용자로 변경하거나 캐시를 정리해 보세요:

```bash
sudo chown -R $(whoami) ~/.npm
npm cache clean --force
```

- Node 버전은 LTS(예: 16.x, 18.x) 사용을 권장합니다. `nvm`을 사용해 관리하면 편리합니다.

## 개발 관련 참고
- 코드 구조: `src/page/`에 주요 페이지가 구성되어 있고, `src/layout/`에서 공통 레이아웃을 관리합니다.
- API: `src/api/`에 데이터가 포함되어 있어 개발 중 데이터를 확인할 수 있습니다.

