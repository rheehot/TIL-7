# SQL Cheat Sheet
프로그래머스 연습문제를 기반으로 정리

## SELECT
```
SELECT [속성명, *] FROM [테이블명] 
```

### 정렬 ORDER BY 
* 기준 1개 
    ```
    ORDER BY [기준 속성명] ASC[DESC] 
    ```
  
* 기준 n개
    ```
    ORDER BY [1번째 기준 속성명] [옵션], [n번 째 기준 속성명] [옵션]
    ```

* 상위 n개 레코드
    ```
    ORDER BY [기준레코드]
    LIMIT [n]
    ```
  
### 조건 WHERE 
```
WHERE [속성명] = [속성명의 값]
```
* 조건 연산자
    * (=), (!=)




## SUM, MAX, MIN
* 최대값, 최소값
    ```
    MAX(속성명), MIN(속성명)
    ```

* 총 row 수
    ```
    COUNT(*)
    ```

* 중복제거
    ```shell script
    count(distinct [속성명])
    ```
  
## GROUP BY
* 고양이와 개는 몇 마리 있을까
    ```
    SELECT [분류할 속성명], COUNT(*) FROM [TABLE_NAME]
    GROUP BY [분류할 속성명]
    ```
  
* 동명 동물 수 찾기
    ```
    SELECT NAME, COUNT(*) AS COUNT FROM [TABLE_NAME]
    WHERE NAME != ''
    GROUP BY NAME
    HAVING COUNT(*) > 1
    ```

* 입양 시각 구하기 1
    ```
    SELECT HOUR(DATETIME) as HOUR, COUNT(*) AS COUNT FROM ANIMAL_OUTS
    WHERE HOUR(DATETIME)>= 9 AND HOUR(DATETIME) <= 19
    GROUP BY HOUR(DATETIME)
    ```

* 입양 시각 구하기 2
    ```
    SET @hour = -1;
    SELECT
        (@hour := @hour + 1) as HOUR,
        (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) AS COUNT
     FROM ANIMAL_OUTS
     WHERE @hour < 23
    ```

Reference
--
* https://www.sqltutorial.org/sql-cheat-sheet/
