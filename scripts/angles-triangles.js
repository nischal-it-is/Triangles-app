var angles=document.querySelectorAll(".angle-input");
var button=document.querySelector("#is-triangle-btn");
var message=document.querySelector("#output");
button.addEventListener('click',function result(){
    var angle1=Number(angles[0].value);
    var angle2=Number(angles[1].value);
    var angle3=Number(angles[2].value);
    if(angle3==0||angle2==0||angle1==0)
    {
        showMessage(`Invalid Input`);
    }
    else if(isTriangle(angle1,angle2,angle3))
    {
        showMessage(`It is a triangle`);
    }
    else{
        showMessage(`it is not a triangle`);
    }
})
function isTriangle(angle1,angle2,angle3)
{
    if(angle1+angle2+angle3==180)
    {
        return true;
    }
    else{
        return false;
    }
}
function showMessage(message)
{
    output.innerText=message;
}