function Person() {
  var wTopNumber = $(window).height();
  var wLeftNumber = $(window).width();
  var pTopNumber = Math.floor(Math.random()*wTopNumber);
  var pLeftNumber = Math.floor(Math.random()*wLeftNumber);
  this.htmlElement = $("<div>").attr("class", "person");
  $("body").append(this.htmlElement);
  this.htmlElement.offset({
    top: pTopNumber,
    left: pLeftNumber
  });
}

Person.prototype = {
  moveAway: function(zombie, people, personNumber) {
	var windowTop = $(window).height();
	var windowLeft = $(window).width();
	
	var personTop = people[personNumber].htmlElement.offset().top;
    var personLeft = people[personNumber].htmlElement.offset().left;

    var zombieTop = zombie.htmlElement.offset().top;
    var zombieLeft = zombie.htmlElement.offset().left;

	var distance = Math.sqrt(Math.pow(personLeft - zombieLeft,2)+Math.pow(personTop - zombieTop,2));
	var avoidZombieLeft = (personLeft - zombieLeft)/distance*(windowLeft-50)/2;
	var avoidZombieTop = (personTop - zombieTop)/distance*(windowTop-50)/2;
	var avoidWallLeft = windowLeft/2 - personLeft;
	var avoidWallTop = windowTop/2 - personTop;
	var moveAwayLeft = (avoidZombieLeft + avoidWallLeft)/40;
	var moveAwayTop = (avoidZombieTop + avoidWallTop)/40;
	
	people[personNumber].htmlElement.offset({
		top: personTop+moveAwayTop,
		left: personLeft+moveAwayLeft
	});
  }
};