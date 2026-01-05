import AfterDark from "../assets/images/Murakami.png";
import Norman from "../assets/images/dNorman.png";
import BeyondTheSun from "../assets/images/beyondTheSun.png";
import Godfather from "../assets/images/godfather.jpeg";
import IAmErik from "../assets/images/IAmErik.png";
import Master from "../assets/images/master.png";
import Ness from "../assets/images/ness.png";
import Memoirs from "../assets/images/memoirs.png";

import Fyodor from "../assets/images/Fyodor-Dostoyevskiy.jpg";
import Erik from "../assets/images/Erik-Spiekermann.png";
import Zola from "../assets/images/ZolaNeale.jpg";
import Don from "../assets/images/Don-Norman.jpg";
import JK from "../assets/images/JK-Rowling.jpg";
import Matthew from "../assets/images/Matthew-Carter.jpg";
import Mikhail from "../assets/images/Mikhail-Bulgakov.jpg";

import Geo from "../assets/images/Geo.png";
import Lisa from "../assets/images/Lisa.png";
import Anne from "../assets/images/Anne.png";
import Flo from "../assets/images/Flo.png";

export const isLoginT = "loginT";
export const isLoginF = "loginF";

export const addItemsToCart = "addItemsToCart";
export const removeItemsFromCart = "removeItemsFromCart";
export const addItemsDuplicate = "addItemsDuplicate";

export const addBooksToCart = "addBooksToCart";
export const removeBooksFromCart = "removeBooksFromCart";
export const addBooksDuplicate = "addBooksDuplicate";

export const menuArr = [
  "Books",
  "Authors",
  "What to Read?",
  "Gift Ideas",
  "About Us",
];

export const ArrayBestSellers = [
  {
    image: AfterDark,
    author: "Murakami",
    title: "After Dark",
    comts: 5,
    star: 4.0,
    people: 100,
    price: "$15.5",
    saleP: "10.50",
  },

  {
    image: Godfather,
    author: "Mario Puzo",
    title: "The Godfather",
    comts: 15,
    star: 4.9,
    people: 85,
    saleP: "14.50",
  },
  {
    image: BeyondTheSun,
    author: "Daniel Cargallo",
    title: "She Beyond Sun",
    comts: 14,
    star: 4.6,
    people: 165,
    price: "$19.50",
    saleP: "15.00",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
    comts: 25,
    star: 4.5,
    people: 120,
    price: "@15.50",
    saleP: "10.50",
  },
  {
    image: Ness,
    author: "Patrick Ness",
    title: "More Than This",
    comts: 42,
    star: 4.4,
    people: 48,
    saleP: "20.00",
  },
  {
    image: Memoirs,
    author: "C.R. Brunt",
    title: "From the Memoirs of a Non-Enemy",
    comts: 25,
    star: 4.5,
    people: 120,
    saleP: "16.50",
  },
  { title: "SEE ALL" },
  {
    image: Master,
    author: "Mikhail Bulgakov",
    title: "The Master & Margarita",
    comts: 35,
    star: 4.3,
    people: 30,
    saleP: "10.50",
  },
  {
    image: Norman,
    author: "Donald Norman",
    title: "The Design of Everyday Things",
    comts: 28,
    star: 4.2,
    people: 20,
    saleP: "9.50",
  },
];

export const authorsArray = [
  {
    image: Fyodor,
    author: "Fyodor Dostoyevskiy",
    book: "20 books",
  },
  {
    image: Erik,
    author: "Erik Spiekermann",
    book: "5 books",
  },
  {
    image: Zola,
    author: "Zola Neale Hurston",
    book: "16 books",
  },
  {
    image: Don,
    author: "Don Norman",
    book: "6 books",
  },
  {
    image: JK,
    author: "JK Rowling",
    book: "16 books",
  },
  {
    image: Matthew,
    author: "Matthew Carter",
    book: "3 books",
  },
  {
    image: Mikhail,
    author: "Mikhail Bulgakov",
    book: "24 books",
  },
  { author: "SEE ALL" },
];

