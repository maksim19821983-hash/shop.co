export function initBurger() {
    console.log('🍔 Инициализация бургера...');
    
    const burgerBtn = document.querySelector('.header__burger');
    const headerNav = document.getElementById('header__nav');
    
    console.log('burgerBtn:', burgerBtn);
    console.log('headerNav:', headerNav);

    if (!burgerBtn || !headerNav) {
        console.error('❌ Элементы не найдены!');
        console.error('Проверьте классы в HTML:');
        console.error('- Кнопка должна иметь class="header__burger"');
        console.error('- Меню должно иметь id="header_nav"');
        return;
    }

    const body = document.body;

    function toggleMenu() {
        burgerBtn.classList.toggle('burger--open');
        headerNav.classList.toggle('header__nav--open');
        
        const isExpanded = headerNav.classList.contains('header__nav--open');
        burgerBtn.setAttribute('aria-expanded', isExpanded);
        
        body.style.overflow = isExpanded ? 'hidden' : '';
    }

    burgerBtn.addEventListener('click', toggleMenu);

    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('burger--open');
            headerNav.classList.remove('header__nav--open');
            body.style.overflow = '';
            burgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (
            headerNav.classList.contains('header__nav--open') &&
            !headerNav.contains(e.target) &&
            !burgerBtn.contains(e.target)
        ) {
            toggleMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 822 && headerNav.classList.contains('header__nav--open')) {
            burgerBtn.classList.remove('burger--open');
            headerNav.classList.remove('header__nav--open');
            body.style.overflow = '';
            burgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    console.log('✅ Бургер успешно инициализирован!');
}