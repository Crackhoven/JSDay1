//Challenge
var string_1 =
  "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up."; //save given string into a variable
var string_2 = string_1.split("$"); //split given string at $ and remove $, put it into an array. Every word one element of array (an array is an object)
var string_3 = string_2.join(" "); //join every element of an array with an empty space after everyelement, save it as string.
document.write(string_3); //Output of the stored string in the Browser window
console.log(typeof string_1); //type: string
console.log(typeof string_2); //type: object
console.log(typeof string_3); //type string
