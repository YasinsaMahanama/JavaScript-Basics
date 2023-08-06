var mark1name = prompt("Enter mark1 :");
var mark2name = prompt("Enter mark2 :");
var mark3name = prompt("Enter mark3 :");

var mark1 = parseFloat(mark1name);
var mark2 = parseFloat(mark2name);
var mark3 = parseFloat(mark3name);

var total = mark1 + mark2 + mark3;

var percentage = total/3;

alert("Percentage: " + percentage.toFixed(2));
    
    if(percentage >= 80)
    {
        alert("Grade A");
    }
    else if(percentage >= 60)
    {
        alert("Grade B");
    }
    else if(percentage >= 40)
    {
        alert("Grade C");
    }
    else
    {
        alert("Grade D");
    }
        
