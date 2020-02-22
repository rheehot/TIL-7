theme/global-components 이 디렉토리의 component는 자동으로 global component로 등록됨.
theme/components component 등록
theme/layouts Layout.vue가 기본 component 가 되고, 404.vue는 404 page에 대한 component 가 됨
theme/styles index.styl과 palette.styl을 기본으로 불러옴. 나머지는 작성하기 나름
theme/templates 기본 템플릿
theme/index.js 테마 구성의 entry 파일
theme/enhanceApp.js Vue plugin을 설치하거나 전역 구성 요소를 등록하거나 라우터 후크 추가 가능

# VuePress 관련 computed 변수
## $site
site의 title description base pages 등을 가져온다.
```json
{
  "title": "VuePress",
  "description": "Vue-powered static site generator",
  "base": "/",
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    // ...
  ]
}
```

## $page
현재 페이지에 대한 정보를 가져온다.
```json
{
  "title": "Global Computed",
  "frontmatter": {},
  "regularPath": "/guide/global-computed.html",
  "key": "v-d4cbeb69eff3d",
  "path": "/guide/global-computed.html",
  "headers": [
    { "level": 2, "title": "$site", "slug": "site" },
    { "level": 2, "title": "$page", "slug": "$page" },
    // ...
  ]
}
```

## $themeconfig
config.js의 themeConfig를 가져온다

Reference 
--
https://junilhwang.github.io/TIL/Vuepress/Theme/#theme-directory-structure