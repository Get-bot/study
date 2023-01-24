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

class ElementAttribue {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createElement(tag, cssClasses, attribute) {
    const rootElement = document.createElement(tag);
    if(cssClasses) {
      rootElement.className = cssClasses;
    }
    if(attribute && attribute.length > 0) {
      for (const attr of attribute) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(val) {
    this.items = val;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`

  }

  get totalAmount() {
    const sum = this.items.reduce((acc, cur) => acc + cur.price, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];updatedItems
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render () {
    const cartEl = this.createElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component{
  constructor (renderHookId, product) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render () {
    const prod = this.product;
    const prodEl = this.createElement('li', 'product-item')
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
  }
}

class ProductList extends Component{

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

  constructor (renderHookId) {
    super(renderHookId)
  }

  render() {
    const prodList = this.createElement('ul', 'product-list', [new ElementAttribue('id', 'product-list')]);
    for (const prod of this.products) {
      const productItem = new ProductItem('product-list', prod);
      productItem.render();
    }
  }

}

class Shop {
  render() {
    const renderHook = document.querySelector("#app");
    this.cart = new ShoppingCart('app');
    this.cart.render(); 
    const productList = new ProductList('app');
    productList.render();
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
