# JavaScript

## 해시
* 위장
    * ref https://tallman.tistory.com/7
    * 배가 a, b, c 라는 이름의 3개가 있다.
      귤은 e, f 라는 이름의 2개가 있다.
      여기서 배는 안골랐다라는 경우를 포함해서 (0,a,b,c) 4개가 된다. 
      마찬가지로 귤도 안골랐다라는 경우를 포함해서 (0,e,f) 3개가 된다.
      이렇게 되면 4*3 =  12가지이고 여기서 0,0 인 둘다 안고르는 경우는 없기 떄문에 -1을 해주면 11가지로 답을 구할 수 있다.
      
    ```javascript
    function solution(clothes) {
        const obj = {};
        let answer = 1;
    
        clothes.forEach(cloth => {
            const type = cloth[1];
            if (!obj.hasOwnProperty(type)) {
                obj[type] = 2;
            } else {
                obj[type]++;
            }
        });
        const values = Object.values(obj);
            values.forEach(value => {
            answer *= value;
        });     
        return answer - 1;
    }
    ```
    ```javascript
    function solution(clothes) {
        return Object.values(clothes.reduce((obj, t)=> {
            obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
            return obj;
        } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
    }
    ```
  
## 스택/큐
* [쇠막대기](https://velog.io/@kimtaeeeny/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0-javascript)
    * '(' 을 push, ')'은 pop
    * ')'이 pop 될 때, 레이저인지 막대기인지 파악한다.
    * 레이저인 경우 '(' : 스택의 길이 =(현재까지 쌓인 막대길이)를 add 하고, 막대기 끝인 경우 ')' 1 을 add 한다.
    * avg: 4s
        ```javascript
        function solution(arrangement) {
            let answer = 0;
            const stack = [];
            for(let i = 0; i<arrangement.length; i++) {
                if(arrangement[i] === '(') {
                    stack.push('(');
                } else {
                    stack.pop();
                    if (arrangement[i-1] === '(') {
                        answer += stack.length;
                    }
                    else {
                        answer += 1
                    }
                }
            }
            return answer;
        }
        ```
  * string 을 배열로 바꿈: avg 12s
    ```
        const arg = arrangement.split('');
    
    ```
