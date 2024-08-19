export default {
    armors: [
        {
            name: 'Old Mail',
            description: 'DEF + 3\nAn old chain mail coat.',
            value: 25,
            defense: 3,
            spirit: 0
        },
        {
            name: 'Taveling Habit',
            description: 'DEF + 2 SPR + 1\nThe thick wool garments of a venerated religious order.',
            value: 50,
            defense: 2,
            spirit: 1

        }
    ],
    hats: [
        {
            name: 'Pointed Hat',
            description: 'SPR + 1\nA dark pointed hat with a wide brim.',
            value: 20,
            defense: 0,
            spirit: 1
        }
    ],
    shields: [
        {
            name: 'Wooden Round Shield',
            description: 'DEF + 2 DEX + 1\nA light weight wooden shield bearing the crest of a nobel family.',
            value: 25,
            defense: 2,
            dexterity: 1
        }        
    ],
    weapons: {
        knives: [
            {
                name: 'Iron Dagger',
                description: 'ATK + 1\nA small knife often used for self defense.',
                element: 'slash',
                value: 20,
                damage: 1
            }
        ],
        swords: [
            {
                name: 'Iron Short Sword',
                description: 'ATK + 2\nA simple iron sword. Standard issue for initiate level Knights of the Faith.',
                element: 'slash',
                value: 50,
                damage: 2
            },

        ]
    },
}