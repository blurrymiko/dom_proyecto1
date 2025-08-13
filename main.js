const products = [
  {
    name: 'La chica que vive al final del camino',
    genre: 'thriller',
    price: 13.29,
    stars: 5,
    reviews: 35,
    language: 'spanish',
    author: 'Laird Koenig',
    image:
      'https://cdn.kobo.com/book-images/a46c9596-9286-4216-89cc-73ada0006385/353/569/90/False/la-chica-que-vive-al-final-del-camino.jpg'
  },
  {
    name: 'Donde nacen las bestias',
    genre: 'thriller',
    price: 9.49,
    stars: 4,
    reviews: 12,
    language: 'spanish',
    author: 'Pedro Feijoo',
    image:
      'https://cdn.kobo.com/book-images/3b6ac656-aaf1-4af8-bd63-3c7ce67880ab/353/569/90/False/donde-nacen-las-bestias.jpg'
  },
  {
    name: 'Nunca mientas',
    genre: 'thriller',
    price: 9.49,
    stars: 3,
    reviews: 22,
    language: 'spanish',
    author: 'Freida McFadden',
    image:
      'https://cdn.kobo.com/book-images/7bc75543-b3db-4855-91f3-1688daf5c213/353/569/90/False/nunca-mientas.jpg'
  },
  {
    name: 'No tengas miedo',
    genre: 'terror',
    price: 12.34,
    stars: 5,
    reviews: 64,
    language: 'english',
    author: 'Stephen King',
    image:
      'https://cdn.kobo.com/book-images/e9958aae-542c-4ee1-ac48-1910ec665ef5/353/569/90/False/no-tengas-miedo-3.jpg'
  },
  {
    name: 'La asistenta',
    genre: 'thriller',
    price: 9.49,
    stars: 4,
    reviews: 10,
    language: 'english',
    author: 'Freida McFadden',
    image:
      'https://cdn.kobo.com/book-images/52bbf8e8-e8bd-4b9e-a0b0-005d7b6e6fae/353/569/90/False/la-asistenta-la-asistenta-1-1.jpg'
  },
  {
    name: 'Las abandonadas',
    genre: 'terror',
    price: 11.39,
    stars: 3,
    reviews: 8,
    language: 'spanish',
    author: 'J.D. Barker',
    image:
      'https://cdn.kobo.com/book-images/c3ee6560-5458-4556-8b46-d356b4c4ea52/353/569/90/False/las-abandonadas.jpg'
  }
]

const ereaders = [
  {
    name: 'Kobo Elipsa 2E',
    price: 349.99,
    stars: 4,
    reviews: 35,
    seller: 'BookStore Madrid',
    image:
      'https://es.kobobooks.com/cdn/shop/files/ES-ES_1-DeviceStylus_1080x1080_9acd7bcf-de51-46de-8bd3-610d77a05432_575x575.jpg'
  },
  {
    name: 'Kobo Clara BW',
    price: 149.99,
    stars: 4,
    reviews: 10,
    seller: 'BookStore Madrid',
    image:
      'https://es.kobobooks.com/cdn/shop/files/1-Spa-BW-ES-ES-Device_Front_1080x1080_0bc13994-8628-4d73-948a-be1e0d15dd3e_575x575.png'
  },
  {
    name: 'Kobo Sage',
    price: 299.99,
    stars: 5,
    reviews: 43,
    seller: 'BookStore Madrid',
    image: 'https://es.kobobooks.com/cdn/shop/files/Cadmus_Dual_ES_575x575.jpg'
  },
  {
    name: 'Kobo Libra Colour',
    price: 219.99,
    stars: 4.5,
    reviews: 22,
    seller: 'BookStore Madrid',
    image:
      'https://es.kobobooks.com/cdn/shop/files/2-Monza-Black-StylusAttached-ES-ES-Device_1080x1080_3dd4bb21-18f9-48fe-8042-a36e8b3e6072_431x431.png'
  }
]

function render(sectionId, productList) {
  const section = document.getElementById(sectionId)
  const grid = section.querySelector('.productos-grid')
  grid.innerHTML = ''

  productList.forEach((product) => {
    const article = document.createElement('article')

    article.innerHTML = `
      <a href="#" target="_blank" rel="noopener">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        ${product.author ? `<p>${product.author}</p>` : ''}
        <span>${product.price.toFixed(2)}€</span>
      </a>
    `

    grid.appendChild(article)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  render('novedades', products)
  render('ereaders', ereaders)
})

document.getElementById('filter-form').addEventListener('change', (e) => {
  const value = e.target.value
  let filtered = [...products]

  switch (value) {
    case 'all':
      break
    case 'bestseller':
      filtered = filtered.filter((p) => p.stars === 5)
      break
    case '<10':
      filtered = filtered.filter((p) => p.price < 10)
      break
    case '>10':
      filtered = filtered.filter((p) => p.price > 10)
      break
    case 'spanish':
    case 'english':
      filtered = filtered.filter((p) => p.language === value)
      break
    case 'terror':
    case 'thriller':
      filtered = filtered.filter((p) => p.genre === value)
      break
  }

  render('novedades', filtered)
})
