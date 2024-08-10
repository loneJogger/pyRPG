import { Player } from './gameObjects/player.js';
import { Knight } from './gameObjects/charcters/pc/knight.js';

import titleScene from './scenes/01_title.js'
import newGameScene from './scenes/02_start_new_game.js'

// on startup
;(async () => {
    let input = -1
    console.clear()
    input = await titleScene()
    console.clear()
    switch (input) {
        case '1':
            console.clear()
            const player = new Player({ party: { 
                first: new Knight(),
                second: null,
                third: null,
                forth: null
            }})
            player.party.first.giveStartingGear()
            await newGameScene(player)
            break
        case '2':
            console.log('LOAD SELECTED')
            break
        case '3':
            console.log('EXIT SELECTED')
            break
        default:
            console.log('whoops!')
    }
})()



