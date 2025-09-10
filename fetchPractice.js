// let = newData;

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(fileData => {    

    //         console.log(fileData);


    // // fileData.map(function(details, index){
        
    // //create Table

    //     const table = document.createElement('table');
    //     const headerow = table.insertRow();

    //     document.getElementById('table-container').appendChild(table);
    // //Table Header

    //     const heading = ['Name', 'UserName','email', 'Address','Company'];
    //     heading.forEach (headerText => {
    //         const th = document.createElement('th');
    //         th.innerText = headerText;
    //         headerow.appendChild(th);        
    //         // console.log('heading', heading);        

    //     });
    //    fileData.forEach(item =>{
    //     const row = table.insertRow();
    //     row.insertCell().innerText = item.name;
    //     row.insertCell().innerText = item.username;
    //     row.insertCell().innerText = item.email;     
    //     const address = `${item.address.street}, ${item.address.suite},${item.address.city} , ${item.address.zipcode},${item.address.geo.lat}`;  
    //     row.insertCell().innerText = address; 
    //     row.insertCell().innerText = item.company.name;
    //    })
    // })  
// });

//CALLBACK FUNCTION**********************************************************

let marks = [
    {subject : 'Tamil', score : 90},
    {subject : 'English', score : 76},
    {subject : 'Maths', score : 58},
    {subject : 'Science', score :45},
    {subject : 'S-Science', score :12},
];

function callBackpractice(name, callBackFun){
    console.log(`hello, ${name}`);

    callBackFun();
}
function sayGoodBye(){

    console.log('Goodbye');
}

callBackpractice('Gowthami',sayGoodBye );

console.log('start');
setTimeout(()=>{
console.log('progress');

},2000);

console.log('end');

// let interval = setInterval(()=>{
//     console.log(Math.random()+1)
// }, 1000);

// clearInterval(interval);



