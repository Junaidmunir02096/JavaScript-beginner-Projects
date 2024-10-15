let inputs = document.getElementById('addtext')
let text = document.querySelector('.text')
let all = document.querySelectorAll('.listitem');
let del = document.getElementById('delete')


function Add(){
    if(inputs.value == ''){
        alert('Enter your task')
    }else{ 

     addlines(inputs.value)
     all = document.querySelectorAll('.listitem');
     
    }

    inputs.value = '';
}

function addlines(value){
    let div = document.createElement('div');
    div.className = 'listitem'
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'check';
    let title = document.createElement('h3');
    title.className = 'title';
    title.innerHTML = value
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.innerHTML = 'X';

    text.appendChild(div)
    div.appendChild(check)
    div.appendChild(title)
    div.appendChild(remove)
}

document.addEventListener('click',()=>{
   all.forEach(item=>{
    console.log(item);
    
    let btn = item.querySelector('.remove');
    btn.addEventListener('click',()=>{
        text.removeChild(item)
    })
}) 
})

del.addEventListener('click',()=>{
    
console.log('hi');
 
})




// let inputs = document.getElementById('addtext');
// let text = document.querySelector('.text');
// let all = document.querySelectorAll('.listitem');

// // Function to add a new task
// function Add() {
//     if (inputs.value === '') {
//         alert('Enter your task');
//     } else {
//         addlines(inputs.value);
//         all = document.querySelectorAll('.listitem');
//     }

//     inputs.value = '';
//     savedata();
// }

// // Function to create a new task element
// function addlines(value) {
//     let div = document.createElement('div');
//     div.className = 'listitem';
//     let check = document.createElement('input');
//     check.type = 'checkbox';
//     check.className = 'check';
//     let title = document.createElement('h3');
//     title.className = 'title';
//     title.innerHTML = value;
//     let remove = document.createElement('button');
//     remove.className = 'remove';
//     remove.innerHTML = 'X';

//     text.appendChild(div);
//     div.appendChild(check);
//     div.appendChild(title);
//     div.appendChild(remove);

//     // Add event listener for remove button
//     remove.addEventListener('click', () => {
//         text.removeChild(div);
//         savedata(); // Save data after removing
//     });
// }

// // Event listener to handle all click events
// document.addEventListener('click', () => {
//     all.forEach(item => {
//         let btn = item.querySelector('.remove');
//         btn.addEventListener('click', () => {
//             text.removeChild(item);
//             savedata(); // Save data after removing
//         });
//     });
// });

// // Function to save the task list to local storage
// function savedata() {
//     let taskArray = [];
//     document.querySelectorAll('.listitem').forEach(item => {
//         taskArray.push({
//             task: item.querySelector('.title').innerHTML,
//             completed: item.querySelector('.check').checked
//         });
//     });
//     localStorage.setItem('tasks', JSON.stringify(taskArray));
// }

// // Function to load tasks from local storage when the page loads
// function loadTasks() {
//     let savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//         savedTasks.forEach(item => {
//             addlines(item.task);
//             let allTasks = document.querySelectorAll('.listitem');
//             let lastTask = allTasks[allTasks.length - 1];
//             lastTask.querySelector('.check').checked = item.completed;
//         });
//     }
// }

// // Load tasks on page load
// window.onload = loadTasks;
