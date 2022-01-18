const galery = `[
    {
        "id": "0",
        "imagem":{
            "png":"./images/image-product-1.jpg"
        }
    },
    {   
        "id": "1",
        "imagem":{
            "png":"./images/image-product-2.jpg"
        }
    },
    {
        "id": "2",
        "imagem":{
            "png":"./images/image-product-3.jpg"
        }
    },
    {   
        "id": "3",
        "imagem":{
            "png":"./images/image-product-4.jpg"
        }
    }
  ]`

const dataGalery = JSON.parse(galery)

const image1 = document.getElementById('1');

image1.addEventListener('click',()=>{
    console.log(dataGalery[0].id)
    document.querySelector(".change-imgs").src = dataGalery[0].imagem.png;
    document.querySelector("#active-1").classList.add('thumbnail-active')

    document.querySelector('#active-2').classList.remove('thumbnail-active')
    document.querySelector('#active-3').classList.remove('thumbnail-active')
    document.querySelector('#active-4').classList.remove('thumbnail-active')
    
    
})

const image2 = document.getElementById('2');

image2.addEventListener('click', ()=>{
    console.log(dataGalery[1].id)
    document.querySelector(".change-imgs").src = dataGalery[1].imagem.png;
    document.querySelector('#active-2').classList.add('thumbnail-active')

    document.querySelector('#active-1').classList.remove('thumbnail-active')
    document.querySelector('#active-3').classList.remove('thumbnail-active')
    document.querySelector('#active-4').classList.remove('thumbnail-active')
    
   
});

const image3 = document.getElementById('3');

image3.addEventListener('click', ()=>{
    console.log(dataGalery[2].id)
    document.querySelector(".change-imgs").src = dataGalery[2].imagem.png;
    document.querySelector('#active-3').classList.add('thumbnail-active')

    document.querySelector('#active-1').classList.remove('thumbnail-active')
    document.querySelector('#active-2').classList.remove('thumbnail-active')
    document.querySelector('#active-4').classList.remove('thumbnail-active')
   
})

const image4 = document.getElementById('4');

image4.addEventListener('click', ()=>{
    console.log(dataGalery[3].id)
    document.querySelector(".change-imgs").src = dataGalery[3].imagem.png;
    document.querySelector('#active-4').classList.add('thumbnail-active')

    document.querySelector('#active-1').classList.remove('thumbnail-active')
    document.querySelector('#active-2').classList.remove('thumbnail-active')
    document.querySelector('#active-3').classList.remove('thumbnail-active')
   
})
//================================================================================//

const showLightBox = document.querySelector('.current-img');

const image1LightBox = document.getElementById('1-lb');

image1LightBox.addEventListener('click',()=>{
    console.log(dataGalery[0].id)
    document.querySelector("#change-imgs-lightbox").src = dataGalery[0].imagem.png;
    document.querySelector("#active-1-lb").classList.add('thumbnail-active-lightbox')

    document.querySelector('#active-2-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-3-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-4-lb').classList.remove('thumbnail-active-lightbox')
})

const image2LightBox = document.getElementById('2-lb');

image2LightBox.addEventListener('click',()=>{
    console.log(dataGalery[1].id)
    document.querySelector("#change-imgs-lightbox").src = dataGalery[1].imagem.png;
    document.querySelector("#active-2-lb").classList.add('thumbnail-active-lightbox')

    document.querySelector('#active-1-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-3-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-4-lb').classList.remove('thumbnail-active-lightbox')
})

const image3LightBox = document.getElementById('3-lb');

image3LightBox.addEventListener('click',()=>{
    console.log(dataGalery[2].id)
    document.querySelector("#change-imgs-lightbox").src = dataGalery[2].imagem.png;
    document.querySelector("#active-3-lb").classList.add('thumbnail-active-lightbox')

    document.querySelector('#active-1-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-2-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-4-lb').classList.remove('thumbnail-active-lightbox')
})

const image4LightBox = document.getElementById('4-lb');

