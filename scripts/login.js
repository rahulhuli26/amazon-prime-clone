
var createArr=JSON.parse(localStorage.getItem("createItem"));
var c=0;
document.querySelector("form").addEventListener("submit",getIn);
function getIn(event){
   
   event.preventDefault();
   var email=document.querySelector("#email").value;
   var password=document.querySelector("#password").value;
   
   for(i=0;i<createArr.length;i++)
   { var c=0;
       if(createArr[i].email==email && createArr[i].pass==password)
       {
           c=1;
           break;
       }
   }
   if(c==1){
       alert("Login Successfully");
       window.location.href="payment.html";
   }
   else{
       alert("Please enter valid email & password");
   }
}