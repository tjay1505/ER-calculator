const x = document.getElementById('op');

const Loader = () => {
    let w = 1;
    x.append(w);
}
const Adder = () => {
    const x = document.getElementById('op');
    let a = x.cloneNode(true);
    x.appendChild(a)
}
const Reseter = () => {
    x.innerText = ''
}
const Calc = () => {
    let sum = x.innerText;
    let sumo = parseInt(sum);
    x.innerHTML = sum;
}

class Calculator {
    constructor(previous0perandTextElement,current0perandTextElement){
        this.previous0perandTextElement = previous0perandTextElement;
        this.current0perandTextElement = current0perandTextElement;
    }
}

const numbtn = document.querySelectorAll('[data-number]')