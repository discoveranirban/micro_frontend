import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>you have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = products;
};

if (process.env.NODE_ENV === "development"){
    const el = document.querySelector('#dev-cart');

    if(el){
        mount(el);
    }
}

export { mount };