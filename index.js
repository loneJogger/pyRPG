import terminal from './lib/terminal.js'
import openingScene from './scenes/00_opening.js'

// on startup
console.clear()
console.log('')
console.log('**********************')
console.log('**    SIMPLE RPG    **')
console.log('**********************')
console.log('')
console.log('')
await terminal.awaitInput('Press ENTER to continue.')
console.clear()

await openingScene()


