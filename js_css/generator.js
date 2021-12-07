var isAnim = false;
var Inter;
var l = document.getElementById("buffer");
var asc = true;

const modeSwitch = () => {
    asc = !asc;
}

const generateAscii = (width = "40", height = "160", text = "sonic", fps = 12, anim = "sonic", f = 4, mode = asc) => {
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
    } else if (anim === "knuckles") {
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
    } else if (anim === "22"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Meowth Persian';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "23"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Psyduck Golduck';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "24"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Mankey Primeape';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "26"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Growlithe Arcanine';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "27"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Poliwag Poliwhirl Poliwrath';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "28"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Abra Kadabra Alakazam';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "29"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Machop Machoke Machamp';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "30"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Bellsprout Weepinbell Victreebel';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "31"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Tentacool Tentacruel';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "32"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Geodude Graveler Golem';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "33"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Ponyta Rapidash';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "34"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Slowpoke Slowbro';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "35"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Magnemite Magneton';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "36"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Farfetch'd";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "37"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Doduo Dodrio';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "38"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Seel Dewgong';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "39"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Grimer Muk';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "40"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Shellder Cloyster';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "41"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Gastly Haunter Gengar';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "42"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Onix';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "43"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Drowzee Hypno';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "44"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Krabby Kingler';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "45"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Voltorb Electrode';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "46"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Exeggcute Exeggutor';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "47"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Cubone Marowak';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "48"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Hitmonlee Hitmonchan';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "49"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Lickitung';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "50"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Koffing Weezing';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "51"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Rhyhorn Rhydon';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "52"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Chansey';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "53"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Tangela';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "54"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Kangaskhan';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "55"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Horsea Seadra';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "56"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Goldeen Seaking';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "57"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Staryu Starmie';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "59"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'MrMime';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "60"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Scyther';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "61"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Jynx';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "62"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Electabuzz';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "63"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Magmar';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "64"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Pinser';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "65"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Tauros';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "66"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Magikarp Gyarados';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "67"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Lapras';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "68"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Ditto';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "69"){
        anim = "./kanto/" + anim;
        f = 4;
        width = 56;
        height = 56*f;
        text = 'Eevee Vaporeon Jolteon Flareon';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "70"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Porygon';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "71"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Omanyte Omastar';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "72"){
        anim = "./kanto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Kabuto Kabutops';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "73"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Aerodactyl';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "74"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Snorlax';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "75"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Articuno Zapdos Moltres';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "76"){
        anim = "./kanto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Dratini Dragonair Dragonite';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "77"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Mewtwo';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "78"){
        anim = "./kanto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Mew';
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
    } else if (anim === "!11"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Cleffa";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!12"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Igglybuff";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!13"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Togepi Togetic';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!14"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Natu Xatu';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!15"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Mareep Flaaffy Ampharos';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!16"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Bellossom";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!17"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "'Marill Azumarill'";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!18"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Sudowoodo";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!19"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Politoed';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!20"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Hoppip Skiploom Jumpluff';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!21"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Aipom";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!22"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = "Sunkern Sunflora";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!23"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Yanma";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!24"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Wooper Quagsire';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!25"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Espeon Umbreon';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!26"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Murkrow";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!27"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Slowking";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!28"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Misdreavus";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!29"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Unown";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!30"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Wobbuffet';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!31"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Girafarig";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!32"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Pineco Forretress';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!33"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Dunsparce";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!34"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Gligar";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!35"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Steelix";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!36"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Snubbull Granbull';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!37"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Qwilfish";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!38"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Scizor";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!39"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Shuckle";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!40"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Heracross";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!41"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = "Sneasel";
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!42"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Teddiursa Ursaring';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!43"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Slugma Magcargo';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!44"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Swinub Piloswine';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!45"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Corsola';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!46"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Remoraid Octillery';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!47"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Delibird';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!48"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Mantine';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!49"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Skarmory';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!50"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Houndour Houndoom';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!51"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Kingdra';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!52"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Phanpy Donphan';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!53"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Porygon2';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!54"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Stantler';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!55"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Smeargle';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!56"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Tyrogue Hitmontop';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!57"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Smoochum';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!58"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Elekid';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!59"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Magby';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!60"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Miltank';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!61"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Blissey';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!62"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Raikou';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!63"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Entei';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!64"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Suicune';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!65"){
        anim = "./johto/" + anim;
        f = 3;
        width = 56;
        height = 56*f;
        text = 'Larvitar Pupitar Tyranitar';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!66"){
        anim = "./johto/" + anim;
        f = 2;
        width = 56;
        height = 56*f;
        text = 'Lugia Ho-oh';
        fps = 1/2;
        cont.className = "xtrasmall";
    } else if (anim === "!67"){
        anim = "./johto/" + anim;
        f = 1;
        width = 56;
        height = 56*f;
        text = 'Celebi';
        fps = 1/2;
        cont.className = "xtrasmall";
    }





    /* else if (anim === "!!1"){
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
    } else if (anim === "!!11"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = "Sandshrew Sandslash";
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!12"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = "Nidoran Nidorina Nidoqueen";
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!13"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Nidoran Nidorino Nidoking';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!14"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Clefairy Clefable';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!15"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Vulpix Ninetales';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!16"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Jigglypuff Wigglytuff';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!17"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Zubat Golbat';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!18"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Oddish Gloom Vileplume';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!19"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Paras Parasect';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!20"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Venonat Venomoth';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!21"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Diglett Dugtrio';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!22"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Meowth Persian';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!23"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Psyduck Golduck';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!24"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Mankey Primeape';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!25"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Growlithe Arcanine';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!26"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Poliwag Poliwhirl Poliwrath';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!27"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Abra Kadabra Alakazam';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!28"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Machop Machoke Machamp';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!29"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Bellsprout Weepinbell Victreebel';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!30"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Tentacool Tentacruel';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!31"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Geodude Graveler Golem';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!32"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Ponyta Rapidash';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!33"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = "Slowpoke Slowbro";
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!34"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Magnemite Magneton';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!35"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = "Farfetch'd";
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!36"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Doduo Dodrio';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!37"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Seel Dewgong';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!38"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Grimer Muk';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!39"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Shellder Cloyster';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!40"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Gastly Haunter Gengar';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!41"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Onix';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!42"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Drowzee Hypno';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!43"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Krabby Kingler';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!44"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Voltorb Electrode';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!45"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Exeggcute Exeggutor';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!46"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Cubone Marowak';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!47"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Hitmonlee Hitmonchan';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!48"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Lickitung';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!49"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Koffing Weezing';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!50"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Rhyhorn Rhydon';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!51"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Chansey';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!52"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Tangela';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!53"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Kangaskhan';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!54"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Horsea Seadra';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!55"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Goldeen Seaking';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!56"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Staryu Starmie';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!57"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'MrMime';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!58"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Scyther';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!59"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Jynx';
        fps = 1/2;
        cont.className = "xtrasmall";
    }  else if (anim === "!!60"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Electabuzz';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!61"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Magmar';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!62"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Pinser';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!63"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Tauros';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!64"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Magikarp Gyarados';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!65"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Ditto';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!66"){
        anim = "./pokecards/" + anim;
        f = 4;
        width = 64;
        height = 47*f;
        text = 'Eevee Vaporeon Jolteon Flareon';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!67"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Porygon';
        fps = 1/2;
        cont.className = "xtrasmall";
    }   else if (anim === "!!68"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Omanyte Omastar';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!69"){
        anim = "./pokecards/" + anim;
        f = 2;
        width = 64;
        height = 47*f;
        text = 'Kabuto Kabutops';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!70"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Aerodactyl';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!71"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Snorlax';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!72"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Aricuno Zapdos Moltres';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!73"){
        anim = "./pokecards/" + anim;
        f = 3;
        width = 64;
        height = 47*f;
        text = 'Dratini Dragonair Dragonite';
        fps = 1/2;
        cont.className = "xtrasmall";
    }    else if (anim === "!!74"){
        anim = "./pokecards/" + anim;
        f = 1;
        width = 64;
        height = 47*f;
        text = 'Mewtwo';
        fps = 1/2;
        cont.className = "xtrasmall";
    } */






      else if (anim === "monalisa"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 96*f;
        text = "MonaLisa";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "gothic"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 76*f;
        text = "AmericanGothic";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "memory"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 48*f;
        text = "Memory";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "nighthawk"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 34*f;
        text = "Nighthawks";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "creationofadam"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 28*f;
        text = "CreationOfAdam";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "sunday"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 42*f;
        text = "LaGrandeJatte";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "pearlearring"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 74*f;
        text = "PearlEarring";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "starrynight"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 50*f;
        text = "StarryNight";
        fps = 1;
        cont.className = "xtrasmall";
    } else if (anim === "venus"){
        anim = "./paintings/" + anim;
        f = 1;
        width = 64;
        height = 39*f;
        text = "BirthOfVenus";
        fps = 1;
        cont.className = "xtrasmall";
    }





      /* else if (anim === "david"){
        anim = "./sculptures/" + anim;
        f = 1;
        width = 64;
        height = 96*f;
        text = "David";
        fps = 1;
        cont.className = "xtrasmall";
    }  else if (anim === "ecstasy"){
        anim = "./sculptures/" + anim;
        f = 1;
        width = 64;
        height = 101*f;
        text = "SaintTheresa";
        fps = 1;
        cont.className = "xtrasmall";
    }  else if (anim === "laocoon"){
        anim = "./sculptures/" + anim;
        f = 1;
        width = 64;
        height = 57*f;
        text = "Laocoon";
        fps = 1;
        cont.className = "xtrasmall";
    }  else if (anim === "discus"){
        anim = "./sculptures/" + anim;
        f = 1;
        width = 64;
        height = 103*f;
        text = "discus";
        fps = 1;
        cont.className = "xtrasmall";
    }  else if (anim === "venus2"){
        anim = "./sculptures/" + anim;
        f = 1;
        width = 64;
        height = 94*f;
        text = "venus";
        fps = 1;
        cont.className = "xtrasmall";
    } */


