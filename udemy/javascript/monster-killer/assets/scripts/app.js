const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

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
}

function attackMonster(attackMode) {
    if (attackMode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (attackMode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= playerDamage;
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
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
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
