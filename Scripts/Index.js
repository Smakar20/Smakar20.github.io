/* File-name: Index.js
     Name: Sohini Makar 
 	 Description: Script for home.
*/
$(document).ready(function(){
    $("#Links").hide();

    $("#CodeSample").click(function(){
     $("#Links").toggle();
    });
    /*$("#met").hide();

    $("#Blog").click(function(){
     $("#met").toggle();
    });
    
    var currentIndex = 0,
    items = $('.container div'),
    itemAmt = items.length;

    function cycleItems() {
      var item = $('.container div').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }   

    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 2000);*/
});