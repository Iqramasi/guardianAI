document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 1000);
    });
});
alert("be safe");
let AL=prompt("hello");//its like the input it is asking for
console.log(AL);