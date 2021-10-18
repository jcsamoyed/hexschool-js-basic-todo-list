const todo = document.querySelector(".card__input");
const addBtn = document.querySelector(".card__add-btn");
const list = document.querySelector(".card__list");

let data = [
  {
    id: "t1",
    content: "準備面試資料",
    isChecked: true,
  },
  {
    id: "t2",
    content: "乖乖被洗臉",
    isChecked: true,
  },
  {
    id: "t3",
    content: "認命回來上課",
    isChecked: true,
  },
  {
    id: "t4",
    content: "做 todoList 卡關",
    isChecked: true,
  },
  {
    id: "t5",
    content: "爬文求救",
    isChecked: true,
  },
];

function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    if (item.isChecked == true) {
      checked = "checked";
    } else {
      checked = "";
    }
    str += `
    <li>
      <input data-num="${index}" id="checkbox${item.id}" type="checkbox" ${checked} />
      <label data-num="${index}" for="checkbox${item.id}">${item.content}</label>
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
  newTodo.isChecked = false;
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
  } else if (e.target.nodeName == "LABEL" || e.target.nodeName == "INPUT") {
    let num = e.target.getAttribute("data-num");
    data[num].isChecked = !data[num].isChecked;
  }
});
