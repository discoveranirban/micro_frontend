import { mount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("container");

mount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#dev-cart'));