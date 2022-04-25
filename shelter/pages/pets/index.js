const body = document.querySelector("body");
const burgerClosed = document.querySelector(".burger-closed");
const burgerOpened = document.querySelector(".burger-opened");
const burgerHeader = document.querySelector(".burger-header");
const burgerHeaderContainer = document.querySelector(
  ".burger-header-container"
);
const menu = burgerHeader.querySelector(".nav-list");

const firstBtn = document.querySelector("#btn-first");
const leftBtn = document.querySelector("#btn-left");
const rightBtn = document.querySelector("#btn-right");
const lastBtn = document.querySelector("#btn-last");
const currentPageNumber = document.querySelector("#current-page");

const menuLinks = burgerHeader.querySelectorAll("li");
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
const petCardsWrapper = document.querySelector(".pet-cards");
const friendsSection = document.querySelector(".friends");
const deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
// const paginationPets = [
//   {
//     name: "Jennifer",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
//   {
//     name: "Jennifer2",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
//   {
//     name: "Jennifer3",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
//   {
//     name: "Jennifer4",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
//   {
//     name: "Jennifer5",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
//   {
//     name: "Jennifer6",
//     img: "../../assets/img/pets-jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/img/pets-sophia.jpg",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/img/pets-woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/img/pets-scarlet.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/img/pets-katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/img/pets-timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/img/pets-freddie.jpg",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/img/pets-charly.jpg",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
// ];
const paginationPets = [];

const createPetsPaginationArray = () => {
  for (let i = 0; i < 6; i++) {
    let onePagePets = [];
    while (onePagePets.length < 7) {
      let petIndex = Math.floor(Math.random() * (pets.length - 1 - 0) + 0);
      if (onePagePets.indexOf(pets[petIndex]) === -1) {
        onePagePets.push(pets[petIndex]);
      }
    }
    onePagePets.push(...pets.filter((x) => !onePagePets.includes(x)));
    paginationPets.push(...onePagePets);
    onePagePets = [];
  }
};

createPetsPaginationArray();

const openBurgerMenu = () => {
  burgerClosed.classList.add("burger-animation");
  burgerOpened.style.display = "none";
  burgerHeader.classList.remove("burger-slide-out");
  burgerHeader.classList.add("burger-slide-in");
  burgerHeader.style.display = "flex";
  burgerOpened.style.display = "block";
  burgerHeaderContainer.style.display = "block";
  body.style.overflow = "hidden";
  burgerHeaderContainer.addEventListener("click", closeBurgerMenu);
  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeBurgerMenu();
    }
  });
};

const closeBurgerMenu = () => {
  burgerHeader.classList.remove("burger-slide-in");
  burgerHeader.classList.add("burger-slide-out");
  burgerClosed.classList.remove("burger-animation");
  burgerClosed.style.display = "block";
  burgerHeaderContainer.style.display = "none";
  burgerHeader.style.display = "none";
  body.style.position = "static";
  body.style.overflow = "visible";
};

let currentPage = 1;
let cardCount;
deviceWidth >= 1028
  ? (cardCount = 8)
  : deviceWidth >= 768
  ? (cardCount = 6)
  : (cardCount = 3);

