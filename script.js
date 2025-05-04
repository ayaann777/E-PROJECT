
  window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    setTimeout(() => {
      mainContent.classList.add('show');
    }, 50);
  });
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('active');
}

let qty = 1;
let pricePerItem = 5500;

function updateTotal() {
  document.getElementById('qty').innerText = qty;
  document.getElementById('total').innerText = qty * pricePerItem;
}

function increaseQty() {
  qty++;
  updateTotal();
}

function decreaseQty() {
  if (qty > 1) qty--;
  updateTotal();
}
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  loader.style.transition = 'opacity 0.5s ease';
  loader.style.opacity = '0';

  setTimeout(() => {
    loader.style.display = 'none';
    mainContent.style.display = 'block';
    setTimeout(() => {
      mainContent.classList.add('show');
    }, 50);
  }, 500);
});
// Open/close logic remains the same
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('active');
}

// Detect clicks outside the sidebar
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('cartSidebar');
  const cartButton = document.querySelector('.fa-shopping-cart');
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isCartIcon = cartButton.contains(event.target);

  if (!isClickInsideSidebar && !isCartIcon && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});
function showToast() {
  const toast = document.getElementById('itemAddedToast');
  toast.style.display = 'block';
  toast.classList.add('show');

  setTimeout(() => {
    hideToast();
  }, 4000); // auto-hide after 2 seconds
}

function hideToast() {
  const toast = document.getElementById('itemAddedToast');
  toast.classList.remove('show');
  toast.style.display = 'none';
  toast.addEventListener('transitionend', () => {
  toast.style.display = 'none';
}, { once: true });
}


// Attach to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.btn-add');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // prevent default link behavior if <a>
      showToast();
    });
  });
});