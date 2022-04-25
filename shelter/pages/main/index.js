const burgerClosed = document.querySelector(".burger-closed");
const burgerHeader = document.querySelector(".burger-header");
const burgerHeaderContainer = document.querySelector(
  ".burger-header-container"
);
const body = document.querySelector("body");
const pets = [
  {
    name: "Jennifer",
    img: "../../assets/img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/img/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/img/pets-scarlet.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/img/pets-freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/img/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
const deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
const petCardsWrapper = document.querySelector(".pet-cards-wrapper");
const petCards = document.querySelector(".pet-cards");
const petCardsLeft = document.querySelector(".pet-cards-left");
const petCardsRight = document.querySelector(".pet-cards-right");
const friendsSection = document.querySelector(".friends");
const leftSliderBtn = document.querySelector(".slider-btn-left");
const rightSliderBtn = document.querySelector(".slider-btn-right");

const openBurgerMenu = () => {
  burgerClosed.style.display = "none";
  burgerHeader.style.display = "flex";
  burgerHeaderContainer.style.display = "block";
  body.style.overflow = "hidden";
};

const closeBurgerMenu = () => {
  burgerClosed.style.display = "block";
  burgerHeader.style.display = "none";
  burgerHeaderContainer.style.display = "none";
  body.style.position = "static";
  body.style.overflow = "visible";
};

const createPetsCards = () => {
  let activeCards = [];
  petCards.querySelectorAll("figcaption").forEach((element) => {
    activeCards.push(
      pets.indexOf(pets.find((pet) => pet.name === element.innerHTML))
    );
  });

  let cards = "";
  let currentCards = [];
  let cardCount;
  deviceWidth >= 1028
    ? (cardCount = 3)
    : deviceWidth >= 768
    ? (cardCount = 2)
    : (cardCount = 1);
  while (currentCards.length < cardCount) {
    let i = Math.floor(Math.random() * (pets.length - 1 - 0) + 0);
    if (activeCards.indexOf(i) === -1 && currentCards.indexOf(i) === -1) {
      cards += `<article class="${pets[
        i
      ].name.toLocaleLowerCase()}" onclick="createPopup(this)">
    <figure class="pet-pic">
      <img src="${pets[i].img}" alt="${pets[i].name}" />
      <figcaption>${pets[i].name}</figcaption>
    </figure>
    <button class="btn btn-white">Learn more</button>
  </article>`;
      currentCards.push(i);
    }
  }
  currentCards = [];

  return cards;
};

const createPopup = (e) => {
  const name = e.querySelector("figcaption").innerHTML;
  const popup = document.createElement("div");
  popup.classList = "popup overlay";
  const pet = pets.find((pet) => pet.name === name);
  popup.innerHTML += `<div class='pet' onclick="event.stopPropagation()"><button class='btn-arrow' onclick='closePopup()' id='popupBtn'></button><div class="pet-img"><img src="${pet.img}" alt="${pet.name}"></div>
  <div class="pet-info"><h2>${pet.name}</h2><p class='type-breed'><span class='type'>${pet.type}</span> - <span class='breed'>${pet.breed}</span></p><p class='description'>${pet.description}</p><ul class='qualities'><li><span class='title'>Age: </span>${pet.age}</li><li><span class='title'>Inoculations: </span>${pet.inoculations}</li><li><span class='title'>Diseases: </span>${pet.diseases}</li><li><span class='title'>Parasites: </span>${pet.parasites}</li></ul></div></div>`;
  friendsSection.appendChild(popup);
  body.style.overflow = "hidden";
  popup.addEventListener("click", closePopup);
  popup.onmouseover = (e) => {
    if (e.target === e.currentTarget) popupBtn.classList.add("hovered");
  };

  popup.onmouseout = (e) => {
    if (e.target === e.currentTarget) popupBtn.classList.remove("hovered");
  };
};

const closePopup = () => {
  friendsSection.removeChild(friendsSection.lastElementChild);
  body.style.overflow = "visible";
};

const moveLeft = () => {
  petCardsWrapper.classList.add("transition-left");
  leftSliderBtn.removeEventListener("click", moveLeft);
  rightSliderBtn.removeEventListener("click", moveRight);
};

const moveRight = () => {
  petCardsWrapper.classList.add("transition-right");
  leftSliderBtn.removeEventListener("click", moveLeft);
  rightSliderBtn.removeEventListener("click", moveRight);
};

leftSliderBtn.addEventListener("click", moveLeft);
rightSliderBtn.addEventListener("click", moveRight);

petCards.innerHTML += createPetsCards();
petCardsLeft.innerHTML += createPetsCards();
petCardsRight.innerHTML += createPetsCards();

petCardsWrapper.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    petCardsWrapper.classList.remove("transition-left");
    changedItem = petCardsLeft;
    petCards.innerHTML = petCardsLeft.innerHTML;
  } else {
    petCardsWrapper.classList.remove("transition-right");
    changedItem = petCardsRight;
    petCards.innerHTML = petCardsRight.innerHTML;
  }

  changedItem.innerHTML = createPetsCards();

  leftSliderBtn.addEventListener("click", moveLeft);
  rightSliderBtn.addEventListener("click", moveRight);
});
