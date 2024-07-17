import terminal from './lib/terminal.js'
import demoScene from './scenes/00_demo.js'

// on startup
;(async () => {
    console.clear()
    await terminal.awaitInput('Press ENTER to continue.')
    console.clear()
    await demoScene()
})()



