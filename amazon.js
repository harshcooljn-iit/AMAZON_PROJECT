
let cart_items = {

}
let curidx=0;

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
}
let quant=0;

function add_item_to_cart(n,p,q,product_spacer_index){
  let item = {
    image : name_to_image_map[n],
    name : n,
    price : p,
    quantity : q,
  }
  cart_items[`${curidx}`] = item;
  curidx++;
  let product_spacer_element = product_spacer_list[product_spacer_index];
  product_spacer_element.innerHTML = '<img style="width:17px; position:relative; top:2px;" src="images&icons/tick_green.png" alt=""/> Added';
  product_spacer_element.classList.add('Green-added-popup');
  setTimeout(()=>{
    product_spacer_element.innerHTML="";
  },2000);
  quant += Number(q);
  localStorage.setItem('quantity',`${quant}`);
  let cart_quantity=document.querySelector('.cart-items-quantity');
  cart_quantity.innerHTML = localStorage.getItem('quantity');
  if (quant > 9){
    cart_quantity.style.left = '25px';
  }
  else{
    cart_quantity.style.left = '30px';
  }
  localStorage.setItem('cart_items',JSON.stringify(cart_items));
}

let add_to_cart_button_list = document.querySelectorAll('.add-to-cart-button');
let product_name_list = document.querySelectorAll('.product-name');
let product_price_list = document.querySelectorAll('.product-price');
let product_quantity_list = document.querySelectorAll('.quantity-selector');
let product_spacer_list = document.querySelectorAll('.product-spacer');

add_to_cart_button_list.forEach((buttonElement,index)=>{
  buttonElement.addEventListener('click',()=>{
    add_item_to_cart(product_name_list[index].innerHTML,product_price_list[index].innerHTML,product_quantity_list[index].value,index);
  });
});

// let iid = setInterval(()=>{
//   let citems = JSON.parse(localStorage.getItem('cart_items'));
//   console.log("citems");
//   console.log(citems);
// },2000);

// let id = setInterval(()=>{
//   console.log(cart_items);
// },3000);
// clearInterval(id);


