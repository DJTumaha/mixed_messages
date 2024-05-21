const advices = ["Take time to know yourself", "A narrow focus brings big results", "Show up fully", "Don't make assumptions",
"Be patient and persistent", "In order to get, you have to give", "Luck comes from hard work", "Be your best at all times",
"Don't try to impress everyone", "Don't be afraid of being afraid", "Listen to learn", "Life's good, but it's not fair", 
"No task is beneath you", "You can't always get what you want", "Don't make decisions when you are angry or ecstatic", 
"Don't worry what other people think", "Use adversity as an opportunity", "Do what is right, not what is easy", 
"Dreams remain dreams until you take action", "Treat others the way you want to be treated", "When you quit, you fail", 
"Trust your instincts", "Learn something new every day", "Make what is valuable important", "Believe in yourself"]

function RandomNum(list){
    return Math.floor(Math.random() * list.length)
}

let firstAdvice = advices[RandomNum(advices)]
let secondAdvice = ''
let thirdAdvice = ''

while (true) {
    secondAdvice = advices[RandomNum(advices)]
    if (secondAdvice != firstAdvice){
        break
    } else {
        continue;
    }
}

while (true) {
    thirdAdvice = advices[RandomNum(advices)]
    if (thirdAdvice != firstAdvice && thirdAdvice != secondAdvice){
        break
    } else {
        continue;
    }
}


const button = document.getElementById('button');
const body = document.getElementsByClassName('body');
button.addEventListener('click', () => {
    document.getElementById('firstAd').innerHTML = firstAdvice
    document.getElementById('secondAd').innerHTML = secondAdvice
    document.getElementById('thirdAd').innerHTML = thirdAdvice
})

