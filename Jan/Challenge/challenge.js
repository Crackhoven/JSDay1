let str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
console.log('Original String:', str)


let newStr = str.replace(/[^a-zA-Z0-9\,\.\' ]/g, ' ');
console.log('After RegEx:', newStr);