document.addEventListener("DOMContentLoaded", function() {
  // Function to check the current time
  function checkTime() {
    var currentHour = dayjs().format("H");
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var hour = parseInt(timeBlockId.split("-")[1]);

      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Call the checkTime function when the page loads
  checkTime();

  // Rest of your code...
  $(function () {
    // Add listener for click events on the save button
    $(".saveBtn").on("click", function () {
      // Get the id of the time-block containing the button that was clicked
      var timeBlockId = $(this).closest(".time-block").attr("id");

      // Save the user input in local storage using the id as the key
      var userInput = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userInput);
    });

    // Get user input from local storage and set the values of corresponding textarea elements
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var userInput = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(userInput);
    });

    // Display the current date in the header of the page
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  });
});

