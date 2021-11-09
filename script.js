const chatbotBtn = document.querySelector(".chatbot-icon");
const chatbotContainer = document.querySelector(".chatbot-container");
const closeBtn = document.querySelector(".chatbot-close");
const chatbotHeader = document.querySelector(".chatbot-header");
const chatbotBody = document.querySelector(".chatbot-body");
const chatbotHeaderIcon = document.querySelector(".chatbot-header-icon i");
const faq = document.querySelector(".faq");
const questionCards = document.querySelectorAll(".question-card");
const chatbotBodyBtn = document.querySelector(".btn-group button");


console.log(chatbotHeaderIcon);

chatbotBtn.addEventListener("click", function () {
  let timer = 1;
  chatbotContainer.classList.remove("hide");

  chatbotHeader.classList.add("show");
  chatbotHeader.style.transition = `opacity 1s linear ${timer}s`;

  chatbotBody.classList.add("show");
  chatbotBody.style.transition = `opacity 1s linear ${++timer}s`;

  faq.classList.add("show");
  faq.style.transition = `opacity 1s linear ${++timer}s`;

  questionCards.forEach((card, index) => {
    card.classList.add("show");
    card.style.transition = `opacity 1s linear ${++timer}s`;
  });

  chatbotBodyBtn.classList.add("show");
  chatbotBodyBtn.style.transition = `opacity 1s linear ${++timer}s`;
});

closeBtn.addEventListener("click", function () {
  chatbotContainer.classList.add("hide");

  chatbotHeader.classList.remove("show");
  chatbotHeader.style.transition = `opacity 0.2s linear 0s`;

  chatbotBody.classList.remove("show");
  chatbotBody.style.transition = `opacity 0.2s linear 0s`;

  faq.classList.remove("show");
  faq.style.transition = `opacity 0.2s linear 0s`;

  questionCards.forEach((card) => {
    card.classList.remove("show");
    card.style.transition = `opacity 0.2s linear 0s`;
  });

chatbotBodyBtn.classList.remove("show");
chatbotBodyBtn.style.transition = `opacity 0.2s linear 0s`;
});
