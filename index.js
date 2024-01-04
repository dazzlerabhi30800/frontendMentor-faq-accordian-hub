let accordData = [
  {
    question: " What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    show: false,
    id: 1,
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      " Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    show: false,
    id: 2,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    show: false,
    id: 3,
  },
  {
    question: "How can I get help I'm stuck on a Frontend Mentor challenge?",
    answer:
      " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members. ",
    show: false,
    id: 4,
  },
];

const accordianWrapper = document.querySelector(".accordian--wrapper");

function populateAccordian() {
  accordianWrapper.innerHTML = accordData
    .map((item) => {
      let { answer, question, show, id } = item;
      return `
    <div class="accordian">
<div class="question" onclick={handleClick(${id})}>
        <h2>${question}</h2>
<div class="${show ? "btn active" : "btn"}">
      <i class="fas fa-${show ? "minus" : "plus"}"></i>
        </div>
      </div>
      <p class="${show ? "answer show" : "answer"}">
      ${answer}
      </p>
    </div>
`;
    })
    .join("");
}

populateAccordian();

const handleClick = (id) => {
  if (!id) return;
  accordData = accordData.map((item) => {
    if (item.id === id) {
      return { ...item, show: !item.show };
    } else {
      return item;
    }
  });
  populateAccordian();
};
