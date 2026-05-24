const products = [
  {
    id: 1,
    name: 'Каркассон',
    price: 2990,
    category: 'стратегия',
    players: '2-5',
    age: '8+',
    image: 'images/carcassonne.jpg',
    description: 'Классическая европейская стратегия. Собирайте земли, выкладывая тайлы, и занимайте их своими подданными.'
  },
  {
    id: 2,
    name: 'Манчкин',
    price: 2490,
    category: 'карточная',
    players: '3-6',
    age: '10+',
    image: 'images/munchkin.jpg',
    description: 'Юмористическая карточная игра о подземельях. Убивайте монстров, крадите сокровища и мешайте друзьям.'
  },
  {
    id: 3,
    name: 'Имаджинариум',
    price: 2190,
    category: 'вечеринка',
    players: '4-7',
    age: '12+',
    image: 'images/imaginarium.jpg',
    description: 'Игра на ассоциации с красивыми иллюстрациями. Придумывайте ассоциации к картам и угадывайте чужие.'
  },
  {
    id: 4,
    name: 'Колонизаторы',
    price: 3990,
    category: 'стратегия',
    players: '3-4',
    age: '10+',
    image: 'images/catan.jpg',
    description: 'Хитовая стратегия о развитии поселения. Добывайте ресурсы, стройте дороги и торгуйте с соседями.'
  },
  {
    id: 5,
    name: 'Дженга',
    price: 1590,
    category: 'семейная',
    players: '1-6',
    age: '6+',
    image: 'images/jenga.jpg',
    description: 'Игра на ловкость. Вытаскивайте бруски из башни и кладите сверху, не обрушив конструкцию.'
  },
  {
    id: 6,
    name: 'Эволюция',
    price: 2790,
    category: 'стратегия',
    players: '2-4',
    age: '12+',
    image: 'images/evolution.jpg',
    description: 'Создайте свой вид животных: развивайте им защиту, размер и способности, чтобы выжить в меняющемся мире.'
  },
  {
    id: 7,
    name: 'Бэнг!',
    price: 1990,
    category: 'дуэльная',
    players: '4-7',
    age: '14+',
    image: 'images/bang.jpg',
    description: 'Вестерн-дуэль со скрытыми ролями. Шериф и бандиты сражаются за выживание с помощью карт и меткости.'
  },
  {
    id: 8,
    name: 'Диксит',
    price: 2490,
    category: 'вечеринка',
    players: '3-6',
    age: '8+',
    image: 'images/dixit.jpg',
    description: 'Волшебная игра с ассоциациями. По картинкам придумывайте истории, а другие игроки угадывают ваш замысел.'
  },
  {
    id: 9,
    name: 'Ticket to Ride (Земляничные пути)',
    price: 3590,
    category: 'стратегия',
    players: '2-5',
    age: '8+',
    image: 'images/ticket-to-ride.jpg',
    description: 'Стройте железные дороги по карте мира. Соединяйте города, выполняйте маршруты и набирайте очки.'
  },
  {
    id: 10,
    name: 'Уно',
    price: 990,
    category: 'семейная',
    players: '2-10',
    age: '7+',
    image: 'images/uno.jpg',
    description: 'Знаменитая карточная игра. Сбрасывайте карты, подходящие по цвету или значению, и используйте специальные карты для помех.'
  }
];

const catalogGrid = document.getElementById(`catalog-grid`);

function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = ``;

    products.forEach(product => {
    const cardHTML = `
        <article class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-card-img">
            <div class="product-card-body">
                <h3 class="product-card-title">${product.name}</h3>
                <p class="product-card-desc">${product.description}</p>
                <div class="product-card-meta">
                    <span>👥 ${product.players}</span>
                    <span>👶 ${product.age}</span>
                </div>
                <div class="product-card-price">${product.price.toLocaleString('ru-RU')} ₽</div>
                <button class="product-card-btn" data-id="${product.id}">В корзину</button>
            </div>
        </article>
    `;
    catalogGrid.insertAdjacentHTML('beforeend', cardHTML);
});
}

renderCatalog();