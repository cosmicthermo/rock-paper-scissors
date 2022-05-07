function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    var getRandomInt = () => Math.floor(Math.random() * 3)
    return choice[getRandomInt()];
}

function playRound(playerSelection, computerSelection) {
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    let rule = ["paper", "scissors", "rock"];
    // Try to rebuild the game logic with link list
    let player_num, comp_num;
    for (let i = 0; i < rule.length; i++) {
        if (rule[i] == player) {
            player_num = i;
        }
        if (rule[i] == computer) {
            comp_num = i;
        }
    }
    if (player_num == comp_num) {
        return "Draw! Retry!"
    }
    if (player_num == 0 && comp_num == 2) {
        return "You win! Paper beats rock";
    } else if (player_num == 2 && comp_num == 0) {
        return "You lose! Paper beats rock";
    } else if (player_num > comp_num) {
        return `You win! Your ${rule[player_num]} beats ${rule[comp_num]}`
    } else if (player_num < comp_num) {
        return `You lose! ${rule[comp_num]} beats your ${rule[player_num]}`
    }
    
}

// const playerSelection = "Rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    var scores = 0;
    for (let i = 0; i < 5; i++) {
        let player_select = prompt('Rock, paper or scissors?');
        let comp_select = computerPlay();
        let result = playRound(player_select, comp_select);
        alert(result);
        if (result.includes("win")) {
            scores++;
            alert(`Your score increases by one`);
        } else if (result.includes("lose")) {
            scores--;
            alert(`Your score decrease by one`);
        } else {
            continue;
        }
    }
    alert(`Final scores is ${scores}`);
}

game();