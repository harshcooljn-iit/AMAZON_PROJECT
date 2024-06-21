let product_info_list = JSON.parse(localStorage.getItem('order'));
let name_to_image_map = {
  "iPhone 15 Plus - Apple" : "images&icons/iphone15_plus.jpeg",
  "Intermediate Size Basketball" : "images&icons/intermediate-composite-basketball.jpg",
  "The Alchemist - Paulo Coelho" : "images&icons/the-alchemist-by-paulo-coelho-C9128E.jpg",
  "Nike Air Jordans Originals" : "images&icons/AJ1HighLost_Found_Nike.webp",
  "iPad Pro latest generation - Apple" : "images&icons/iPad_Pro.jpeg",
  "Macbook Air M1 Chip - Apple" : "images&icons/macbook_air.jpg",
  "Arcade Boxing Machine" : "images&icons/boxing_machine.jpeg",
  "Luis Vuitton Dress for Women" : "images&icons/LV_Dress.jpeg",
  "Nike Tshirt Unisex" : "images&icons/nike_tshirt.jpeg",
  "Pure Gold 24k (1000 grams)" : "images&icons/Gold_brick.jpeg",
  "iPhone 14 Plus - Apple" : "images&icons/iphone14plus.jpg",
  "iPhone 13 - Apple" : "images&icons/iphone13_plus.webp",
  "iPhone 15 Pro Max - Apple" : "images&icons/iphone15_proMax.jpg",
  "iPhone 12 - Apple" : "images&icons/iphone12plus.webp",
  "iPhone 11 - Apple" : "images&icons/iphone11.webp"
};
let total_quantity = localStorage.getItem('quantity')===null?0:localStorage.getItem('quantity');
let cart_quantity = document.querySelector('.cart-items-quantity');
cart_quantity.innerHTML = `${total_quantity}`;
if (total_quantity > 9){
  cart_quantity.style.left = '25px';
}
console.log(product_info_list);
let product_info_container = document.querySelector(".product-info-container");
let order_html = "";
for (let i=0;i<product_info_list.length;i++){
  let product = product_info_list[i];
  order_html += `\n<div class="product-card">
          <div class="product-head">
            <div class="left-head">
              <div class="order-placed">Order Placed:</div>
              <div class="order-date">${product['order_date']}</div>
            </div>
            <div class="mid-head">
              <div class="total">Total:</div>
              <div class="bill-amount">$${product['total_amount']}</div>
            </div>
            <div class="right-head">
              <div class="order-id">Order ID:</div>
              <div class="random-order-id">
                ${product['order_id']}
              </div>
            </div>
          </div>
          <div class="product-body">
            <div class="left-body">
              <img
                src="${name_to_image_map[product.name]}"
                alt=""
                class="product-image"
              />
            </div>
            <div class="mid-body">
              <div class="product-name">${product.name}</div>
              <div class="arrival-date">Delivery on: ${product['delivery_date']}</div>
              <div class="quantity">Quantity: ${product.quantity}</div>
              <a href="amazon_homepage.html"><button class="buy-it-again">Buy it again</button></a>
            </div>
            <div class="right-body">
              <button class="track-package">Track Package</button>
            </div>
          </div>
        </div>`;
  
}

product_info_container.innerHTML = order_html;

