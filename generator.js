var isAnim = false;
var Inter;
var load;
var lo;
var l = document.getElementById("buffer");
load = setInterval(loading,200);

const generateAscii = (width = "40", height = "40", text = "sonicthehedgehog", fps = 12, anim = "sonic",) => {
    buffer();
    var a = document.getElementById('anims2').value;
    anim = a;
    if (isAnim === true) {
        clearInterval(Inter);
        var co = document.getElementById('container2');
        var co2 = document.getElementById('images');

        co.innerHTML = '';

        co2.innerHTML = '';

        console.log(anim);
    }

    isAnim = true;

    var cont = document.getElementById("container2");
    var imageBox = document.getElementById("images");
    console.log(imageBox);
    var o = 0;
    var imgs = [];
    var canv = [];

    if (anim === "sonic") {
        var images = ["sonicTest1.png","sonicTest2.png","sonicTest3.png","sonicTest4.png"];
        console.log(images);
    } else if (anim === "megaman"){
        var images = ["test3.png","test4.png","test5.png","test6.png"];
        width = 32;
        height = 24;
        text = "megaman";
        fps = 7;
        console.log(images);
    } else if (anim === "mario"){
        var images = ["marioTest1.png","marioTest2.png","marioTest3.png"];
        width = 16;
        height = 16;
        text = "mario";
        fps = 9;
        console.log(images);
    } else if (anim === "blooper"){
        var images = ["squidTest1.png","squidTest2.png"];
        width = 16;
        height = 32;
        text = "blooper";
        fps = 4;
        console.log(images);
    }
    else if (anim === "pirahna"){
        var images = ["pirahnaTest1.png","pirahnaTest2.png"];
        width = 16;
        height = 32;
        text = "pirahna";
        fps = 4;
        console.log(images);
    }
    

    var ctxs = [];
    var h = 0;
    var w = 0;
    var data = [];
    var anim = 1;

    images.forEach(im => {
        o++;
        var I = document.createElement("IMG");
        imageBox.appendChild(I);
        I.id = `img${o}`;
        I.src = im;
        I.width = width;
        I.height = height;
        I2 = document.getElementById(I.id);
        var C = document.createElement("CANVAS");
        C.height = I.height;
        C.width = I.width;
        imageBox.appendChild(C);
        C.id = `c${o}`;
        C2 = document.getElementById(C.id);
        var ctx = C.getContext("2d");
        ctxs.push(ctx);
        canv.push(C.id);
        ctx.drawImage(I2, 0, 0);
        h = C.height;
        w = C.width;
        imgs.push(I.id);
        I.classList.add("hide");
        C.classList.add("hide");
        // console.log(C.height);
    });


    document.getElementById(`img${o}`).onload = function() {


        // invert colors
        var word = text;
        var W = word.split('');
        var i;
        var alphaI = 0;
        var frame = 0;
        var aList = [];
        var cList = [];

        for (frame = 0; frame < o; frame++) {
            var base = document.createElement("DIV");
            cont.appendChild(base);
            base.classList.add("hide");
            var node = document.createElement("P");
            base.id = frame.toString();

            var cvs = document.getElementById(canv[frame]);
            var gmi = document.getElementById(imgs[frame]);
            cvs.getContext("2d").drawImage(gmi, 0, 0);

            var imgData = cvs.getContext("2d").getImageData(0, 0, w, h);

            for (i = 0; i < imgData.data.length; i += 4) {
            
                if (imgData.data[i + 3] === 255) {
                    aList.push(W[alphaI % W.length] + '&nbsp;');
                    cList.push("(" + `${imgData.data[i]},${imgData.data[i+1]},${imgData.data[i+2]}` + ")");
                    alphaI += 1;
                } else {
                    aList.push('&nbsp;&nbsp;');
                    cList.push('(0,0,0)');
                }
                if (aList.length === w)
                { 
                    var c = 0;
                    var node = document.createElement("P");
                    
                    aList.forEach(element => {      
                        node.innerHTML += `<span style='color:rgb${cList[c]};'>${element}</span>`;
                        // console.log(element);
                        c += 1;
                    });
                    base.appendChild(node);
                    aList = [];
                    cList = [];
                }
            }
        }

        var list = [];
        var n = 1;

        for (let index = 1; index < cont.children.length - 1; index++) {
            list.push(anim);
            anim++; 
            
        }

        function hideShow() {
            // var ch = cont.children;
            // var prev = ch[list[0]];
            // var child = ch[list[1]];
            var prev = cont.children[(n - 1) % cont.children.length];
            var child = cont.children[n % cont.children.length];
            prev.classList.add("hide");
            child.classList.remove("hide");

            // child.classList.add("hide");
            // prev.classList.remove("hide");
            n++;
        }

        Inter = setInterval(hideShow,1000/fps);
        stopBuffer();
    };

}
generateAscii();


function loading() {
    if (lo === true) {
        console.log("loading");
        l.innerHTML = "Loading..."
    } else {
        l.innerHTML = '';
    }
}

function buffer() {
    console.log("LOAD");
    lo = true;
}
function stopBuffer() {
    lo = false;
}