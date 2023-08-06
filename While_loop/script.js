var num = parseInt(prompt("Enter the number(int)","ENTER..."));
var count = 0;

while(num>0)
{
    num = Math.trunc(num/10);
    count++;
}

document.write("Digits : " + count);
