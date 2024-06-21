let cart_items_list = localStorage.getItem('cart')===null?[]:JSON.parse(localStorage.getItem('cart'));
let total_quantity = localStorage.getItem('quantity')===null?0:Number(localStorage.getItem('quantity'));
let date = new Date();
let months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

let product_html_list = [];

function print_cart_items_initial(){
  if (cart_items_list.length===0){
    // view more products
    let product_info_box = document.querySelector(".product-info-box");
    product_info_box.innerHTML = `<div class="your-cart-is-empty">Your Cart Is Empty</div>\n <a href="amazon_homepage.html"><button class="view-more-products-button">View more products</button></a>`;
    return;
  }
  let products_html = "";
  let total_amount = 0;
  for (let i=0;i<cart_items_list.length;i++){
    let product = cart_items_list[i];
    total_amount += product.price;
    let product_html = `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : ${product.quantity}
                    <button class="update-quantity-button">Update</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week"/>
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow"/>
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today" checked/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
    products_html += product_html;
    product_html_list.push(product_html);
  }
  let product_info_box = document.querySelector(".product-info-box");
  product_info_box.innerHTML = products_html;
  // Modifying the order summary box
  document.querySelector(".items-quantity").innerHTML = `${total_quantity} items`;
  document.querySelector(".total-items-quantity").innerHTML = `${total_quantity}`;
  document.querySelector(".total-amount-items").innerHTML = `$${Math.round(total_amount)}`;

}
let shipping_fees = 0;
print_cart_items_initial();


function print_cart_items_with_html_list(){
  let products_html = "";
  let total_amount=0;
  let total_quantity=0;
  for (let i=0;i<product_html_list.length;i++){
    products_html += product_html_list[i];
    total_amount += (cart_items_list[i].price * cart_items_list[i].quantity);
    total_quantity += cart_items_list[i].quantity;
  }
  let product_info_box = document.querySelector(".product-info-box");
  product_info_box.innerHTML = products_html;
  localStorage.setItem('quantity',`${total_quantity}`);
  localStorage.setItem('cart',JSON.stringify(cart_items_list));
  shipping_fees_calc();
  document.querySelector(".items-quantity").innerHTML = `${total_quantity} items`;
  document.querySelector(".total-items-quantity").innerHTML = `${total_quantity}`;
  document.querySelector(".total-amount-items").innerHTML = `$${Math.round(total_amount)}`;
  document.querySelector(".total-shipping-amount").innerHTML = `$${Math.round(shipping_fees)}`;
  document.querySelector(".total-amount-before-tax").innerHTML = `$${Math.round(total_amount+shipping_fees)}`;
  let total_tax_amount = 0.05*(total_amount+shipping_fees);
  document.querySelector(".total-tax-amount").innerHTML = `$${Math.round(total_tax_amount)}`;
  document.querySelector(".total-amount").innerHTML = `$${Math.round(total_amount+shipping_fees+total_tax_amount)}`;
  if (cart_items_list.length===0){
    // view more products
    let product_info_box = document.querySelector(".product-info-box");
    product_info_box.innerHTML = `<div class="your-cart-is-empty">Your Cart Is Empty</div>\n <a href="index.html"><button class="view-more-products-button">View more products</button></a>`;
    return;
  }
}


let shipping_next_week_list = document.querySelectorAll(".shipping-next-week");
let shipping_tomorrow_list = document.querySelectorAll(".shipping-tomorrow");
let shipping_today_list = document.querySelectorAll(".shipping-today");
let update_buttons_list = document.querySelectorAll(".update-quantity-button");
let save_buttons_list = document.querySelectorAll(".save-quantity-button");
let delete_buttons_list = document.querySelectorAll(".delete-item-button");


function shipping_fees_calc(){
  shipping_fees=0;
  for (let i=0;i<shipping_today_list.length;i++){
    let next_week,tomorrow,today;
    next_week = shipping_next_week_list[i];
    tomorrow = shipping_tomorrow_list[i];
    today = shipping_today_list[i];

    if (tomorrow.checked){
      shipping_fees += 4.99;
    }
    else if (today.checked){
      shipping_fees+=9.99;
    }
  }
}

let update_indices = [];

print_cart_items_with_html_list();
add_event_listeners_to_date_buttons();
add_event_listeners_to_update_buttons();
add_event_listeners_to_save_buttons();
add_event_listeners_to_delete_buttons();
function add_event_listeners_to_date_buttons(){
  shipping_next_week_list = document.querySelectorAll(".shipping-next-week");
  shipping_tomorrow_list = document.querySelectorAll(".shipping-tomorrow");
  shipping_today_list = document.querySelectorAll(".shipping-today");
  shipping_next_week_list.forEach((button,index)=>(
    button.addEventListener("change",()=>{
      if (button.checked){
        console.log("clicked");
        modify_product_shipping(index,1);
      }
    })
  ));

  shipping_tomorrow_list.forEach((button,index)=>(
    button.addEventListener("change",()=>{
      if (button.checked){
        console.log("clicked");
        modify_product_shipping(index,2);
      }
    })
  ));

  shipping_today_list.forEach((button,index)=>(
    button.addEventListener("change",()=>{
      if (button.checked){
        console.log("clicked");
        modify_product_shipping(index,3);
      }
    })
  ));
}

function add_event_listeners_to_update_buttons(){
  update_buttons_list = document.querySelectorAll(".update-quantity-button");
  update_buttons_list.forEach((button,index)=>{
    button.addEventListener("click",()=>{
      update_quantity(index);
    });
  });
}

function add_event_listeners_to_save_buttons(){
  save_buttons_list = document.querySelectorAll(".save-quantity-button");
  save_buttons_list.forEach((button,button_index)=>{
    button.addEventListener("click",()=>{
      save_quantity(update_indices[button_index],button_index);
    });
  });
}

function add_event_listeners_to_delete_buttons(){
  delete_buttons_list = document.querySelectorAll(".delete-item-button");
  delete_buttons_list.forEach((button,index)=>{
    button.addEventListener("click",()=>{
      delete_item(index);
    });
  });
}

let next_week_date,next_week_month,tomorrow_date,tomorrow_month;
function daysInMonth(month, year) {
  const daysInMonths = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonths[month - 1];
}

if (date.getDate()+7 <= daysInMonth(date.getMonth(),date.getFullYear())){
  next_week_date = date.getDate()+7;
  next_week_month = months[date.getMonth()];
}
else{
  next_week_date = (date.getDate()+7) - daysInMonth(date.getMonth(),date.getFullYear());
  next_week_month = months[(1 + date.getMonth())%12];
}

if ((date.getDate()+1 )<= daysInMonth(date.getMonth(),date.getFullYear())){
  tomorrow_date = date.getDate()+1;
  // console.log(delivery_date);
  tomorrow_month = months[date.getMonth()];
}
else{
  tomorrow_date = (date.getDate()+1) - daysInMonth(date.getMonth(),date.getFullYear());
  tomorrow_month= months[(1 + date.getMonth())%12];
}

function modify_product_shipping(index,button_no){
  let new_product_html;
  let product = cart_items_list[index];
  let i = index;
  if (button_no==1){
    new_product_html = `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[date.getDay()]}, ${next_week_month} ${next_week_date}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : ${product.quantity}
                    <button class="update-quantity-button">Update</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week" checked/>
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow" />
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today"/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
  }
  else if (button_no==2){
    new_product_html =  `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[(date.getDay()+1)%7]}, ${tomorrow_month} ${tomorrow_date}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : ${product.quantity}
                    <button class="update-quantity-button">Update</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week"/>
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow" checked/>
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today"/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
  }
  else{
    new_product_html = `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : ${product.quantity}
                    <button class="update-quantity-button">Update</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week" />
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow" />
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today" checked/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
  }
  product_html_list[index] = new_product_html;
  print_cart_items_with_html_list();
  add_event_listeners_to_date_buttons();
  add_event_listeners_to_update_buttons();
  add_event_listeners_to_save_buttons();
  add_event_listeners_to_delete_buttons();
}



