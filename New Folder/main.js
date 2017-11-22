"use strict"

$(document).ready(function(){
  
    $("#addTodoButton").on("click", function() {
        console.log("i am")
        let $addImage = $(".item")
        $addImage.append("src",$("#toDoText").val());
    });
    
});


//  // portfolio
//  $('.gallery ul li a').click(function() {
//      var itemID = $(this).attr('href');
//      $('.gallery ul').addClass('item_open');
//      $(itemID).addClass('item_open');
//      return false;
//  });
//  $('.close').click(function() {
//      $('.port, .gallery ul').removeClass('item_open');
//      return false;
//  });

//  $(".gallery ul li a").click(function() {
//      $('html, body').animate({
//          scrollTop: parseInt($("#top").offset().top)
//      }, 400);
//  });


    // $("#addTodoButton").on("click", function(event) {
    //     let $toDoRow = $("<tr>");
    //     let $toDoNumber = $("<th>");
    //     $toDoNumber.text(numberOfTodos++);
             
    //     let $toDoText = $("<td>");
    //     $toDoText.text($("#toDoText").val());
        
    //     // add to table row
    //     $toDoRow.append($toDoNumber);
    //     $toDoRow.append($toDoText);
        
    //     let $table = $(".table");
    //     $table.append($toDoRow);
    // });
