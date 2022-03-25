"use strict";
$(document).ready( () => {
    const slider = $("#image_list"); // fetching my ul list as slider
    let width = parseInt(slider.css("width"));
    const display_width = parseInt($('#display_panel').css('width'));
    const newWidth = display_width-width;
    // right button click event
    $("#right_button").click( () => {
        // get the value of the left property
        const leftProperty = parseInt(slider.css("left"));
        // move to the nest value of the left property
        let newLeftProperty = 0;
        if(leftProperty > newWidth) {
            newLeftProperty = leftProperty - display_width;
        }
        // change the left property
        slider.animate(
            {left: newLeftProperty},
            100
        );
    });
    // left button click event
    $("#left_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        if(leftProperty < 0) {
            newLeftProperty = leftProperty + display_width;
        } else if (leftProperty>= 0){
            newLeftProperty = newWidth;
        }
        slider.animate(
            {left: newLeftProperty},
            100
        );
    });
});