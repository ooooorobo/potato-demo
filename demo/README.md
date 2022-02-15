## 사전 준비

- 윈도우 cmd창 여는법: [https://wholetech.tistory.com/12](https://wholetech.tistory.com/12)
- 맥 터미널 여는법: [https://support.apple.com/ko-kr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac](https://support.apple.com/ko-kr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)

아래에서 실행하는 커맨드는 모두 cmd 혹은 터미널에서 실행합니다.

- node.js LTS 설치하기

```bash
node -v
npm -v
```

두 커맨드가 에러 없이 버전을 잘 보여주면 node.js가 이미 설치되어 있는 것입니다. 만약 에러가 발생한다면, [https://nodejs.org/ko/](https://nodejs.org/ko/) 에서 운영체제에 맞는 Node.js **LTS 버전을 다운받습니다.** 다운받은 후에 위 커맨드를 다시 실행해 봅니다.

- npx 설치하기

```bash
npm install npx -g
```

- VSCode 설치하기

따로 선호하시는 IDE가 있다면 설치하지 않으셔도 됩니다. [https://code.visualstudio.com/](https://code.visualstudio.com/) 에서 설치합니다.

---

## 리액트 프로젝트 만들기

쉽게 리액트 프로젝트를 만들도록 도와주는 `create-react-app` 라이브러리를 사용해 프로젝트를 구성해 보겠습니다. cmd 혹은 터미널을 여시고, 프로젝트를 만드실 디렉토리로 이동해 주세요. (`cd` 커맨드로 디렉토리를 이동하거나, `mkdir <폴더 이름>` 커맨드로 원하는 디렉토리를 생성하세요.)

<aside>
💡 디렉토리 경로에 한글이 포함되어 있으면 오류가 발생할 가능성이 있으니 주의해 주세요!

</aside>

원하는 프로젝트 이름이 있다면 `potato-market` 부분을 원하는 프로젝트 이름으로 채워 주세요.

```bash
npx create-react-app potato-market
```

감자합니다.

![image](https://user-images.githubusercontent.com/40057032/153989787-0bffcf69-f627-409d-a38a-9e72b83cddf4.png)

이런 메시지가 표시되면 프로젝트 생성 성공! 이제 Visual Studio Code를 켭니다.

File > Open > 아까 프로젝트를 생성한 경로로 들어가서, `potato-market` 폴더를 선택하고 [열기]

![image](https://user-images.githubusercontent.com/40057032/153989797-56a81c12-bb97-42ad-8807-4597149942a3.png)

이런 창이 나오면 성공~
![image](https://user-images.githubusercontent.com/40057032/153989819-5d69d92a-cf46-4f8e-9777-b99d91002feb.png)

`package.json` 파일을 열고, “scripts” 안에 있는 “start”에 커서를 가져다 대면 ‘Run by the ‘npm start’ command’ 팝업이 뜹니다. Run Script 버튼을 누르면 브라우저가 실행되며 `localhost:3000`에 사이트가 표시됩니다.
![image](https://user-images.githubusercontent.com/40057032/153989827-69e61c50-b10e-4ee7-84d0-6631358e9dbc.png)

![image](https://user-images.githubusercontent.com/40057032/153989834-795eb546-8457-4411-9c61-6bf83f997b6d.png)

## json-server 설치하기

```bash
npm i -g json-server
```

## 프로젝트 실행하기

`package.json` 파일의 scripts 부분에 아래처럼 "server" 커맨드를 추가해 주세요.

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch ./server/db.json --port 3001"
  },
```

커맨드 이름에 커서를 대면 커맨드를 실행할 수 있는 버튼이 표시됩니다. `server`와 `start`를 실행해 주세요.

혹은,

```sh
npm run server
npm run start
```