function update_quantity(index){
  update_indices.push(index);
  let new_html_card;
  let product = cart_items_list[index];
  let i = index;
  new_html_card = `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : <input type="number" class="updated-quantity-user" placeholder="${product.quantity}" min="1"/>
                    <button class="save-quantity-button">Save</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week" />
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow" />
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today" checked/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
    product_html_list[index] = new_html_card;
    print_cart_items_with_html_list();
    add_event_listeners_to_date_buttons();
    add_event_listeners_to_update_buttons();
    add_event_listeners_to_save_buttons();
    add_event_listeners_to_delete_buttons();
}


function save_quantity(item_index,button_index){
  let new_html_card;
  let product = cart_items_list[item_index];
  let i = item_index;
  let updated_quantity = document.querySelectorAll(".updated-quantity-user")[button_index];
  product.quantity = Number(updated_quantity.value);
  new_html_card = `\n<div class="product-info-card">
              <div class="delivery-date-box">
                Delivery Date:
                <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
              </div>
              <div class="info-box">
                <div class="product-image-box">
                  <img
                    src="${name_to_image_map[product.name]}"
                    alt=""
                    class="product-image"
                  />
                </div>
                <div class="product-name-quantity-box">
                  <div class="product-name">${product.name}</div>
                  <div class="product-price">$${product.price}</div>
                  <div class="product-quantity">
                    Quantity : ${product.quantity}
                    <button class="update-quantity-button">Update</button>
                    <button class="delete-item-button">Delete</button>
                  </div>
                </div>
                <div class="delivery-option-box">
                  Choose a delivery option:
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-next-week" />
                    <div class="delivery-date-user-choice">Next Week</div>
                    <div class="shipping-cost">FREE Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-tomorrow" />
                    <div class="delivery-date-user-choice">Tomorrow</div>
                    <div class="shipping-cost">$4.99 - Shipping</div>
                  </div>
                  <div class="delivery-options">
                    <input type="radio" name="delivery-date-option-${i}" class="shipping-today" checked/>
                    <div class="delivery-date-user-choice">Today</div>
                    <div class="shipping-cost">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div> `;
  product_html_list[item_index] = new_html_card;
  cart_items_list[item_index] = product;
  localStorage.setItem('cart',JSON.stringify(cart_items_list));
  update_indices.splice(button_index,1);
  print_cart_items_with_html_list();
  add_event_listeners_to_date_buttons();
  add_event_listeners_to_update_buttons();
  add_event_listeners_to_save_buttons();
  add_event_listeners_to_delete_buttons();
}

function delete_item(index){
  cart_items_list.splice(index,1);
  product_html_list.splice(index,1);
  localStorage.setItem('cart',JSON.stringify(cart_items_list));
  print_cart_items_with_html_list();
  add_event_listeners_to_date_buttons();
  add_event_listeners_to_update_buttons();
  add_event_listeners_to_save_buttons();
  add_event_listeners_to_delete_buttons();
}

function random_order_id(){
  let order_id = "";
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890";
  for (let i=0;i<8;i++){
    order_id += s[Math.floor(Math.random()*(s.length))];
  }
  order_id += '-';
  for (let i=0;i<4;i++){
    order_id += s[Math.floor(Math.random()*(s.length))];
  }
  order_id += '-';
  for (let i=0;i<4;i++){
    order_id += s[Math.floor(Math.random()*(s.length))];
  }
  order_id += '-';
  for (let i=0;i<4;i++){
    order_id += s[Math.floor(Math.random()*(s.length))];
  }
  order_id += '-';
  for (let i=0;i<12;i++){
    order_id += s[Math.floor(Math.random()*(s.length))];
  }
  return order_id;
}

let product_info_list = localStorage.getItem('order')===null?[]:JSON.parse(localStorage.getItem('order'));
document.querySelector(".place-your-order-button")
.addEventListener("click",place_order);
function place_order(){
  console.log('order_placed');
  let order_id = random_order_id();
  console.log(order_id);
  let delivery_dates_list = document.querySelectorAll(".delivery-date");
  for (let i=0;i<cart_items_list.length;i++){
    let product = cart_items_list[i];
    product['delivery_date'] = delivery_dates_list[i].innerText;
    product['total_amount'] = Math.round(product.price*product.quantity);
    product['order_date'] = `${months[date.getMonth()]} ${date.getDate()}`;
    product['order_id'] = order_id;
    product_info_list.unshift(product);
  }
  localStorage.removeItem('cart');
  localStorage.removeItem('quantity');
  localStorage.setItem('order',JSON.stringify(product_info_list));
}


