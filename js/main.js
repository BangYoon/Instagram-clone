
const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
const variableWidth = document.querySelectorAll('.contents_box .contents');
const delegation = document.querySelector('.contents_box');

function scrollFunc(){
    console.log(pageYOffset);

    if(pageYOffset >= 10){
        header.classList.add('on');
        sidebox.classList.add('on');
    }else{
        header.classList.remove('on');
        sidebox.classList.remove('on');
        sidebox.removeAttribute('style');
    }
}

function resizeFunc(){
    console.log('resize!!');

    if(pageYOffset >= 10){
        let calcWidth = (window.innerWidth *0.5) + 166;
        console.log(window.innerWidth *0.5);
        sidebox.style.left = calcWidth + 'px';
    }

    if(matchMedia('screen and (max-width:800px').matches){
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].style.width = window.innerWidth -20 + 'px';
        }
    }else{
        for(let i=0; i<variableWidth.length; i++){
            variableWidth[i].removeAttribute('style');
        }
    }
}

function delegationFunc(e){
    let ee = e.target;
    console.log(ee);

    while(!ee.getAttribute('class')){
        ee = ee.parentNode;
        if(ee.nodeName === 'BODY'){
            ee = null;
            return;
        }
    }

    if(ee.matches('[class="sprite_heart_icon_outline"]')){
        console.log('하트!');
    }else if(ee.matches('[class="sprite_bookmark_outline"]')){
        console.log('북마크!');
    }else if(ee.matches('[class="sprite_share_icon"]')){
        console.log('공유!');
    }else if(ee.matches('[class="sprite_bubble_icon"]')){
        console.log('댓글!');
    }

    ee.classList.toggle('on');
}

window.addEventListener('scroll', scrollFunc);
window.addEventListener('resize', resizeFunc);
window.addEventListener('click', delegationFunc);