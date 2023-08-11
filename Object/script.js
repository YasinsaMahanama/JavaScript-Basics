var tutorial = {
    "topic": "javascript",
    "trainer": "vivek",
    "mode": "online"
}

document.write("Topic : " + tutorial.topic, "<br/>");
document.write("Trainer : " + tutorial.trainer, "<br/>");
document.write("Mode : " + tutorial.mode, "<br/>");

var txt = "";
var x;
for(x in tutorial)
{
    txt += tutorial[x] + ",";
}
document.write(txt);
