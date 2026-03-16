export function closeBanner() {
  const banner = document.getElementById('discountBanner');
  const closeButton = banner?.querySelector('.close-btn');

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
}