const text=document.querySelector(".animate").children,
textlength=text.length;
let index=0;
function animatetext(){
    for(let i=0;i<text.length;i++){
        text[i].classList.remove("text-in");
    }
    text[index].classList.add("text-in");
    if(index==textlength-1){
        index=0;
    }
    else{
        index++;
    }
    setTimeout(animatetext,1500)
}
window.onload=animatetext;
