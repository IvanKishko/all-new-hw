const notDoneHw = document.querySelectorAll("#notDone");

notDoneHw.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Дз ще не зроблено");
  });
});
