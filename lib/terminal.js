import readline from 'readline'

const awaitInput = async (prompt) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise (res => rl.question(prompt, input => {
        rl.close()
        res(input)
    }))
}

const typewriterOutput = async (message, speed) => {
    let msgArr = message.split('')
    const interval = setInterval(() => {
        process.stdout.write(msgArr[0])
        msgArr = msgArr.slice(1)
        if (!msgArr.length) {
            process.stdout.write('\n')
            clearInterval(interval)
        }
    }, speed)
}

export default {
    awaitInput,
    typewriterOutput
}