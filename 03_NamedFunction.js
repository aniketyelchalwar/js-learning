function show(){
    console.log("Hey....Aniket Yelchalwar");
}
show();

// WAF with name areaOfRectangle and it's two arguments namely as length and width  
function areaOfRectangle(length, width){// length=, width=
    console.log("Given Length and width is: ", length, width);
    var result =length * width;
    console.log("Area of rectangle is: ", result);
}
areaOfRectangle(30);

// 3. Named function with argument and return value
// WAF to find the cube of given number
console.log("========== cubeOfNum() ============");
function cubeOfNum(num){
    console.log("Given number is: ", num);
    var result = num * num * num;
    return result;
}
var cube = cubeOfNum(3);
console.log("Cube is: ", cube);