// Rule 1
function somefunction() {
    console.log(this);
}
// Rule 2
console.log(this);

// Rule 3
function a() {
    console.log(this);
    function b() {
        console.log(this);
    }
    b.apply({name:"stuff"});
}
a()

// Rule 4
const obj = {
    stuff:"stuff",
    myMethod:function() {
        function b() {
            console.log(this);
        }
        b()
    }
}
obj.myMethod()

