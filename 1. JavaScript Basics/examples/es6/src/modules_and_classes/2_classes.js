//1. There is no new type, class is just sytnax sugar for function
class Task {

}
console.log(typeof Task); //function

//1.1 Function that you can't invoke.
function Ant () {
     console.log("me ant"); 
};
Ant();

Task();
// Uncaught TypeError: Class constructor Task cannot be invoked without 'new'

//2. 
class Task {

}

let task = new Task();
console.log(typeof task); //object


//3.
class Task {

}

let task = new Task();
console.log(task instanceof Task); //true


// In console
console.log(task);

console.log(Task);
console.dir(task);


//4. 
class Task {
    showId() {
        console.log('99');
    }
}

let task = new Task();
task.showId(); //99


//5.
class Task {
    showId() {
        console.log('99');
    }
}

let task = new Task();
console.log(task.showId === Task.prototype.showId); //true


//6. constructor metoda
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

let task = new Task(); //constructing task
task.showId(); // 99


//7. Syntax - commented out not to mess with editor syntax checks
// class Task {
//     let taskId = 99; //syntax error
    
//     constructor() {
//         console.log('constructing task');
//     }, //syntax error
//     showId() {
//         console.log('99');
//     }
// }


//8. Class definition are not hoisted
let task = new Task();
task.showId();

class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}
//Uncaught ReferenceError: Task is not defined


//13. Difference between function and class
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

function Project() { };
console.log(window.Project == Project); //true
console.log(window.Task == Task); //false


//14.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject(); //constructing Project


//15.
class Project {
    constructor(name) {
        console.log('constructing Project: ' + name);
    }
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject("ES6");//constructing Project: ES6


//16.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('constructing SoftwareProject');
    }
}


//17. Call to super() is required in constructor of derived class.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject(); 
//constructing SoftwareProject
//ReferenceError: this is not defined
// Somewhat cryptic error, isn't it?


//18. .. event if parent doesn't have defined constructor.
class Project {

}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject(); 
//constructing SoftwareProject
//ReferenceError: this is not defined


//19. Child object has access to parent methods.
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    
}

let p = new SoftwareProject(); 
console.log(p.getTaskCount()); //50


//20. Method shadowing.
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    getTaskCount() {
       return 66; 
    }
}

let p = new SoftwareProject(); 
console.log(p.getTaskCount()); //66


//21. Calling parent method from child code. Super isn't it! :)
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    getTaskCount() {
        return super.getTaskCount() + 6;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount()); //56


//22. Parent properties are from child code.
class Project {
    constructor() {
        this.Location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProject();
console.log(p.Location); //Zg


//23. Make sure that you don't forget to assign property to this! You'll do it quite a lot untill you get used to it.
class Project {
    constructor() {
        let location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProject();
console.log(p.location); //undefined


//24.
class Project {
    constructor() {
        this.location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        this.location = this.location + ' - Cro';
    }
}

let p = new SoftwareProject();
console.log(p.location);  //Zg - Cro


//25. Ho, ho, ho! Bare metal static functions!
class Project {
    static getDefaultId() {
        return 0;
    }
}

console.log(Project.getDefaultId());  //0


//26. Static is static indeed. No reason to doubt JavaScript this time. :)
class Project {
    static getDefaultId(){
        return 0;
    }
}

var p = new Project();

console.log(p.getDefaultId());  //TypeError: p.getDefaultId is not a function


//27. Static fields didn't change.
class Project {
  
}
Project.id = 99;
var p = new Project();

console.log(Project.id); //99


