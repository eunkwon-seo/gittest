// app.js
 function login(username, password) {
 // 수정: username과 password가 모두 있는 경우에만로그인성공
if (username !== "" && password !== "") {
 console.log("Login successful");
 } else {
 console.log("Login failed");
 }
 }
