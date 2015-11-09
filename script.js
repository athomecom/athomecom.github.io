$(document).ready(function() {
    $("#kids-prices").hide();
    $("#adults-prices").hide();
    
//    document.getElementById("images-testing").innerHTML = "whoops changed the inner html"
});    
    
var days_off = {
 '2015/9/21': 'Silver week 9/21-9/23',
 '2015/9/22': 'Silver week 9/21-9/23',
 '2015/9/23': 'Silver week 9/21-9/23',
 '2015/10/11': 'some other description',
};
              
var special_days = {
 '2015/10/31': 'Halloween Party!',  
 '2015/11/15': 'Testing another special day'
};
              
$('#datepicker').datepicker({
    beforeShowDay: function(date) {
        var search = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        if (search in days_off) {
            return [true, 'red_highlight', (days_off[search] || '')];
        }
                
        if (search in special_days) {
            return [true, 'green_highlight', (special_days[search] || '')];
        }

        return [true, '', ''];
    }
});

$("#kids-prices-button").click(function() {
    console.log("show kids prices");
    $("#kids-prices").toggle();
});
    
$("#adults-prices-button").click(function() {
    $("#adults-prices").toggle();
});

$("#pic_select").change(function() {
    console.log("changed");
    var selected = $('#pic_select').find(":selected").text();
    $("#slideshow_name").empty();
    $("#slideshow_name").append("<b>" + selected + " pictures</b>");
    
    var description = "Here are pictures of our activities. We have yearly Easter, Halloween, and Christmas events.";
    var fileName = "pics/";
    
    switch(selected) {
        case "School":
            description = "Here are some pictures of the school"
            fileName += "school/";
            break;
            
        case "Easter":
            description = "Here are pictures of our prior Easter parties. We have an egg hunt and play Easter games."
            fileName += "easter/";
            break;
            
        case "Halloween":
            description = "Here are pictures of our Halloween parties. Everyone dresses up and we have a costume contest, go Trick-or-Treating, and receive candy and snacks!";
            fileName += "halloween/";
            break;
            
        case "Christmas":
            description = "Here are pictures of our Christmas parties. We have various special events like dancing, magic shows, slide shows, and food!";
            fileName += "christmas/";
            break;
            
        default:
            break;
    }
            
    
    $("#slideshow_description").empty();
  
    $("#slideshow_description").append(description);
            
    for (var i = 1; i <= 10; i++) {
        var element = "#slide" + i;  
        console.log("trying to empty: " + element + ", from filename: " + fileName);
        $(element).empty();
        $(element).append("<img u=\"image\" src=\"" + fileName + i + ".jpg\" style=\"width: 550px; height: 300px;\" />");
    };
});
   
$(document).tooltip({
    items: ".red_highlight",
    tooltipClass: "arrow",

    content: function () {
        var tooltipText = $(this).prop('tooltipText');
        console.log(tooltipText);
    
        var $this = $(this),
            random, 
            html = "";
        
        var frame = "<div class='arrow1'>";
        var lowertext = "<div class ='tooltiptext'>Learn More</div>"
        var image = "<img class='webimage' src='https://i.ytimg.com/vi/ER0wkPWykNE/default.jpg'/>"
        return frame + image + lowertext + "</div>";
    }
});
                
//                 $("#slide1").append("<img u=\"image\" src=\"pics/easter/02.jpg\" style=\"width: 550px; height: 300px;\" />");
          