const createPaginationPage = (cardCount) => {
  currentPageNumber.innerHTML = currentPage;
  if (currentPage === 1) {
    leftBtn.classList.add("btn-grey");
    firstBtn.classList.add("btn-grey");
    leftBtn.setAttribute("disabled", "true");
    firstBtn.setAttribute("disabled", "true");
    leftBtn.classList.remove("btn-white");
    firstBtn.classList.remove("btn-white");
  } else if (currentPage === 6) {
    rightBtn.classList.add("btn-grey");
    lastBtn.classList.add("btn-grey");
    rightBtn.setAttribute("disabled", "true");
    lastBtn.setAttribute("disabled", "true");
    rightBtn.classList.remove("btn-white");
    lastBtn.classList.remove("btn-white");
  }
  if (deviceWidth >= 1028) {
    switch (currentPage) {
      case 1:
        createPetsCards(0, cardCount);
        break;
      case 2:
        createPetsCards(8, cardCount);
        break;
      case 3:
        createPetsCards(16, cardCount);
        break;
      case 4:
        createPetsCards(24, cardCount);
        break;
      case 5:
        createPetsCards(32, cardCount);
        break;
      case 6:
        createPetsCards(40, cardCount);
        break;
      default:
        break;
    }
  } else if (deviceWidth >= 768) {
    switch (currentPage) {
      case 1:
        createPetsCards(0, cardCount);
        break;
      case 2:
        createPetsCards(6, cardCount);
        break;
      case 3:
        createPetsCards(12, cardCount);
        break;
      case 4:
        createPetsCards(18, cardCount);
        break;
      case 5:
        createPetsCards(24, cardCount);
        break;
      case 6:
        createPetsCards(30, cardCount);
        break;
      case 7:
        createPetsCards(36, cardCount);
        break;
      case 8:
        createPetsCards(42, cardCount);
        break;
      default:
        break;
    }
  } else {
    switch (currentPage) {
      case 1:
        createPetsCards(0, cardCount);
        break;
      case 2:
        createPetsCards(3, cardCount);
        break;
      case 3:
        createPetsCards(6, cardCount);
        break;
      case 4:
        createPetsCards(9, cardCount);
        break;
      case 5:
        createPetsCards(12, cardCount);
        break;
      case 6:
        createPetsCards(15, cardCount);
        break;
      case 7:
        createPetsCards(18, cardCount);
        break;
      case 8:
        createPetsCards(21, cardCount);
        break;
      case 9:
        createPetsCards(24, cardCount);
        break;
      case 10:
        createPetsCards(27, cardCount);
        break;
      case 11:
        createPetsCards(30, cardCount);
        break;
      case 12:
        createPetsCards(33, cardCount);
        break;
      case 13:
        createPetsCards(36, cardCount);
        break;
      case 14:
        createPetsCards(39, cardCount);
        break;
      case 15:
        createPetsCards(42, cardCount);
        break;
      case 16:
        createPetsCards(45, cardCount);
        break;
      default:
        break;
    }
  }
};

const createPetsCards = (startIndex, cardCount) => {
  let cards = "";
  for (let i = startIndex; i < startIndex + cardCount; i++) {
    cards += `<article class="${paginationPets[
      i
    ].name.toLowerCase()}" onclick="createPopup(this)">
    <figure class="pet-pic">
      <img src="${paginationPets[i].img}" alt="${paginationPets[i].name}" />
      <figcaption>${paginationPets[i].name}</figcaption>
    </figure>
    <button class="btn btn-white">Learn more</button>
  </article>`;
  }
  petCardsWrapper.innerHTML = cards;
};

createPaginationPage(cardCount);

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

const goToLastPage = () => {
  deviceWidth >= 1028
    ? (currentPage = 6)
    : deviceWidth >= 768
    ? (currentPage = 8)
    : (currentPage = 16);
  createPaginationPage(cardCount);
  leftBtn.classList.remove("btn-grey");
  firstBtn.classList.remove("btn-grey");
  leftBtn.removeAttribute("disabled", "true");
  firstBtn.removeAttribute("disabled", "true");
  leftBtn.classList.add("btn-white");
  firstBtn.classList.add("btn-white");
};

const goToFirstPage = () => {
  console.log("hi");
  currentPage = 1;
  createPaginationPage(cardCount);
  rightBtn.classList.remove("btn-grey");
  lastBtn.classList.remove("btn-grey");
  rightBtn.removeAttribute("disabled", "true");
  lastBtn.removeAttribute("disabled", "true");
  rightBtn.classList.add("btn-white");
  lastBtn.classList.add("btn-white");
  currentPageNumber.innerHTML = currentPage;
};

const goToLeft = () => {
  console.log("hi");
  if (currentPage === 2) {
    goToFirstPage();
    return;
  } else if (currentPage === 6) {
    rightBtn.classList.remove("btn-grey");
    lastBtn.classList.remove("btn-grey");
    rightBtn.removeAttribute("disabled", "true");
    lastBtn.removeAttribute("disabled", "true");
    rightBtn.classList.add("btn-white");
    lastBtn.classList.add("btn-white");
  }
  currentPage -= 1;
  createPaginationPage(cardCount);
};

const goToRight = () => {
  if (currentPage === 5) {
    goToLastPage();
    return;
  } else if (currentPage === 1) {
    leftBtn.classList.remove("btn-grey");
    firstBtn.classList.remove("btn-grey");
    leftBtn.removeAttribute("disabled", "true");
    firstBtn.removeAttribute("disabled", "true");
    leftBtn.classList.add("btn-white");
    firstBtn.classList.add("btn-white");
  }
  currentPage += 1;
  createPaginationPage(cardCount);
};

firstBtn.addEventListener("click", goToFirstPage);
lastBtn.addEventListener("click", goToLastPage);
leftBtn.addEventListener("click", goToLeft);
rightBtn.addEventListener("click", goToRight);
