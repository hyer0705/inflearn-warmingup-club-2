function resetMainContainer() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = "";
}

function FoodComponent({ food, cost, desc }) {
  const mainContainer = document.getElementById("main");

  const article = document.createElement("article");
  article.className = "flex justify-between gap-5";

  const foodImg = document.createElement("img");
  foodImg.className = "w-[300px] h-[200px]";
  foodImg.src = "./public/bread.jpg";

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
      menus.map((menu) => FoodComponent(menu));
      break;
    case "breakfast":
      menus
        .filter(({ category }) => category === selectedCategory)
        .map((menu) => FoodComponent(menu));
      break;
    case "lunch":
      menus
        .filter(({ category }) => category === selectedCategory)
        .map((menu) => FoodComponent(menu));
      break;
    case "shakes":
      menus
        .filter(({ category }) => category === selectedCategory)
        .map((menu) => FoodComponent(menu));
      break;
    case "dinner":
      menus
        .filter(({ category }) => category === selectedCategory)
        .map((menu) => FoodComponent(menu));
      break;
  }
}

window.onload = function () {
  const menus = [
    {
      category: "breakfast",
      food: "pancakes",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "breakfast",
      food: "bacon overflow",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "breakfast",
      food: "country delight",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "lunch",
      food: "diner",
      cost: 1000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "lunch",
      food: "american classic",
      cost: 4000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "lunch",
      food: "egg attack",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "shakes",
      food: "milkshake",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "shakes",
      food: "quarantine buddy",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "shakes",
      food: "oreo dream",
      cost: 3000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
    {
      category: "dinner",
      food: "bison steak",
      cost: 2000,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      img: "image name or src",
    },
  ];

  menus.map((menu) => FoodComponent(menu)); // 초기 메뉴 설정

  const menuUL = document.getElementById("menus");
  menuUL.addEventListener("click", (e) =>
    menuClickHandler(menus, e.target.getAttribute("name"))
  );
};
