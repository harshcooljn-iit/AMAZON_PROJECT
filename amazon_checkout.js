let cart_items = JSON.parse(localStorage.getItem('cart_items'));
let items_html_list = [];
let cart_items_list = [];
let delete_buttons_list = [];

let iid;
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
let fees=0;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
var delivery_date = date.getDate();
var delivery_day = days[date.getDay()];
var delivery_month = months[date.getMonth()];

// console.log("On checkout page");
// console.log(cart_items);
function add_cart_items_to_checkout_9(cart_items){
  let len = Object.keys(cart_items).length;
  for (let i=0;i<len;i++){
    item = cart_items[`${i}`];
    cart_items_list.push(item);
    items_html_list.push(`\n <div class="product-info-card">
    <div class="delivery-date-box">
      Delivery Date:
      <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
    </div>
    <div class="info-box">
      <div class="product-image-box">
        <img
          src=${item.image}
          alt=""
          class="product-image"
        />
      </div>
      <div class="product-name-quantity-box">
        <div class="product-name">${item.name}</div>
        <div class="product-price">${item.price}</div>
        <div class="product-quantity">
          Quantity : ${item.quantity}
          <button class="update-quantity-button">Update</button>
          <button class="delete-item-button">Delete</button>
        </div>
      </div>
      <div class="delivery-option-box">
        Choose a delivery option:
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-free"/>
          <div class="delivery-date-user-choice">Next Week</div>
          <div class="shipping-cost">FREE Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-4"/>
          <div class="delivery-date-user-choice">Tomorrow</div>
          <div class="shipping-cost">$4.99 - Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-9" checked/>
          <div class="delivery-date-user-choice">Today</div>
          <div class="shipping-cost">$9.99 Shipping</div>
        </div>
      </div>
    </div>
  </div>`);
  }
}

function add_cart_items_to_checkout_4(cart_items){
  let len = Object.keys(cart_items).length;
  for (let i=0;i<len;i++){
    item = cart_items[`${i}`];
    cart_items_list.push(item);
    items_html_list.push(`\n <div class="product-info-card">
    <div class="delivery-date-box">
      Delivery Date:
      <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
    </div>
    <div class="info-box">
      <div class="product-image-box">
        <img
          src=${item.image}
          alt=""
          class="product-image"
        />
      </div>
      <div class="product-name-quantity-box">
        <div class="product-name">${item.name}</div>
        <div class="product-price">${item.price}</div>
        <div class="product-quantity">
          Quantity : ${item.quantity}
          <button class="update-quantity-button">Update</button>
          <button class="delete-item-button">Delete</button>
        </div>
      </div>
      <div class="delivery-option-box">
        Choose a delivery option:
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-free"/>
          <div class="delivery-date-user-choice">Next Week</div>
          <div class="shipping-cost">FREE Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-4" checked/>
          <div class="delivery-date-user-choice">Tomorrow</div>
          <div class="shipping-cost">$4.99 - Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-9"/>
          <div class="delivery-date-user-choice">Today</div>
          <div class="shipping-cost">$9.99 Shipping</div>
        </div>
      </div>
    </div>
  </div>`);
  }
}

