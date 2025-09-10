const emp_1 = {
    firstName : 'Gowthami',
    lastName: 'Lingeshwaran',

    empDetails:function(qualification,place){
        console.log(`${this.firstName} ${this.lastName} ${qualification} ${place}`)
    }
}

const emp_2 = {
    firstName : 'Vatchala',
    lastName: 'TharaSingh'
}
const emp_3 = {
    firstName : 'Maragatham',
    lastName: 'Udhaya'
}
const emp_4 = {
    firstName : 'Sulochana',
    lastName: 'Lingeshwaraan'
}

emp_1.empDetails('bcom','coimbatore');
emp_1.empDetails.call(emp_2,'BTEC','Delhi');
// emp_1.empDetails.call(emp_3)
emp_1.empDetails.apply(emp_3,['BSC', 'Bangalore']);
newfun = emp_1.empDetails.bind(emp_4, 35,'ooty')
newfun();

// *******************************************************************************

let student_1 = {
    name:'Sunitha',
    place:'Ondipudur',
    mark:450,

    studentDetails:function(result, active){
        console.log(`${this.name} ${this.place} ${this.mark} ${result} ${active}`);
    }
}

let student_2 = {
    name:'Divya',
    place:'Pattanam',
    mark:482,

}

let student_3= {
    name:'Sri Devi',
    place:'Palayam',
    mark:324,

}



student_1.studentDetails()

// Call method****

student_1.studentDetails.call(student_2, 'fail');

// Apply Method*****

student_1.studentDetails.apply(student_2, ['pass','VeryGood']);

// Bind Method***********

let studenRecord = student_1.studentDetails.bind(student_2, 'pass', 'Good' );
studenRecord();

document.title
