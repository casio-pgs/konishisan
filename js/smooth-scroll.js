// スムーススクロール実装
document.addEventListener('DOMContentLoaded', function() {
  // トップボタンのスムーススクロール
  const topBtn = document.getElementById('topBtn');

  if (topBtn) {
    topBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ページ内リンクのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // トップボタンは別処理
      if (href === '#topBtn' || href === 'index.html#container') {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // トップボタンの表示/非表示切り替え
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });
});
