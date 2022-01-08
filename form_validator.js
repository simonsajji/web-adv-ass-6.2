// --> name = at least 10 characters
// --> email = must be a valid email
// --> password = must contain one Uppercase , one lowercase , one special character and must
//     be of length at least 10
// --> password2 = must be same as password

// --> on wrong validation , submit button must not work and also input feild have red border
// --> on correct validation , submit button will work and also input feild have green border
// --> on correct submit log the data to console

const form=document.getElementsByTagName("form")[0];


// Prevent form from bypassing

form.removeAttribute("novalidate")   //This will help prevent bypassing the form
console.log(form);


// Make every input field "required"


const listOfInputs=document.getElementsByTagName("input");

for(a of listOfInputs){
    a.required=true;
}

// Check the pattern for name (at least 10 characters)

const customer_name=document.getElementById("customerName");

customer_name.minLength=10;  //Min Length is set to 10

// Checking whether it is a valid email

const email=document.getElementById("customerEmail");

email.pattern="[a-zA-Z0-9]+@[A-Za-z0-9.-]+\.[a-zA-z]";

// checking the password pattern

const password=document.getElementById("pass");
const confirm_password=document.getElementById("pass_confirm");

let orginal_pass="";
let bool;
let bool2;

function passCheck1(){
    
    let data=password.value;
    bool=true;
    

    let inp_pass=document.getElementById("pass");

        
    const number_reg=new RegExp('(?=.*[0-9])');
    const lowercase=new RegExp('(?=.*[a-z])');
    const uppercase=new RegExp('(?=.*[a-z])');
    const special=new RegExp('(?=.*[#@$%^&])');
    const len_pass=new RegExp('.{10,}');

    



    if(number_reg.test(data)){
        // console.log(true);
        bool=bool&&true;
    }
    else{
        // console.log(false);
        bool=bool&&false;
    }

    if(lowercase.test(data)){
        // console.log(true);
        bool=bool&&true;
    }
    else{
        // console.log(false);
        bool=bool&&false;
    }

    if(uppercase.test(data)){
        // console.log(true);
        bool=bool&&true;
    }
    else{
        // console.log(false);
        bool=bool&&false;
    }

    if(special.test(data)){
        // console.log(true);
        bool=bool&&true;
    }
    else{
        // console.log(false);
        bool=bool&false;
    }
    if(len_pass.test(data)){
        // console.log(true);
        bool=bool&&true;
    }
    else{
        // console.log(false);
        bool=bool&&false;
    }

    // console.log(bool);

    if(bool==false){
        let check=document.getElementsByClassName("check_pass")[0];
        check.innerText='❌';
        check.style.color="red";
        // inp_pass.style.border="1px red solid";


    }
    else if(bool==true){
        let check=document.getElementsByClassName("check_pass")[0];
        check.innerText='✔';
        check.style.color="green";
        // inp_pass.style.border="1px green solid";
    




        

    }

    


}


let bool_confirm=true;

function passCheck2(){
    const confirm_password=document.getElementById("pass_confirm");
  
    bool2=true;


    let check=document.getElementsByClassName("check_pass")[1];

    if(confirm_password.value==password.value){

        bool2=true;


        check.innerText='✔';
        check.style.color="green";


    }

    else{
        bool2=false;
        check.innerText='❌';
        check.style.color="red";

    }

  


}


password.addEventListener('keyup', passCheck1);
confirm_password.addEventListener('keyup', passCheck2);




let submit=document.getElementById("customerOrder");
submit.addEventListener('click', function(){

    let submit_bool=true;



    let name_val=document.getElementById("customerName").value;
    // For the name input with minLength=10
    if(name_val.length<10){
        customer_name.style.border="1px solid red";
        submit_bool=submit_bool&&false;
    }
    else if(name_val.length>=10){
        customer_name.style.border="1px solid green";
        submit_bool=submit_bool&&true;

    }

    let inp_pass=document.getElementById("pass");
    let inp_pass_confirm=document.getElementById("pass_confirm");

    // FOr the case of email
    
    const email_reg=new RegExp('[a-zA-Z0-9]+@[A-Za-z0-9-]+\.com');

    if(email_reg.test(email.value)){
        console.log("email is",true);
        email.style.border="1px solid green";
        submit_bool=submit_bool&&true;


    }
    else{
        console.log("email is",false);
        email.style.border="1px solid red";
        submit_bool=submit_bool&&false;

    }

    // For the case of Password

    if(bool==true){
        inp_pass.style.border="1px solid green";
        submit_bool=submit_bool&&true;
    }
    else{
        inp_pass.style.border="1px solid red";
        submit_bool=submit_bool&&false;

    }

    // For the case of Confirm password

    if(bool2==true){
        inp_pass_confirm.style.border="1px solid green";
        submit_bool=submit_bool&&true;

    }
    else{
        inp_pass_confirm.style.border="1px solid red";
        submit_bool=submit_bool&&false;


    }

    if(submit_bool==true){
        console.log("Name:",customer_name.value);
        console.log("Email:",email.value);
        console.log("Pass:",inp_pass.value);
    }
    

});