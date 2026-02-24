let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

let links = document.querySelector('.links')

links.addEventListener('click', (event)=>{
    if (event.target.id === 'btn1'){
        window.location.href = 'https://github.com/Rhennan-ALT'
    }

    if (event.target.id === 'btn2'){
        window.location.href = 'https://www.linkedin.com/in/rhennan-oliveira-09615835a/ '
    }

        if (event.target.id === 'btn3'){
        window.location.href = ''
    }

        if (event.target.id === 'btn4'){
        window.location.href = ''
    }
})       