import readline from 'readline'

const colors = {
    special: {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",
    },
    text: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m",
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m",
    },
}

const demoColors = () => {
    const seq = n => new Array(n).fill(false).map( (_, i) => i );
    const col = (r,g,b) => 16 + b + (g*6) + (r*36);
    seq(6).map(b => {
        seq(6).map(g => {
            seq(6).map(r => process.stdout.write(`\x1b[38;5;${col(r,g,b)}m*`) );
            process.stdout.write(' '); 
        });
        process.stdout.write('\n'); 
    });
}

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

const writeWithFormat = (message, formatter) => {
    console.log(`${formatter}%s${colors.special.reset}`, message)
}

export default {
    colors,
    demoColors,
    awaitInput,
    typewriterOutput,
    writeWithFormat,
}