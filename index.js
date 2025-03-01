// reusable function 
function disableBtn(id){
   const disableButton= document.getElementById(id).disabled=true;
   return disableButton;
}


//random color generate
document.getElementById('themeBtn').addEventListener('click', ()=>{
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.getElementById('body').style.backgroundColor = randomColor;
})

let reduce= document.getElementById('reduce').innerText;
    let convertedReduce = parseInt(reduce);
document.getElementById('btn1').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn1');

    
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title').innerText;
    const activity = document.getElementById('activityLog');
    // const div = document.createElement('div');
    const div = document.getElementById('div');

    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    // activity.appendChild(div);

    let decrement =convertedReduce-1;
    reduce=decrement;

})


// remove activity log 
document.getElementById('removeActivity').addEventListener('click', ()=>{
    const removeChilds= document.getElementById('div');
    removeChilds.innerHTML ='';
})