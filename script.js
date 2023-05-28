


/*function buttons(){
    let a=document.querySelector("#dob").value;
    let day=new Date(a);
    let today=new Date();
    let time=day.getTime();
    let timenow = today.getTime();
    let values = timenow-time;
    let year=Math.floor(values/(1000*60*60*24*365.25)); 
    document.getElementById("demo").innerHTML = year;
}*/

const form = document.getElementById("form");
var field = document.getElementById("dob");
var cerror = document.getElementById("error");
var today = new Date();
var validminDate = "01-01-2002";


form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    validateinput();
})

function validateinput(){
    const fieldVal = field.value.trim();
    

    if(fieldVal ==""){
        cerror.innerHTML="enter date of birth";
    }
    else{
        location.replace("register.html");
    }
}