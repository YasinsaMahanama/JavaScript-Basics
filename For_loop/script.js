var i;
var product = 1;
var numbers = prompt("Enter a max number");

var num = parseInt(numbers);

for(i=1;i<=num;i++)
{
    product = product * i;
}

alert("Factorial : " + product);
document.write("Factorial : " + product);
