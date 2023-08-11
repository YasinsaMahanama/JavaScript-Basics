var arr = new Array("logo.png", "logo-1.png", "logo-2.png", "logo-3.png");
var i = 1;
var ref;

function picLibrary()
{
    document.images[0].src = arr[i];
    i++
    if(i > 3)
        i = 0;
}

function start()
{
    ref = setInterval("picLibrary()", 1000);
}

function stop()
{
    clearInterval(ref);
}
