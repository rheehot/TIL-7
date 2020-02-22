# Yarn
## yarn 설치
```shell script
$ npm install -g yarn 
$ yarn --version
```

## yarn 사용
* 프로젝트 시작(초기화) package.json 생성
```shell script
$ yarn init
```
* package.json 으로부터 의존성 모듈 설치
```shell script
$ yarn
// or
$ yarn install
```

## 에러/경고 해결

### error : The engine "node" is incompatible with this module
  error supermessage@1.0.7: The engine "node" is incompatible with this module. Expected version "12.13.0". Got "13.6.0"
  error Found incompatible module.
  * nvm 을 사용하여 해당 버전의 node 를 다운받은 다음 버전으로 전환하면 정상적으로 사용할 수 있다. 
  
