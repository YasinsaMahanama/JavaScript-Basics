var uid = prompt("Enter user name", "User Name");
var pwd = prompt("Enter the password", "Pass Word");

var message = (uid == "john" && pwd == "1234") ? "Welcome" : "Invalid User";

alert(message);
