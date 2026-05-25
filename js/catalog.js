const products = [
  {
    id: 1,
    name: 'Каркассон',
    price: 2990,
    category: 'стратегия',
    players: '2-5',
    age: '8+',
    image: 'images/carcassonne.jpg',
    description: 'Классическая европейская стратегия. Собирайте земли, выкладывая тайлы, и занимайте их своими подданными.',
    fullDescription: 'Каркассон — одна из самых известных настольных игр в мире. Игроки по очереди выкладывают квадратные тайлы с фрагментами дорог, городов, монастырей и полей. На только что выложенный тайл можно поставить своего подданного (мипла), который принесёт очки, когда объект будет завершён. Простые правила, глубокая стратегия и бесконечная реиграбельность сделали эту игру классикой.',
    gallery: [
      'images/carcassonne.jpg',
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600',
      'https://images.unsplash.com/photo-1632501641775-b4e2cf2b2a7b?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=каркассон+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=каркассон+правила+игры'
  },
  {
    id: 2,
    name: 'Манчкин',
    price: 2490,
    category: 'карточная',
    players: '3-6',
    age: '10+',
    image: 'images/munchkin.jpg',
    description: 'Юмористическая карточная игра о подземельях. Убивайте монстров, крадите сокровища и мешайте друзьям.',
    fullDescription: 'Манчкин — это пародия на Dungeons & Dragons, где главная цель — достичь 10-го уровня. Открывайте двери в подземелья, сражайтесь с монстрами, собирайте шмотки и используйте коварные карты против соперников. Здесь разрешено жульничать (если не поймали), а союзники могут стать врагами в любой момент.',
    gallery: [
      'images/munchkin.jpg',
      'https://images.unsplash.com/photo-1606503153255-59d8b2e4b0e4?w=600',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=манчкин+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=манчкин+правила+игры'
  },
  {
    id: 3,
    name: 'Имаджинариум',
    price: 2190,
    category: 'вечеринка',
    players: '4-7',
    age: '12+',
    image: 'images/imaginarium.jpg',
    description: 'Игра на ассоциации с красивыми иллюстрациями. Придумывайте ассоциации к картам и угадывайте чужие.',
    fullDescription: 'Имаджинариум — это игра для весёлых компаний. Ведущий выбирает карту и придумывает к ней ассоциацию, остальные игроки подбирают свои карты так, чтобы они подходили к этой ассоциации. Затем все голосуют за карту ведущего. Чем больше игроков угадали вашу карту (но не все!), тем больше очков получите. Необычные иллюстрации тренируют воображение и вызывают улыбки.',
    gallery: [
      'images/imaginarium.jpg',
      'https://images.unsplash.com/photo-1606503825005-1a5e7814662c?w=600',
      'https://images.unsplash.com/photo-1610890712028-5f7f5d2a8d8e?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=имаджинариум+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=имаджинариум+правила+игры'
  },
  {
    id: 4,
    name: 'Колонизаторы',
    price: 3990,
    category: 'стратегия',
    players: '3-4',
    age: '10+',
    image: 'images/catan.jpg',
    description: 'Хитовая стратегия о развитии поселения. Добывайте ресурсы, стройте дороги и торгуйте с соседями.',
    fullDescription: 'Колонизаторы (Catan) — легендарная настольная игра, где вы управляете колонистами на необитаемом острове. Стройте дороги, возводите города, добывайте ресурсы (дерево, камень, шерсть, руду, кирпич) и торгуйте с другими игроками. Побеждает тот, кто первым наберёт 10 очков развития. Каждая партия уникальна благодаря случайной раскладке тайлов.',
    gallery: [
      'images/catan.jpg',
      'https://images.unsplash.com/photo-1632501641775-b4e2cf2b2a7b?w=600',
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=колонизаторы+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=колонизаторы+правила+игры'
  },
  {
    id: 5,
    name: 'Дженга',
    price: 1590,
    category: 'семейная',
    players: '1-6',
    age: '6+',
    image: 'images/jenga.jpg',
    description: 'Игра на ловкость. Вытаскивайте бруски из башни и кладите сверху, не обрушив конструкцию.',
    fullDescription: 'Дженга — это классическая игра на физическую сноровку. Башня строится из 54 деревянных брусков (3 бруска в ряду, чередуя направление). Игроки по очереди вытаскивают по одному бруску из любой части башни (кроме верхнего завершённого ряда) и кладут его на самый верх. Кто разрушил башню — проиграл. Просто, весело и затягивает.',
    gallery: [
      'images/jenga.jpg',
      'https://images.unsplash.com/photo-1606503260792-1f6e0c6eb6e4?w=600',
      'https://images.unsplash.com/photo-1610890712028-5f7f5d2a8d8e?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=дженга+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=дженга+правила+игры'
  },
  {
    id: 6,
    name: 'Эволюция',
    price: 2790,
    category: 'стратегия',
    players: '2-4',
    age: '12+',
    image: 'images/evolution.jpg',
    description: 'Создайте свой вид животных: развивайте им защиту, размер и способности, чтобы выжить в меняющемся мире.',
    fullDescription: 'Эволюция — стратегическая игра о естественном отборе. У каждого игрока есть свой вид животных, которых нужно развивать: увеличивать размер, отращивать рога, развивать симбиоз и другие свойства. В конце раунда наступает фаза питания — животные соревнуются за еду. Вид, который не смог прокормиться, вымирает. Побеждает игрок, чьи животные выжили и приспособились лучше всех.',
    gallery: [
      'images/evolution.jpg',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
      'https://images.unsplash.com/photo-1632501641775-b4e2cf2b2a7b?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=эволюция+настольная+игра+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=эволюция+правила'
  },
  {
    id: 7,
    name: 'Бэнг!',
    price: 1990,
    category: 'дуэльная',
    players: '4-7',
    age: '14+',
    image: 'images/bang.jpg',
    description: 'Вестерн-дуэль со скрытыми ролями. Шериф и бандиты сражаются за выживание с помощью карт и меткости.',
    fullDescription: 'Бэнг! — карточная игра в стиле дикого Запада. Каждый игрок получает секретную роль: шериф, его помощник, бандиты и предатель. Шериф известен всем, остальные скрыты. Задача шерифа и помощника — убить бандитов и предателя, бандиты — убить шерифа, предатель — остаться последним выжившим. Игра славится блефом, перестрелками и неожиданными поворотами.',
    gallery: [
      'images/bang.jpg',
      'https://images.unsplash.com/photo-1606503153255-59d8b2e4b0e4?w=600',
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=бэнг+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=бэнг+правила'
  },
  {
    id: 8,
    name: 'Диксит',
    price: 2490,
    category: 'вечеринка',
    players: '3-6',
    age: '8+',
    image: 'images/dixit.jpg',
    description: 'Волшебная игра с ассоциациями. По картинкам придумывайте истории, а другие игроки угадывают ваш замысел.',
    fullDescription: 'Диксит (Dixit) — обладатель множества наград. Игроки получают по 6 карт с сюрреалистичными иллюстрациями. Ведущий выбирает карту и придумывает к ней ассоциацию (слово или фразу). Остальные игроки сбрасывают свои карты, которые, по их мнению, подходят к этой ассоциации. После перемешивания все голосуют за карту ведущего. Игра развивает воображение и отлично подходит для больших компаний.',
    gallery: [
      'images/dixit.jpg',
      'https://images.unsplash.com/photo-1606503825005-1a5e7814662c?w=600',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=диксит+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=диксит+правила'
  },
  {
    id: 9,
    name: 'Ticket to Ride (Земляничные пути)',
    price: 3590,
    category: 'стратегия',
    players: '2-5',
    age: '8+',
    image: 'images/ticket-to-ride.jpg',
    description: 'Стройте железные дороги по карте мира. Соединяйте города, выполняйте маршруты и набирайте очки.',
    fullDescription: 'Ticket to Ride — стратегия о путешествиях на поезде. Игроки собирают карты вагонов разных цветов, чтобы прокладывать маршруты между городами на карте. У каждого есть секретные маршруты (соединить два города), которые приносят дополнительные очки. Кто быстрее займёт нужные перегоны, тому и победа. Игра доступна для всей семьи, а карта мира (например, Европы или США) даёт новые тактические нюансы.',
    gallery: [
      'images/ticket-to-ride.jpg',
      'https://images.unsplash.com/photo-1632501641775-b4e2cf2b2a7b?w=600',
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=ticket+to+ride+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=ticket+to+ride+правила'
  },
  {
    id: 10,
    name: 'Уно',
    price: 990,
    category: 'семейная',
    players: '2-10',
    age: '7+',
    image: 'images/uno.jpg',
    description: 'Знаменитая карточная игра. Сбрасывайте карты, подходящие по цвету или значению, и используйте специальные карты для помех.',
    fullDescription: 'Уно — карточная игра, которую знают во всём мире. Колода состоит из 108 карт с цифрами от 0 до 9 и специальными картами: «реверс», «пропуск хода», «+2», «дикий цвет» и «+4». Цель — первым сбросить все свои карты. При этом вы можете мешать соперникам, заставляя их добирать дополнительные карты. Простые правила и быстрые партии делают Уно идеальной игрой для любой компании.',
    gallery: [
      'images/uno.jpg',
      'https://images.unsplash.com/photo-1606503253155-59d8b2e4b0e4?w=600',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600'
    ],
    reviewUrl: 'https://www.youtube.com/results?search_query=уно+обзор',
    rulesUrl: 'https://www.youtube.com/results?search_query=уно+правила'
  }
];

const catalogGrid = document.getElementById(`catalog-grid`);
const modalOverlay = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

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

        const card = catalogGrid.lastElementChild;
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('product-card-btn')) return;
            openProductModal(product.id);
        });
    });
}


// ========== ПОПАП ТОВАРА ==========
// Открыть попап и заполнить данными
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Заполняем текстовые поля
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.fullDescription;
    document.getElementById('modal-price').textContent = product.price.toLocaleString('ru-RU') + ' ₽';
    document.getElementById('modal-players').textContent = '👥 ' + product.players;
    document.getElementById('modal-age').textContent = '👶 ' + product.age;
    
    // Кнопка "В корзину" (пока заглушка)
    document.getElementById('modal-add-btn').dataset.id = product.id;
    
    // Ссылки
    const reviewLink = document.getElementById('modal-review');
    const rulesLink = document.getElementById('modal-rules');
    reviewLink.href = product.reviewUrl || '#';
    rulesLink.href = product.rulesUrl || '#';
    reviewLink.style.display = product.reviewUrl ? '' : 'none';
    rulesLink.style.display = product.rulesUrl ? '' : 'none';
    
    // Галерея
    const mainImg = document.getElementById('modal-main-img');
    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    mainImg.src = product.gallery[0];
    mainImg.alt = product.name;
    
    product.gallery.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = product.name + ' ' + (index + 1);
        thumb.className = 'modal-thumb' + (index === 0 ? ' active' : '');
        thumb.addEventListener('click', () => {
            mainImg.src = imgSrc;
            document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumb);
    });

    // Показываем оверлей
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // запрещаем скролл страницы
}

// Закрыть попап
function closeProductModal() {
      if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Крестик
if (modalOverlay && modalClose) {
modalClose.addEventListener('click', closeProductModal);

// Клик по оверлею
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProductModal();
});

// Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
});
}
renderCatalog();