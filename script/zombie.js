function Zombie() {
  var wTopNumber = $(window).height();
  var wLeftNumber = $(window).width();
  var zTopNumber = Math.floor(Math.random()*wTopNumber);
  var zLeftNumber = Math.floor(Math.random()*wLeftNumber);
  this.htmlElement = $("<div>").attr("class", "zombie");
  $("body").append(this.htmlElement);
  this.htmlElement.offset({
    top: zTopNumber,
    left: zLeftNumber
  });
}

Zombie.prototype = {
  findClosest: function(people) {
    var self = this;
    return _.min(people, function(person) {
      var personTop = person.htmlElement.offset().top;
      var personLeft = person.htmlElement.offset().left;
      
      var zombieTop = self.htmlElement.offset().top;
      var zombieLeft = self.htmlElement.offset().left;
      
      var deltaY = personTop - zombieTop;
      var deltaX = personLeft - zombieLeft;
      
      var deltaYSquared = deltaY*deltaY;
      var deltaXSquared = deltaX*deltaX;
      
      return deltaYSquared + deltaXSquared;
    });
  },
  
  moveTowards: function(people) {
    var closestPerson = this.findClosest(people);
    
	if(closestPerson == undefined) {
		alert("Done!");
		clearInterval(moveObjects);
		window.stop();
	}

	else {
    var personTop = closestPerson.htmlElement.offset().top;
    var personLeft = closestPerson.htmlElement.offset().left;
    
    var zombieMultiplier = 14;
    
    var zombieTop = this.htmlElement.offset().top;
    var zombieLeft = this.htmlElement.offset().left;
    
    var deltaY = personTop - zombieTop;
    var deltaX = personLeft - zombieLeft;
    
    var Ymultiplier = (deltaY >=0 ? 1 : -1)*zombieMultiplier;
    var Xmultiplier = (deltaX >=0 ? 1 : -1)*zombieMultiplier;
    
    var deltaYSquared = deltaY*deltaY;
    var deltaXSquared = deltaX*deltaX;
    
    var hypotenuseSquared = deltaYSquared + deltaXSquared;
    
    var adjustedDeltaY = (deltaYSquared/hypotenuseSquared)*Ymultiplier;
    var adjustedDeltaX = (deltaXSquared/hypotenuseSquared)*Xmultiplier;
    
    if(Math.abs(adjustedDeltaY) > Math.abs(deltaY)) {
      adjustedDeltaY = deltaY;
    }
    
    if(Math.abs(adjustedDeltaX) > Math.abs(deltaX)) {
      adjustedDeltaX = deltaX;
    }
    
    this.htmlElement.offset({
      top: zombieTop+adjustedDeltaY,
      left: zombieLeft+adjustedDeltaX
    });
    
    if(zombieTop == personTop && zombieLeft == personLeft) {
      closestPerson.htmlElement.remove();
	  var currentPerson = people.indexOf(closestPerson);
      people.splice(currentPerson, 1);
    }
	};
  },
}