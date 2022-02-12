console.log("Your index.js file is loaded correctly!");

// $(".resume").on('mouseover', function() {
//     $(".resume").animate({ width: "500px" });
// });

// $(document).ready(function(){
//     $(".logo").find("img").css("transition", "transform 1000ms ease-in-out");
//     $(".logo").mouseOver(
//         function(){
//             $(this).find("img").css("transform", "scale(1.5)");

//         },
//         function(){
//             $(this).find("img").css("transform", "scale(1)");

//         }
//     )
// })

$(document).ready(function() {
    var size = $(".logo").css("fontSize");
            $(".logo").hover(
                function(){
                    $(this).find("p").css("fontSize", "30px");
                    }, 
                function(){
                    $(this).find("p").css("fontSize", "size");
                }
            );
    })