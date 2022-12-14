let pass = Number(prompt("Enter the password!!! (55555)"))
while(pass !== 55555){
   pass = Number(prompt("Password is wrong. Enter the correct password!!! (55555)"))
   if(!pass || pass !== 55555){
       alert("Fail")
   }else if(pass == 55555){
       alert("Success")
   }
}