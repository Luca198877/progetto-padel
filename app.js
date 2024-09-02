let linkMenu =document.querySelectorAll('.nav-link')
let linkSuperiore =document.querySelectorAll('.superiore')
let cards = document.querySelectorAll('.card')
let changeBody = document.querySelector('.dark')
let buttonTop =document.querySelector('.top')
/*let deleteImg = document.querySelector('.delete')*/

//Bottone che riporta ad inizio pagina
buttonTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


linkSuperiore.forEach((elemento)=>{
    elemento.addEventListener('mouseenter',()=>{
        elemento.style.color ='red';
    })
    elemento.addEventListener('mouseleave',()=>{
        elemento.style.color ='';
    })
})



linkMenu.forEach((item)=>{
    item.addEventListener('mouseenter',()=>{
        item.style.color = 'white';
        if(window.innerWidth > 768){
            item.classList.add('fa-spin2')
        }
        
    })

    item.addEventListener('mouseleave',()=>{
        item.style.color = '';
        item.classList.remove('fa-spin2')
    })
})

cards.forEach((items)=>{
    items.addEventListener('mouseenter',()=>{
        items.style.transform= 'scale(1.2)';
    })

    items.addEventListener('mouseleave',()=>{
        items.style.transform = 'scale(1)';
    })
})


//Attivazione dark mode
changeBody.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode')
})

//Rimozione delle immagini del sito
/*deleteImg.addEventListener('click',()=>{
    const images = document.querySelectorAll('img')
    images.forEach((image)=>{
        image.remove()
    }) 
})*/




