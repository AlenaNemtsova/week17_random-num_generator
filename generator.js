const btn = document.querySelector('.btn');
btn.addEventListener('click', generate);

function generate() {
    const numbers = [];
    let sum = 0;
    let product = 1;

    for (let i = 0; i < 10; i++) {
        min = Math.ceil(-10);
        max = Math.floor(10);
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(num);

        sum += numbers[i];
        product *= numbers[i];
    }

    const minNumber = Math.min.apply(null, numbers);
    const maxNumber = Math.max.apply(null, numbers);
    const meanNumber = sum / 10;


    //тоже работает:
    // let sum = 0;
    // let product = 1;

    // for (num of numbers) {
    //     sum += num;
    //     product *= num;
    // }
    // const meanNumber = sum / 10;

    document.querySelector('.all-numbers').textContent = numbers.join(' ');
    document.querySelector('.min-number').textContent = minNumber;
    document.querySelector('.max-number').textContent = maxNumber;
    document.querySelector('.mean-number').textContent = meanNumber;
    document.querySelector('.sum').textContent = sum;
    document.querySelector('.product').textContent = product;
}
