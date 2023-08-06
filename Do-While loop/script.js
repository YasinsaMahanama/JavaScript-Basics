var actualpin = "3456";
var pin;
var count = 0;

do{
    pin = prompt("Enter the pin number(int)","ENTER...");
    count++;
}while(pin != actualpin && count < 3);

if(pin == actualpin)
{
    document.write("Welcome User");
}
else
{
    document.write("Account locked");
}
