# 소개
* Style Guide
* javascript 코드를 작성할 때 읽기 쉽고 재사용 가능하며 리팩토링 가능하게끔 도와준다.
* 지침일 뿐이다

# 변수 (Variables)
1. 의미 있고 발음하기 쉬운 변수 이름 사용

    bad case
    ```javascript
    const yyyymmdstr = moment().format('YYYY/MM/DD');
    ```
    good case
    ```javascript
    const currentDate = moment.format('YYYY/MM/DD');
    ```

1. 동일한 유형의 변수에 동일한 어휘 사용

    bad case
    ```javascript
    getUserInfo();
    getClientData();
    getCustomerRecord();
    ```
    good case
    ```javascript
    getUser();
    ```
   
1. 검색가능한 이름 사용
    
    작성할 코드보다 읽을 코드가 더 많기 때문에, 코드를 읽기 쉽고 검색 가능하게 작성해야 한다.
    buddy.js, ESLint 같은 도구들이 이름이 정해져있지 않은 상수들을 발견하고 고칠수 있게 해준다.
    
    bad case: 86400000 이 의미하는 바를 알 수 없다.
    ```javascript
    setTimeout(blastoff, 86400000);
    ```
    good case: 대문자로 const 전역 변수를 선언한다.
    ```javascript
    const MILLISECONDS_IN_A_DAY = 86400000;
    setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
    ```

1. 의도를 나타내는 변수들을 사용

    bad case
    ```javascript
    const address = 'One Infinite Loop, Cupertino 95014';
    const citiZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    saveCitiZipCode(address.match(citiZipCodeRegex)[1], address.match(citiZipCodeRegex)[2]);
    ```
    good case
    ```javascript
    const address = 'One Infinite Loop, Cupertino 95014';
    const citiZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    const [, city, zipCode] = address.match(citiZipCodeRegex) || [];
    saveCityZipCode(city, zipCode);
    ```

1. 자신만 알아볼 수 있는 작명 피하기

    명시적인 것이 암시적인 것보다 좋다
    
    bad case
    ```javascript
    const locations = ['서울', '인천', '수원'];
    locations.forEach(l => {
      doStuff();
      doSomeOtherStuff();
      // ...
      // ...
      dispatch(l);
    });
    ```
    good case 
    ```javascript
    const locations = ['서울', '인천', '수원'];
    locations.forEach(location => {
      doStuff();
      doSomeOtherStuff();
      // ...
      // ...
      dispatch(location);
    });
    ```

1. 문맥상 필요없는 것들 쓰지 않기
    
    bad case
    ```javascript
    const Car = {
      carMake: 'BMW',
      carModel: 'M3',
      carColor: '파란색'
    };
    function paintCar(car) {
      car.carColor = '빨간색';
    }
    ```
    good case
    ```javascript
    const Car = {
      make: 'BMW',
      model: 'M3',
      color: '파란색'
    };
    function paintCar(car) {
      car.color = '빨간색';
    }
    ```

1. 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔하다.

    기본 매개변수는 종종 short circuiting 트릭보다 깔끔하다.
    기본 매개변수는 매개변수가 undefined 일 때만 적용됩니다.
    '', "", false, null, 0, NaN 같은 falsy 한 값들은 기본 매개변수가 적용되지 않는다.

    bad case
    ```javascript
    function createMicrobrewery(name) {
      const breweryName = name || 'Hipster Brew Co.';
      // ...
    }
    ```
    good case
    ```javascript
    function createMicrobrewery(name = 'Hipster Brew Co.') {
      // ...
    }
    ```

# 함수 (Functions)
## 함수 인자는 2개 이하가 이상적이다
    매개변수의 개수를 제한하는 것은 함수 테스팅을 쉽게 만들어 주기 때문에 중요하다.
    매개변수가 3개 이상일 경우 테스트 경우의 수가 많아진다.
    그리고 함수에게 너무 많은 역할을 하게 만든 것이다. 대부분의 상위 객체는 1개의 인자만으로 충분하다.
    
    JavaScript 를 사용할 때 많은 [보일러 플레이트](../../Term/List/Boilerplate.md) 없이 바로 객체를 만들 수 있다. 
    * 그러기 때문에 많은 인자들을 사용해야 한다면 객체를 이용할 수 있다.
    * ES6 비구조화(destructuring) 구문의 장점
        1. 어떤 사람이 그 함수의 Signiture(인자의 타입, 반환되는 값의 타입 등)를 볼 때 어떤 사용되는지 즉시 알 수 있다.
        2. 함수에 전달된 인수 객체의 지정된 기본타입 값을 복제하며 SideEffect 발생을 방지한다. 인수 객체로부터 비구조화된 객체와 배열을 복제되지 않는다.
        3. Linter 를 사용하면 사용하지 않는 인자에 대해 경고해주거나 비구조화없이 코드를 짤 수 없게 한다. 
        
    bad case: 
    ```javascript
    function createMenu(title, body, buttonText, cancellable) {
      // ...
    }
    ``` 
    good case:
    ```javascript
    function createMenu({ title, body, buttonText, cancellable }) {
       // ...
    }
    createMenu({
      title: 'Foo',
      body 'Bar',
      buttonText: 'Baz',
      cancellable: true
    })
    ```
    
## 함수는 하나의 행동만 해야한다.
소프트웨어 공학에서 가장 중요한 규칙이다.
함수가 1개 이상의 행동을 할 때 작성, 테스트, 가독이 어려워진다.
반대로 수정, 가독성이 좋아진다.

bad case
```javascript
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
```
good case
```javascript
function emailCients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email);
}
function isClientActive() {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
## 함수명은 함수가 무엇을 하는지 알 수 있어야 한다.
bad case
```javascript
function AddToDate(date, month) {
  // ...
}
const date = new Date();

// 뭘 추가하는 건지 이름만 보고 알아내기 힘들다.
AddToDate(date, 1);
```
good case
```javascript
function AddMonthToDate(date, month) {
  // ...
}
const date = new Date();
AddMonthToDate(date, 1);
```

## 함수는 단일 행동을 추상화 해야한다.
추상화 된 이름이 여러 의미를 내포하고 있다면 그 함수는 너무 많은 일을 하게끔 설계된 것이다.
함수들을 나누어서 재사용가능하고 테스트 하기 쉽게 만들자
 
bad case
```javascript
function parseBetterJSAlternative(code) {
  const REGEXES = [
  // ...
  ];
  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
      
  })
}
```

Reference
--
* clean-code-javascript https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md
* [javascript] 변수값 설정 시 default 사용 (short-circuit 트릭) https://seongilman.tistory.com/90 