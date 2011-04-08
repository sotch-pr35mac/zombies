var moveObjects = 0;

$(document).ready(function() {
  var people = [];
  for(var i=0; i<7; i++) {
    people.push(new Person())
  }
  
  var zombie = new Zombie();

  moveObjects = setInterval(function() {
    var x = 0;
	zombie.moveTowards(people);
	while(x<people.length) {
		people[x].moveAway(zombie, people, x);
		x++;
	}
  }, 10)
})