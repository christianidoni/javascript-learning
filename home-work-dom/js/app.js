const ulMenu = document.querySelector("ul");

const secondLi = ulMenu.querySelectorAll("li")[2];
ulMenu.removeChild(secondLi);
const thirdLi = ulMenu.querySelectorAll("li")[3];
ulMenu.removeChild(thirdLi);

ulMenu.classList.add("list");
const listItems = ulMenu.querySelectorAll("li");
listItems.forEach((item) => item.classList.add("listItem"));

const bugattiItem = document.createElement("li");
bugattiItem.textContent = "Bugatti";
bugattiItem.classList.add("listItem");
ulMenu.insertBefore(bugattiItem, ulMenu.firstChild);

const fordItem = document.createElement("li");
fordItem.textContent = "Ford";
fordItem.classList.add("listItem");
ulMenu.appendChild(fordItem);

const formElement = document.querySelector("form");
const data = ["First Name", "Last Name", "Password", "Password confirmation"];
data.forEach((data) => {
  const label = document.createElement("label");
  label.textContent = data;
  label.style.display = "block";
  label.style.marginBottom = "5px";
  const input = document.createElement("input");
  input.type = data.includes("Password") ? "password" : "text";
  input.name = data.toLowerCase().replace("", "_");
  input.style.marginBottom = "15px";
  formElement.appendChild(label);
  formElement.appendChild(input);
  formElement.appendChild(document.createElement("br"));
});

const img = document.createElement("img");
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSAuWS588ZYpF0DuTpl0tzMs3ZnvPOTRtSg&s";
img.alt = "Sample Image";
document.body.appendChild(img);

const paragraph = document.querySelector("p");
paragraph.classList.remove("red");
paragraph.classList.remove("italic");

const h1Wrapper = document.getElementById("h1Wrapper");
const h1Element = document.createElement("h1");
h1Element.textContent = "this is h1 tag";
h1Wrapper.appendChild(h1Element);

const h1 = document.querySelector("#h1Wrapper h1");
h1.style.color = "blue";
h1.style.fontSize = "40px";

const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 65.0,
    category: "Footwear",
  },
  {
    name: "Yoga Mat",
    price: 20.0,
    category: "Fitness",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 15.5,
    category: "Accessories",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 99.99,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 45.0,
    category: "Accessories",
  },
  {
    name: "Digital Camera",
    price: 399.99,
    category: "Electronics",
  },
  {
    name: "Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
  },
  {
    name: "Sunglasses",
    price: 120.0,
    category: "Accessories",
  },
  {
    name: "Cookware Set",
    price: 250.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Toothbrush",
    price: 75.0,
    category: "Personal Care",
  },
  {
    name: "Office Chair",
    price: 150.0,
    category: "Furniture",
  },
  {
    name: "Coffee Maker",
    price: 85.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Kettle",
    price: 30.0,
    category: "Home & Kitchen",
  },
  {
    name: "Backpack",
    price: 60.0,
    category: "Accessories",
  },
  {
    name: "Standing Desk",
    price: 300.0,
    category: "Furniture",
  },
  {
    name: "Desk Lamp",
    price: 40.0,
    category: "Furniture",
  },
  {
    name: "Running T-shirt",
    price: 25.0,
    category: "Apparel",
  },
];

const productsDiv = document.getElementById("products");
const categories = {};

products.forEach((product) => {
  if (!categories[product.category]) {
    categories[product.category] = [];
  }
  categories[product.category].push(product);
});
for (const [category, items] of Object.entries(categories)) {
  const categoryHeader = document.createElement("h2");
  categoryHeader.textContent = category;
  productsDiv.appendChild(categoryHeader);

  const productList = document.createElement("ul");
  items.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `${
      product.name
    } <span class="price">${product.price.toFixed(2)}</span>`;
    productList.appendChild(productItem);
  });
  productsDiv.appendChild(productList);
}
