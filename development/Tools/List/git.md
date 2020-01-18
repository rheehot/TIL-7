#git
* reactapp, backend, service  3가지 저장소를 pull 해온다.
* yann install / npm i / ./migrite ... 명령어를 실행하여 패키지를 다운로드 한다.

## 2020.01 주 브랜치
메인 브랜치 가지에서 새로운 dev-이름 가지를 만들어 작업한다. 
* reactapp: dev-new-layout
* backend: v3.1
* service: v2.2

## reactapp
* react server
```
$ yarn install
$ yarn service-dev
```

## backend
* node server
```shell script
$ npm install
```

## service
* Django server

## cycle
1. 브랜치: 메인 브랜치
* 원격저장소의 main branch에서 로컬저장소의 main branch에 변경된 data를 가져온다.
```shell script
main branch> $ git pull origin 'main branch'
```  
2. 브랜치: 작업 브랜치
* 메인 브렌치에서 작업브렌치로 전환 후 로컬의 작업 브랜치의 변경된 data 를 로컬의 작업브렌치에 merge 해온다.
```shell script
main branch > $ git checkout dev-name
dev-name > $ git merge 'main branch'
```