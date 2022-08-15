let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active-faq");
        if (active && active !== question) {
            active.classList.toggle("active-faq");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active-faq");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active-faq")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})

let first = document.querySelector('.question.active-faq');
let second = first.nextElementSibling;

second.style.maxHeight = second.scrollHeight + "px";