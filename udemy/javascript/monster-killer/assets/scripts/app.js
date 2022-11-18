const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1;

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

function enterMaximumLife() {
    return prompt("Maximum life for you and the monser.", "100");
}

const enteredValue = enterMaximumLife();

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    alert(
        "Invalid user input, please try again! input value can only be numeric and must be greater than 0."
    );
    chosenMaxLife = enterMaximumLife();
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeLog(e, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: e,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };

    switch (e) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = "MONSTER";
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = "PLAYER";
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = "PLAYER";
            break;
        default:
            logEntry = {};
    }

    // if (e === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = "MONSTER";
    // } else if (e === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = "MONSTER";
    // } else if (e === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = "PLAYER";
    // } else if (e === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = "PLAYER";
    // }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    hasBonusLife = true;
    appendBonusLife();
    resetGame(chosenMaxLife);
}

function endRound() {
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = chosenMaxLife;
        setPlayerHealth(chosenMaxLife);
        alert("You would be dead but the bonus life saved you!");
    }

    writeLog(
        LOG_EVENT_MONSTER_ATTACK,
        monsterDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        // 승리할경우  (몬스터 체력이 0이하이고 플레이어 체력이 0보다 크면)
        alert("You won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        // 패배할경우  (플레이어 체력이 0이하이고 몬스터 체력이 0보다 크면)
        alert("You lost!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        // 무승부  (몬스터 체력과 플레이어 체력이 0이하면)
        alert("You have a draw!");
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(attackMode) {
    let maxDamage;
    let logEvent;
    if (attackMode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (attackMode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= playerDamage;

    writeLog(logEvent, playerDamage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;

    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;

    writeLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();
}

function printingHandler() {
    // for (let index = 0; index < battleLog.length; index++) {
    //     console.log(battleLog[index]);
    // }

    for (const logEntry of battleLog) {
        console.log(logEntry);
    }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printingHandler);
