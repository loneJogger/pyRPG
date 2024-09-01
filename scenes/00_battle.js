import terminal from "../lib/terminal.js"

const getHpColor = (character) => {
    const hpRatio = character.hp.current / character.hp.total
    if (hpRatio > 0.5) {
        return terminal.colors.text.white
    } else if (hpRatio <= 0.5 && hpRatio > 0.25) {
        return terminal.colors.text.yellow
    } else {
        return terminal.colors.text.red
    }
}

const drawParty = (player) => {
    terminal.writeWithFormat('\nParty:\n', terminal.colors.text.yellow)
    terminal.writeWithFormat(`${player.party.first.name}   `)
    terminal.writeWithFormat(`${player.party.first.hp.current} / ${player.party.first.hp.total}\n`, getHpColor(player.party.first))
    if (player.party.second) {
        terminal.writeWithFormat(`${player.party.second.name}   `)
        terminal.writeWithFormat(`${player.party.second.hp.current} / ${player.party.second.hp.total}\n`, getHpColor(player.party.second))
    }
    if (player.party.third) {
        terminal.writeWithFormat(`${player.party.third.name}   `)
        terminal.writeWithFormat(`${player.party.third.hp.current} / ${player.party.third.hp.total}\n`, getHpColor(player.party.third))
    }
    if (player.party.forth) {
        terminal.writeWithFormat(`${player.party.forth.name}   `)
        terminal.writeWithFormat(`${player.party.forth.hp.current} / ${player.party.forth.hp.total}\n`, getHpColor(player.party.forth))
    }
}

const drawFoes = (foes) => {
    terminal.writeWithFormat('\nFoes:\n', terminal.colors.text.yellow)
    for (const foe of foes) {
        terminal.writeWithFormat(`${foe.name}\n`, getHpColor(foe))
    }
}

const playerSelect = (player, foes) => {

}
const foeSelect = (player, foes) => {}
const executeActions = (actions, player, foes) = {}
const checkIsFinished = (player, foes) => {}


export default async (player, foes) => {

    let isFinished = false
    let isWon = false

    while (!isFinished) {
        drawParty(player)
        process.stdout.write('\n')
        drawFoes(foes)
        const actions = [ ...playerSelect(player, foes), ...foeSelect(player, foes) ]
        actions.sort((a, b) => { return b.speed - a.speed })
        executeActions(actions, player, foes)
        isFinished = checkIsFinished(player, foes)
    }

}