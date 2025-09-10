// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const family = 'Gowthami';
//         if (family){
//             resolve(family);
//         }else{
//             reject(new Error('No data available'));
//         }
//     }, 3000);
// })

// data
// .then((name) => { 
//     console.log(name);
// })
// .catch((error) => {
//     console.log(error.stack);
//  })
// .finally(() => {
//     console.log('Welcome');
//  });
// *********************************************************************************************
//  const data1 = new Promise((resole, reject)=>{

//     const student = false;

//     if(student){
//         resole(`${student} has pass`);
//     }else{
//         reject(new Error(`${student} has fail`));
//     }

//  })

//  data1
// .then((name)=>{
//     console.log(name);
// })
// .catch((error)=>{
//     console.log(error.stack);
// })
// .finally(()=>{
//     console.log('Hi')
// })

// *********************************************************************************************

const mark = new Promise((resolve, reject)=>{

    const mark = 30;

    if(mark >= 35){
        resolve('Pass');
    }else if(mark < 34){
        reject(new Error('Fail'));
    }
})

mark
.then((name)=>{
    console.log(name);
})
.catch((error)=>{
    console.log(error.stack);
})
.finally(()=>{
    console.log('End of result');
})