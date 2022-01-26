let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
let canvasData = ctx.getImageData(0, 0, width, height);
const walkArr = [];

const cord = {
    x: undefined,
    y: undefined
}

// Classes are used in OOP as a template for creating an object.
class Walker {
    // The constructor method(Function specifically for this class.) is used to customize the initialization of the object. 
    constructor() {
        // "this" refers to the constructor object created when initialized.
        this.x = cord.x;
        this.y = cord.y;
        this.r = 255;
    }
    display(x,y,r,g,b,a) {
        // Each pixel in the array, takes four positions, one for red, green, blue, and alpha.
        // Formula to find the exact pixel desired.
        let index = (x + y * width) * 4;
        canvasData.data[index + 0] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
        ctx.putImageData(canvasData, 0, 0);
    }
    // update() {
        
    // }
}

function init() {
    let j = -1;
    for (let i = 0; i < 10000; i++) {
        if (i == 0) {
            cord.x = width/2;
            cord.y = height/2;
        }
        if (i > 0) {
            j++;
            let choice = Math.floor(Math.random() * 4);
            let tempX = walkArr[j].x;
            let tempY = walkArr[j].y;
            if (choice == 0) {
                cord.x = tempX + 1;
            } if (choice == 1) {
                cord.x = tempX - 1;
            } if (choice == 2) {
                cord.y = tempY + 1;
            } if (choice == 3) {
                cord.y = tempY - 1;
            }
        }
        walkArr.push(new Walker());
    }
}
init();
console.log(walkArr);

function handleWalk() {
    for(var i = 0; i < walkArr.length; i++) {
        let w = walkArr[i];
        w.display(w.x, w.y, w.r, 0, 0, 255);
    }
}

function animate() {
    handleWalk();
    requestAnimationFrame(animate);
}
animate();

// let r, g, b = Math.floor(Math.random() * 255);
// walk.display(walk.x,walk.y,0,255,0,255);
// walk.update();
// walk.step();