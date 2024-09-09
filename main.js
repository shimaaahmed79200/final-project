function validate(){
    let text1 = '';
    let text2 = '';
    let text3 = '';
    let text4 = '';
    
    if(document.myform.project.value=="" & document.myform.email.value=="" & document.myform.project.value=="" & document.myform.tell.value=="" & document.myform.Telegram.value==""){
        text1 = "Please enter, How..?";
        document.getElementById("demo1").innerHTML = text1;
        document.myform.project.focus();
        // -------------------------------
        text2 = "Please enter email.";
        document.getElementById("demo2").innerHTML = text2;
        document.myform.email.focus();
        // -------------------------------
        text3 = "It's Required?";
        document.getElementById("kimo").innerHTML = text3;
        document.myform.tell.focus();
        // -------------------------------
        text4 = "Please enter Telegram.";
        document.getElementById("demo4").innerHTML = text4;
        document.myform.Telegram.focus();
        return false;
    }

    if(document.myform.project.value==""){
        text1 = "Please enter, How..?";
        document.getElementById("demo1").innerHTML = text1;
        document.myform.project.focus();
        return false;
    }

    if(document.myform.email.value==""){
        text2 = "Please enter email.";
        document.getElementById("demo2").innerHTML = text2;
        document.myform.email.focus();
        return false;
    }

    var emailld = document.myform.email.value;
    let sugar = emailld.indexOf("@");
    let salt = emailld.lastIndexOf(".") ;

    if(sugar < 1 || salt < 2){
        text2 = "Please enter correct email address.";
        document.getElementById("demo2").innerHTML = text2;
        document.myform.email.focus();
        return false;
    }

    if(document.myform.tell.value==""){
        text3 = "It's Required?";
        document.getElementById("kimo").innerHTML = text3;
        document.myform.tell.focus();
        return false;
    }

    if(document.myform.Telegram.value==""){
        text4 = "Please enter Telegram.";
        document.getElementById("demo4").innerHTML = text4;
        document.myform.Telegram.focus();
        return false;
    }

    var Telegramld = document.myform.Telegram.value;
    let tea = Telegramld.indexOf("@");
    let coffee = Telegramld.lastIndexOf(".") ;

    if(tea < 1 || coffee < 2){
        text4 = "Please enter correct Telegram address.";
        document.getElementById("demo4").innerHTML = text4;
        document.myform.Telegram.focus();
        return false;
    }

    

    return (true);
}


