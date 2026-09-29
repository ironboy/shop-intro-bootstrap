import '../sass/main.scss';

// One import loads all of Bootstrap's JavaScript. After this every
// component works by itself through its data-bs-* attributes in the html
// (navbar toggler, offcanvas, dropdowns, modals, tooltips...).
// The bootstrap object is only needed if you want to control
// a component from your own JavaScript, like below.
import * as bootstrap from 'bootstrap';

import './fe26-shop.js';

// Following a link inside the cart (#checka-ut) should close the cart
addEventListener('hashchange', () => bootstrap.Offcanvas.getInstance('#varukorg')?.hide());
