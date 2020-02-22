Mac Terminal Command
--

## 내 아이피 주소 깔끔하게 확인
ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'