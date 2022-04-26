let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let block = document.querySelectorAll('.block')
let span = document.querySelector('.span')

let arr = []

btn.addEventListener('click', () => {

    if(input.value%2 !==0 || input.value>8) {
        alert('Установлено дефолтное значение 2')
        input.value = 4
    }
    for(i=1; arr.length < input.value; i++) {
        arr.push(i)
    }
    getShuffledArr(arr)
    let newArr = getShuffledArr(arr).concat(getShuffledArr(arr))
    for(i in block) {
        block[i].textContent = newArr[i]
    }
    let blocksquare = []
    document.addEventListener("click", function (e) {
        
        if(e.target.classList.contains('block')) {
            e.target.classList.add('active')
            blocksquare.push(e.target)
            if(blocksquare.length === 2) {
                if(blocksquare[0].textContent === blocksquare[1].textContent) {
                    blocksquare[0].classList.add('NewActive')
                    blocksquare[1].classList.add('NewActive')
                    blocksquare = []
                    span.textContent = 'Есть совпадение!!!'
                    span.style.color = 'green'
                } else {
                    setTimeout(function(){
                        blocksquare[0].classList.remove('active')
                    blocksquare[1].classList.remove('active')
                    blocksquare = []
                    span.style.display = 'block'
                    }, 750)
                }
            }
        }
    });
})

const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};
