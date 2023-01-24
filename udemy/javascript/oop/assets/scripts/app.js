class Product {
  // title = "DEFAULT";
  // imageUrl;
  // descriptions;
  // price;

  constructor ( title, imageUrl, descriptions, price ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.descriptions = descriptions;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`
  }

  render () {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor ( product ) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render () {
    const prod = this.product;
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.descriptions}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  return prodEl;
  }
}

class ProductList {

  products = [
    new Product(
      "A Pillow",
      "https://i.ibb.co/1RcFPk0/bean-bag.png",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://i.ibb.co/7CQVJNm/rugs.png",
      "A carpet which you might like - or not.",
      89.99
    )
  ];

  constructor () {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const productEl = productItem.render();
      prodList.append(productEl);
    }
    return prodList;
  }

}

class Shop {
  render() {
    const renderHook = document.querySelector("#app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render(); 
    const productList = new ProductList();
    const productEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productEl);

  }
}

class App {
  static cart;

  static init () {
    const shop = new Shop;
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product)
  }
}

App.init();
