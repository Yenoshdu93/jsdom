// const listItems = document.querySelectorAll("li");

// for (let i = 0; i <= listItems.length; i++) {
//   listItems[i].style.display = "visible";
// }

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// ul.append(li);
// li.innerText = "Yenosh dulla";

// console.log(li);
// li.setAttribute("id", "Main_heading");
// li.removeAttribute("id");

// li.classList.add("remove");
// li.classList.remove("active");

// li.remove();

// Traversing the dom

// parent Node Traversal

// const div = document.querySelector("div");

// console.log(ulitem.parentElement);
// console.log(ulitem.parentNode);

// //children nodes

// console.log(ulitem.childNodes);
// console.log(ulitem.firstChild);
// console.log(ulitem.lastChild);

// console.log(div.childNodes);

//event Deligation

const ulitem = document.querySelector("ul").addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches("li")) {
    target.style.fontSize = "2rem";
  }
});
