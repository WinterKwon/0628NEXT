function night(){
    // document.querySelector('body').style.backgroundColor='black';
    // $('body').css('background-color', 'blue');
    $('body').css('background-color', 'blue').css('color', 'red');

    document.querySelector('body').style.color='white';
    

    //a태그가 있으면 파란색 그대로이므로 색상 통일해줌
    let arr = document.querySelectorAll('a')
    for (let i of arr){
        i.style.color = 'white';
    }
}

function day(){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color='black';



    let arr = document.querySelectorAll('a')
    for (let i of arr){
        i.style.color = 'black';
    }

}

export function dayNight(mode){
    if (mode === 'night'){
        night();}
    else {
        day();
    }
}