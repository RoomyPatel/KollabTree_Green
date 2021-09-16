// Navigation Section Start  
$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        $('.animated-icon').toggleClass('open');
    });
});
// Navigation Section End  

// $(document).ready(function(){
//     $('.dropdown-toggle').dropdown();
// });

// Customers Section Start 
function openFeed(evt, FeedName) {
    // Declare all variables
    var i, tabcontent;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(FeedName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Customers Section End 