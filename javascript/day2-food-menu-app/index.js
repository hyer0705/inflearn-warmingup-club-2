function resetMainContainer() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = "";
}

function FoodComponent({ food, cost, desc, img }) {
  const mainContainer = document.getElementById("main");

  const article = document.createElement("article");
  article.className = "flex justify-between gap-5";

  const foodImg = document.createElement("img");
  foodImg.className = "w-[300px] h-[200px]";
  foodImg.src = img;

  article.appendChild(foodImg);

  const foodInfo = document.createElement("div");

  const foodTitleWrapper = document.createElement("div");
  foodTitleWrapper.className =
    "border-b border-b-gray-400 pb-2 mb-2 flex justify-between";
  const foodTitle = document.createElement("span");
  foodTitle.innerText = food;
  const foodCost = document.createElement("span");
  foodCost.innerText = `${cost}원`;
  foodTitleWrapper.appendChild(foodTitle);
  foodTitleWrapper.appendChild(foodCost);

  const foodDesc = document.createElement("p");
  foodDesc.innerText = desc;

  foodInfo.appendChild(foodTitleWrapper);
  foodInfo.appendChild(foodDesc);

  article.appendChild(foodInfo);

  mainContainer.appendChild(article);
}

function menuClickHandler(menus, name) {
  if (!name) return;

  const selectedCategory = name;
  resetMainContainer();
  switch (selectedCategory) {
    case "all":
      renderFoodMenus(menus);
      break;
    case "breakfast":
    case "lunch":
    case "dessert":
    case "dinner":
      renderFoodMenus(
        menus.filter(({ category }) => category === selectedCategory)
      );
      break;
  }
}

function renderFoodMenus(menus) {
  console.log();
  menus.map((menu) => FoodComponent(menu)); // 초기 메뉴 설정
}

window.onload = function () {
  const menus = [
    {
      category: "breakfast",
      food: "rice",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/rice/rice1.jpg",
    },
    {
      category: "breakfast",
      food: "fried rice",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/rice/rice12.jpg",
    },
    {
      category: "breakfast",
      food: "rice rice",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/rice/rice17.jpg",
    },
    {
      category: "lunch",
      food: "burger",
      cost: 1000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/burger/burger9.jpg",
    },
    {
      category: "lunch",
      food: "cheese burger",
      cost: 4000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/burger/burger8.jpg",
    },
    {
      category: "lunch",
      food: "wopper",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/burger/burger59.jpg",
    },
    {
      category: "dessert",
      food: "smile",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/dessert/dessert11.jpg",
    },
    {
      category: "dessert",
      food: "quarantine buddy",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/dessert/dessert35.jpg",
    },
    {
      category: "dessert",
      food: "brownies",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/dessert/dessert8.jpg",
    },
    {
      category: "dinner",
      food: "bison steak",
      cost: 2000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "https://foodish-api.com/images/pizza/pizza53.jpg",
    },
  ];

  renderFoodMenus(menus);

  const menuUL = document.getElementById("menus");
  menuUL.addEventListener("click", (e) =>
    menuClickHandler(menus, e.target.getAttribute("name"))
  );
};
