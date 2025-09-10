class Students {
    constructor(name, standard, status){
        this.name = name
        this.standard = standard
        this.status = status
    }

    result(){
        return(`${this.name} is ${this.standard} is ${this.status}`)
    }
}

const studentDetails = new Students('Gowthami', 14, 'pass' );

// console.log(studentDetails.result());
// console.log(studentDetails);

// *******************Inheritance method is *******************

