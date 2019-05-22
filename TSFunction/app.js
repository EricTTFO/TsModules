// var x =10;
// var y = 33;
// function add(x,y){
//     // alert('hello')
//     return x+y;
// }
// var myAdd = function(){
//     return x+y;
// }
function attr(nameorage) {
    if (nameorage && typeof nameorage === "string") {
        alert("姓名");
    }
    else {
        alert("年齡");
    }
}
attr("hello");
attr(10);
