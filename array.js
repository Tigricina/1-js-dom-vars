'use strict';
function NewPerson(n, p, a, s) {
    this.name = n;
    this.profession = p;
    this.age = a;
    this.salary = s;
}

var personNames =["Ekaterina", "Mariya", "Oleg", "Yan", "Egor", "Brungilda", "Semen", "Mephodii", "Zinaida", "Marfa"];
var personProfessions = ['engineer', 'manager', 'prime minister', 'programmer', 'teacher', 'writer', 'singer', 'seller', 'buyer', 'deliveryman'];

 function choice(min, max) {
	var elementOfArray = Math.floor(Math.random() * (max - min + 1) + min);
	return elementOfArray
} 

var persons = [];
var cards = [];
var salaries = []; 
var infozone = [];
var infos = [];
var mainzone = document.getElementById("mainzone");

 for (var i = 0;i=personProfessions.length;i++) {
    var namerand = Math.floor(Math.random() * personNames.length);
    var jobrand = Math.floor(Math.random() * personProfessions.length);
    var agerand = choice (20, 35);
    var salaryrand = choice (20, 120);
    
    persons[i] = new NewPerson(personNames[namerand], personProfessions[jobrand], agerand, salaryrand);
    personNames.splice(namerand,1);
    personProfessions.splice(jobrand,1);
        
    cards = document.createElement('ul');
    cards.id = 'personCard';
    mainzone.appendChild(cards);

    salaries = document.createElement('ul');
    salaries.id = 'personSalary'
    mainzone.appendChild(salaries);

    infozone = document.createElement('ul');
    infozone.id = 'playerInfo';
    cards.appendChild(infozone);

    infos = document.createElement('li');
    infos.innerHTML = '<strong>Name:</strong><span> '+persons[i].name+'</span> ' +
        '<strong>Job:</strong> '+persons[i].profession+' ' +
        '<strong>Age:</strong> '+persons[i].age+' '+'<strong>Salary:</strong> '+persons[i].salary+' ';
    infozone.appendChild(infos);

   mainzone.appendChild(document.createElement('p'));

if (persons[i].salary < 50) { 
infos.style.backgroundColor = 'red' 
} 
else if (persons[i].salary < 80) { 
 infos.style.backgroundColor = 'yellow' 

} else { 

infos.style.backgroundColor = 'green' 

} ;

if (persons[i].age >=20 && persons[i].age <=27) { 
 infos.innerHTML = '<strong>Name:</strong><strong> '+persons[i].name+'</strong> ' +
        '<strong>Job:</strong> '+persons[i].profession+' ' +
        '<strong>Age:</strong> '+persons[i].age+' '+'<strong>Salary:</strong> '+persons[i].salary+' '; 
} ; 

if (persons[i].profession == 'deliveryman') { 
 infos.style.textDecoration = 'underline' 
};

var girlname = ["Ekaterina", "Mariya", "Brungilda", "Zinaida", "Marfa"];
 for (var k = 0; k<=girlname.length; k++) { 
 	if (persons[i].name == girlname[k]) { 
 
infos.style.fontSize = '1.5em' 
	}
}
}