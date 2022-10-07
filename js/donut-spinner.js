const loadPage = () => {
  const donutSpinner = document.querySelector('.donut-spinner');
  const page = document.querySelector('.page');

    setTimeout(() => {
        donutSpinner.style.display = 'none';
        page.innerHTML = 'Page loaded';
    }, 5000);
  
}

loadPage();