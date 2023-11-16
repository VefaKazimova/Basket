let counter = 0;
const cardContainer = document.querySelector(".cardContainer");
const BASE_URL = "https://dummyjson.com";
const getPost = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = res.json();
  return data;
};
const creatCard = () => {
  getPost().then((data) => {
    data.products.map((elem) => {
      const counterElement = document.querySelector(".counter span");
      const card = document.createElement("div");
      card.style.width = "18rem";
      card.style.border = "1px solid red";
      const id = document.createElement("p");
      const title = document.createElement("p");
      const price = document.createElement("p");
      const brand = document.createElement("p");
      const category = document.createElement("p");
      const addToBasket = document.createElement("button");
      addToBasket.innerText = "Add to basket";
      addToBasket.style.background = "green";
      addToBasket.style.color = "white";
      addToBasket.style.border = "none";
      addToBasket.style.padding = "10px";
      addToBasket.style.margin = "10px";
      const images = document.createElement("img");
      images.setAttribute("src", elem.images[0]);
      id.innerText = elem.id;
      title.innerText = elem.title;
      price.innerText = elem.price;
      brand.innerText = elem.brand;
      category.innerText = elem.category;
      card.append(images, id, title, price, brand, category, addToBasket);
      cardContainer.appendChild(card);
      addToBasket.addEventListener("click", (e) => {
        e.preventDefault()
        counter++;
        counterElement.innerText = counter;
        // const cardId = e.target.parentElement.querySelector("p").innerText;
        // console.log(addToBasket.parentElement.firstElementChild.nextElementSibling.innerHTML);
        // if (cardId == addToBasket.parentElement.firstElementChild.nextElementSibling.innerHTML) {
        //   axios.put(`http://localhost:3000/basket/${cardId}`, {
        //     productImages: elem.images[0],
        //     productId: elem.id,
        //     productTitle: elem.title,
        //     productPrice: elem.price,
        //     productBrand: elem.brand,
        //     productCategory: elem.category,
        //   });
        // } else {
          axios.post("http://localhost:3000/basket", {
            productImages: elem.images[0],
            productId: elem.id,
            productTitle: elem.title,
            productPrice: elem.price,
            productBrand: elem.brand,
            productCategory: elem.category,
          });
        // }

      });
    });
  });
};
creatCard();
