
// ******Class Declaration ********************************

class Student {
    constructor(name,status){
        this.name = name,
        this.status = status
    }

    result(){
        return(`${this.name} is ${this.status}`);
    }
}

const studentresult = new Student('Gowthami', 'fail');
console.log(studentresult.result());
console.log(studentresult);
console.log(studentresult.name)

// **************************Class Expression*************************************************************

const student1 = class Student1 {
  constructor(name, age){
    this.name = name,
    this.age = age
  }
}
const student = new student1('Vatchala', 35);
console.log(student);  

console.log(student.name);

// *************Class Ananamous*****************************************************************************
const student2 = class{
  constructor(name, age){
    this.name = name,
    this.age = age
  }
}
const studentnew = new student2('Diya', 15);
console.log(studentnew);  
console.log(studentnew.name);

// *******************Get Method*********************

class Student3 {
    constructor(name,status){
        this.name = name,
        this.status = status
    }

    result(){
        return(`${this.name} is ${this.status}`);
    }

    get detail(){
        return this.name.toUpperCase();
    }
}

const studentDetail = new Student3('raksan', 14);
console.log(studentDetail.detail);