/*        else if (anim === "matrixDodge"){
        anim = "./movies/" + anim;
        f = 26;
        width = 64;
        height = 40*f;
        text = "matrix";
        fps = 3;
        cont.className = "xtrasmall";
    } else if (anim === "sparta"){
        anim = "./movies/" + anim;
        f = 21;
        width = 64;
        height = 40*f;
        text = "300";
        fps = 3;
        cont.className = "xtrasmall";
    } else if (anim === "lionKing"){
        anim = "./movies/" + anim;
        f = 26;
        width = 64;
        height = 40*f;
        text = "ScarVsMufasa";
        fps = 3;
        cont.className = "xtrasmall";
    } else if (anim === "shining"){
        anim = "./movies/" + anim;
        f = 22;
        width = 64;
        height = 40*f;
        text = "Heresjohnny!";
        fps = 3;
        cont.className = "xtrasmall";
    }
 */
    

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
                var imT = im0+im1+im2;
            
                if (mode === true)
                {
                    if (imT > 600) {
                        aList.push('@&nbsp;');
                        alphaI += 1;
                    } else if (imT > 525 && imT < 600) {
                        aList.push('%&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 450 && imT < 525) {
                        aList.push('#&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 375 && imT < 450) {
                        aList.push('*&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 300 && imT < 375) {
                        aList.push('+&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 225 && imT < 300) {
                        aList.push('=&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 150 && imT < 225) {
                        aList.push('-&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT > 75 && imT < 150) {
                        aList.push(':&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    } else if (imT === 0) {
                        // aList.push('`&nbsp;');
                        aList.push('&nbsp;&nbsp;');
                    } else {
                        aList.push('.&nbsp;');
                        // aList.push('&nbsp;&nbsp;');
                    }
                    // cList.push("(" + `${im0},${im1},${im2}` + ")");
                    cList.push('(255,255,255)');
                } 
                else 
                {
                    if (imgData.data[i + 3] > 200) {
                        aList.push(W[alphaI % W.length] + '&nbsp;');
                        cList.push("(" + `${im0},${im1},${im2}` + ")");
                        alphaI += 1;
                    } else if (im3 === 0) {
                        // aList.push('*&nbsp;');
                        aList.push('&nbsp;&nbsp;');
                        // cList.push('(50,50,50)');
                        cList.push('(0,0,0)');
                    } 
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
            l.innerHTML = "";
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
        hideShow()
        Inter = setInterval(hideShow,1000/fps);
    };

}
