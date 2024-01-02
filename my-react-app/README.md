# studentList Info

프레임워크 react를 사용.
학생의 이름을 클릭 시 소개와 장점의 데이터가 출력되며, json의 데이터를 정렬하여 출력해줍니다.<br>
학생의 이름을 검색 시 data.json에서 원하는 데이터 값을 찾아 데이터를 출력해줍니다.<br>
학생의 이름을 클릭 시 이름이 애니메이션 효과로 이동합니다(동그라미 표현은 구현하지 못했습니다)<br>

## My-react-app 폴더구성

my-react-app<br>
/<br>
|-- build<br>
|--node_modules<br>
|--public/ <br>
| |-- index.html ---#html의 기본 구성을 담당하며 <div ID=root>값만이 작성되어 있습니다.<br>
| |-- manifest.json ---#react 프레임 워크를 설치 시 남은 파일입니다.<br>
| |-- Student.css ---#index.html 및 전체적인 html의 스타일을 담당하고 있습니다.<br>
|<br>
|-- src/ ---#소스 디렉토리<br>
| |-- components/ ---#작업 구성 디렉토리<br>
| |-- Info/ ---#module<br>
| | |-- Advantages.jsx ---#data.json의 데이터 값에 따른 학생의 이름이 변경됩니다("'ooo'의 장점")<br>
| | |-- Introduction.jsx ---#data.json의 데이터 값에 따른 학생의 이름이 변경됩니다("'ooo'의 소개")<br>
| | |-- Search.jsx ---#data.json의 데이터 값에서 학생의 이름을 조회하여 결과값을 출력 또는 alut를 사용하여 오류 수정을 요청합니다.<br>

| |-- App.jsx ---#StudentInfo와 StudentList를 연결하여 학생이름을 클릭 시 데이터 값을 Data.json에서 호출받아 응답해주는 역할을 합니다. (학생의 이름을 sort로 순차정렬해주며, 이름 객체에 있는 text1과 text2의 데이터를 가져옵니다) 추가적으로 Search로 데이터를 출력해줍니다.<br>
| |-- StudentInfo.jsx ---#학생의 소개, 장점을 data를 받아 클릭 시 출력해주는 역할을 합니다.<br>
| |-- StudentList.jsx ---#학생들의 목록을 정렬하여 출력해주는 역할을 합니다. name클릭 시 name이 오른쪽으로 이동하는 애니메이션이 동작합니다.<br>
| <br>
| |-- Data<br>
| |-- data.json ---#학생들의 이름이 담긴 데이터 파일입니다.<br>
| <br>
| |-- index.css<br>
| |-- index.js ---#App의 jsonData를 랜더해줍니다. 그리고 파일을 연결해주는 App.jsx보다 상위 파일입니다.<br>
| |-- reportWebVitals.js<br>
| |-- setupTests.js<br>
|<br>
|-- .gitignore ---#Git에서 무시해야 하는 파일 및 폴더 목록<br>
|-- package-lock.json<br>
|-- package.json<br>
|-- README.md<br>
