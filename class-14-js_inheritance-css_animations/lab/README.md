# Assignment Overview: Lab for Class 14

## Let's Make an Order Form & a Shopping Cart!

We're going to adapt some prior stretch goals and build a small stand-alone project with it: assuming that all items in BusMall went into production, let's build a web-based order form and shopping cart app.

**Note: This is a time-boxed "A for effort" lab. See how much you can get done by 6:00 or so, then call it good and set it aside. As you are moving toward final projects, a key part of successful planning is honing your sense of how long it takes you to build things. Keep notes on your time as you build the various pieces. The critical technical part of this lab is practicing using local storage to share data between two HTML pages.**

Create a repository called `order-form` and create the following files: `index.html`, `cart.html`, `app.js`, and `style.css`, along with the usual `.gitignore`, `.eslintrc.json`, and `README.md` files. Note that you will also need to copy the images from BusMall into this project, and maybe some of the JS (like the constructor, the local storage stuff, and other things related to organizing the objects). Feel free to copy/paste/re-use anything that would be helpful.

Your index.html is an order form for customers: it will have an order form for BusMall that will have the following inputs:

  - A dropdown menu of all BusMall products (`<select>` and `<option>` will be needed)
  - An input of "type=number" to indicate quantity to purchase
  - Text inputs for each of: name, street, city, state, ZIP code, and phone number
  - A "Add To Cart" button to submit the order. When the order is submitted, all of the input fields should be cleared
  - Of course, there should be appropriate instructions and styling on the page

  Your cart.html page will display the BusMall orders on a typical shopping cart page.
  - It should list all items currently on order with a picture of the item.
  - Each item should have a button "Delete this item" that will remove that item from the DOM (AND array of ordered items, AND local storage) when it is clicked.

## Process

There's nothing really new here, just extensions and adaptations of previous things we have done. Here's some things to think about as you go plan out the lab for today:

- You'll need to use local storage to share data between the two HTML pages.
- The constructor from BusMall might be handy as a way to organize your products.
- It would also be useful to use a constructor to capture your form data into an object that could be placed into local storage and then used to provide the form data to the shopping cart page.
- Strive for basic functionality first: be wary of rabbit holes such as styling or getting input validation set up before your form and cart actually work together.

### *Remember to submit a link to your last pull request on Canvas!*
