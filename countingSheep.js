const countSheep = function(num) {
    if(num === 0) {
        console.log("All sheep jumped over the fence.");
    }
    console.log(num + ":Another sheep jumps over the fence");
    return countSheep(num - 1)
}