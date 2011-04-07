$(document).ready(function() {
  var people = [];
  for(var i=0; i<7; i++) {
    people.push(new Person())
  }
  
  var zombie = new Zombie();
  
  setInterval(function() {
    zombie.moveTowards(people);
	people[0].__proto__.moveAway(zombie, people, 0);
	people[1].__proto__.moveAway(zombie, people, 1);
	people[2].__proto__.moveAway(zombie, people, 2);
	people[3].__proto__.moveAway(zombie, people, 3);
	people[4].__proto__.moveAway(zombie, people, 4);
	people[5].__proto__.moveAway(zombie, people, 5);
	people[6].__proto__.moveAway(zombie, people, 6);
	people[7].__proto__.moveAway(zombie, people, 7);
  }, 100)
})