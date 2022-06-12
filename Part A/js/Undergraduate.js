import Student from "./People.js";
class Undergraduate extends Student {
    constructor(initKey, initFirstName, initLastName, initGPA, initStanding) {
        super(initKey, initFirstName, initLastName, initGPA);
        this.standing = initStanding;
    }

    toString() {
        return super.toString() + " (" + this.standing + ")";
    }
}
export default Undergraduate;