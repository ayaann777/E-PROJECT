
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
  document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-hover');

    function pauseOtherVideos(currentVideo) {
      videos.forEach(video => {
        if (video !== currentVideo) {
          video.pause();
          video.closest('.video-wrapper')?.classList.remove('playing');
        }
      });
    }

    function setupScrollPlay() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          const wrapper = video.closest('.video-wrapper');

          if (entry.isIntersecting) {
            pauseOtherVideos(video);
            video.play().catch(() => {}); // Prevent errors on play rejection
            wrapper?.classList.add('playing');
          } else {
            video.pause();
            wrapper?.classList.remove('playing');
          }
        });
      }, { threshold: 0.4 });

      videos.forEach(video => observer.observe(video));
    }

    function setupHoverPlay() {
      videos.forEach(video => {
        const wrapper = video.closest('.video-wrapper');

        if (wrapper) {
          wrapper.addEventListener('mouseenter', () => {
            pauseOtherVideos(video);
            video.play().catch(() => {});
            wrapper.classList.add('playing');
          });

          wrapper.addEventListener('mouseleave', () => {
            video.pause();
            wrapper.classList.remove('playing');
          });
        }
      });
    }

    if (window.innerWidth < 968) {
      setupScrollPlay();
    } else {
      setupHoverPlay();
    }
  });
