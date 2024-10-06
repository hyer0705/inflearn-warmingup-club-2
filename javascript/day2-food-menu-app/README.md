# 음식 메뉴 앱

음식 메뉴 앱은 다양한 카테고리의 음식을 조회할 수 있는 웹 애플리케이션입니다.

## 기술 스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/taiwilwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

## API

이 앱은 [Foodish API](https://foodish-api.com/)를 사용하여 음식 이미지를 제공합니다. 이 API는 랜덤한 음식 이미지를 제공하며, 다양한 음식 카테고리에서 이미지를 가져올 수 있습니다.

## 데이터 구조

앱에서 사용하는 메뉴 데이터는 다음과 같은 구조로 정의되어 있습니다:

```javascript
const menus = [
  {
    category: "breakfast",
    food: "rice",
    cost: 3000,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: "https://foodish-api.com/images/rice/rice1.jpg",
  },
  // ... (다른 음식 항목)
];
```

## 시연 영상
