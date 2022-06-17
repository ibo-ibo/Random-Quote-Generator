"use strict";

const quoteSection = document.querySelector(".quote-text");
const authorSection = document.querySelector(".quote-author");
const getQuoteBtn = document.querySelector(".btn");

const getQuote = async function () {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  const randomNumber = Math.floor(Math.random() * data.length) + 1;
  const text = data[randomNumber].text;
  const author = !data[randomNumber].author
    ? "Anonym"
    : data[randomNumber].author;

  quoteSection.textContent = text;
  authorSection.textContent = author;
};

getQuoteBtn.addEventListener("click", getQuote);
