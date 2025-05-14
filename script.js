let gameseq=[]
let userseq=[]
let started=false;
let level=0;

let h2=document.querySelector('h2');
let btns = ['red', 'yellow', 'green', 'purple'];

document.addEventListener('keypress',function(){
    if (started==false){
        console.log('Game is Started');
        started=true;
    };
    levelup();
});

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },100)
}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },100)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randidx)
    // console.log(randcolor)
    // console.log(randbtn)
    gameseq.push(randcolor)
    console.log(gameseq)
    gameflash(randbtn);
};

function check(idx){
    // console.log(`Current Level = ${level}`)
    // let idx = level-1;
    if (gameseq[idx]===userseq[idx]){
        if (userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }else {
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>Press any key to start`
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function (){
            document.querySelector('body').style.backgroundColor='white';
        },200);
        reset();
    }
}

function btnpress(){
    // console.log(this)
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute('id')
    userseq.push(usercolor);
    check(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click',btnpress);
}
function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}