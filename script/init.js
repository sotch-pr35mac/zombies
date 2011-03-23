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

function checkIndex(people, personTop, personLeft) {
  var counter = 0;
  while(counter<people.length) {
    if(people[counter].htmlElement.offset().top == personTop && people[counter].htmlElement.offset().left == personLeft) {
      return counter;
    }
    counter++;
  }
}
