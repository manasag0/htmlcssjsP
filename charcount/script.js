const textAreaEl = document.getElementById("text-area");
const totalCountEl = document.getElementById("total-counter");
const remainingCountEl = document.getElementById("remaining-counter")

//function for logic
textAreaEl.addEventListener('keyup',()=>{
    undateCount()
})
//appnding the function to update counts

const undateCount=()=>{
    totalCountEl.innerHTML = textAreaEl.value.length;
    remainingCountEl.innerText = textAreaEl.getAttribute('maxlength')-textAreaEl.value.length;
}