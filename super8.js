function CheckName(){
    let name = document.getElementById('username').value;
    let uperrormsg = document.getElementById('NameUpperMsg');
    let lowererrormsg = document.getElementById('NameLowerMsg');
    if(name.length <= 2){
        lowererrormsg.innerHTML = '<img src="icon-warning.png"> Field is Required';
        uperrormsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else{
        uperrormsg.innerHTML = '<img src="tick.png">';
        lowererrormsg.innerHTML = '';
        return true;
    }
}
function CheckEmail(){
    let email = document.getElementById('email').value;
    let EmailUpperMsg = document.getElementById('EmailUpperMsg');
    let EmailLowerMsg = document.getElementById('EmailLowerMsg');
    let emailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length = 0){
        EmailLowerMsg.innerHTML = '<img src="icon-warning.png"> Field is Required';
        EmailUpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else if(!email.match(emailFormat)){
        EmailLowerMsg.innerHTML = '<img src="icon-warning.png"> Invalid Email Address';
        EmailUpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else{
        EmailUpperMsg.innerHTML = '<img src="tick.png">';
        EmailLowerMsg.innerHTML = '';
        return true;
    }
}
function CheckPass1(){
    let pass1 = document.getElementById('pass').value;
    let PassUpperMsg = document.getElementById('PassUpperMsg');
    let PassLowerMsg = document.getElementById('PassLowerMsg');
    if(pass1.length == 0){
        PassLowerMsg.innerHTML = '<img src="icon-warning.png"> Field is Required';
        PassUpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else if(pass1.length < 8){
        PassLowerMsg.innerHTML = '<img src="icon-warning.png"> Password Must be at Least 8 Characters';
        PassUpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else{
        PassUpperMsg.innerHTML = '<img src="tick.png">';
        PassLowerMsg.innerHTML = "";
        return true;
    }
}
function CheckPass2(){
    let pass1 = document.getElementById('pass').value;
    let pass2 = document.getElementById('conf_pass').value;
    let Pass2UpperMsg = document.getElementById('Pass2UpperMsg');
    let Pass2LowerMsg = document.getElementById('Pass2LowerMsg');
    if(pass2.length == 0){
        Pass2LowerMsg.innerHTML = '<img src="icon-warning.png"> Field is Required';
        Pass2UpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else if(pass2.length < 8){
        Pass2LowerMsg.innerHTML = '<img src="icon-warning.png"> Password Must be at Least 8 Characters';
        Pass2UpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else if(pass2 != pass1){
        Pass2LowerMsg.innerHTML = '<img src="icon-warning.png"> Password Does not Match';
        Pass2UpperMsg.innerHTML = '<img src="cross.png">';
        return false;
    }
    else{
        Pass2UpperMsg.innerHTML = '<img src="tick.png">';
        Pass2LowerMsg.innerHTML = "";
        return true;
    }
}
function CheckAge(){
    let birthday = document.getElementById('birthday').value;
    let BirthMsg = document.getElementById('BirthMsg');
    let bd = new Date(birthday);
    let now = new Date();
    let todayear = now.getFullYear();
    let birthyear = bd.getFullYear();
    let age = todayear - birthyear;
    if(birthday == 0){
        BirthMsg.innerHTML = '<img src="icon-warning.png"> Field is Required';
        return false;
    }
    else if(age < 18){
        BirthMsg.innerHTML = '<img src="icon-warning.png"> Your age must be 18 or above';
        return false;
    }
    else{
        BirthMsg.innerHTML = '<img src="tick.png">';
        return true;
    }
}
function CheckLetters(){
    let bio = document.getElementById('textarea').value;
    // let count = maxlength - bio.value.length;
    let AreaMsglow = document.getElementById('AreaMsgLow');
    let AreaMsgup = document.getElementById('AreaMsgUp');
    var count = 140 - bio.length;
    if(bio.length == 0){
        AreaMsglow.innerHTML = '<img src="icon-warning.png"> Please provide us with overview about you'
        return false;
    }
    else{
        AreaMsglow.innerHTML = count + ' Letter Left';
        return true;
    }
}
submit.addEventListener('click', (e)=>{
    e.preventDefault();
if(CheckName() && CheckEmail() && CheckPass1() && CheckPass2() && CheckAge() && CheckLetters()){
    document.location.href = 'signup-success.html';
    return true; 
}
    return false;
})