export const ArrayProducts = [
  {
    image: AfterDark,
    author: "Murakami",
    title: "After Dark",
    comts: 5,
    star: 3.0,
    people: 100,
    price: "$15.5",
    saleP: "$10.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Rib Knits",
  },
  {
    image: Godfather,
    author: "Mario Puzo",
    title: "The Godfather",
    comts: 15,
    star: 4.9,
    people: 85,
    saleP: "$14.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Rib Knits",
  },
  {
    image: BeyondTheSun,
    author: "Daniel Cargallo",
    title: "She Beyond Sun",
    comts: 14,
    star: 4.6,
    people: 165,
    price: "$19.50",
    saleP: "$15.00",
    type: "novel",
    publishDate: "May 2007",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Panne Velvet",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
    comts: 25,
    star: 4.5,
    people: 120,
    price: "$15.50",
    saleP: "$10.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Elasticized Fabrics",
  },
  {
    image: Ness,
    author: "Patrick Ness",
    title: "More Than This",
    comts: 42,
    star: 4.4,
    people: 48,
    saleP: "$20.00",
    type: "novel",
    publishDate: "May 2007",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: " Dotted Swiss",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
    comts: 25,
    star: 4.5,
    people: 120,
    price: "$15.50",
    saleP: "$10.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "Russian",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: " Dotted Swiss",
  },
  {
    image: Ness,
    author: "Patrick Ness",
    title: "More Than This",
    comts: 42,
    star: 4.4,
    people: 48,
    saleP: "$20.00",
    type: "novel",
    publishDate: "May 2006",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Elasticized Fabrics",
  },
  {
    image: Memoirs,
    author: "C.R. Brunt",
    title: "From the Memoirs of a Non-Enemy",
    comts: 25,
    star: 4.5,
    people: 120,
    saleP: "$16.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "Russian",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Elasticized Fabrics",
  },
  {
    image: Master,
    author: "Mikhail Bulgakov",
    title: "The Master & Margarita",
    comts: 35,
    star: 4.0,
    people: 30,
    saleP: "$10.50",
    type: "novel",
    publishDate: "May 2007",
    lang: "Russian",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Hardcover",
    publisher: "Panne Velvet",
  },
  {
    image: Norman,
    author: "Donald Norman",
    title: "The Design of Everyday Things",
    comts: 28,
    star: 3.2,
    people: 20,
    saleP: "$9.50",
    type: "novel",
    publishDate: "May 2005",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Softcover",
    publisher: "Panne Velvet",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
    comts: 25,
    star: 4.5,
    people: 120,
    price: "$15.50",
    saleP: "$10.50",
    type: "novel",
    publishDate: "May 2008",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Softcover",
    publisher: "Panne Velvet",
  },
  {
    image: Ness,
    author: "Patrick Ness",
    title: "More Than This",
    comts: 42,
    star: 2.4,
    people: 48,
    saleP: "$20.00",
    type: "novel",
    publishDate: "May 2006",
    lang: "English",
    pages: 208,
    readTime: "4-6 hours",
    cover: "Softcover",
    publisher: "Double Knit",
  },
];

export const suggestionArray = [
  {
    image: AfterDark,
    author: "Murakami",
    title: "After Dark",
  },
  {
    image: Godfather,
    author: "Mario Puzo",
    title: "The Godfather",
  },
  {
    image: BeyondTheSun,
    author: "Daniel Cargallo",
    title: "She Beyond Sun",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
  },
  {
    image: Ness,
    author: "Patrick Ness",
    title: "More Than This",
  },
  {
    image: IAmErik,
    author: "Erik Spiekermann",
    title: "Hello I am Erik",
  },
];

export const customerReviewArray = [
  {
    image: Geo,
    name: "Geoffrey Mott",
    date: "11 october 2025",
    rating: "4",
    review:
      "Muscle by Alan Trotter is a fresh piece of noir fiction. Our main characters are the two crooks Box and _____. They are on the hunt for odd jobs that most of us, hopefully, would not be willing to fulfill. It felt reminiscent of both A Clockwork Orange and The Time Machine. I guess that can seem like a strange combination, but Alan Trotter made it work.When Box and _____. encounter a private detective and this strange writer, events quickly start to unravel. Oh, and there is a girl of course! Ixsas",
  },
  {
    image: Lisa,
    name: "Lisa Anderson",
    date: "11 november 2025",
    rating: "2",
    review:
      "Oh I really disliked this in the end. What middling interest I had was completely lost by the fifth and last section.This is the story of two tough guys, goons for hire, as they pick up odd jobs roughing up guys, collecting debts and breaking hands. All written as a kind of Chandler pastiche, but possibly more of a parody.One of the goons, Box, passes the time reading sci-fi stories from pulp magazines an acquaintance writes for. Then, as the story progresses and the pair's jobs take a dark turn",
  },
  {
    image: Anne,
    name: "Anne Powell",
    date: "12 october 2025",
    rating: "3",
    review:
      "Read a great review in the Guardian and took a chance. I should have paid more attention to the comparison with The New York Trilogy, my least favourite Auster experience.This does noir tropes really well with women always called “twists” or “frails”, but I wasn’t really on board for the final section where it all gets a bit meta. I’m down for literary noir, but this was no Motherless Brooklyn.",
  },
  {
    image: Flo,
    name: "Florencio Dorrance",
    date: "11 december 2025",
    rating: "5",
    review:
      "This is fantastic, and could have been written just for me. Grimly funny absurdist-existentialist noir that incorporates pulp sci-fi as well as hardboiled crime fiction elements to become a surprisingly powerful examination of the lasting impact of male violence in its many forms.It also does one of my favourite things, which is to recount other fictional stories within its own pages, a Vonnegut-style technique I never seem to tire of. The ending, too, which some have complained about, I think works perfectly.Phenomenally entertaining and sneakily profound.",
  },
];

export const id = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let id = "";
  let check = false;
  for (let i = 0; id.length < 8; i++) {
    let element = Math.floor(Math.random() * 10);
    if (!check) {
      if (element % 2 !== 0) {
        for (let i = 0; i < 3; i++) {
          element = alphabet[Math.floor(Math.random() * 10)];
          id += element;
          if (i === 2) {
            check = true;
          }
        }
      }
    } else {
      id = id + String(+element);
    }
  }
  console.log("iiiiddddd", id);
  return id;
};
