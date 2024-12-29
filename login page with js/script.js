
const btn = document.querySelector(".btn") ;
btn.addEventListener("click",(e)=>{

    e.preventDefault() ; // it will stop the submission of form 

    if (name_checker()==true && id_checker()==true && password_checker()==true) {

        alert("Thanks for Visiting ") ;
        document.querySelector(".i1").value = " " ;
        document.querySelector(".i2").value = " " ;
        document.querySelector(".i3").value = " " ;
        document.querySelector(".form").submit() ; // submit form succesfully 
        alert("Submitted Successfully ") ;
        
    }
    

 

})

function name_checker(){

    let space = -1 ;

    let name = document.querySelector("#name").value ;
    if (name.length == 0) {

        document.getElementById("err1").style.visibility="visible" ;
        setTimeout(() => {
            document.getElementById("err1").style.visibility="hidden" ;
        }, 1000);

        return false ;
        
        
    }

    if((name[0] !== name[0].toUpperCase())){

       
        document.getElementById("err1").innerHTML="first letter must be capital ";
        document.getElementById("err1").style.visibility="visible" ;
       setTimeout(() => {
        document.getElementById("err1").style.visibility="hidden" ;
       }, 1000);
        return false ;
    }

    for (let index = 0; index < name.length; index++) {

        if (name[index] == " ") {

            space = index ;
            break ;
        }
        
    }
   

    if (name[space+1] == name[space+1].toLowerCase()) {

        document.getElementById("err1").innerHTML="last name first  letter must be capital ";
        document.getElementById("err1").style.visibility="visible" ;
        setTimeout(() => {
        document.getElementById("err1").style.visibility="hidden" ;
            
        }, 1000);
        return false ;


    }

    return true ;
    
}

function id_checker(){

    let id = document.querySelector(".i2").value ;

    if (id.length==0) {

        document.getElementById("id1").style.visibility="visible" ;
        setTimeout(() => {
        document.getElementById("id1").style.visibility="hidden" ;
            
        }, 1000);
        return false ;
        
    }

    let ch = false ;

    for (let index = 0; index < id.length; index++) {

        if (id[index]=="@") {

            ch=true ;
            break ;
        }
    }

    if (ch==false) {
        
        document.getElementById("id1").innerHTML="Enter valid Email Address" ;
        document.getElementById("id1").style.visibility="visible" ;
        setTimeout(() => {
        document.getElementById("id1").style.visibility="hidden" ;
            
        }, 1000);
        return false ;
    }

    return true ;   

    
}

function password_checker(){

    pass= document.querySelector(".i3").value ;

    if(pass.length == 0){

        document.getElementById("invalid-password").style.visibility="visible" ;
        setTimeout(() => {
            document.getElementById("invalid-password").style.visibility="hidden" ;
        }, 1000);
        return false ;
    }


    if (pass.length <= 4) {

        document.getElementById("invalid-password").innerHTML="Weak Password" ;
        document.getElementById("invalid-password").style.color="green" ;
        document.getElementById("invalid-password").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("invalid-password").style.visibility="hidden";
        }, 1000);
        return false ;

        
    }



    if(pass.length > 13 ){

        document.getElementById("invalid-password").innerHTML="atleast 13 characters  " ;
        document.getElementById("invalid-password").style.color="red" ;
        document.getElementById("invalid-password").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("invalid-password").style.visibility="hidden";
        }, 1000);
        return false ;

    }

    let checker = false ;
    let specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

    for (let index = 0; index < pass.length; index++) {
       
        if (specialCharacters.test(pass[index])) {

            checker = true ;
            break ;
        }  
    }

    if (checker== false ) {

        document.getElementById("invalid-password").innerHTML="Atleast 1 special Character " ;
        document.getElementById("invalid-password").style.color="red" ;
        document.getElementById("invalid-password").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("invalid-password").style.visibility="hidden";
        }, 1000);
        return false ;
        
    }



    return true ;
}

