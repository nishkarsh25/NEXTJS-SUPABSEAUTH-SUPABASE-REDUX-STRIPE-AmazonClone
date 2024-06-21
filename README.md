# NEXTJS-SUPABSEAUTH-SUPABASE-REDUX-STRIPE-AmazonClone

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

AmazonClone is a full-stack e-commerce application built with Next.js, TypeScript, Supabase for authentication and data management, Redux for state management, and Stripe for payment processing. This project aims to replicate core functionalities of Amazon's shopping experience.


## Features

### User Authentication

- **Signup and Login**: Users can register and log in securely using Supabase authentication.
- **Session Management**: Maintaining user sessions across the application using Supabase and Redux.

### Product Management

- **Product Listing**: Displaying products fetched from Supabase database.
- **Product Details**: Detailed view of individual products including descriptions, ratings, and related information.

### Shopping Cart

- **Add to Cart**: Users can add products to their cart, which persists across sessions.
- **Quantity Management**: Ability to increment, decrement, and remove items from the cart.
- **Total Price Calculation**: Automatically calculates the total price of items in the cart.

### Checkout Process

- **Secure Payments**: Integration with Stripe for handling secure payment transactions.
- **Order Confirmation**: Users can proceed to checkout, review their order, and confirm purchases.

### User Experience

- **Responsive Design**: Mobile-first approach using Tailwind CSS for optimal viewing on various devices.
- **Search Functionality**: Search products based on keywords using Supabase's database queries.
- **Prime Delivery Options**: Displaying delivery options including Amazon Prime benefits.
- **Order History**: Users can view their order history with details of past purchases.




## Live Demo

You can try out the live demo of the app [here](https://nextjs-clerkauth-mongodb-serveractions-linked-in-clone.vercel.app/).

## Folder Structure

```
amazon-clone/
├── .gitignore
├── README.md
├── node_modules/
├── package.json
├── tsconfig.json
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddToCardContainer.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProccedToBuy.tsx
│   │   ├── Ratings.tsx
│   │   ├── SearchPage.tsx
│   │   ├── SearchResult.tsx
│   │   ├── ShoppingCart.tsx
│   │   ├── SingleProduct.tsx
│   │   └── Success.tsx
│   │   └── ReduxProvider.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── hooks/
│   │   │   │   ├── redux.ts
│   │   │   │   ├── useSupabase.ts
│   │   │   └── products.ts
│   │   └── stripe/
│   │       └── checkoutSession.ts
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── cart(page.tsx)
│   │   ├── api/checkout-sessions
│   │   │   └── route.tsx
│   │   ├── product/
│   │   │   └── [id](page.tsx)
│   │   ├── search/
│   │   │   └── [query].(page.tsx)
│   │   ├── signin.tsx
│   │   └── signout.tsx
│   ├── redux/
│   │   └── cartSlice.ts
│   │   └── index.tsx
│   └── styles/
│       ├── globals.css
│       └── tailwind.css
└── yarn.lock
```


## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-SUPABSEAUTH-SUPABASE-REDUX-STRIPE-AmazonClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

- **Next.js**: React framework for building server-side rendered React applications.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Supabase**: Open-source Firebase alternative for backend services, including authentication and database management.
- **Redux**: State management library for managing application state.
- **Stripe**: Payment processing API for handling transactions securely.
- **Tailwind CSS**: Utility-first CSS framework used for styling components.
- **Next/Image**: Optimized image component from Next.js for fast loading of images.
- **React Icons**: Library providing popular icons as React components.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/): Ensure you have Node.js installed to run JavaScript applications.

### Supabase Account

- **Supabase Account**: You need a Supabase account to access their services. Sign up for free at [Supabase](https://supabase.io/).

### Stripe Account

- **Stripe Account**: You need a Stripe account to handle payment processing. Sign up for free at [Stripe](https://stripe.com/).


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS-SUPABSEAUTH-SUPABASE-REDUX-STRIPE-AmazonClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## API Endpoints

### Checkout Session (Stripe)

#### Create Checkout Session

- **URL**: `/api/create-checkout-session`
- **Method**: `POST`
- **Description**: Creates a new checkout session in Stripe for processing payments.
- **Request Body**:
  ```json
  {
    "line_items": [
      {
        "price_data": {
          "currency": "usd",
          "product_data": {
            "name": "Product Name",
            "images": ["https://example.com/product-image.jpg"]
          },
          "unit_amount": 2000
        },
        "quantity": 1
      }
    ],
    "payment_method_types": ["card"],
    "mode": "payment",
    "success_url": "https://your-app.com/success",
    "cancel_url": "https://your-app.com/cancel"
  }



## How to Use

1. **Signup/Login**
   - Navigate to the signup or login page.
   - Enter your email and password to create an account or log in.

2. **Browse Products**
   - Explore the product listings available on the homepage.
   - Click on a product to view its details.

3. **Add to Cart**
   - From the product details page, click "Add to Cart" to add the item to your shopping cart.

4. **Manage Cart**
   - Access your cart from the navigation bar.
   - Adjust the quantity of items or remove them using the provided options.

5. **Proceed to Checkout**
   - Review your cart to ensure all desired items are included.
   - Click on "Proceed to Checkout" to initiate the checkout process.

6. **Secure Payment**
   - Enter your payment details securely using the integrated Stripe payment gateway.
   - Complete the transaction to place your order.

7. **View Order History**
   - Navigate to your account settings or order history page.
   - Review past orders to track your purchase history.

8. **Explore Additional Features**
   - Use the search functionality to find specific products.
   - Benefit from Prime delivery options for eligible items.





## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## Credits

This project uses the following open-source technologies and libraries:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Supabase](https://supabase.io/): An open-source Firebase alternative. Instantly create and use a PostgreSQL database. Realtime, open-source and easy-to-use.

- [Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.

- [Stripe](https://stripe.com/): A technology company that builds economic infrastructure for the internet. 
  
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for responsive and customizable styling.
  

Each of these technologies and libraries plays a crucial role in the functionality and design of the Blog App. Please visit their respective websites or repositories to learn more about how they can be used in your projects.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



