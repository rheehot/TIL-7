Locale: i18next
--
# 국제화, i18n, i18next, internationalization
현지화
## i18n가 개발자에게 주는 영향
* WordPress 의 1/3 이 영어 이외 지역화 버전을 사용. 
플러그인 개발자는 빌드할 때 현지화를 고려합니다.
* 국제 전자 상거래 사이트에서, 가격, 무게, 설명, 날짜 등의 현지화가 필요
* 문화마다 다른 레이아

# i18next plugins
* i18next plugins provides you
    1. 사용자 언어 감지
    2. 번역 로드
    3. 선택적 번역 캐시
    4. 후 처리 사용 eg. sprintf 지원

* install 
```shell script
$ yarn add i18next
```
* plugin use & options
```javascript
i18next.use(plugin).init(options);
```

## i18next-browser-languagedetector
* 브라우저의 사용자 언어를 탐지
    * 쿠키(set cookie i18next=LANGUAGE)
    * localStorage (set key i18nextLng=LANGUAGE)
    * navigator (set browser language)
    * querystring (append ?lng=LANGUAGE to URL)
    * htmlTag (add html language tag <html lang="LANGUAGE"...)
    * path (http://my.site.com/LANGUAGE/...)
    * subdomain (http://LANGUAGE.site.com/...)
```
$ yarn add i18next-browser-languagedetector
```


## i18next-xhr-backend
* backend 의 i18next 를 브라우저에서 사용하게 함
* backend server 에서 xhr API를 이용하여 로드합니다.


```shell script
$ npm install i18next-xhr-backend
```
## files,
``` shell script
.(src)
└─config       
  └─index.js        
  └─i18n.js        
  └─config.js       
  └─locale
    └─index.js
    └─ko
      └─common.json
```
├─
* ./config/index.js
```javascript
export { default as config } from './config';
```

* ./config/config.js
```javascript
const config = { };
export default config;
```

* ./config/i18n.js

```javascript

```

Reference
--
* i18n https://phrase.com/blog/posts/i18n-a-simple-definition/
* https://blog.asamaru.net/2015/09/15/internationalization-i18n-for-javascript-i18next/
* https://www.npmjs.com/package/i18next
* https://www.i18next.com/
* https://github.com/i18next/i18next-browser-languageDetector
* https://github.com/i18next/i18next-xhr-backend