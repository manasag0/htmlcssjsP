const inputEl = document.getElementById('pounds')

const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result')

let errorTime;
let resultTime;


function updateResults(){
    if(inputEl.value <= 0){
        errorEl.innerText = "Please enter the number"
        clearTimeout(errorTime)
        errorTime = setTimeout(()=>{

            inputEl.value = "";
            errorEl.innerText = "";
        },2000);
    }else{
        resultEl.innerText = (+inputEl.value/2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            inputEl.value = "";
            resultEl.innerText = "";
        }, 1000);
    }
}


inputEl.addEventListener('input',updateResults)