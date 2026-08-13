document.addEventListener('DOMContentLoaded', () => {
  const targetUrl = 'https://youtube.com/';

  function handleRedirect(event) {
    if (event) {
      event.preventDefault();
    }
    window.location.href = targetUrl;
  }

  // Handle click or tap anywhere on the document
  document.addEventListener('click', handleRedirect);
  document.addEventListener('touchend', handleRedirect);
});
