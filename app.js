//game values 
let min = 1 , max = 10 , winno = getwinno(min,max) ,
guessesleft = 3 ;

// ui elements 
const UIgame = document.querySelector('.game'),
UIminnum = document.querySelector('.minnum'),
UImaxnum = document.querySelector('.maxnum'),
UIguessbtn = document.querySelector('#guess-btn'),
UIsubmitbtn = document.querySelector('#input-submit-value'),
UImessage = document.querySelector('.message');

//assign min and max 

UIminnum.textContent = min;
UImaxnum.textContent = max;


//play again el 
   UIgame.addEventListener('mousedown',function(e){
    if(e.target.className === 'playagain')
    {
        window.location.reload();
    }
});

//listen for guess 

  UIsubmitbtn.addEventListener('click',function(){
     let guess = parseInt(UIguessbtn.value);
     if(isNaN(guess) || guess < min || guess > max){
         setmessage(`Please  enter the no between ${min} and ${max}. `,'red');
     }
else if (guess === winno)
{
   gameover(true ,`${winno} is correct , YOU WIN!!`)
}
else
{
    guessesleft -= 1;//game over lostt
    if( guessesleft ===0)
    {gameover(false,`GAME OVER ,
     Correct no was ${winno}`)
    }
        
    else
    {
        //game continues 
        setmessage(`${guess} is not correct ,${guessesleft} guesses remaining`,'red')
    }
}
}
)
function gameover(won , msg )
{ let color;  
    won === true ? color ='green' : color = 'red'
    UIguessbtn.disabled = true;
    UIguessbtn.style.borderColor = color;
    UIsubmitbtn.style.color = color;
    UImessage.style.color = color;
    setmessage(msg)


    //play again 
    UIsubmitbtn.value = 'Play Again';
    UIsubmitbtn.className += 'playagain'
    
}
//get win no fun
function getwinno(min,max){
    //random no 
   return Math.floor(Math.random()*((max-min)+1) + min);

}
function setmessage(msg,color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}
