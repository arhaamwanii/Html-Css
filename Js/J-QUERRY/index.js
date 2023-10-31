//ADDING CSS

$("h1").css({
    "font-size": "3rem",
    "color": "red",
})
$("button").css("background-color" , "green");

//ADDING CSS

$("h1").addClass("boom")

//checkign calsses   - gives back a boolein

var check = $("h1").hasClass("sex");
console.log(check);


//adding text

$( ".one").text("how you doing brotheer")

//adding innerHTML

$("button").html("<em> how are you today</em>")


$( ".one").text("how you doing brotheer")


//adding attributes     - ".attr"

console.log($("img").attr("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU"));

console.log($("a").attr("href" , "https://yahoo.com"));



