// localStorage.setItem('quantity','0');
// localStorage.removeItem('cart');
// uncomment the above two lines to reset the data and start fresh

let cart_items_list = localStorage.getItem('cart')===null?[]:JSON.parse(localStorage.getItem('cart'));
let product_name_list,product_price_list,product_quantity_list,product_spacer_list;
product_name_list = document.querySelectorAll(".product-name");
product_price_list = document.querySelectorAll(".product-price");
product_quantity_list = document.querySelectorAll(".quantity-selector");
product_spacer_list = document.querySelectorAll(".product-spacer");
let total_quantity = localStorage.getItem('quantity')===null?0:Number(localStorage.getItem('quantity'));
let cart_quantity = document.querySelector('.cart-items-quantity');
cart_quantity.innerText = total_quantity;
if (total_quantity > 9){
  cart_quantity.style.left = '25px';
}
else{
  cart_quantity.style.left = '30px';
}
let add_to_cart_button_list = document.querySelectorAll(".add-to-cart-button");
add_to_cart_button_list.forEach((button,index)=>{
  button.addEventListener('click',()=>{
    add_to_cart_func(index);
  });
});


function add_to_cart_func(index){
  let item_to_be_added = {};
  item_to_be_added.name = product_name_list[index].innerText;
  item_to_be_added.price = Number(product_price_list[index].innerText.replace("$",""));
  item_to_be_added.quantity = Number(product_quantity_list[index].value);
  cart_items_list.push(item_to_be_added);
  localStorage.setItem('cart',JSON.stringify(cart_items_list));
  total_quantity += item_to_be_added.quantity;
  localStorage.setItem('quantity',`${total_quantity}`);
  document.querySelector(".cart-items-quantity").innerText = total_quantity;
  let product_spacer_element = product_spacer_list[index];
  product_spacer_element.innerHTML = '<img style="width:17px; position:relative; top:2px;" src="images&icons/tick_green.png" alt=""/> Added';
  let green_added_id = setTimeout(()=>{
    product_spacer_element.innerHTML="";
  },2000);
  console.log(cart_items_list);
  if (total_quantity > 9){
    cart_quantity.style.left = '25px';
  }
  else{
    cart_quantity.style.left = '30px';
  }
}

