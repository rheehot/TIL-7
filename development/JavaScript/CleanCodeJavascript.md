# 소개
* Style Guide
* javascript 코드를 작성할 때 읽기 쉽고 재사용 가능하며 리팩토링 가능하게끔 도와준다.
* 지침일 뿐이다

# 변수 (Variables)
## 의미 있고 발음하기 쉬운 변수 이름 사용

    bad case
    ```javascript
    const yyyymmdstr = moment().format('YYYY/MM/DD');
    ```
    good case
    ```javascript
    const currentDate = moment.format('YYYY/MM/DD');
    ```

## 동일한 유형의 변수에 동일한 어휘 사용

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
   
## 검색가능한 이름 사용
    
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

## 의도를 나타내는 변수들을 사용

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

## 자신만 알아볼 수 있는 작명 피하기

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

## 문맥상 필요없는 것들 쓰지 않기
    
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

## 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔하다.

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
      // lex...
  });
  const ast = [];
  tokens.forEach(token => {
    // lex...
  });
  ast.forEach(node => {
    // parse...
  })
}
```
good case
```javascript
function tokenize(code) {
  const REGEXES = [
    // ...
  ]; 
  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push(/* ... */);
    })
  })
  return tokens; 
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach(token => {
  	ast.push(/* */);
  });
  return ast;
}
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach(node => {
    // parse...
  });
}
```

## 중복된 코드 작성 피하기
중복된 코드가 있다는것은 어떤 로직을 수정해야 할 일이 생겼을 때, 수정해야 할 곳이 한 곳 이상이라는 뜻이다.
사소한 차이점 때문에 중복된 코드를 작성하는 코드가 있다. 
중복된 코드를 제거한다는 것은 하나의 함수/모듈/클래스를 사용하여 사소한 차이점을 처리할 수 있도록 추상화를 만드는 것을 의미한다.

잘 추상화 하지 못한 코드는 중복된 코드보다 나쁠 수 있으므로 여러 원칙들을 따르는 것이 좋다. 
 
bad case
```javascript
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };
    render(data);
  });
}
function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
   };  
   render(data);
  });
}
```

good case
```javascript
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calcaulateExpectedSalary();
    const experience = employee.getExperience();
    
    let portfolio = employee.getGithubLink();
    if(employee.type == 'manager') {
      portfolio = employee.getMBAProjects();
    }
  
    const data = {
      expectedSalary,
      experience,
      portfolio
    };      
    render(data);
  });
}
```

## Object.assign 을 사용해 기본 객체 만들기
bad case
```javascript
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};
function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz',
  config.cancellable = config.cancellable === undefined ? config.cancellable : true;
}
createMenu(menuConfig);
```
good case
```javascript
const menuConfig = {
  title: 'Order',
  // 유저가 'body' key 의 value 를 정하지 않았다.
  buttonText: 'send',
  cancellable: true
};
function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true  
  }, config);
  // config 는 { title: 'Order', body: 'Bar', buttonText: 'Send', cancellable: true } 
}
createMenu(menuConfig);
```
* [Object.assign()](./ObjectAssing.md) 

## 매개변수로 플래그 사용하지 않기
플래그를 사용하는 것 자체가 그 함수가 한가지 이상의 역할을 하고 있다는 것을 뜻한다.
boolean 기반으로 함수가 실행되는 코드가 나뉜다면 함수를 분리하자.

bad case
```javascript
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```
good case
```javascript
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

## 사이드 이펙트를 피하기 1
함수는 값을 받아서 어떤일을 하거나 사이드 이펙트를 만들어 낸다.
* 파일에 쓰여질 때
* 전역 변수 수정
* 실수로 모은 돈을 다른사람에게 보낼 때...

* 파일 작성할 때
    * 파일을 작성하는 함수나 틀래스가 여러개 존재하면 안되며 반드시 하나만 있어야 한다. 

* 사이드 이펙트 예
    * 어떠한 구조체도 없이 객체 사이의 상태를 공유하는 행위
    * 무엇이든 쓸 수 있는 변경가능한 데이터 유형을 사용하는 행위
  
bad case:
```javascript
// 아래 함수에 의해 참조되는 전역 변수이다.
// 이 전역변수를 사용하는 또 하나의 함수가 있다고 생각해보자. 이제 이 변수는 배열이 될 것이고 프로그램을 망가뜨린다.
let name = 'Ryan McDermott';

function splitInfoFirstAndLastName() {
  name = name.split(' ');
}
splitInfoFirstAndLastName();
```
good case
```javascript
function splitInfoFirstAndLastName(name) {
  return name.split(' ');
}
const name = 'Ryan McDermott';
const newName = splitInfoFirstAndLastName(name);
```

