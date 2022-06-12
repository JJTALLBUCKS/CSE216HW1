// // define a class called Undergraduate which is a child class of Student
// // Undergraduates should have a standing which can be U1, U2, U3, or U4. 
// // The class should contain a constructor that allows initialization of all instance variables including the standing.
// // The class should also contain a method called toString() that returns a string representation of the Undergraduate including the standing, GPA, and first and last name.

// class Undergraduate extends Student {
//     constructor(initKey, initFirstName, initLastName, initGPA, initStanding) {
//         super(initKey, initFirstName, initLastName, initGPA);
//         this.standing = initStanding;
//     }

//     toString() {
//         return super.toString() + " (" + this.standing + ")";
//     }
// }