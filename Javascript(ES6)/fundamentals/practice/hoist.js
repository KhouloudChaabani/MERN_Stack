// 1
var hello;
console.log(hello);
hello = 'world';
// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test;
// 3
var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// 4
var food;
console.log(food);
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
eat();
// 5
var mean;
console.log(food);
mean = function() {
    var food;
    food = 'chicken';
    console.log(food);
    food = 'fish';
    console.log(food);
}
console.log(food);
mean();
// 6
var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind();
console.log(genre);
// 7
dojo = 'san jose';
console.log(dojo);
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);
// 8
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        
        dojo == "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));