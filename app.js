//chapter 14,15,16 (Aarrays)
// q1 
// var studentnames = []

// q3
// var colors = ["red","blue","green"]

// q4
// var numbers = [2,3,4,5,6];

// q5
// var booleanarray =[true,false,true,false];

// q6
// var mixedarray = [true,12,"mahnoor"];

// q7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications:</h2>");
// document.write("<ol>");

// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ul>");

// q8
// var studentnames = ["michael","john","tony"];
// var scores = [80,65,75];

// for(var i=0; i<studentnames.length; i++){
    // var scores = scores[i];
//     var percentage = (scores/100)*100;
//     document.write("score of"+""+studentnames[0]+""+"is"+scores[0]+""+"percentage:"+percentage);
//     document.write("score of"+""+studentnames[1]+""+"is"+scores[1]+""+"percentage:"+percentage);

//     document.write("score of"+""+studentnames[2]+""+"is"+scores[2]+""+"percentage:"+percentage);

// }

// q9
// var scores = [320, 230, 480, 120];

// document.write("<h2>Score of sudents:</h2>");
// document.write("<p>" + scores.join(", ") + "</p>");

// scores.sort(function(a, b) {
//     return a - b;
// });

// document.write("<h2>ordered scores of students:</h2>");
// document.write("<p>" + scores.join(", ") + "</p>");

// q11
// let cities = ["karachi", "Lahore", "islamabad", "quetta", "peshawar"];
// let selectedCities = [];

// selectedCities.push(cities[2], cities[3], cities[2]);

// console.log("Original cities array:", cities);
// console.log("Selected cities array:", selectedCities);

