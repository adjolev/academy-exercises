function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    console.log(`Full name ${this.firstName} and ${this.lastName}`);
  };
}

function Student(studentId, firstName, lastName, age, academyName = "SEDC") {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;
  this.study = function () {
    console.log(`${this.firstName} is studying in the ${this.academyName}`);
  };
  this.student = function (student) {
    console.log(`${student} is learning in ${this.academyName}`);
  };
}

function DesignStudent(
  academyName,
  studentId,
  firstName,
  lastName,
  age,
  isStudentOfTheMonth = false
) {
  Object.setPrototypeOf(
    this,
    new Student(studentId, firstName, lastName, age, academyName)
  );
  console.log(this);
  this.isStudentOfTheMonth = isStudentOfTheMonth;
  this.attendAdobeExam = function () {
    console.log(`The student ${this.firstName} is doing an adobe exam`);
  };
}

function CodeStudent(
  hasIndividualProject,
  hasGroupProject,
  academyName,
  studentId,
  firstName,
  lastName,
  age
) {
  Object.setPrototypeOf(
    this,
    new Student(studentId, firstName, lastName, age, academyName)
  );
  this.hasIndividualProject = hasIndividualProject;
  this.hasGroupProject = hasGroupProject;
  this.doProject = function (type) {
    if (type === "individual") {
      this.hasIndividualProject = true;
      this.hasGroupProject = false;
      console.log(`${this.firstName} is in Individual project`);
    }
    if (type === "group") {
      this.hasGroupProject = true;
      this.hasIndividualProject = false;
      console.log(`${this.firstName} is in group project`);
    }
  };
}

function NetworkStudent(
  academyPart,
  academyName,
  studentId,
  firstName,
  lastName,
  age
) {
  Object.setPrototypeOf(
    this,
    new Student(studentId, firstName, lastName, age, academyName)
  );
  this.academyPart = academyPart;
  this.attendCiscoExam = function () {
    console.log(`the student ${firstName} is doing a cisco exam!`);
  };
}

let codeStudent1 = new CodeStudent(
  false,
  true,
  "Brainster",
  1,
  "Jane",
  "Doe",
  25
);
let networkStudent1 = new NetworkStudent(2, "SEDC", 3, "Joe", "Doe", 24);
let designStudent1 = new DesignStudent("SEMOS", 2, "Bob", "Bobsky", 24, true);

let individual = "individual";
let group = "group";

designStudent1.attendAdobeExam();
codeStudent1.doProject(group);
networkStudent1.attendCiscoExam();

console.log(
  codeStudent1.academyName,
  networkStudent1.academyName,
  designStudent1.academyName
);
