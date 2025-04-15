const products = [
    {
        "id": 1,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "75",
        "image_url": "https://themewagon.github.io/famms/images/p1.png"
      },
      {
        "id": 2,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "80",
        "image_url": "https://themewagon.github.io/famms/images/p2.png"
      },
      {
        "id": 3,
        "name": "Women's Dress",
        "gender": "women",
        "price": "68",
        "image_url": "https://themewagon.github.io/famms/images/p3.png"
      },
      {
        "id": 4,
        "name": "Women's Dress",
        "gender": "women",
        "price": "70",
        "image_url": "https://themewagon.github.io/famms/images/p4.png"
      },
      {
        "id": 5,
        "name": "Women's Dress",
        "gender": "women",
        "price": "75",
        "image_url": "https://themewagon.github.io/famms/images/p5.png"
      },
      {
        "id": 6,
        "name": "Women's Dress",
        "gender": "women",
        "price": "58",
        "image_url": "https://themewagon.github.io/famms/images/p6.png"
      },
      {
        "id": 7,
        "name": "Women's Dress",
        "gender": "women",
        "price": "80",
        "image_url": "https://themewagon.github.io/famms/images/p7.png"
      },
      {
        "id": 8,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "65",
        "image_url": "https://themewagon.github.io/famms/images/p8.png"
      },
      {
        "id": 9,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "65",
        "image_url": "https://themewagon.github.io/famms/images/p9.png"
      },
      {
        "id": 10,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "65",
        "image_url": "https://themewagon.github.io/famms/images/p10.png"
      },
      {
        "id": 11,
        "name": "Men's Shirt",
        "gender": "men",
        "price": "65",
        "image_url": "https://themewagon.github.io/famms/images/p11.png"
      },
      {
        "id": 12,
        "name": "Women's Dress",
        "gender": "women",
        "price": "65",
        "image_url": "https://themewagon.github.io/famms/images/p12.png"
      }

];

const productsContainer = document.getElementById('products-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
    <div class="product-card-overlay"></div> <!-- Overlay ekledik -->
    <img src="${product.image_url}" alt="${product.name}">
    <div class="product-info">
        <h3> <strong>${product.name}</strong></h3>
        <p class="price">$${product.price}</p>
    </div>
    <div class="product-buttons">
        <button class="add-to-cart">Add to Cart</button>
        <button class="buy-now">Buy Now</button>
    </div>
  `;

  productCard.addEventListener('mouseover', () => {
    const buttons = productCard.querySelector('.product-buttons');
    const overlay = productCard.querySelector('.product-card-overlay');
    
    // Opaklığı azaltmak için...
    document.querySelectorAll('.product-card').forEach(card => {
        if (card !== productCard) {
            card.style.opacity = 0.8;  
        }
    });
    
    
    buttons.style.display = 'block';
    overlay.style.opacity = '1'; 
  });

  productCard.addEventListener('mouseout', () => {
    const buttons = productCard.querySelector('.product-buttons');
    const overlay = productCard.querySelector('.product-card-overlay');
    
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = 1;  
    });


    buttons.style.display = 'none';
    overlay.style.opacity = '0';  
  });

  productsContainer.appendChild(productCard);
});

//comments section
const comments = [
  {
    id: 1,
    name: "Leslie Welch",
    email: "leslie.welch@example.com",
    comment: "I am very pleased, comfortable and silky",
    image_url: "https://randomuser.me/api/portraits/women/89.jpg"
  },
  {
    id: 2,
    name: "Kim Bennett",
    email: "kim.bennett@example.com",
    comment: "This jacket is a true classic! It’s both stylish and perfect for casual outfits.",
    image_url: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    id: 3,
    name: "Ben May",
    email: "ben.may@example.com",
    comment: "That oversized sweatshirt looks so comfy, ideal for a weekend look!",
    image_url: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    id: 4,
    name: "Sean Scott",
    email: "sean.scott@example.com",
    comment: "The cut of these jeans is amazing! It makes your legs look longer.",
    image_url: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    id: 5,
    name: "Carlos White",
    email: "carlos.white@example.com",
    comment: "The color of this dress is so vibrant, it gives off real spring vibes!",
    image_url: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    id: 6,
    name: "Misty Taylor",
    email: "misty.taylor@example.com",
    comment: "Those shoes are really stylish! They add a nice touch to your outfit.",
    image_url: "https://randomuser.me/api/portraits/women/91.jpg"
  },
  {
    id: 7,
    name: "Hunter Reynolds",
    email: "hunter.reynolds@example.com",
    comment: "A leather jacket is a timeless piece, instantly making any outfit look cool.",
    image_url: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 8,
    name: "Dawn Peck",
    email: "dawn.peck@example.com",
    comment: "The shirt and t-shirt combo creates a look that’s both comfortable and stylish.",
    image_url: "https://randomuser.me/api/portraits/men/23.jpg"
  }
];

const carouselInner = document.getElementById("comment-carousel");

comments.forEach((comment, index) => {
  const item = document.createElement("div");
  item.className = "carousel-item" + (index === 0 ? " active" : "");
  item.innerHTML = `
  <div class="d-flex flex-column align-items-center justify-content-center p-4">
      <img src="${comment.image_url}" class="rounded-circle mb-3" alt="${comment.name}" width="100" height="100">
      <p class="text-center fs-5 fst-italic">"${comment.comment}"</p>
      <h5 class="fw-bold">${comment.name}</h5>
  </div>
  `;
  carouselInner.appendChild(item);

});

const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

  hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  });
