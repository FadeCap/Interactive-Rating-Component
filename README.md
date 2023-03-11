# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Favorite Code snippet](#my-favorite-code-snippets)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Rating Page](Screenshot/Rating%20Card.jpg)
![Thank You Page](Screenshot/Thank%20you%20card.jpg)

### Links

- Live Site URL: [Interactive Rating Component](http://fadecap.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- DOM manipulation

### My favorite code snippets

```css
.thank-you-card {
  background: radial-gradient(
    circle at top,
    var(--dark-blue),
    hsl(214, 21%, 15%)
  );
}
```

```js
for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", () => {
    if (currentRating) {
      ratingButtons[currentRating - 1].removeAttribute("data-active");
    }
    ratingButtons[i].setAttribute("data-active", "");
    currentRating = ratingButtons[i].innerText;
  });
}
```

## Author

- Github - [FadeCap](https://github.com/FadeCap)
- Frontend Mentor - [@FadeCap](https://www.frontendmentor.io/profile/FadeCap)

## Acknowledgments

I got help from my friend [@Sallis](https://github.com/Sallis-GH)
