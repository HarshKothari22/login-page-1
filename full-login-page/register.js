function loginFunction(){
    var password = document.getElementById("PasswordId").value;
    var confirmPassword = document.getElementById("Confirm_PasswordId").value;
    var userFname = document.getElementById("firstName").value;
    var userLname = document.getElementById("lastName").value;
    var userCountry = document.getElementById("countryId").value;
    var userState = document.getElementById("stateId").value;
    var userCity = document.getElementById("cityId").value;
    var userPostalCode = document.getElementById("postalCodeId").value;
    var useremail = document.getElementById("emailId").value;
    var userPhoneNumber = document.getElementById("phoneNumberId").value;
    var userRead_text = document.getElementById("read_textId");



    if(userFname.trim() == "" || !/^[a-zA-Z\s]*$/.test(userFname) || userFname.length < 2){
        //for the name if not written.
        var result = confirm("Please fill the First Name or please fill the CORRECT First Name before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
      //---------------------------------------------------------------------------------
    if(userLname.trim() == "" || !/^[a-zA-Z\s]*$/.test(userLname) || userFname.length < 2){
        //for the name if not written.
        var result = confirm("Please fill the Last Name or please fill the CORRECT Last Name before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
    //-----------------------------------------------------------------------------------
    if(useremail.trim() == "" || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(useremail)){
        //for the email if not written.
        var result = confirm("Please fill the E-mail or please fill the CORRECT E-mail before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
    //-----------------------------------------------------------------------------------
    if(userCountry.trim() == "" || !/^[a-zA-Z\s]*$/.test(userCountry) || userFname.length < 2){
        //for the name if not written.
        var result = confirm("Please fill the Country or please fill the CORRECT Country before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
      //---------------------------------------------------------------------------------
    if(userState.trim() == "" || !/^[a-zA-Z\s]*$/.test(userState) || userFname.length < 2){
        //for the name if not written.
        var result = confirm("Please fill the State or please fill the CORRECT State before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
    //---------------------------------------------------------------------------------
    if(userCity.trim() == "" || !/^[a-zA-Z\s]*$/.test(userCity) || userFname.length < 2){
        //for the name if not written.
        var result = confirm("Please fill the City or please fill the CORRECT City before submitting");
        if(result){
            return true;
        }else{
            return false;
        }
    }
  //---------------------------------------------------------------------------------
    if(isNaN(userPostalCode)){
       //for phone number.
        var result = confirm("You have entered a non-numeric value, please write the Correct value");
        if(result){
            return true;
        }else{
            return false;
        }
    }
      //---------------------------------------------------------------------------------
    if(isNaN(userPhoneNumber)){
        //for phone number.
         var result = confirm("You have entered a non-numeric value, please write the Correct value");
         if(result){
             return true;
         }else{
             return false;
         }
     }
    //-----------------------------------------------------------------------------------
    if (!userRead_text.checked) {
        //for checked-box
        var result = confirm("You have not agreed to the 'Terms and Condition' Do you want to proceed?");
        if (result) {
            return true;
        } else {
            return false;
        }
    }
    //-----------------------------------------------------------------------------------
        if(password != confirmPassword){
        confirm("Password do not matched, Please try Again");
        return false;
    }else{
        return true;
    }
    
    
}
  //---------------------------------------------------------------------------------
