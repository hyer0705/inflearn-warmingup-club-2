const PLAY_RES = Object.freeze({
  WIN: "win",
  DRAW: "draw",
  LOSE: "lose",
});
const CHOICE_DATA = Object.freeze({
  SCISSORS: 0,
  ROCK: 1,
  PAPER: 2,
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return PLAY_RES.DRAW;
  switch (playerChoice) {
    case CHOICE_DATA.SCISSORS:
      if (computerChoice === CHOICE_DATA.ROCK) return PLAY_RES.LOSE;
      if (computerChoice === CHOICE_DATA.PAPER) return PLAY_RES.WIN;
      break;
    case CHOICE_DATA.ROCK:
      if (computerChoice === CHOICE_DATA.SCISSORS) return PLAY_RES.WIN;
      if (computerChoice === CHOICE_DATA.PAPER) return PLAY_RES.LOSE;
      break;
    case CHOICE_DATA.PAPER:
      if (computerChoice === CHOICE_DATA.SCISSORS) return PLAY_RES.LOSE;
      if (computerChoice === CHOICE_DATA.ROCK) return PLAY_RES.WIN;
      break;
  }
  return null;
}

function isFinished(totalPlayCnt) {
  return totalPlayCnt === 0;
}

function renderEndContainer(playerWin, computerWin) {
  const playContainer = document.getElementById("game-play");
  playContainer.className = "hidden";

  const endContainer = document.getElementById("game-end");
  endContainer.className = "flex flex-col items-center gap-4";

  const endRes = endContainer.querySelector("h4");
  if (playerWin > computerWin) {
    endRes.innerText = "게임에서 이겼습니다.";
  } else if (playerWin < computerWin) {
    endRes.innerText = "게임에서 졌습니다.";
  } else {
    endRes.innerText = "게임에서 비겼습니다.";
  }
}

function render(playRes, playData) {
  let res = "";
  if (playRes === PLAY_RES.LOSE) {
    playData.computerWin++;
    res = "컴퓨터 승리!";
  } else if (playRes === PLAY_RES.WIN) {
    playData.playerWin++;
    res = "플레이어 승리!!!";
  } else if (playRes === PLAY_RES.DRAW) {
    res = "무승부";
  }

  playData.totalPlayCnt--;

  const totalPlay = document.getElementById("total-play");
  totalPlay.innerText = `남은 횟수:${playData.totalPlayCnt}`;

  const playerScore = document.getElementById("player-score");
  playerScore.innerText = playData.playerWin;

  const computerScore = document.getElementById("computer-score");
  computerScore.innerText = playData.computerWin;

  const playResDesc = document.getElementById("play-res");
  playResDesc.innerText = res;

  if (isFinished(playData.totalPlayCnt)) {
    renderEndContainer(playData.playerWin, playData.computerWin);
  }
}

function resetPlay(playData) {
  playData.totalPlayCnt = 10;
  playData.computerWin = 0;
  playData.playerWin = 0;

  const totalPlay = document.getElementById("total-play");
  totalPlay.innerText = `남은 횟수:${playData.totalPlayCnt}`;

  const playerScore = document.getElementById("player-score");
  playerScore.innerText = playData.playerWin;

  const computerScore = document.getElementById("computer-score");
  computerScore.innerText = playData.computerWin;

  const playResDesc = document.getElementById("play-res");
  playResDesc.innerText = "";

  const playContainer = document.getElementById("game-play");
  playContainer.className = "flex flex-col items-center w-10/12 gap-4";

  const endContainer = document.getElementById("game-end");
  endContainer.className = "hidden";
}

window.onload = function () {
  const playData = {
    totalPlayCnt: 10,
    computerWin: 0,
    playerWin: 0,
  };

  const choices = document.getElementById("choices");
  choices.addEventListener("click", (e) => {
    console.log("horay?", playData);
    const playerChoice = e.target.value;
    if (!playerChoice) return;
    if (playData.totalPlayCnt === 0) return;

    const computerChoice = getComputerChoice();

    const playRes = getPlayResult(Number(playerChoice), computerChoice);

    render(playRes, playData);
  });

  const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener("click", (e) => {
    resetPlay(playData);
  });
};
