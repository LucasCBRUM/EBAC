function colorLight(head,body,text,border,button){
    document.getElementById("header").style.backgroundColor=head;
    document.getElementById("body").style.backgroundColor=body;
    document.getElementById("h1").style.color=text;
    document.getElementById("button1").style.backgroundColor=button;
    document.getElementById("button2").style.backgroundColor=button;
    document.getElementById("header").style.borderColor=border;
    document.getElementById("body").style.borderColor=border;
}
function colorDark(head,body,text,border){
    document.getElementById("header").style.backgroundColor=head;
    document.getElementById("body").style.backgroundColor=body;
    document.getElementById("h1").style.color=text;
    document.getElementById("button1").style.backgroundColor=text;
    document.getElementById("button2").style.backgroundColor=text;
    document.getElementById("header").style.borderColor=border;
    document.getElementById("body").style.borderColor=border;
}