## 사이드 이펙트 피하기 2
자바스트립트에서 기본타입 자료형은 값을 전달하고 객체와 배열을 참조를 전달한다.

우리가 만든함수는 장바구니 배열에 변화를 주며 이 변화는 구매목록에 어떤 상품을 추가하는 기능을 한다. 
장바구니 배열을 사용하는 어느 다른 함수가 있다면 이러한 추가에 영향을 받습니다. 

* bad case
    * 유저가 구매 함수를 호출한다.
    * 네트워크를 요청하고 서버에 장바구니 배열을 보낸다.
    * 네트워크 연결이 좋지 않아 구매함수는 다시한번 네트워크 요청을 보내야 하는 상황이 생겼다. 
    * 사용자가 네트워크 요청이 시작되기 전에 실수로 원하지 않는 상품의 장바구니에 추가 버튼을 실수로 클릭하였다. 
    * 실수가 있고난 뒤 네트워크 요청이 시작되면 장바구니에 추가 함수 때문에 실수로 변경된 장바구니 배열을 서버에 보내게 된다. 
    ```javascript
    const addItemToCart = (cart, item) => {
      cart.push({ item, date: Date.new() });
    };
    ```
    
* good cade
    *  장바구니에 추가 함수는 항상 장바구니 배열을 복제하여 수정하고 복제본을 반환하는 것이다. 
    장바구니 참조를 보유하고 있는 다른 함수가 다른 변경 사항의 영향을 받지 않게 된다.
    * 실제로 입력된 객체를 수정하고 싶은 경우가 있을 수 있지만 이 예제를 생각하면 그런 경우는 거의 없다. 그리고 대부분의 것들이 사이드 이펙트 없이 리팩토링 될 수 있다.
    * 큰 객체를 복제하는 것은 성능 측면에서 값이 매우 이러한 프로그래밍 접근법을 가능하게 해 줄 좋은 [라이브러리](https://immutable-js.github.io/immutable-js/)가 존재한다.
    이는 객체와 배열을 수동으로 복제하는 것처럼 메모리 집약적이지 않게 해주고 빠르게 복제해준다.
    ```javascript
    const addItemToCart = (cart, item) => {
      return [...cart, { item, date: Date.now() }];
    }
    ```

## 전역 함수 피하기
전역 환경을 사용하는 것은 JavaScript 에서 나쁜 관행이다.
* 다른 라이브러리들과의 충돌이 있을 수 있다.
* diff 메서드를 Array.prototype 에서 쓰면 다른 라이브러리와 충돌 할 수 있다. 
ES6 의 classes를 사용해서 전역 Array 를 상속하자.

bad case
```javascript
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
}
```

good case:
```javascript
class SuperArray extends Array {
  diff(comparisionArray) {
    const hash = new Set(comparisionArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```

## [명령형 프로그래밍보다 함수형 프로그래밍을 지향하자](../Term/JavascriptFunctionalProgramming.md)
함수형 언어는 더 깔끔하고 테스트하기 쉽다.

bad case
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, 
  {
    name: 'Suzie Q',
    linesOfCode: 1500
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, 
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  },
];

let totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
```
good case
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, 
  {
    name: 'Suzie Q',
    linesOfCode: 1500
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, 
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  },
];
const totalOutput = programmerOutput
.map(programmer => programmer.linesOfCode)
.reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);
```

## 조건문 캡슐화 하
bad case
```javascript
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
```
good case
```javascript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

## 부정조건문 사용하지 않기
bad case
```javascript
function isDOMNodeNotPresent(node) {
  // ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}
``` 
good case
```javascript
function isDOMNodePresnet(node) {
   // ...
}
if (isDOMNodePresnet(node)) {
  // ...
}
```

## 조건문 작성 피하기
if 문 대신 다형성을 이용하면 가능하다. 
clean code 컨셉은 함수는 단 하나의 일만 수행한다 이다. 함수나 클래스에 if 문을 쓴다면
함수나 클래스가 한가지 이상의 일을 수행하고 있다는 것과 같다.

bad case
```javascript
class Airplane {
   // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Airt Force One':
        return this.getMaxAltitude();
      case 'Cessna': 
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
```
good case
```javascript
class Airplane {
  // ...
}
class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}
class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude ();
  }
}
class Cessna etends Airplane {
  // ...
  getCruisingAltitude () {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```

## 타입-체킹 피하기 1


Reference
--
* clean-code-javascript https://github.com/qkraudghgh/clean-code-javascript-ko/blob/master/README.md
* [javascript] 변수값 설정 시 default 사용 (short-circuit 트릭) https://seongilman.tistory.com/90 