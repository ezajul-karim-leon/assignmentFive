// reusable function 
function disableBtn(id){
   const disableButton= document.getElementById(id).disabled=true;
   return disableButton;
}

//
function secondeAlert (){
    const decrement=document.getElementById('decrement');
    const convertedDecrement=parseInt(decrement.innerText);
    if (convertedDecrement === 0){
    alert('Congratulation You have completed all the current task ');
    }
}

// increment function
function valueIncrement(){
    let increment = document.getElementById('increment');
    const convertedIncrement = parseInt(increment.innerText);
    const sum = convertedIncrement + 1;
    increment.innerText =sum;

    return increment;
}

// decremetn function 
function valueDecrement(){
    let decrement=document.getElementById('decrement');
    const convertedDecrement = parseInt(decrement.innerText);
    const reduce = convertedDecrement -1;
    decrement.innerText = reduce;
    return decrement;
}


//random color generate
document.getElementById('themeBtn').addEventListener('click', ()=>{
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.getElementById('body').style.backgroundColor = randomColor;
})


// Function to get the formatted date
function getFormattedDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    return currentDate.toLocaleDateString('en-US', options);
}
const formattedDate = getFormattedDate();
document.getElementById('date').innerText = formattedDate;


// discover div click action 
document.getElementById('discover').addEventListener('click', ()=>{
   window.location.href ='qusAndAns.html';
   
})




//complete button click action
document.getElementById('btn1').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn1');

    valueIncrement();
    valueDecrement();
    secondeAlert ();
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title1').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);
})
document.getElementById('btn2').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn2');

    valueIncrement();
    valueDecrement();
    secondeAlert ()
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title2').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);
})
document.getElementById('btn3').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn3');

    valueIncrement();
    valueDecrement();
    secondeAlert ();
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title3').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);
})
document.getElementById('btn4').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn4');

    valueIncrement();
    valueDecrement();
    secondeAlert ();
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title4').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);
})
document.getElementById('btn5').addEventListener('click', ()=>{
    alert('Board updated Successfully.')
    disableBtn('btn5');

    valueIncrement();
    valueDecrement();
    secondeAlert ();
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title6').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);

})
document.getElementById('btn6').addEventListener('click', ()=>{
    alert('Board updated Successfully.');
    disableBtn('btn6');

    valueIncrement();
    valueDecrement();
    secondeAlert ()
  
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const titleText = document.getElementById('title6').innerText;
    const activityList = document.getElementById('activityList');
    const div = document.createElement('div');
    div.innerHTML=`
    <p class='bg-gray-200 p-2 rounded-xl mt-2 text-start text-sm'>You have completed the task ${titleText} at ${currentTime}</p>
    `
    activityList.appendChild(div);
})



// remove activity log 
document.getElementById('removeActivity').addEventListener('click', ()=>{
    const removeChilds= document.getElementById('activityList');
    removeChilds.innerHTML ='';
})
