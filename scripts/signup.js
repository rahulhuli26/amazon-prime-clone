
// document.querySelector("#first").value=""
// document.querySelector("#last").value=""
// document.querySelector("#email").value=""
// document.querySelector("#pass").value=""
// document.querySelector("#mobile").value=""
// document.querySelector("#dob").value=""
// document.querySelector("form").addEventListener("submit",create);
// function create(event){
//     event.preventDefault();
//     var first=document.querySelector("#first").value;
//     var last=document.querySelector("#last").value;
//     var email=document.querySelector("#email").value;
//     var password=document.querySelector("#pass").value;
//     var mobile=document.querySelector("#mobile").value;
//     var dob=document.querySelector("#dob").value;
   
//     if(first=="" || last=="" || email==""||password==""||mobile==""|| dob=="")
//     {
//         alert("Please fill all fields!")
//     }
//     else if(password.length<6 || password.length>12){
// alert("Please create password depending on the length");
//     }
//     else if(mobile.length<10){
//         alert("please enter 10 digit mobile number")
//     }
//     else{
//     var createObj={
//         firstName:first,
//         lastName:last,
//         email:email,
//         pass:password,
//         mobile:mobile,
//         dateOfBirth:dob
//     }
//     createArr.push(createObj);
//     localStorage.setItem("createItem",JSON.stringify(createArr));
//     alert("ThankYou for Creating Account in Sephora");
//     window.location.href="signin.html";
// }
// }

createArr=JSON.parse(localStorage.getItem("createItem"))||[];
document.getElementsByClassName("z").value="";
document.getElementsByClassName("l").value="";
document.getElementsByClassName("l1").value="";
document.getElementsByClassName("z2").value="";
document.querySelector("form").addEventListener("submit",create);
function create(event){
    event.preventDefault();
var name=document.getElementById("name").value
var Email=document.getElementById("email").value
var password=document.getElementById("password").value
var password1=document.getElementById("password1").value


if(name=="" || Email=="" || password==""||password1=="")
    {
        alert("Please fill all fields!")
    }
    else if(password.length<6 ){
alert("password must be atleast 6 charecters");
    }
    
    else{
    var createObj={
        Name:name,
        email:Email,
        pass:password,
        pass1:password1,
        
    }
    createArr.push(createObj);
    localStorage.setItem("createItem",JSON.stringify(createArr));
    alert("ThankYou for Creating Account in Amazon prime");
    window.location.href="login.html";
}
}
