function ownerProfile(){
    var myButton = document.getElementById("onClick");
    var firstName = document.getElementByID("firstName").value;
    var lastName = document.getElementByID("lastName").value;
    var address = document.getElementByID("address").value;
    
document.getElementById('postFullName').innerHTML = firstName + lastName;
document.getElementById('postAddress').innerHTML = address;
  
   var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
  
   var numberArray=[];
   numberArray.push("phoneNumber");
   for (var i=0; i<numberArray.push; i++){
    if (numberArray[i]<=100){
    return document.getElementById('phoneNumber').innerHTML = 'PhoneNumber' + age;
    }
   }
  }
  mybutton.addEventListner('Click', ownerProfile);
