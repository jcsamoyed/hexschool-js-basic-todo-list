const todo = document.querySelector(".card__input");
const addBtn = document.querySelector(".card__add-btn");
const list = document.querySelector(".card__list");

let data = [
  {
    id: "t1",
    content: "準備面試資料",
  },
  {
    id: "t2",
    content: "乖乖被洗臉",
  },
  {
    id: "t3",
    content: "認命回來上課",
  },
  {
    id: "t4",
    content: "做 todoList 卡關",
  },
  {
    id: "t5",
    content: "爬文求救",
  },
];

function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `
    <li>
      <input id="checkbox${item.id}" type="checkbox" />
      <label for="checkbox${item.id}">${item.content}</label>
      <div data-num="${index}" class="card__del-btn">✕</div>
    </li>
  `;
  });

  list.innerHTML = str;
}
renderData();

function addTodo() {
  if (!todo.value) {
    return;
  }
  let newTodo = {};
  newTodo.id = Date.now();
  newTodo.content = todo.value;
  data.push(newTodo);
  renderData();
  todo.value = "";
}

addBtn.addEventListener("click", function () {
  addTodo();
});

todo.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    addTodo();
  }
});

list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") == "card__del-btn") {
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    renderData();
  }
});
