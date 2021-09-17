var side=document.querySelectorAll('.side-input');
var button=document.querySelector('#calculate-hypotenuse-btn');
var msg=document.querySelector('.output');
button.addEventListener('click',function result()
{
    var base=Number(side[0].value);
    var height=Number(side[1].value);
    if(base==0||height==0)
    {
        showMessage(`Invalid Input`);
    }
    else{
        var hypotenuse=calculateHyp(base,height);
        showMessage(`Hypotenuse is ${hypotenuse}`);
    }
})
function calculateHyp(base,height)
{
    var base2=base*base;
    var height2=height*height;
    var hyp=Math.sqrt(base2+height2).toFixed(2);
    return hyp;
}
function showMessage(message)
{
    msg.innerText=message;
}
