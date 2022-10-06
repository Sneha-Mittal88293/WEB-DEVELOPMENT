// Apply css
$("h1").css("color","red");


// Add claas
$("h1").addClass("big_title second_class");

// Remove class
$("h1").removeClass("second_class");

// Change text
$("h1").text("Hello World");
$("a").text("You Tube");

// Change text also html style
$("h2").html("<em>Hello World</em>");

// Change attribute
$("img").attr("alt" ,"drum");
$("a").attr("href" , "https://youtube.com");

// Add Event_listener
$("h2").click(function(){
    $("h2").css("color","red");
});

// Add or remove Element
$("h1").before("<button>NEW</button>");
$("h1").after("<button>NEW</button>");
$("h1").prepend("<button>NEW</button>");
$("h1").append("<button>NEW</button>");

$("h2").remove();

// Animation  prebuild- (toggle , hide , show , fadeOut , fadeIn , fadeToggle , slideUp , slideDown , slideToggle)
$("button").click(function(){
 $("h1").fadeOut();            
});


// we can only write css inside animate numeric value it maens we cann't chnage color because color not have a numeric value
$("button").click(function(){
    $("h1").animate({opacity: 0});
})

// we use multiple animation at a time

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
    
});


