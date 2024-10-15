let textarea = document.getElementById('textarea')
let button = document.getElementById('btn')
let guessednumber = document.getElementById('spn')
let numberofguess = document.getElementById('no.ofguess')
let sameno = document.getElementById('last')

let count = 0;

let rn = Math.round(Math.random()*15)
console.log(rn);


button.addEventListener('click',()=>{
    if(textarea.value!==""){
    guessednumber.innerHTML = textarea.value
    count++;
    numberofguess.innerHTML = count;
    if(rn ==guessednumber.innerHTML ){
        sameno.innerHTML = '😊 Correct! You guessed the right number!'
    }else if(rn >guessednumber.innerHTML){
        sameno.innerHTML = 'Your guess is too low.'
    }else if(rn<guessednumber.innerHTML){
        sameno.innerHTML = 'Your guess is too high 😲'
    }
}else{
         alert("enter a no")
}

})