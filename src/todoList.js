const todo = document.querySelector(".card__input");
const addBtn = document.querySelector(".card__add-btn");

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

addBtn.addEventListener("click", function () {
  if (!todo.value) {
    return;
  }
  let newTodo = {};
  newTodo.id = Date.now();
  newTodo.content = todo.value;
  data.push(newTodo);
  renderData();
  todo.value = "";
});

function renderData() {
  let str = "";
  data.forEach(function (item) {
    str += `
    <li>
      <input id="checkbox${item.id}" type="checkbox" />
      <label for="checkbox${item.id}">${item.content}</label>
    </li>
  `;
  });

  const list = document.querySelector(".card__list");
  list.innerHTML = str;
}
renderData();
