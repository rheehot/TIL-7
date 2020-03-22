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