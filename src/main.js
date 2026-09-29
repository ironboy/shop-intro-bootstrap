import '../sass/main.scss';

// Import Bootstrap's JavaScript
import * as bootstrap from 'bootstrap';

// Import or JavaScript that creates the cart content
import './fe26-shop.js';

// Following a link inside the cart (#checka-ut) should close the cart
addEventListener('hashchange', () => Offcanvas.getInstance('#varukorg')?.hide());
