# Overview: Ecommerce Product Page

Another FrontendMentor's challenge. A well-designed, minimal product page developed in Reactjs. In this challenge I have succeeded create optimal layout for both mobile and large desktop screens.

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

## Continued development

I am still working on this project and updating it continuously. Some of the features I am planning to work on:

- Toggle dark/light mode
- Drag/drop todo to arrange the list

## Demo

[Minimal Todos App](https://minimal-todos.netlify.app/)

## Useful resources

- TypeScript for JavaScript Programmer [https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html] - This help me understand basic types and how to apply TypeScript to this project
