# ExpressJS 

## What is a Server
* Software Server
    * 네트워크에 연결된 한 덩어리의 코드
    
## What is Express
* super stable framework!!!

## first Express Server
* [커밋](https://github.com/eyabc/wetube/commit/709c9f3f97e2af7857e83aa5b635efd9371deceb)

## handle route with express
* [커밋](https://github.com/eyabc/wetube/commit/e061cea3088dd84bb00828b81b709db7b62ec0cc)

## ES6 on NodeJS using Babel
* [커밋](https://github.com/eyabc/wetube/commit/b6a2460419d832830f3bc03dcf09d3008b5d436a)
* [참고](https://shlee0882.tistory.com/231)

## Express Core : Middlewares 1
* [커밋](https://github.com/eyabc/wetube/commit/054e584f61abfd2421038ab229efc7d8b72d125c)
* [참고](https://shlee0882.tistory.com/232?category=797808)
* ip 주소 거부 기능 등..
* middleware 는 중간에 접속을 끊을 수도 있다.
    * res.send() !!!
    ```javascript
    const middleware = (req, res, next) => {
      res.send('not hapenning')
    }
    ```

## Express Core: Middlewares 2
* [커밋](https://github.com/eyabc/wetube/commit/1dcca49d204527bc005a4f2cfc3dc804ebb930ef)
* [참고](https://shlee0882.tistory.com/233?category=797808)
