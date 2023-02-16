// global variables
// HEADER //
let headerList = document.querySelectorAll(".sidebar ul li");
// STATS //
let statsNums = document.querySelectorAll(".stats .col-content h5");
///// HEADER /////
headerList.forEach((li) => {
  li.addEventListener("click", () => {
    remoeActiveClass(headerList);
    li.classList.add("active");
    console.log("hi");
  });
});
///// STATS SECTION //////
window.onscroll = () => {
  // console.log(window.scrollY);
  if ((window.scrollY >= 11000) & (window.scrollY <= 11099)) {
    scrolling();
  }
};
function scrolling() {
  let start = 0;
  statsNums.forEach((num) => {
    let end = parseInt(num.getAttribute("data-target"));
    let cnt = Math.ceil(end / 200);
    function countValues() {
      if (start < end) {
        start += cnt;
        num.textContent = Math.ceil(start);
        setTimeout(countValues, 2);
      } else {
        num.textContent = end;
      }
    }
    countValues();
  });
}
///// REMOVE ACTIVE CLASS FUNCTION //////
function remoeActiveClass(list) {
  list.forEach((li) => {
    li.classList.remove("active");
  });
}
