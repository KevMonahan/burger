$(function() {
    $(".munch-burger").on("click", function(event) {
      var id = $(this).data("id");
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: true
      }).then(
        function() {
          console.log("updated burger #" + id);
          // Reload the page to get the updated list, but first display a quick gif of devouring a burger
          $(".gif-display").append(`<img src="../images/planktonBurger.gif" class='gif'>`)
          setTimeout(function() {
            location.reload();
          }, 1360);
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
        var newBurger = {
        burger_name: $("#new-burger").val().trim(),
        devoured: false
      };
      if(newBurger.burger_name){

        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
      else {
        // No burger name entered
        alert("Please enter the name of a burger.");
      };
    });
  });