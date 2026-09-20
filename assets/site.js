const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.course-card')];
const search = document.querySelector('#course-search');
const status = document.querySelector('#results-status');
const emptyState = document.querySelector('#empty-state');
const clearSearch = document.querySelector('#clear-search');

let activeFilter = 'all';

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuButton.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

function updateCourses() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const matchesStage = activeFilter === 'all' || card.dataset.stage === activeFilter;
    const matchesSearch = !query || card.dataset.search.includes(query);
    const show = matchesStage && matchesSearch;
    card.hidden = !show;
    if (show) visible += 1;
  });

  const filterLabel = activeFilter === 'all' ? 'courses' : activeFilter.toUpperCase() + ' courses';
  status.textContent = visible === 9 && activeFilter === 'all' && !query
    ? 'Showing all 9 courses'
    : `Showing ${visible} ${filterLabel}`;
  emptyState.hidden = visible !== 0;
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    activeFilter = filter.dataset.filter;
    filters.forEach((item) => {
      const selected = item === filter;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateCourses();
  });
});

search.addEventListener('input', updateCourses);

clearSearch.addEventListener('click', () => {
  activeFilter = 'all';
  search.value = '';
  filters.forEach((item) => {
    const selected = item.dataset.filter === 'all';
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  updateCourses();
  search.focus();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 680) setMenu(false);
});
