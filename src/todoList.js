let data = [
  {
    id: 1,
    content: "準備面試資料",
  },
  {
    id: 2,
    content: "乖乖被洗臉",
  },
  {
    id: 3,
    content: "認命回來上課",
  },
  {
    id: 4,
    content: "做 todoList 卡關",
  },
  {
    id: 5,
    content: "爬文求救",
  },
];

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
