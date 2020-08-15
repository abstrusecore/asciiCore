Vue.component('item1', {
    props: ['opt'],
    template: '#list1'
})
Vue.component('item2', {
    props: ['poke'],
    template: '#list2'
})
Vue.component('item3', {
    props: ['paint'],
    template: '#list3'
})

var optApp = new Vue({
    el: '#head',
    data: {
        sNum: '0',
        optList: [
            { val: 'sonic', text: 'Sonic (Sonic the Hedgehog)' },
            { val: 'knuckles', text: 'Knuckles (Sonic 3 & Knuckles)' },
            { val: 'megaman', text: 'Megaman (Megaman)' },
            { val: 'megamanX', text: 'Megaman (Megaman X)' },
            { val: 'simon', text: 'Simon (Castlevania)' },
            { val: 'invader', text: 'Invader (Space Invaders)' },
            { val: 'samus', text: 'Samus (Metroid)' },
            { val: 'metroid', text: 'Metroid (Metroid)' },
            { val: 'pit', text: 'Pit (Kid Icarus)' },
            { val: 'mario', text: 'Mario (Super Mario Bros.)' },
            { val: 'mario2', text: 'Mario (Super Mario World)' },
            { val: 'marioRPG', text: 'Mario (Super Mario RPG)' },
            { val: 'gRPG', text: 'Geno (Super Mario RPG)' },
            { val: 'bowser', text: 'Bowser (Super Mario Bros.)' },
            { val: 'bowser2', text: 'Bowser (Super Mario RPG)' },
            { val: 'marioKart', text: 'Mario (Mario Kart 64)' },
            { val: 'shell1', text: 'Green Shell (Mario Kart 64)' },
            { val: 'dk', text: 'Donkey Kong (Donkey Kong Country)' },
            { val: 'yoshi', text: 'Yoshi (Super Mario World)' },
            { val: 'yoshi2', text: "Yoshi (Super Mario World 2: Yoshi's Island)" },
            { val: 'blooper', text: 'Blooper (Super Mario Bros.)' },
            { val: 'pirahna', text: 'Pirahna Plant (Super Mario Bros.)' },
            { val: 'link', text: 'Link (The Legend of Zelda)' },
            { val: 'link2', text: 'Link (The Legend of Zelda: A Link to the Past)' },
            { val: 'kirby', text: "Kirby (Kirby's Dream Land)" },
            { val: 'kirby2', text: "Kirby (Kirby's Dream Land 3)" },
            { val: 'pacman', text: 'Pac-Man (Pac-Man)' },
            { val: 'mspacman', text: 'Ms. Pac-Man (Ms. Pac-Man)' },
            { val: 'blinky', text: 'Blinky (Pac-Man)' },
            { val: 'inky', text: 'Inky (Pac-Man)' },
            { val: 'pinky', text: 'Pinky (Pac-Man)' },
            { val: 'clyde', text: 'Clyde (Pac-Man)' },
            { val: 'ghost', text: 'Ghost (Pac-Man)' },
            { val: 'excitebike', text: 'Biker (Excitebike)' },
            { val: 'frisk', text: 'Frisk (Undertale)' },
            { val: 'sans', text: 'Sans (Undertale)' },
            { val: 'kidYing', text: 'Kid Ying (The Legend of the Mystical Ninja)' },
            { val: 'drYang', text: 'Dr. Yang (The Legend of the Mystical Ninja)' },
        ],
        pokeList: [
            { val: '1poke123', text: 'Bulbasaur/Ivysaur/Venasaur' },
            { val: '1poke456', text: 'Charmander/Charmeleon/Charizard' },
            { val: '1poke789', text: 'Squirtle/Wartortle/Blastoise' },
            { val: '1poke10-12', text: 'Caterpie/Metapod/Butterfree' },
            { val: '1poke13-15', text: 'Weedle/Kakuna/Beedrill' },
            { val: '1poke16-18', text: 'Pidgey/Pidgeotto/Pidgeot' },
            { val: '1poke1920', text: 'Rattata/Raticate' },
            { val: '1poke2122', text: 'Spearow/Fearow' },
            { val: '1poke2324', text: 'Ekans/Arbok' },
            { val: '1poke2526', text: 'Pikachu/Raichu' },
            { val: '1poke2728', text: 'Sandshrew/Sandslash' },
            { val: '1poke29-31', text: 'Nidoran/Nidorina/Nidoqueen' },
            { val: '1poke32-34', text: 'Nidoran/Nidorino/Nidoking' },
            { val: '1poke3536', text: 'Clefairy/Clefable' },
            { val: '1poke3738', text: 'Vulpix/Ninetales' },
            { val: '1poke3940', text: 'Jigglypuff/Wigglytuff' },
            { val: '1poke4142', text: 'Zubat/Golbat' },
            { val: '1poke43-45', text: 'Oddish/Gloom/Vileplume' },
            { val: '1poke4647', text: 'Paras/Parasect' },
            { val: '1poke4849', text: 'Venonat/Venomoth' },
            { val: '1poke5051', text: 'Diglett/Dugtrio' },
        ],
        paintList: [
            { val: './paintings/monalisa', text: 'Mona Lisa by Leonardo da Vinci' },
            { val: './paintings/gothic', text: 'American Gothic by Grant Wood' },
            { val: './paintings/memory', text: 'The Persistence of Memory by Salvador Dali' },
            { val: './paintings/nighthawk', text: 'Nighthawks by Edward Hopper' },
        ]
    },
    methods: {
        handleSelect: function (event) {
          this.sNum = event.target.value;
          console.log(this.sNum);
        }
    }
})