// document.getElementById('signupForm').addEventListener('submit', function(e) {
//       e.preventDefault();

// const { createElement } = require("react");

//       // Get form values
//       const name = document.getElementById('name').value.trim();
//       const email = document.getElementById('email').value.trim();
//       const password = document.getElementById('password').value;
//       const confirmPassword = document.getElementById('confirmPassword').value;

//       let isValid = true;

//       // Clear all error messages
//       document.getElementById('nameError').textContent = '';
//       document.getElementById('emailError').textContent = '';
//       document.getElementById('passwordError').textContent = '';
//       document.getElementById('confirmPasswordError').textContent = '';

//       // Name validation
//       if (name.length < 2) {
//         document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
//         isValid = false;
//       }

//       // Email validation
//       const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
//       if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Enter a valid email address.';
//         isValid = false;
//       }

//       // Password validation
//       if (password.length < 6) {
//         document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
//         isValid = false;
//       }

//       // Confirm password validation
//       if (password !== confirmPassword) {
//         document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
//         isValid = false;
//       }

//       if (isValid) {
//         alert('Signup successful!');
//         document.getElementById('signupForm').reset();
//       }
//     });

// let bignum = 12345678910n;

// console.log(bignum + 2024n);
// console.log(bignum + 2n);

// let input;
// input = prompt('Enter your name', 'enter your name');
// console.log(input);

// const butn = document.getElementById('send');

// butn.addEventListener('click', (event)=>{

//   butn.textContent = 'Rejesterd confirmed';
//   console.log('clicked');
// });

// butn.addEventListener('mouseover', (event)=>{

//   butn.textContent = 'Click Button';
//   console.log('clicking');
// })

// butn.addEventListener('mouseout', (event)=>{

//   butn.textContent ='Rejester';

//   console.log('out');
// })

// const btnno = document.getElementById('no');

// document.addEventListener('keydown', (event)=>{
//   console.log(event.key);
//   switch(event.key){
//     case 'ArrowUp':
//       btnno.textContent=Number(btnno.textContent)+1;
//       break;
//      case 'ArrowDown':
//      btnno.textContent=Number(btnno.textContent)-1;
//      break;

//   }

// })
// forms with ul list type ************************************************
// const inputvalue = document.getElementById('inputval');
// const subbtn = document.getElementById('sub');
// const list = document.getElementById('list');
// const canbutn = document.getElementById('cancelbun');

// subbtn.addEventListener('click', (event)=>{
//   console.log(inputvalue.value);
//   if(inputvalue.value != ''){
//     list.innerHTML += `<li>${inputvalue.value}</li>`
//   inputvalue.value ='';
    
//   };
  
// });
// canbutn.addEventListener('click', (event)=>{
//   if(inputvalue.value){
//       inputvalue.value = '';
//   }

// })

//Personal Details Form *********************************

const firstName = document.getElementById('inputbox');
const lastName = document.getElementById('lastnamebox');
const addrs = document.getElementById('addbox');
const emailbox = document.getElementById('emailbox');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const phoneNo = document.getElementById('telnum');
const qualification = document.getElementById('quali');

const butsub = document.getElementById('submbutn');
const butncanl = document.getElementById('canlbutn');

const firstError = document.getElementById('firstnameError');
const lastnameError = document.getElementById('lastnameError');
const addrssError = document.getElementById('addsError');
const emailError = document.getElementById('mailError');
const phonNoError = document.getElementById('phoneError');

const yourName = document.getElementById('name');
const lastNames = document.getElementById('lastName'); 

const nameValue = document.getElementById('nameValue');
const addsValue = document.getElementById('addsValue');
const emailValue = document.getElementById('emailValue');
const cityzipValue = document.getElementById('cityzipValue');
const phonevalue = document.getElementById('phonevalue');
const Qualivalue = document.getElementById('Qualivalue');


const subTable = document.getElementById('submitTable');

const submmission = [];

butsub.addEventListener('click', (event)=>{
    event.preventDefault();

    // Clear previous error messages

    firstError.textContent = '';
    lastnameError.textContent = '';
    addrssError.textContent = '';
    emailError.textContent = '';
    phonNoError.textContent = '';

    let isValid = true;
   

    if(firstName.value.trim() === "" || firstName.value.trim().length < 2){
        
        firstError.textContent ='Please Enter your valid firstName';  
        isValid = false;           
                
    }
    // console.log(firstName.value);
    
    if(lastName.value.trim() === ""){
        lastnameError.textContent = 'Please Enter Your lastName';
        isValid = false;
        
    }
    // console.log(lastName.value);

    if(addrs.value.trim() === ""){
        addrssError.textContent = 'Please Enter Your Address';
        isValid = false;
    }
    // console.log(addrs.value);

    if(emailbox.value.trim() === ''){
       emailError.textContent = 'Enter Your email'; 
        isValid = false;
    }
    // console.log(emailbox.value);
    
    if(phoneNo.value.trim() === '' || phoneNo.value.trim().length < 10){
        phonNoError.textContent = 'Enter Your correct PhoneNo';
         isValid = false;
    }
    //if form is not valid****
    if (!isValid){
        return;
    }

    const formData ={
        
        name :`${firstName.value} ${lastName.value}`,
        address :addrs.value,
        city:city.value,
        zip:zip.value,
        email:emailbox.value,
        phone:phoneNo.value,
        Qualifi: qualification.value
    }

        submmission.push(formData);
    
   //Display Values  
   
     nameValue.textContent =(`${firstName.value} ${lastName.value}`);
     addsValue.textContent = addrs.value;
     emailValue.textContent = emailbox.value;
     cityzipValue.textContent = (`${city.value} - ${zip.value}`);
     phonevalue.textContent = phoneNo.value;
     Qualivalue.textContent = qualification.value;    

     //clear form fields

     firstName.value='';
        lastName.value ='';
        addrs.value ='';
        emailbox.value ='';
        city.value = '';
        zip.value ='';
        phoneNo.value = '';
        qualification.value = '';

    //Table datas 
    subTable.innerHTML = '';
    submmission.map((result, i)=>{
        subTable.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${result.name}</td>
            <td>${result.address}</td>
            <td>${result.city}</td>
            <td>${result.zip}</td>
            <td>${result.email}</td>
            <td>${result.phone}</td>
            <td>${result.Qualifi}</td>            
        
        </tr>`
    })
    




    
});

butncanl.addEventListener('click', (event)=>{
    if(firstName.value, lastName.value, emailbox, city, zip, phoneNo, qualification ){
        firstName.value='';
        lastName.value ='';
        addrs.value ='';
        emailbox.value ='';
        city.value = '';
        zip.value ='';
        phoneNo.value = '';
        qualification.value = '';

    }

});









