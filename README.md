# Todo App

## 환경변수 설정

### 1. .env.example 파일을 복사하여 .env 파일을 만든다.

### 2. 변수 REACT_APP_API_URL에 API 주소를 할당한다.

## json-server를 이용하여 테스트하기

### 1. json-server를 전역에 설치한다.

```
npm i -g json-server
```

### 2. data 디렉토리로 이동한다.

```
cd data
```

### 3. json-server를 원하는 포트 번호로 실행한다.

```
json-server --watch data.json --port (포트 번호)
```

### 4. .env의 변수 REACT_APP_API_URL에 API 주소(http://localhost:포트 번호)를 할당한다.
