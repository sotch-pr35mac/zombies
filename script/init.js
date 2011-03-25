$(document).ready(function() {
  var people = [];
  for(var i=0; i<=6; i++) {
    people.push(new Person())
  }
  
  var zombie = new Zombie();
  
  setInterval(function() {
    zombie.moveTowards(people);
  }, 10)
})