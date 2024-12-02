function apply(func, args) {
    return func.apply(null, args);
}

function discrete(colors) {
    console.log(colors); // Assuming colors is an array of color values
}

var colors = ['red', 'green', 'blue'];
apply(discrete, colors); // This would log ['red', 'green', 'blue'] to the console
