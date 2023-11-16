const BASE_URL = "http://localhost:3000/basket";
axios.get(BASE_URL).then((res) => {
  const container = document.querySelector(".container");
  let total = 0;
  const totalPrice = document.createElement("p");
  totalPrice.innerText = `Total Price: ${total}`;
  let basketItems = res.data;
  let quantityMap = {}; 

  basketItems.forEach((elem) => {
    console.log(elem);
    const productId = elem.productId;
    const quantity = quantityMap[productId] || 1; 
    quantityMap[productId] = quantity + 1; 

    const card = document.createElement("div");
    card.style.width = "18rem";
    card.style.border = "1px solid red";
    card.style.margin = "10px";

    const cardImg = document.createElement("img");
    cardImg.style.width = "100px";
    cardImg.style.height = "100px";
    cardImg.setAttribute("src", elem.productImages);

    const cardId = document.createElement("p");
    const cardTitle = document.createElement("p");
    const cardPrice = document.createElement("p");
    const cardBrand = document.createElement("p");
    const cardCategory = document.createElement("p");
    const quantityElement = document.createElement("p");

    cardId.textContent = elem.productId;
    cardTitle.textContent = elem.productTitle;
    cardPrice.textContent = elem.productPrice;
    cardBrand.textContent = elem.productBrand;
    cardCategory.textContent = elem.productCategory;
    quantityElement.textContent = `Quantity: ${quantity}`;

    container.append(card);
    card.append(
      cardImg,
      cardId,
      cardTitle,
      cardPrice,
      cardBrand,
      cardCategory,
      quantityElement
    );
  });
  total = basketItems.reduce((acc, item) => {
    const productId = item.productId;
    const quantity = quantityMap[productId] || 1;
    return acc + quantity * parseFloat(item.productPrice);
  }, 0);

  totalPrice.innerText = `Total Price: ${total}`;
  container.append(totalPrice);
});


