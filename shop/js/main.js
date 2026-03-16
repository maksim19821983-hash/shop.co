import { closeBanner } from './closeBanner.js';
import { initBurger } from './burger.js';

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    closeBanner();
    initBurger();
});