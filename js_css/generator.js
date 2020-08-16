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




const generateAscii = (width = "40", height = "160", text = "sonic", fps = 12, anim = "sonic", f = 4) => {
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
        anim = "./retro/" + anim;
        cont.className = "small";
    } if (anim === "knuckles") {
        anim = "./retro/" + anim;
        text = "knuckles";
        cont.className = "small";
    } else if (anim === "megaman"){
        anim = "./retro/" + anim;
        f = 4;
        width = 24;
        height = 24*f;
        text = "megaman";
        fps = 7;
        cont.className = "medium1";
    } else if (anim === "megamanX"){
        anim = "./retro/" + anim;
        f = 10;
        width = 34;
        height = 36*f;
        text = "megaman";
        fps = 18;
        cont.className = "small";
    } else if (anim === "invader"){
        anim = "./retro/" + anim;
        f = 2;
        width = 11;
        height = 8*f;
        text = "invader";
        fps = 4;
        cont.className = "large";
    } else if (anim === "simon"){
        anim = "./retro/" + anim;
        f = 4;
        width = 26;
        height =32*f;
        text = "simon";
        fps = 6;
        cont.className = "small";
    } else if (anim === "samus"){
        anim = "./retro/" + anim;
        f = 12;
        width = 26;
        height =32*f;
        text = "samus";
        fps = 10;
        cont.className = "small";
    } else if (anim === "metroid"){
        anim = "./retro/" + anim;
        f = 4;
        width = 24;
        height =24*f;
        text = "metroid";
        fps = 10;
        cont.className = "small";
    } else if (anim === "pit"){
        anim = "./retro/" + anim;
        f = 9;
        width = 16;
        height =25*f;
        text = "pit";
        fps = 10;
        cont.className = "medium2";
    } else if (anim === "mario"){
        anim = "./retro/" + anim;
        f = 12;
        width = 16;
        height = 32*f;
        text = "mario";
        fps = 9;
        cont.className = "medium2";
    } else if (anim === "mario2"){
        anim = "./retro/" + anim;
        f = 12;
        width = 16;
        height = 32*f;
        text = "mario";
        fps = 10;
        cont.className = "medium2";
    } else if (anim === "marioRPG"){
        anim = "./retro/" + anim;
        f = 14;
        width = 30;
        height = 34*f;
        text = "mario";
        fps = 8;
        cont.className = "small";
    } else if (anim === "gRPG"){
        anim = "./retro/" + anim;
        f = 14;
        width = 30;
        height = 34*f;
        text = "geno";
        fps = 8;
        cont.className = "small";
    } else if (anim === "bowser"){
        anim = "./retro/" + anim;
        f = 4;
        width = 32;
        height = 32*f;
        text = "bowser";
        fps = 6;
        cont.className = "small";
    } else if (anim === "bowser2"){
        anim = "./retro/" + anim;
        f = 4;
        width = 40;
        height = 40*f;
        text = "bowser";
        fps = 8;
        cont.className = "xtrasmall";
    } else if (anim === "marioKart"){
        anim = "./retro/" + anim;
        f = 8;
        width = 48;
        height = 48*f;
        text = "mariokart";
        fps = 10;
        cont.className = "xtrasmall";
    } else if (anim === "shell1"){
        anim = "./retro/" + anim;
        f = 8;
        width = 32;
        height = 26*f;
        text = "greenshell";
        fps = 12;
        cont.className = "small";
    } else if (anim === "dk"){
        anim = "./retro/" + anim;
        f = 10;
        width = 48;
        height = 42*f;
        text = "donkeykong";
        fps = 12;
        cont.className = "xtrasmall";
    } else if (anim === "yoshi"){
        anim = "./retro/" + anim;
        f = 3;
        width = 32;
        height = 32*f;
        text = "yoshi";
        fps = 10;
        cont.className = "small";
    } else if (anim === "yoshi2"){
        anim = "./retro/" + anim;
        f = 9;
        width = 32;
        height = 32*f;
        text = "yoshi";
        fps = 12;
        cont.className = "small";
    } else if (anim === "link"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "link";
        fps = 7;
        cont.className = "large";
    } else if (anim === "link2"){
        anim = "./retro/" + anim;
        f = 8;
        width = 16;
        height = 25*f;
        text = "link";
        fps = 16;
        cont.className = "medium2";
    } else if (anim === "blooper"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 25*f;
        text = "blooper";
        fps = 4;
        cont.className = "medium2";
    }
    else if (anim === "pirahna"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 25*f;
        text = "pirahna";
        fps = 4;
        cont.className = "medium2";
    }
    else if (anim === "kirby"){
        anim = "./retro/" + anim;
        f = 4;
        width = 16;
        height = 16*f;
        text = "kirby";
        fps = 8;
        cont.className = "large";
    } else if (anim === "kirby2"){
        anim = "./retro/" + anim;
        f = 8;
        width = 24;
        height = 24*f;
        text = "kirby";
        fps = 10;
        cont.className = "medium2";
    }
    else if (anim === "pacman"){
        anim = "./retro/" + anim;
        f = 4;
        width = 16;
        height = 16*f;
        text = "pacman";
        fps = 10;
        cont.className = "large";
    }
    else if (anim === "mspacman"){
        anim = "./retro/" + anim;
        f = 4;
        width = 16;
        height = 16*f;
        text = "misspacman";
        fps = 10;
        cont.className = "large";
    }
    else if (anim === "blinky"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "blinky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "inky"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "inky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "pinky"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "pinky";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "clyde"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "clyde";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "ghost"){
        anim = "./retro/" + anim;
        f = 2;
        width = 16;
        height = 16*f;
        text = "ghost";
        fps = 8;
        cont.className = "large";
    }
    else if (anim === "excitebike"){
        anim = "./retro/" + anim;
        f = 2;
        width = 24;
        height = 24*f;
        text = "excitebike";
        fps = 16;
        cont.className = "medium1";
    } else if (anim === "frisk"){
        anim = "./retro/" + anim;
        f = 4;
        width = 24;
        height = 30*f;
        text = "frisk";
        fps = 7;
        cont.className = "medium1";
    } else if (anim === "sans"){
        anim = "./retro/" + anim;
        f = 8;
        width = 24;
        height = 30*f;
        text = "sans";
        fps = 7;
        cont.className = "medium1";
    } else if (anim === "kidYing"){
        anim = "./retro/" + anim;
        f = 8;
        width = 24;
        height = 36*f;
        text = "kidying";
        fps = 10;
        cont.className = "medium1";
    } else if (anim === "drYang"){
        anim = "./retro/" + anim;
        f = 8;
        width = 24;
        height = 36*f;
        text = "dryang";
        fps = 10;
        cont.className = "medium1";
    }
    
    
      else if (anim === "1"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Bulbasaur Ivysaur Venasaur";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "2"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Charmander Charmeleon Charizard";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "3"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Squirtle Wartortle Blastoise";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "4"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Caterpie Metapod Butterfree";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "5"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Weedle Kakuna Beedrill";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "6"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Pidgey Pidgeotto Pidgeot";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "7"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Rattata Raticate";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "8"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Spearow Fearow";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "9"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Ekans Arbok";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "10"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Pikachu Raichu";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "11"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Sandshrew Sandslash";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "12"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Nidoran Nidorina Nidoqueen";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "13"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Nidoran Nidorino Nidoking";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "14"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Clefairy Clefable";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "15"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Vulpix Ninetales";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "16"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Jigglypuff Wigglytuff";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "17"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Zubat Golbat";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "18"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Oddish Gloom Vileplume";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "19"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Paras Parasect";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "20"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Venonat Venomoth";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "21"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Diglett Dugtrio";
        fps = 1/2;
        cont.className = "xtrasmall";
    }


      else if (anim === "!1"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Chikorita Bayleef Meganium";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!2"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Cyndaquil Quilava Typhlosion";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!3"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = "Totodile Croconaw Feraligatr";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!4"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Sentret Furret";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!5"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Hoothoot Noctowl";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!6"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Ledyba Ledian";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!7"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Spinarak Ariados";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!8"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Crobat";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!9"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Chichou Lanturn";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!10"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Pichu";
        fps = 1/2;
        cont.className = "xtrasmall";
    }



    else if (anim === "!!1"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Bulbasaur Ivysaur Venasaur";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!2"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Charmander Charmeleon Charizard";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!3"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Squirtle Wartortle Blastoise";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!4"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Caterpie Metapod Butterfree";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!5"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Weedle Kakuna Beedrill";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!6"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Pidgey Pidgeotto Pidgeot";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!7"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = "Rattata Raticate";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!8"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = "Spearow Fearow";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!9"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = "Ekans Arbok";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!!10"){
        anim = "./pokecards/" + anim;
        f = 4;
        width = 64;
        height = 47*f;
        text = "Pikachu Pikachu Raichu Raichu";
        fps = 1/2;
        cont.className = "xtrasmall";
    } 






      else if (anim === "monalisa"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 96*f;
        text = "MONALISA";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "gothic"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 76*f;
        text = "AMERICANGOTHIC";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "memory"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 48*f;
        text = "MEMORY";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "nighthawk"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 34*f;
        text = "NIGHTHAWKS";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "creationofadam"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 28*f;
        text = "CREATIONOFADAM";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "sunday"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 42*f;
        text = "LAGRANDEJATTE";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "pearlearring"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 74*f;
        text = "PEARLEARRING";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "starrynight"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 50*f;
        text = "STARRYNIGHT";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "venus"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 39*f;
        text = "BIRTHOFVENUS";
        fps = 1;
        cont.className = "xtrasmall";
    }

    
    var images = [`${anim}.png`];
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
        
    });


    document.getElementById(`img${o}`).onload = function() {


        // invert colors
        var i;
        var alphaI = 0;
        var frame = 0;
        var aList = [];
        var cList = [];

        var words = text.split(' ');
        // console.log(words);

        for (frame = 0; frame < f; frame++) {
            var base = document.createElement("DIV");
            cont.appendChild(base);
            base.classList.add("hide");
            var node = document.createElement("P");
            base.id = frame.toString();

            var word = words[frame % words.length].toUpperCase();
            var W = word.split('');

            var cvs = document.getElementById("c1");
            var gmi = document.getElementById("img1");
            cvs.getContext("2d").drawImage(gmi, 0, 0);

            var imgData = cvs.getContext("2d").getImageData(0, 0, w, h);
            var iD = imgData.data.length/f + ((imgData.data.length/f)*frame);

            for (i = ((imgData.data.length/f)*frame); i < iD; i += 4) {
                var im0 = imgData.data[i];
                var im1 = imgData.data[i+1];
                var im2 = imgData.data[i+2];
                var im3 = imgData.data[i+3];
                // var imT = im0+im1+im2;
            
                if (imgData.data[i + 3] > 200) {
                    aList.push(W[alphaI % W.length] + '&nbsp;');
                    cList.push("(" + `${im0},${im1},${im2}` + ")");
                    alphaI += 1;
                } else if (im3 === 0) {
                    aList.push('*&nbsp;');
                    // aList.push('&nbsp;&nbsp;');
                    cList.push('(50,50,50)');
                    // cList.push('(0,0,0)');
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
        var n = 0;

        for (let index = 1; index < cont.children.length - 1; index++) {
            list.push(anim);
            anim++; 
            
        }

        function hideShow() {
            // var ch = cont.children;
            // var prev = ch[list[0]];
            // var child = ch[list[1]];
            if (cont.children.length >= 2) {
                if (n > 0) {
                    var prev = cont.children[(n - 1) % cont.children.length];
                    prev.classList.add("hide");
                }
                var child = cont.children[n % cont.children.length];
                child.classList.remove("hide");
                n++;
            } else {
                cont.children[0].classList.remove("hide");
                clearInterval(Inter);
            }

            // child.classList.add("hide");
            // prev.classList.remove("hide");
        }

        lo = false;
        Inter = setInterval(hideShow,1000/fps);
    };

}
