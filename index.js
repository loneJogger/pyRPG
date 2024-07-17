import titleScene from './scenes/01_title.js'

// on startup
;(async () => {
    let input = -1
    console.clear()
    input = await titleScene()
    console.clear()
    switch (input) {
        case '1':
            console.log('NEW GAME SELECTED')
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



