# Vue express Blog 만들기

## 파일 설정
1. 깃 저장소 생성
2. package.json
    ``` json
    $ yarn init
    {
      "devDependencies": {
        "vuepress": "^1.2.0"
      },
      "name": "TIL",
      "version": "1.0.0",
      "main": "index.js",
      "license": "MIT",
      "scripts": {
        "docs:dev": "vuepress dev",
        "docs:build": "vuepress build"
      }
    }
    ```
 3. deploy.sh
    ``` sh
    #!/usr/bin/env sh
    
    # abort on errors
    set -e
    
    # build
    yarn docs:build
    
    # navigate into the build output directory
    cd .vuepress/dist
    
    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME
    
    git init
    git add -A
    git commit -m 'deploy'
    
    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
    
    # if you are deploying to https://<USERNAME>.github.io/<REPO>
    git push -f https://github.com/eyabc/TIL.git master:gh-pages
    
    cd -
    ```
4. .gitignore
    ```
    node_modules
    .vuepress/dist
    .idea
    ```

5. .vuepress/config.js
    ```js
    module.exports = {
        title: "EYABC",
        description: "Today I Learned",
        themeConfig: {
        nav: [
                { text: 'Home', link: '/' },
                { text: 'About', link: '/about/' },
                { 
                   text: 'Development', 
                   items: [
                       { text: 'React', link: '/development/react/실전리액트프로그래밍'},
                       { text: 'Vue', link: '/development/vue/makeVueBlog'}
                   ]
                }
            ]
        },
       base: '/TIL/'
    }
    ```
   
 ## 명령어
 1. 실행
 
    ``` sh
    $ yarn docs:dev
    ```
    
  2. 빌드
  
      ``` sh
      $ sh deploy.sh
      ```