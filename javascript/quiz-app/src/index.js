function removeBgClass(el) {
  const removedClassList = [];
  el.classList.forEach((cl) => {
    if (cl.includes("bg")) {
      removedClassList.push(cl);
    }
  });
  removedClassList.forEach((cl) => el.classList.remove(cl));
}

function renderBg(isAnswer) {
  const bg = document.querySelector("main");
  removeBgClass(bg);

  if (isAnswer) {
    bg.classList.remove("bg-gray-400");
    bg.classList.add("bg-green-500");
  } else {
    bg.classList.remove("bg-gray-400");
    bg.classList.add("bg-red-500");
  }
}

function renderChoices(answer) {
  const choiceBtns = document.querySelectorAll("#choices button");

  choiceBtns.forEach((btn) => {
    if (btn.value == answer) {
      btn.classList.remove("bg-gray-400");
      btn.classList.add("bg-green-500");
    } else {
      btn.classList.remove("bg-gray-400");
      btn.classList.add("bg-red-500");
    }
  });
}

function renderNextBtns(questions, quiz) {
  const nextBtns = document.getElementById("next-btns");
  nextBtns.className = "text-white flex justify-center items-center";
  const btn = nextBtns.querySelector("button");

  const copied = [...questions].sort((a, b) => b.id - a.id);
  const lastQuizId = copied[0].id;

  btn.onclick = null;

  if (quiz.getQuizId() >= lastQuizId) {
    btn.innerText = "Reset";
    btn.onclick = () => {
      quiz.reset();
      renderQuiz(questions, quiz);
    };
  } else {
    btn.innerText = "Next";
    btn.onclick = () => {
      quiz.increment();
      renderQuiz(questions, quiz);
    };
  }
}

function renderQuiz(questions, quiz) {
  const currQuiz = questions.find(
    (question) => question.id === quiz.getQuizId()
  );

  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  choices.addEventListener("click", (e) => {
    const selected = e.target.value;

    if (!selected) return;

    const isAnswer = (selected, answer) => selected == answer;

    renderBg(isAnswer(selected, currQuiz.answer));

    // button 정답색 렌더링
    renderChoices(currQuiz.answer);

    // Next or Restart button rendering
    renderNextBtns(questions, quiz);
  });

  const question = document.getElementById("question");
  question.innerText = currQuiz.question;

  currQuiz.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className =
      "bg-gray-400 rounded-md py-1 hover:bg-gray-500 active:bg-gray-600";
    btn.innerText = choice;
    btn.value = choice;

    choices.appendChild(btn);
  });
}

window.onload = function () {
  const questions = [
    {
      id: 1,
      question: "3 + 3?",
      choices: ["4", "22", "정답이 없습니다."],
      answer: "정답이 없습니다.",
    },
    {
      id: 2,
      question: "2 + 2?",
      choices: ["4", "22"],
      answer: "4",
    },
    {
      id: 3,
      question: "4 + 2?",
      choices: ["4", "6"],
      answer: "6",
    },
  ];

  // choices를 누르면 결과가 나옴 => 바탕색 틀리면 빨강, 맞으면 초록, 버튼 색은 정답에만 초록 나머지는 빨강
  // choices를 누르면 Next or Restart 버튼이 나옴

  const quiz = (function () {
    let quizId = 1;
    return {
      getQuizId: () => quizId,
      increment: () => quizId++,
      reset: () => (quizId = 1),
    };
  })();

  renderQuiz(questions, quiz);
};
