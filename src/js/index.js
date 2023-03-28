let adviceBtn = document.getElementById('advice-btn');
let adviceNumber = document.querySelector('.advice-number');
let adviceText = document.querySelector('.advice-text');

adviceBtn.addEventListener("click", () => {
    showNewAdvice();
})

async function getNewAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const apiReturn = await fetch(url);
    return await apiReturn.json();
}   

async function showNewAdvice() {
    const newAdvice = await getNewAdvice();
    const newAdviceNumber = newAdvice.slip.id;
    const newAdviceText = newAdvice.slip.advice;
    adviceNumber.innerHTML = newAdviceNumber;
    adviceText.innerHTML = newAdviceText;
}


