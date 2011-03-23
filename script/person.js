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
  
};