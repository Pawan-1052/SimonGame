import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref,set,update, onValue} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const firebaseConfig = {      
    apiKey: "AIzaSyBbwd1nnPtW38UjKRT-eAG01bz2xBgaNIE",      
    authDomain: "simonfirebasedata.firebaseapp.com",      
    databaseURL: "https://simonfirebasedata-default-rtdb.firebaseio.com",      
    projectId: "simonfirebasedata",      
    storageBucket: "simonfirebasedata.appspot.com",      
    messagingSenderId: "978859698472",      
    appId: "1:978859698472:web:21e326e3720b7b5fa5481d"     
};
console.log(j);

const app = initializeApp(firebaseConfig);
const db=getDatabase();

const auth = getAuth();

let loginBtn=document.querySelector("#loginBtn");
let signUpBtn=document.querySelector("#signUpBtn");

    // document.getElementById("link1").style.display="none";
//  console.log(document.getElementById("link1").innerHTML="user20");

function save(email_,username_,password_,user){
    // const db=getDatabase();
    // const reference=ref(db,'username/'+username_);
    var username_=document.getElementById("username").value;
    var password_=document.getElementById("password").value;
    var email_=document.getElementById("email").value;

       
    set(ref(db,'username/'+user.uid),{
        Email:email_,
        username:username_,
        password:password_,
        score:j
    });
       alert("Welcome "+username_+"!!");
}

   
loginBtn.addEventListener("click",function(){

    var username_=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;

    if(username_=="" || password=="" || email==""){
        alert("invalid credentials!!");
    }
    else{
        signInWithEmailAndPassword(auth, email, password,username_).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const dt= new Date();
            update(ref(db,'username/'+user.uid),{
                last_login:dt,
            })
            alert("User loged in!!")
            scrollUp();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
        
    }
    document.getElementById("email").value="";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    // document.getElementById("link1").style.display="none";
});

signUpBtn.addEventListener("click",function(){
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var username_=document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password,username_).then((userCredential) => {
    // Sign up
    const user = userCredential.user;
    
    save(email,username_,password,user);

    alert("user created");
    scrollUp();
    gameStart();
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

})



let guest=document.querySelector("#guestLogin");

guest.addEventListener("click",function(){
    let guestNumber=Math.floor(Math.random()*1000);
    var username_="guest"+guestNumber
    set(ref(db,'username/'+username_),{
        username:guestNumber,
        score:j 
    });
    document.getElementById("link1").style.display="none";
    scrollUp();
})


// function scoreInsertion(j){
    
    
// }