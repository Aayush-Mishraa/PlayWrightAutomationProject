class Person {

    first = 'Ankit';
  
    last =  'Choudhary';
  
    Age = 23;
  
   
  
    get location() {
  
      return "India";
  
    }
  
   
  
    constructor(firstname, lastname) {
  
      this.firstname = firstname;
  
      this.lastname = lastname;
  
    }
  
   
  
    fullname() {
  
      return this.firstname + ' ' + this.lastname;
  
    }
  
  }
  
   
  
  const Person1 = new Person();

  console.log(Person.Age);
  console.log(Person.fullname());
  console.log(Person.location);

  Person2 = new Person('John', 'Doe');
  console.log(Person2.fullname());