var isAnim = false;
var Inter;
var load = setInterval(loading,100);
var lo;
var l = document.getElementById("buffer");

function loading() {
    if (lo) {
        // console.log("I'm LOADING.");
    } else if (!lo) {
        l.innerHTML = '';
    }
}


const generateAscii = (width = "40", height = "160", text = "sonicthehedgehog", fps = 12, anim = "sonic", f = 4) => {
    lo = true;
    l.innerHTML = "Loading...";
    var a = document.getElementById('anims2').value;
    anim = a;
    if (isAnim === true) {
        clearInterval(Inter);
        var co = document.getElementById('container2');
        var co2 = document.getElementById('images');

        co.innerHTML = '';

        co2.innerHTML = '';

        // console.log(anim);
    }

    isAnim = true;

    var cont = document.getElementById("container2");
    var imageBox = document.getElementById("images");
    var o = 0;
    var imgs = [];
    var canv = [];
    cont.className = "";
    if (anim === "sonic") {
        cont.className = "small";
    } else if (anim === "megaman"){
        f = 4;
        width = 24;
        height = 24*f;
        text = "megaman";
        fps = 7;
        cont.className = "medium1";
    } else if (anim === "megamanX"){
        f = 10;
        width = 34;
        height = 36*f;
        text = "megaman";
        fps = 18;
        cont.className = "small";
    } else if (anim === "mario"){
        f = 3;
        width = 16;
        height = 16*f;
        text = "mario";
        fps = 9;
        cont.className = "large";
    } else if (anim === "marioRPG"){
        f = 4;
        width = 24;
        height = 32*f;
        text = "mario";
        fps = 8;
        cont.className = "medium1";
    } else if (anim === "marioKart"){
        f = 8;
        width = 48;
        height = 48*f;
        text = "mariokart";
        fps = 10;
        cont.className = "xtrasmall";
    } else if (anim === "shell1"){
        f = 8;
        width = 32;
        height = 26*f;
        text = "greenshell";
        fps = 12;
        cont.className = "small";
    } else if (anim === "dk"){
        f = 10;
        width = 48;
        height = 42*f;
        text = "donkeykong";
        fps = 12;
        cont.className = "xtrasmall";
    } else if (anim === "yoshi"){
        f = 9;
        width = 32;
        height = 32*f;
        text = "yoshi";
        fps = 12;
        cont.className = "small";
    } else if (anim === "link"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "link";
        fps = 7;
        cont.className = "large";
    } else if (anim === "link2"){
        f = 8;
        width = 16;
        height = 25*f;
        text = "link";
        fps = 16;
        cont.className = "medium2";
    } else if (anim === "blooper"){
        f = 2;
        width = 16;
        height = 25*f;
        text = "blooper";
        fps = 4;
        cont.className = "medium2";
    }
    else if (anim === "pirahna"){
        f = 2;
        width = 16;
        height = 25*f;
        text = "pirahna";
        fps = 4;
        cont.className = "medium2";
    }
    else if (anim === "kirby"){
        f = 4;
        width = 16;
        height = 16*f;
        text = "kirby";
        fps = 8;
        cont.className = "large";
    } else if (anim === "kirby2"){
        f = 8;
        width = 24;
        height = 24*f;
        text = "kirby";
        fps = 10;
        cont.className = "medium2";
    }
    else if (anim === "pacman"){
        f = 4;
        width = 16;
        height = 16*f;
        text = "pacman";
        fps = 10;
        cont.className = "large";
    }
    else if (anim === "mspacman"){
        f = 4;
        width = 16;
        height = 16*f;
        text = "misspacman";
        fps = 10;
        cont.className = "large";
    }
    else if (anim === "blinky"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "blinky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "inky"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "inky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "pinky"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "pinky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "clyde"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "clyde";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "ghost"){
        f = 2;
        width = 16;
        height = 16*f;
        text = "ghost";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "excitebike"){
        f = 2;
        width = 24;
        height = 24*f;
        text = "excitebike";
        fps = 16;
        cont.className = "medium1";
    }
    
    var images = [`${anim}Sheet.png`];
    var ctxs = [];
    var h = 0;
    var w = 0;

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
        I2.classList.add("hide");
        C2.classList.add("hide");
        
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

        for (frame = 0; frame < f; frame++) {
            var base = document.createElement("DIV");
            cont.appendChild(base);
            base.classList.add("hide");
            var node = document.createElement("P");
            base.id = frame.toString();

            var cvs = document.getElementById("c1");
            var gmi = document.getElementById("img1");
            cvs.getContext("2d").drawImage(gmi, 0, 0);

            var imgData = cvs.getContext("2d").getImageData(0, 0, w, h);
            var iD = imgData.data.length/f + ((imgData.data.length/f)*frame);

            for (i = ((imgData.data.length/f)*frame); i < iD; i += 4) {
            
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
                    alphaI = 0;
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

        lo = false;
        Inter = setInterval(hideShow,1000/fps);
    };

}
generateAscii();
