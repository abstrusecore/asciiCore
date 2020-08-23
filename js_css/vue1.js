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
Vue.component('item4', {
    props: ['poke2'],
    template: '#list4'
})
Vue.component('item5', {
    props: ['poke3'],
    template: '#list5'
})
Vue.component('item6', {
    props: ['sculpt'],
    template: '#list6'
})
Vue.component('item7', {
    props: ['movie'],
    template: '#list7'
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
            { val: '1', text: 'Bulbasaur/Ivysaur/Venasaur' },
            { val: '2', text: 'Charmander/Charmeleon/Charizard' },
            { val: '3', text: 'Squirtle/Wartortle/Blastoise' },
            { val: '4', text: 'Caterpie/Metapod/Butterfree' },
            { val: '5', text: 'Weedle/Kakuna/Beedrill' },
            { val: '6', text: 'Pidgey/Pidgeotto/Pidgeot' },
            { val: '7', text: 'Rattata/Raticate' },
            { val: '8', text: 'Spearow/Fearow' },
            { val: '9', text: 'Ekans/Arbok' },
            { val: '10', text: 'Pikachu/Raichu' },
            { val: '11', text: 'Sandshrew/Sandslash' },
            { val: '12', text: 'Nidoran/Nidorina/Nidoqueen' },
            { val: '13', text: 'Nidoran/Nidorino/Nidoking' },
            { val: '14', text: 'Clefairy/Clefable' },
            { val: '15', text: 'Vulpix/Ninetales' },
            { val: '16', text: 'Jigglypuff/Wigglytuff' },
            { val: '17', text: 'Zubat/Golbat' },
            { val: '18', text: 'Oddish/Gloom/Vileplume' },
            { val: '19', text: 'Paras/Parasect' },
            { val: '20', text: 'Venonat/Venomoth' },
            { val: '21', text: 'Diglett/Dugtrio' },
        ],
        pokeList2: [
            { val: '!!1', text: 'Bulbasaur/Ivysaur/Venasaur' },
            { val: '!!2', text: 'Charmander/Charmeleon/Charizard' },
            { val: '!!3', text: 'Squirtle/Wartortle/Blastoise' },
            { val: '!!4', text: 'Caterpie/Metapod/Butterfree' },
            { val: '!!5', text: 'Weedle/Kakuna/Beedrill' },
            { val: '!!6', text: 'Pidgey/Pidgeotto/Pidgeot' },
            { val: '!!7', text: 'Rattata/Raticate' },
            { val: '!!8', text: 'Spearow/Fearow' },
            { val: '!!9', text: 'Ekans/Arbok' },
            { val: '!!10', text: 'Pikachu/Raichu' },
        ],
        pokeList3: [
            { val: '!1', text: 'Chikorita/Bayleef/Meganium' },
            { val: '!2', text: 'Cyndaquil/Quilava/Typhlosion' },
            { val: '!3', text: 'Totodile/Croconaw/Feraligatr' },
            { val: '!4', text: 'Sentret/Furret' },
            { val: '!5', text: 'Hoothoot/Noctowl' },
            { val: '!6', text: 'Ledyba/Ledian' },
            { val: '!7', text: 'Spinarak/Ariados' },
            { val: '!8', text: 'Crobat' },
            { val: '!9', text: 'Chinchou/Lanturn' },
            { val: '!10', text: 'Pichu' },
        ],
        paintList: [
            { val: 'monalisa', text: 'Mona Lisa by Leonardo da Vinci' },
            { val: 'gothic', text: 'American Gothic by Grant Wood' },
            { val: 'memory', text: 'The Persistence of Memory by Salvador Dali' },
            { val: 'nighthawk', text: 'Nighthawks by Edward Hopper' },
            { val: 'creationofadam', text: 'The Creation of Adam by Michelangelo' },
            { val: 'sunday', text: 'A Sunday on La Grande Jatte by Georges Seurat' },
            { val: 'pearlearring', text: 'Girl with a Pearl Earring by Johannes Vermeer' },
            { val: 'starrynight', text: 'Starry Night by Vincent Van Gogh' },
            { val: 'venus', text: 'The Birth of Venus by Sandro Boticelli' },
            
        ],
        sculptList: [
            { val: 'david', text: 'David by Michelangelo' },
            { val: 'ecstasy', text: 'Ecstasy of Saint Theresa by Bernini' },
            { val: 'laocoon', text: 'Laocoon and His Sons' }
        ],
        movieList: [
            { val: 'matrixDodge', text: 'The Matrix (Bullet Dodge)' },
            { val: 'sparta', text: '300 (This is Sparta!)' },
            { val: 'lionKing', text: 'The Lion King (Mufasa Falls)' },
            { val: 'shining', text: "The Shining (Here's Johnny!)" }
        ],
        
    },
    methods: {
        handleSelect: function (event) {
          this.sNum = event.target.value;
          console.log(this.sNum);
        }
    }
})