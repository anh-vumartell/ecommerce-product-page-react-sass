# Overview: Ecommerce Product Page

Another FrontendMentor's challenge. A well-designed, minimal product page developed in Reactjs. In this challenge I have succeeded in creating optimal layout for both mobile and large desktop screens.

## Demo

[Love Sneakers] (https://love-sneaker.netlify.app/)

## What user can expect

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states of all interactive elements on the page: menu navigation, cart button, user avatar, action buttons
- Open & close side menu on mobile screen
- View product images on a slide when viewport is smaller than 600px
- View product images on a lightbox when viewport is at least 1000px
- Increase and decrease number of items
- Add items to cart
- Remove items from cart
- Check cart content

## Screenshots

[Mobile mainpage](./src/screenshots/mobile-mainpage.png)
[Mobile side menu](./src/screenshots/mobile-sidemenu.png)
[Mobile cart active](./src/screenshots/mobile-cart-active.png)
[Desktop main page](./src/screenshots/desktop-mainpage.png)

# My process

The app was implemented with mobile-first workflow.

## Built with

- React v17.0.2
- Flexbox/Grid
- Mobile-first workflow
- SASS - CSS pre-processor

## What I learned

### Reset CSS box model

- Box-model (border-box) is not by default applied to any <div> element (content-box by default)
- With content-box model, the total width of a <div> is greater than the width we set to <div> (if padding & border are applied)

<aside>
💡 actual width of a <div> with padding and border: W = 100% + (padding *2) + (border * 2)

</aside>

- As a result the div spread out the viewport
- Using “border-box” prevents the above scenario
- Using universal CSS selector (\*) to apply border-box to every element in the html file

```css
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

### Component-based thinking

- Decontruct a component into small components
- One wrapper (<Carousel/>) for the entire logic and layout
- An <ImageSlider/> to render images and so we can add background image and animate the background
- Two <Arrow/> components represent left and right arrows. And via props (direction, clickFunction) we can style them properly

### Create Sidebar Navigation (with animation)

- Step 1: Create the <SideNav/> component
- Step 2: Inside <SideNav/> component we have:
  - sidenav as a wrapper
  - links <a> to each pages (Collections, Men, Women, About, Contact)
  - a close button

### Use \_reset.scss to reset default style

```css
html,
body,
#root {
  margin: 0;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
/*Reset default padding & margin so customised
styles can be applied*/
h1,
h2,
h3,
p {
  padding: 0;
  margin: 0;
}
/*Reset default setting of all buttons*/
button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: $grayish-blue;
}
a:active,
a:visited {
  color: $grayish-blue;
}
```

### Change color of SVG icon

I was struggling with changing color of cart icon in "Add to cart"-button. I was seeking help in FrontendMentor community and there was a kind one who gave me a hint of CSS "fill" property. I took a look at it by refering to W3docs website and Stackoverflow. I found another good solution to this issue. Check "Useful resources" section to read more.

Honestly this is not a very straight-forward solution but it works in my case.

```html
<button className="product-action__add" onClick="{addToCartHandler}">
  <img className="cart-icon" src="{CartIcon}" alt="cart icon" />
  <span>Add to cart</span>
</button>
```

I use <img> tag to add cart icon and give it a class name "cart-icon". I use CSS filter property to apply visual effect of the cart image. I also use [CSS filter generator to convert from a regular hex color to a filter one] (Check "Useful resources" for more information).

```css
.cart-icon {
  filter: invert(100%) sepia(200%) saturate(0%) hue-rotate(263deg) brightness(
      100%
    ) contrast(300%);
}
```

I was experimenting with different filter values to find the expected white color to my svg icon. I got grayish filtered color from the CSS filter generator so I had to increase sepia(from 0% to 200%) contrast (from 102% to 300%) and decrease brightness (from 101% to 100%). As a result, I got an expected white color to my cart icon.

## Continued development

I need some help on implementing the LightBox feature and how to pass data from useImgSlide context to the image modal.

## Useful resources

- [Change color of any SVG icon](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element/53336754#53336754)
- [CSS filter Property](https://www.w3docs.com/learn-css/filter.html)
- [CSS filter generator](https://codepen.io/sosuke/pen/Pjoqqp)
