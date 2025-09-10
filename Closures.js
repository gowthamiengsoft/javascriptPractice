function data(outsideData){

    // console.log(outsideData);
    // console.log(insideData); Innerfunction data will not call  in outerfunction

const insidefunc = (insideData)=>{

console.log(insideData);
console.log(outsideData);

} 

insidefunc('MyWorld');

}
data('Welcome');
// ********************************************************************************

function add(outerfunction){

console.log(outerfunction);


const total = (innerfunction)=>{

console.log(innerfunction, outerfunction);
console.log(outerfunction);

}
total('welcome Gowthami and ')

}
add('Vatchala')

// **************************************************************************************

function add (a,b){

    console.log(a+b)
const total = (insidefunc) =>{

console.log(insidefunc)

}

total(`${a+b} persons`);

}

add(50,20)
// *****************************************************************************************

function points (totalarg){
    console.log('Welcome to Closures');
    const totalPoints = totalarg

//Add, Sub, GetTotal

const addPoints = () =>{

    return totalPoints + 5

}

const subPoints = () =>{

    return totalPoints - 1
    
}

const getPoints = () =>{

    return totalPoints

}

return {addPoints, subPoints, getPoints}

}

const total = points(102);

console.log(total.addPoints());
console.log(total.getPoints())
console.log(total.subPoints())

// **************************************************************************************

