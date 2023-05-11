
class Student {

    /*
    public firstName: string;
    public lastName: string;
    public age: number;
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
*/

    //Above boiler plate code can be defined as below
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {}

    enroll(course: string) {
        this.courses.push(course);
    }

    listCourses() {
        return this.courses.slice();
    }
}


const student = new Student('Max', 'Schwarz', 32, ['Angular', 'Java']);
student.enroll('React');