// step 1
// function parent() {
//     var x = 1;
//     function child() {
//         console.log(x);
//     }
    
//     child();
// }
// parent();

// step 2
function parent() {
    var x = 1;
    function child() {
        console.log(x);
    }
    return child;
}
var childFn = parent();
childFn();