function add_cart_items_to_checkout_free(cart_items){
  let len = Object.keys(cart_items).length;
  for (let i=0;i<len;i++){
    item = cart_items[`${i}`];
    cart_items_list.push(item);
    items_html_list.push(`\n <div class="product-info-card">
    <div class="delivery-date-box">
      Delivery Date:
      <span class="delivery-date">${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}</span>
    </div>
    <div class="info-box">
      <div class="product-image-box">
        <img
          src=${item.image}
          alt=""
          class="product-image"
        />
      </div>
      <div class="product-name-quantity-box">
        <div class="product-name">${item.name}</div>
        <div class="product-price">${item.price}</div>
        <div class="product-quantity">
          Quantity : ${item.quantity}
          <button class="update-quantity-button">Update</button>
          <button class="delete-item-button">Delete</button>
        </div>
      </div>
      <div class="delivery-option-box">
        Choose a delivery option:
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-free" checked/>
          <div class="delivery-date-user-choice">Next Week</div>
          <div class="shipping-cost">FREE Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-4"/>
          <div class="delivery-date-user-choice">Tomorrow</div>
          <div class="shipping-cost">$4.99 - Shipping</div>
        </div>
        <div class="delivery-options">
          <input type="radio" name="delivery-date-option-${i}" class="shipping-cost-9"/>
          <div class="delivery-date-user-choice">Today</div>
          <div class="shipping-cost">$9.99 Shipping</div>
        </div>
      </div>
    </div>
  </div>`);
  }
}
let total_price=0;
function print_html_on_page(items_html_list){
  let items_html="";
  total_price=0;
  for (let i=0;i<items_html_list.length;i++){
    items_html += items_html_list[i];
    total_price += Number(cart_items_list[i].price.replace("$",""));
  }
  let product_info_box = document.querySelector(".product-info-box");
  product_info_box.innerHTML = items_html;
  delete_buttons_list = document.querySelectorAll(".delete-item-button");
  delete_buttons_list.forEach((button,index)=>{
    button.addEventListener('click',()=>{
      delete_item_from_cart(index);
    });
  });
  let update_buttons_list = document.querySelectorAll(".update-quantity-button");
  update_buttons_list.forEach((button,index)=>{
    button.addEventListener('click',()=>{
      update_quantity(index);
    });
  });
  let free_delivery_list = document.querySelectorAll(".shipping-cost-free");
  let delivery_list_4 = document.querySelectorAll(".shipping-cost-4");
  let delivery_list_9 = document.querySelectorAll(".shipping-cost-9");
  // console.log(free_delivery_list);
  // console.log(delivery_list_4);
  // console.log(delivery_list_9);
  fees=0;
  for (let i=0;i<free_delivery_list.length;i++){
    if (free_delivery_list[i].checked){
      // console.log('free');
      shipping_date_fees(0);
    }
    else if (delivery_list_4[i].checked){
      // console.log('4');
      shipping_date_fees(4);
    }
    else if (delivery_list_9[i].checked){
      // console.log('9');
      shipping_date_fees(9);
    }
    let delivery_dates_list = document.querySelectorAll(".delivery-date");
    let required_element = delivery_dates_list[i];
    required_element.innerHTML = `${delivery_day}, ${delivery_month} ${delivery_date}`;
  }
  
  document.querySelector(".total-shipping-amount").innerHTML = `$${Math.round(fees)}`;
  amount_calculation_and_updation();
  
  free_delivery_list.forEach((button,index)=>{
    // console.log('adding event listeners');
    button.addEventListener("click",(event)=>{
      if (event.target.checked){
        // console.log("clicked");
        items_html_list.splice(0,items_html_list.length);
        add_cart_items_to_checkout_free(cart_items);
        print_html_on_page(items_html_list);
      }
    });
  });

  delivery_list_4.forEach((button,index)=>{
    button.addEventListener("click",(event)=>{
      if (event.target.checked){
        // console.log("clicked");
        items_html_list.splice(0,items_html_list.length);
        add_cart_items_to_checkout_4(cart_items);
        print_html_on_page(items_html_list);
      } 
    });
  });

  delivery_list_9.forEach((button,index)=>{
    button.addEventListener("click",(event)=>{
      if (event.target.checked){
        // console.log("clicked");
        items_html_list.splice(0,items_html_list.length);
        add_cart_items_to_checkout_9(cart_items);
        print_html_on_page(items_html_list);
      } 
    });
  });



  total_price = Math.round(total_price);
  document.querySelector(".total-items-quantity").innerHTML=`${delete_buttons_list.length}`;
  document.querySelector(".items-quantity").innerHTML = `${delete_buttons_list.length} items`;
  document.querySelector(".total-amount-items").innerHTML = `$${total_price}`;
  amount_calculation_and_updation();
  if (items_html_list.length===0){
    // console.log('len 0');
    let product_info_box = document.querySelector(".product-info-box");
    product_info_box.innerHTML = `<div class="your-cart-is-empty">Your Cart Is Empty</div>\n <a href="amazon_homepage.html"><button class="view-more-products-button">View more products</button></a>`;
    return;
  }
}

function amount_calculation_and_updation(){
  let order_total = document.querySelector(".total-amount");
  let shipping_fees = document.querySelector(".total-shipping-amount");
  let total_before_tax = document.querySelector(".total-amount-before-tax");
  let total_tax_amount = document.querySelector(".total-tax-amount");
  let p1 = total_price;
  let p2 = Number(shipping_fees.innerHTML.replace("$",""));
  total_before_tax.innerHTML = `$${Math.round(p1+p2)}`;
  total_tax_amount.innerHTML = `$${Math.round((p1+p2)/10)}`;
  order_total.innerHTML = `$${Math.round(p1+p2+((p1+p2)/10))}`;
}

add_cart_items_to_checkout_9(cart_items);
print_html_on_page(items_html_list);


function delete_item_from_cart(index){
  items_html_list.splice(index,1);
  cart_items_list.splice(index,1);
  cart_items = {};
  let num = Number(localStorage.getItem('quantity'));
  num--;
  localStorage.setItem('quantity',`${num}`);
  for (let i=0;i<cart_items_list.length;i++){
    cart_items[`${i}`] = cart_items_list[i];
  }
  console.log(cart_items);
  console.log(cart_items_list);
  print_html_on_page(items_html_list);
  localStorage.removeItem('cart-items');
  localStorage.setItem('cart-items',JSON.stringify(cart_items));
  localStorage.removeItem('quantity');
  localStorage.setItem('quantity',`${cart_items_list.length}`);
}

function daysInMonth(month, year) {
  const daysInMonths = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonths[month - 1];
}




function shipping_date_fees(value){
  delivery_date = date.getDate();
  if (value===0){
    if (date.getDate()+7 <= daysInMonth(date.getMonth(),date.getFullYear())){
      delivery_date = date.getDate()+7;
      delivery_month = date.getMonth();
    }
    else{
      delivery_date = (date.getDate()+7) - daysInMonth(date.getMonth(),date.getFullYear());
      delivery_month = (1 + date.getMonth())%12;
    }
    delivery_day = days[date.getDay()];
  }
  else if (value===4){
    if ((date.getDate()+1 )<= daysInMonth(date.getMonth(),date.getFullYear())){
      delivery_date = date.getDate()+1;
      // console.log(delivery_date);
      delivery_month = date.getMonth();
    }
    else{
      delivery_date = (date.getDate()+1) - daysInMonth(date.getMonth(),date.getFullYear());
      delivery_month = (1 + date.getMonth())%12;
    }
    fees += 4.99;
    delivery_day = days[date.getDay()+1];
  }
  else{
    delivery_date = date.getDate();
    delivery_month = date.getMonth();
    fees += 9.99;
    delivery_day = days[date.getDay()];
  }
  delivery_month = months[delivery_month];
  
}


function update_quantity(item_no){
  let product_quantity_list = document.querySelectorAll(".product-quantity");
  product_quantity_list[item_no].innerHTML = `Quantity : <input type="number" class="update-input"/>
  <button class="save-quantity-button">Save</button>
  <button class="delete-item-button">Delete</button>`;
}



