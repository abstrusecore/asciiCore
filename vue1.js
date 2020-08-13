Vue.component('item1', {
    props: ['opt'],
    template: '#list1'
})

var optApp = new Vue({
    el: '#head',
    data: {
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
        ]
    }
  })