image4LightBox.addEventListener('click',()=>{
    console.log(dataGalery[3].id)
    document.querySelector("#change-imgs-lightbox").src = dataGalery[3].imagem.png;
    document.querySelector("#active-4-lb").classList.add('thumbnail-active-lightbox')

    document.querySelector('#active-1-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-2-lb').classList.remove('thumbnail-active-lightbox')
    document.querySelector('#active-3-lb').classList.remove('thumbnail-active-lightbox')
})


showLightBox.addEventListener('click', ()=>{
    document.querySelector('.light-box').style.display = 'flex'
})

document.querySelector('.cross-lightbox').addEventListener('click', ()=>{
    document.querySelector('.light-box').style.display = 'none'
})

/* =====================================================================================*/

let modalQT = 1
let cart = []
let modalKey = 0
let totalPrize = 250;
let prizeProductAdd = '';
let prizeProductSub = '';
let valueSub = '';
let descount = '';
let totalSlides = document.querySelectorAll('[data-js="carousel-item"]')
let currentSlide = 0;
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-back');
let btnMobileOpen = document.querySelector('.btn-menu-mobile')
let btnMobileClose = document.querySelector('.cross-mobile')
let areaMenu = document.querySelector('.menu-mobile-absolute')

document.querySelector('.sub').addEventListener('click',()=>{
    if(modalQT > 1){
        modalQT--;
        document.querySelector('.value-in-cart').innerHTML = modalQT;
        document.querySelector('.product-qts').innerHTML = modalQT;
        descount = totalPrize * 0.5
        valueSub = descount
        prizeProductSub = valueSub * modalQT
        document.querySelector('.total-prize').innerHTML ='$' + prizeProductSub + ',00'
    };

})

document.querySelector('.add').addEventListener('click',()=>{
    
    modalQT++;
    document.querySelector('.value-in-cart').innerHTML = modalQT;
    document.querySelector('.product-qts').innerHTML = modalQT;
    //totalPrize.innerHTML = totalPrize * modalQT
    //prizeProductAdd =  totalPrize * modalQT
    descount = totalPrize * 0.5
    valueSub = descount
    prizeProductAdd = valueSub * modalQT
    document.querySelector('.total-prize').innerHTML ='$' + prizeProductAdd + ',00'
    

})



document.querySelector('.cart-img').addEventListener('click',()=>{
    let cartBasket = document.querySelector('.cart-basket');
    if(cartBasket.style.display == "block"){
        cartBasket.style.display = 'none'
    } else{
        cartBasket.style.display = 'block'

    }

})

document.querySelector('.add-cart-btn').addEventListener('click', ()=>{
   document.querySelector('.hiden-cart').style.display = "block"

})
document.querySelector('.delete-item').addEventListener('click',()=>{
    document.querySelector('.hiden-cart').style.display = 'none'
})

/* ===============================================================================*/


console.log(totalSlides)

btnPrev.addEventListener('click', ()=>{
    if(currentSlide === 0){
        currentSlide = totalSlides.length - 1
    } else{
        currentSlide--;
    }

    totalSlides.forEach(slide =>{
        slide.classList.remove('img-visible')
    })
   totalSlides[currentSlide].classList.add('img-visible')
    
})

btnNext.addEventListener('click',()=>{
    if(currentSlide === totalSlides.length - 1){
        currentSlide = 0
    } else {
        currentSlide++;
    }
    
    totalSlides.forEach(slide =>{
        slide.classList.remove('img-visible')
    })
   totalSlides[currentSlide].classList.add('img-visible')
})

btnMobileOpen.addEventListener('click',()=>{
    areaMenu.style.display = 'flex'
    areaMenu.classList.add('open-menu-animation')
    areaMenu.classList.remove('close-menu-animation')
    btnNext.style.display = 'none'
    btnPrev.style.display = 'none'
})
btnMobileClose.addEventListener('click',()=>{
    areaMenu.style.display = 'flex'
    areaMenu.classList.add('close-menu-animation')
    areaMenu.classList.remove('open-menu-animation')
    btnNext.style.display = 'flex'
    btnPrev.style.display = 'flex'
})
