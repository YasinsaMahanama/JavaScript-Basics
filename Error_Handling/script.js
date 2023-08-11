function myfunc()
{
    var a = 100;

    try
    {
        //var s = a.touppercase();
        alert("Value of a variable is : " + a);
    }

    catch(e)
    {
        alert("Error");
    }

    finally
    {
        alert("Finally block will always execute!");
    }
}
