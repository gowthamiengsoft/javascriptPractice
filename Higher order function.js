// function x(a){
//     a()
// }

// function y(b){
//     console.log('Hello Gowthami')
// }

// x(y);
// ***********************************************

let item = [ 5, 15, 2, 8, 9];

const result = item.reduce(process,0)

function process(total, item){

    return total + item;
}

console.log(result);

// ****************************************
