const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');
let selectedrating = '';
ratingEls.forEach((ratingE1) =>{
    ratingE1.addEventListener('click' , (event) =>{
     removeActive();
     selectedrating = event.target.innerText || event.target.parentNode.innerText
     event.target.classList.add('active');
     event.target.parentNode.classList.add('active');
    });
}); 

btnEl.addEventListener('click', ()=>{
    if(selectedrating !== ''){
    containerEl.innerHTML= `
    <strong> Thank you! </strong>
    <br>
    <br>
    <strong>Feedback: ${selectedrating}</strong>
    <p>We will use your feedback to improve our customer support.</p>
    `;
    }
})
function removeActive(){
    ratingEls.forEach((ratingE1)=>{
        ratingE1.classList.remove('active');
    });

    
}