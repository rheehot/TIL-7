# React Native 시작전 고려사항

## 1. React로 웹 개발을 해보았다면 바로 시작할 수 있는가? 
동일한 구조로 진행 할 수는 있다.

### 1-1 기기별 호환성 
웹, 브라우저 별 호환성 고려

앱, 기기마다 OS 버전이 달라서 공통적으로 적용할 수 있는 API에 대한 고려.

웹과 다르게, OS 버전이 올라갈수록 (안드로이드 기준) 보안문제로 API이용이 제한 되기도 한다.

### 1-2 스타일
* 모바일은 같은 OS 라도 기기별 가로세로가 다르다. React Native 는 flexbox를 활용한 레이아웃 제작이 제공된다.
그러나 모든 스크린을 완벽히 대응할 수 는 없기 때문에 여러 UI 결과를 보아야 한다.
* scss 기반으로 css 작업을 할 수 없어 가독성이 떨어진다.
* 글로벌 스타일 정의가 불가능하다. 보통 Index.css 에 지정을 한다.
React Native 에서는 개발 시작전 폰트 및 테마를 기본 컴포넌트에 정의하고, 정의한 컴포넌트를 사용하여 작업을 진행하여야 한다.

### 1-3 리액트와 조금 다른 점들 react-navigation
리액트 네이티브로 여러 스크린을 만들게 되면 react-navigation 을 이용하게 된다.
그러나 react와 동작 방식이 조금 다르다.

react-router-dom 은 stack 을 중첩하지 않는다.
보통 페이지별로 switch 컴포넌트 내에서 페이지별로 route 를 정의하게 된다.

react navigation 은 stack 을 중첩하여 스크린을 제공하므로 작동방식이 조금 다르다. 
switch 컴포넌트도 제공하지만, 보통은 token 유효 여부를 판단하 로그인에 대한 핸들링을 하는곳에 주로 이용을 한다.

스택은 중첩되므로 최초 스크린 진입후 재진입시에는 다시 mount 가 되지 않는다. 
따라서 componentDidMount 같은 라이프 사이클 적용 방식을 다르게 해야 합니다.
reat navigation에서 자체적으로 스크린이 포커싱에 대한 라이프사이클을 제공한다.
또한 기존의 앱들처럼 하단 네비게이션 탭 등 자체적으로 많은 지원을 해주기 때문에, react navigation 의 숙지가 필요하다.

## 2. IOS와 Android 동시 개발
React native는 양쪽 플랫폼 개발을 모두 지원하는것이 맞다. 하지만 OS, OS version, 플랫폼별 정책 등을 상세히 파악해야 한다.

## 3. 네이티브 개발 언어 대비 성능
RN는 javascript 기반개발이고, 브릿지를 통해 API를 호출하여 앱을 동작시킨다.
브릿지 병목현상 및 네이비브 앱 대비 성능 지적의 문제에서는
복잡한 앱 개발  애니메이션 구현이 아니라 성능에 대한 문제를 느낄정도는 아니다.
개발자가 로직을 잘 구축한다면 성능도 매우 훌륭하고 생산성에 대한 이점도 얻을 수 있다.

## 4. React native init & expo init
RN의 두가지 프로젝트 시작 방법이다.

* React native init
    * 기본적으로 제공되는 API를 이용 하다가 필요한 모듈은 직접 만들어 사용
    * 초기 개발 환경세팅, 관리 운영에 비용이 더 높다.

* expo
    * 장점
        * 초기 비용이 더 낮다.
        * android studio, xcode 설치가 필요없다.
        * expo-cli로 프로젝트 생성 후, expo client를 모바일에 설치하면 된다.
        * expo에서 자체적으로 제공하는 API들이 많다.
    * 단점
        * 빌드 파일 크기가 매우 크다
        * 제공하는 API만 이용가능하다. (직접 제작 불가능)
        * 블루투스 이용 불가
        * 백그라운드 직접 핸들링 불가능
        * hermes 엔진 등 최신 스펙 이용 불가 (expo 0.06 기준)
        * 매우 좁은 생태계
        * 지역기반 모듈은 구글맵만 이용가능
        
## 5. Flutter vs React Native
Flutter를 사용해보지 않아 비교가 불가하지만,
React에 익숙하고 javascript에 익숙하다면,
React Native를 선택하지 않을 이유는 없습니다.

## 6. 정적 타입 언어 도입
flow는 도입을 하지 않아서 명확하게 파악이 불가능합니다.
typescript에 익숙하지 않다면, 직접 모듈에 대한 정의나 타입을 타이트하게 정의하는 것이 쉽지 않습니다.
react native에 익숙하지 않다면, 외부 모듈을 적극적으로 이용 하여 개발을 하는 것도 좋은 방법입니다.
react 만큼 생태계가 크지 않아, typescript 기반의 모듈도 적고 @types에 정의 되지 않은 모듈도 많습니다.

거기에 expo를 이용하여 프로젝트를 진행한다면 더욱 생태계가 더욱 좁아지게 됩니다.
expo에 typescript를 적용한다면 생태계는 매우 매우 좁아집니다.
expo 자체는 tyepscript로 제작 되었지만, 서브 모듈은 그렇지가 않습니다.

## 결론
React Native를 입문한다면 typescript 미적용을 추천드립니다.
expo는 단점이 많지만 직접 프로젝트를 구축한다면 프로젝트를 진행하기도 전에 지칠 수 있으므로,
학습 용도로 expo를 사용하는 것은 매우 좋은 선택입니다.
그러나 조금 더 깊이 있는 앱을 만드신다면 직접 구축!

Reference
--
* https://velog.io/@honeysuckle/React-Native%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%98%EA%B8%B0%EC%A0%84-%EA%B3%A0%EB%A0%A4%EC%82%AC%ED%95%AD-%EB%8B%A8%EC%A0%90-%EC%95%84%EB%8B%98
