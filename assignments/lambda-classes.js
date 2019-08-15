// Base class
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }


    speak(name, location){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
};


// Instructor class
class Instructor extends Person {
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }


    demo(subject){
        return `Today we are learning about ${subject}`;
    };


    testResults(student, subject){
        return `${student} receives a 2 on ${subject}`;
    }


    grade(student){
        return Student.grade = `${student} gets a ${Math.floor(Math.random() * 101) + 1} on today's test`;
    }
};


// Student class
class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = [];
    }


    listsSubject(){
        return `My favorite subjects are ${this.favSubjects}`;
    }


    PRAssingment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }


    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }
};


//Project manager class
class projectManager extends Instructor {
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }


    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, stand up time!`;
    }


    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
};


// Instructor Objects


// Nick object
const Nick = new Instructor({
    name: 'Nick',
    age: 30,
    location: 'Idaho',
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: 'Idaho Potatoes!'
});




// Parker object
const Parker = new Instructor({
    name: 'Parker Party-a-lot',
    age: 15,
    location: 'Los Angeles',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: 'I need to go home to sleep'

});


// Utah Boy object
const LilPump = new Instructor({
    name: 'Lil Pump',
    age: 18,
    location: 'Los Angeles',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'eskeddit'

});

// Students

// Sarah object
const Sarah = new Student({
    name: 'Sarah',
    age: 24,
    location: 'Sin City',
    previousBackground: 'Dancer',
    className: 'WEBPT9',
    favSubjects: ['HTML', 'CSS', 'UX Design']
});

// George object
const BostonGeorge = new Student({
    name: 'Boston George',
    age: 30,
    location: 'Boston',
    previousBackground: 'Professional Pilot',
    className: 'BostonPT17',
    favSubjects: ['React', 'Javascript']
});

// Rick Ross object
const RickRoss = new Student({
    name: 'Rick Ross',
    age: 39,
    location: 'Miami',
    previousBackground: 'Unknown',
    className: 'MiamiVicePT10',
    favSubjects: ['Malware', 'Ransomware']
});

// Project Managers

// Tucker object
const TuckerCarlson = new projectManager({
    name: 'Tucker Carlson',
    age: 58,
    location: 'Washington DC',
    gradClassName: 'FoxNewsPT9',
    favInstructor: 'Nick'
});

// Sean Hanity object
const SeanHanity = new projectManager({
    name: 'Sean Hanity',
    age: 69,
    location: 'New York',
    gradClassName: 'FoxNewsPT12',
    favInstructor: 'Lil Pump'
});