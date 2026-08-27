const products = {
  pcs: [
    {
      id: 'pc1',
      name: 'PC Gamer RTX 4070 Ti Super',
      category: 'Desktop',
      price: 8999.90,
      oldPrice: 10499.90,
      discount: 14,
      rating: 4.9,
      reviews: 128,
      icon: 'fa-desktop'
    },
    {
      id: 'pc2',
      name: 'Notebook Gamer Legion 5i RTX 4060',
      category: 'Notebook',
      price: 6499.00,
      oldPrice: 7499.00,
      discount: 13,
      rating: 4.8,
      reviews: 89,
      icon: 'fa-laptop'
    },
    {
      id: 'pc3',
      name: 'PC Gamer Ryzen 7 + RTX 3060',
      category: 'Desktop',
      price: 4999.90,
      oldPrice: null,
      discount: 0,
      rating: 4.7,
      reviews: 214,
      icon: 'fa-desktop'
    },
    {
      id: 'pc4',
      name: 'MacBook Pro M3 14"',
      category: 'Notebook',
      price: 12999.00,
      oldPrice: 14999.00,
      discount: 13,
      rating: 4.9,
      reviews: 56,
      icon: 'fa-laptop'
    }
  ],
  devices: [
    {
      id: 'dev1',
      name: 'Monitor Gamer 27" 165Hz QHD',
      category: 'Monitor',
      price: 1499.90,
      oldPrice: 1899.90,
      discount: 21,
      rating: 4.8,
      reviews: 342,
      icon: 'fa-tv'
    },
    {
      id: 'dev2',
      name: 'Headset HyperX Cloud III',
      category: 'Áudio',
      price: 449.90,
      oldPrice: 549.90,
      discount: 18,
      rating: 4.7,
      reviews: 891,
      icon: 'fa-headset'
    },
    {
      id: 'dev3',
      name: 'Teclado Mecânico RGB Redragon',
      category: 'Periférico',
      price: 299.90,
      oldPrice: null,
      discount: 0,
      rating: 4.6,
      reviews: 567,
      icon: 'fa-keyboard'
    },
    {
      id: 'dev4',
      name: 'Mouse Gamer Logitech G Pro X',
      category: 'Periférico',
      price: 599.90,
      oldPrice: 699.90,
      discount: 14,
      rating: 4.9,
      reviews: 423,
      icon: 'fa-computer-mouse'
    }
  ],
  games: [
    {
      id: 'game1',
      name: 'Cyberpunk 2077: Ultimate Edition',
      category: 'RPG',
      price: 149.90,
      oldPrice: 249.90,
      discount: 40,
      rating: 4.5,
      reviews: 2103,
      icon: 'fa-gamepad'
    },
    {
      id: 'game2',
      name: 'Elden Ring Shadow of the Erdtree',
      category: 'Action RPG',
      price: 249.90,
      oldPrice: null,
      discount: 0,
      rating: 4.9,
      reviews: 1876,
      icon: 'fa-gamepad'
    },
    {
      id: 'game3',
      name: 'Call of Duty: Black Ops 6',
      category: 'FPS',
      price: 299.90,
      oldPrice: 349.90,
      discount: 14,
      rating: 4.3,
      reviews: 945,
      icon: 'fa-crosshairs'
    },
    {
      id: 'game4',
      name: 'Baldur\'s Gate 3',
      category: 'RPG',
      price: 199.90,
      oldPrice: 249.90,
      discount: 20,
      rating: 4.9,
      reviews: 3201,
      icon: 'fa-dungeon'
    }
  ]
};

/* ===== Cart State ===== */
let cart = JSON.parse(localStorage.getItem('techplay_cart')) || [];

/* ===== DOM Elements ===== */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const header = document.getElementById('header');

/* ===== Format Currency ===== */
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
