# 쓰레기 처리 능력 테스트 
배포 사이트 : [쓰레기 처리 능력 테스트:smiley:](https://trash-filter-test-a7dzrz4rp-badhabits.vercel.app/)

## 실행 방법

### 개발 환경

- Windows 10
- git version 2.16.1.windows.4
- Node LTS
- Yarn 1.22
- Visual Studio Code 1.57
- Chrome 89.0

### 프로젝트 다운로드

```
> git clone 프로젝트-주소
> cd 프로젝트-폴더
> git checkout 브랜치-이름
> yarn

```

프로젝트를 다운로드 받고 해당 폴더로 이동한 후 적절한 브랜치로 이동하고 프로젝트에 필요한 외부 패키지를 설치합니다.

그리고 프로젝트 폴더에서 VSCode를 실행하면 오른쪽 아래에 '권장 확장 프로그램 설치' 알림이 뜹니다.

프로젝트에서 권장하는 확장 프로그램(ESLint, Prettier 등)을 모두 설치해줍니다.


### 개발 모드

```
> yarn dev

```

로컬 컴퓨터에서 개발 모드로 프로젝트를 실행하면, 수정한 파일을 저장했을 때 코드 변경 사항이 자동으로 브라우저에 반영됩니다.

### 프로덕션 모드

```
> yarn build
> yarn start

```

코드 변경 사항이 자동으로 반영되진 않지만 코드 최적화로 인해 실행 속도가 빠릅니다.

### 브라우저 실행

```
<http://localhost:3000>

```

브라우저에서 아래 주소로 접속하면 개발 중인 사이트를 볼 수 있습니다.
## 프로젝트 구조

### .next

`yarn build` 시 생성되는 폴더로서 최적화된 빌드 결과물이 들어 있습니다. 이 폴더에는 Node.js 기반 웹 서버 로직과 HTML 렌더링 로직, 정적 파일 등이 포함됩니다. 이 폴더는 직접 건들지 않아도 됩니다.

### .vscode

권장 확장 프로그램, 편집기 설정, 코드 스니펫 등 VSCode 관련 설정 파일이 들어 있습니다.

### node_modules

프로젝트에 필요한 외부 패키지가 모여 있습니다. 이 폴더는 직접 건들지 않아도 됩니다.

### public

웹 서버에 정적으로 올릴 파일을 지정합니다.

### src

프로젝트에 필요한 소스 코드가 들어 있습니다.

### components

React 컴포넌트가 모여 있습니다. (.jsx)

### hooks

공통으로 쓰이는 React Custom Hook 이 모여 있습니다. (.js)

### pages

Next.js 의 동적 라우팅을 정의하는 페이지 컴포넌트가 모여 있습니다. (.jsx)

- api : Next.js 웹 서버에 REST API를 정의할 수 있습니다.


### utils

프로젝트 전체에 공통으로 쓰이는 함수가 모여 있습니다. (.js)

### test

프로젝트를 테스트하는 코드가 들어 있습니다.

### .gitignore

Git에서 추적하지 않을 파일을 설정할 수 있습니다.

### package.json

프로젝트의 대략적인 정보가 담겨있습니다. 해당 프로젝트 버전, 이름, Git 주소, 설명, 저자, 의존하는 패키지 목록, 스크립트 등의 정보가 저장되어 있습니다.

### [README.md](http://readme.md/)

말 그대로 프로젝트에 관한 설명이 마크다운 언어로 쓰여진 Read me 파일입니다.

### yarn.lock

yarn 패키지 잠금 파일로서 프로젝트에 쓰인 패키지의 실제 버전이 명시되어 있습니다. 이 파일은 직접 건들지 않아도 됩니다.
