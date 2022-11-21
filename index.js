let unreadMessages = document.querySelectorAll(".unread");
let markReadBtn = document.querySelector(".mark");
let counter = document.querySelector(".counter");

markReadBtn.addEventListener("click", () => {
  unreadMessages.forEach((msg) => {
    msg.classList.remove("unread");
  });
  counter.textContent = 0;
});
