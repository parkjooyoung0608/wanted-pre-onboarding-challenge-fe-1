# Wanted Pre-Onboarding Challenge

<br />

## 👋🏻 Introduce

안녕하세요. 프론트엔드 개발자 박주영입니다. <br>
위코드 부트캠프 수료후 취업 준비중에 있습니다. <br>
잘 부탁드립니다🙏🏻 <br>
[이력서 보러가기](https://disco-language-571.notion.site/2710930424da4600a7b9be47b60f57dc)

<br>

## Refactoring

### 맥락을 이해하기 힘들었던 변수명과 컴포넌트명 수정

로그아웃 버튼이 들어있는 컴포넌트 이름을 Header로 지었으나 공통으로 사용되는 Header가 아니고 TodoList에만 사용하는 Header이므로 TodoListHeader로 컴포넌트 이름을 수정하였습니다.  

![image](https://user-images.githubusercontent.com/72453080/184397307-297e4470-11b8-4ae5-bffa-849848044956.png)

<br/>

TodoList의 Item 값을 지우는 함수 이름을 `onRemove`로 지었으나 어떤 값을 지우는지 함수명만으로 파악하기 힘들어서 `submitDeleteTodoItem`로 수정하였습니다. 
![image](https://user-images.githubusercontent.com/72453080/184407518-0d190188-b256-4a71-80fd-06ff81c81067.png)
그 결과로 함수 이름만 보고도 어떤 값을 지우는지 파악하기 쉬워졌습니다. 
![image](https://user-images.githubusercontent.com/72453080/184407642-cb93eeb9-c443-4358-b8b3-588837869718.png)

<br/>

TodoItem을 만드는 함수 이름을 `onChange`로 지었으나 함수명으로 어떤 목적인지 파악하기 어려워 `handleChangeContentValue`로 수정하였습니다
TodoItem을 만들기 위해 submit하는 이벤트 함수의 이름을 `onSubmit`으로 지었으나 함수명으로 목적을 파악하기 어려워 `submitTodoItemCreate`로 수정하였습니다.
![image](https://user-images.githubusercontent.com/72453080/184402972-0ac5169e-c234-49a9-886d-973f99cca1e7.png)

그 결과 함수명만으로 어떤 목적을 가지고 동작하는지 파악하기 쉬워졌습니다. 
![image](https://user-images.githubusercontent.com/72453080/184404001-c9ddcf64-e466-4ce7-8985-509f491f691d.png)

<br/>

TodoItem의 한일을 체크하는 토글 버튼 함수 이름을 `onToggle`로 지었으나 함수명으로 어떤 목적인지 파악하기 어려워 `handleClickCheckCircleToggle`로 수정하였습니다. <br/>
TodoItem의 입력값을 변경하는 함수 이름을 `onChangeEditInput`로 지었으나 함수명으로 어떤 목적인지 파악하기 어려워 `handleChangeEditValue`로 수정하였습니다. <br/>
TodoItem의 변경된 입력값을 통신으로 보내는 함수 이름을 `onClickAmend`로 지었으나 함수명으로 어떤 목적인지 파악하기 어려워 `submitAmendTodoValue`로 수정하였습니다. <br/>
이벤트 함수의 앞에 `on`을 붙였던 것을 `handle~`로 변경하여 이름의 위계를 맞췄습니다.
![image](https://user-images.githubusercontent.com/72453080/184405249-4ec41d88-445b-464e-9f0b-5c20b74e6942.png)

그 결과 함수명만으로 어떤 목적을 가지고 동작하는지 파악하기 쉬워졌습니다. 
![image](https://user-images.githubusercontent.com/72453080/184406645-207675d6-c6d8-4e43-8bfa-0219d64a5a5b.png)


<br/>


## 클라이언트 구현 과제

### Login / SignUp

**조건 Check List**

- [x] /auth 경로에 로그인 / 회원가입 기능을 개발합니다
- [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요

이메일과 비밀번호의 유효성을 확인합니다

- [x] 이메일 조건 : 최소 @, . 포함
- [x] 비밀번호 조건 : 8자 이상 입력
- [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
- [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
- [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
- [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### TodoList

---

Todo List API를 호출하여 Todo List CRUD 기능을 구현

**조건 Check List**

- [ ] 목록 / 상세 영역으로 나누어 구현해주세요
- [x] Todo 목록을 볼 수 있습니다.
- [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
- [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
- [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- [x] 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
- [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
- [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- [ ] 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
- [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다
