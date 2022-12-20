

var btnSize=document.querySelectorAll(".btns");
var rows=document.querySelectorAll(".row");
var scoreCounter=document.querySelector("#score");
var scoreBoard=document.querySelector("#scoreBoard");
var mainHead=document.querySelector("#mainHead");
var finalScore=document.querySelector("#totalScore");
var tryBtn=document.querySelector("#tryagain-btn");
let login=document.querySelector("#link1");
let loginWindow=document.querySelector(".loginItems");

let aboutNav=document.querySelector("#link3");
let aboutWindow=document.querySelector(".aboutWindow");

let typeEffect=document.querySelectorAll(".aboutGame");




let j=0;

// console.log(loginBtn);

// signUpBtn.addEventListener("click",function(){
//     gameStart();
// });

loginBtn.addEventListener("click",function(){
    gameStart();
});
guestLogin.addEventListener("click",function(){
    gameStart();
});

function gameStart(){
    document.addEventListener("keypress",function (){
        mainHead.innerHTML="Game has started..."
        highlighter();
        
        for (i=0;i<5;i++){
            
            btnSize[i].addEventListener("click",function(){ 
                    
                let x=this;
                const soundId=x.id
                makeSound(soundId);
                console.log("Pressed"+":"+soundId);
            
        ////cheks btn pressed and highlights newer one////
                highlightedBtn=rows[n].classList[1];       
                console.log("highlighted"+":"+highlightedBtn);
                setTimeout(function(){
                    rows[n].classList.remove("dumy");    
                },40);
    
                if (highlightedBtn!=soundId){
                    makeSound("wrong");
                    document.querySelector("body").style.backgroundColor="red";
                    setTimeout(function(){
                        document.querySelector("body").style.backgroundColor="rgb(12, 4, 61)";  
                    },100);
                    mainHead.innerHTML="Game Over!"; 
                    scoreBoard.style.display="block";

                ////final Score to be display on Scoreboard////
                
                    finalScore.innerHTML=j;
                    
                    scoreInsertion(j);

                    tryBtn.addEventListener("click",function(){
                        tryBtn.style.height="96px";
                        tryBtn.style.width="208px";
                        setTimeout(function(){
                            tryBtn.style.width="210px"; 
                            tryBtn.style.height="98px";
                            location.reload();
                        },100);
                        
                    });
                    
                }
                else{
                    j=j+1;
                    scoreCounter.innerHTML=j;
                };
                n=Math.floor(Math.random()*4);
                rows[n].classList.add("dumy");
            })        
        };
    });
}

var closeBtn=document.querySelector("#sBclose-btn")
closeBtn.addEventListener("click",function(){
    scoreBoard.style.display="none";
    location.reload();
});

var sbNav=document.querySelectorAll(".scoreBoard-navItem");
var boardHead=document.querySelector("#boardHead");

for (i=0;i<2;i++){
    sbNav[i].addEventListener("click",function(){
        if (boardHead.innerHTML=="My score"){
            boardHead.innerHTML="Leaderboard";
        }
        else
            boardHead.innerHTML="My score";   
    });
};

function highlighter(){
    n=Math.floor(Math.random()*4);
    rows[n].classList.add("dumy"); 
    highlightedBtn=rows[n].classList[1]
    console.log("highlighted"+":"+ highlightedBtn);
    setTimeout(function(){
        rows[n].classList.remove("dumy");    
    },200); 
}

function makeSound(sound){
    var audio=new Audio("sounds/"+sound+".mp3")
    audio.play();
}
var margin=200;

login.addEventListener("click",function(){

    setTimeout(function(){
        loginWindow.style.marginTop="-800px";
    },25)
    setTimeout(function(){
        loginWindow.style.marginTop="-600px";
    },50)
    setTimeout(function(){
        loginWindow.style.marginTop="-200px";
    },75)
    setTimeout(function(){
        loginWindow.style.marginTop="0px";
    },100)  
})

// loginBtn.addEventListener("click",function(){
//     scrollUp();
// });

// signUpBtn.addEventListener("click",function(){
//     scrollUp();
// });

function scrollUp(){
    setTimeout(function(){
        loginWindow.style.marginTop="0px";
    },50)
    setTimeout(function(){
        loginWindow.style.marginTop="-200px";
    },100)
    setTimeout(function(){
        loginWindow.style.marginTop="-600px";
    },150)
    setTimeout(function(){
        loginWindow.style.marginTop="-800px";
    },200)
    setTimeout(function(){
        loginWindow.style.marginTop="-1000px";
    },250)
}


aboutNav.addEventListener("click",function(){
    if(aboutWindow.style.display=="none"){
        aboutWindow.style.display="block"
        typeWriter();
    }
    else{
        aboutWindow.style.display="none"
    }
    

})
var k = 0;
var txt = "This game is inspired by the 1978's Simon Game developed by the Ralph H. Baer and Howard J. Morrison,"
var speed = 50;

function typeWriter() {
    if (k < txt.length) {
      document.getElementsByClassName("aboutGame").innerHTML += txt.charAt(k);
      k++;
      setTimeout(typeWriter, speed);
    }
};
// alert("hiii");
