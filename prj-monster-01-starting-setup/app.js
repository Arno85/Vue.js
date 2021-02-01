const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value === 0 && this.playerHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: `${this.monsterHealth}%` };
        },
        playerBarStyles() {
            return { width: `${this.playerHealth}%` };
        },
        mayAttack() {
            return this.playerHealth === 0;
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0 || this.playerHealth === 0 || this.playerHealth === 100;
        },
        mayHeal() {
            return this.currentRound % 3 !== 0 || this.playerHealth === 0 || this.playerHealth === 100;
        },
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.damageMonster(attackValue);
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.damageMonster(attackValue);
            this.addLogMessage('player', 'special attack', attackValue);
            this.attackPlayer();
        },
        damageMonster(attackValue) {
            if (attackValue >= this.monsterHealth) {
                this.monsterHealth = 0;
            } else {
                this.monsterHealth -= attackValue;
            }
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            if (attackValue >= this.playerHealth) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= attackValue;
            }
            this.addLogMessage('monster', 'attack', attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue >= 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
});

app.mount('#game');
