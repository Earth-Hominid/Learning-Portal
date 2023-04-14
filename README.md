# Learning Portal | Full Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

The goal of this application is to provide businesses with an easy to use web application where management can provide business reports for executives and online training material for their employees.

<img width="1387" alt="homepage" src="https://user-images.githubusercontent.com/66766688/231913530-b9051647-0975-4ba0-945d-277eca1e57ee.png">

Click here for the [live demo](https://learningportal-xi.vercel.app). (The application will take a few seconds to start from sleep, as the back end is hosted on Heroku.)

The repository for the back-end can be found [here](https://github.com/Earth-Hominid/Learning-Portal-Backend).

## Description

This full-stack NextJS application is a demo of an application that was built to allow small businesses to create educational material, reports and to share sensitive information among the mangement team.

Strapi, an open-source headless Content Management System, was chosen to build the RESTful API to handle routing and authentication. Image files are hosted on Cloudinary.

The administration panel, users and user content is handled within the Strapi back-end. Authenticated users can also post content and upload data and files on the front-end. The application contains authentication, pagination and search functionality.

## Authentication

NextJS allows the JSON Webtoken to be stored server side, which is a great feature and negates the typical security risks (such as cross site scripting attacks) when the Webtoken is stored client side.

Strapi is a community built, open source headless Content Management System. In order to avoid sending authentication requests from our front end client to the backend, Strapi allows for routes to built within it. These API routes run serverside. Once accessed these routes send the request to Strapi and save the JSON Web token in an HTTP only cookie. Thus, the JSON Web Token can never be accessed on the client / browser side by JavaScript.

Visitors to the website can only access public articles. Once a user is authenticated, they will be granted access to their own personal dashboard where they can access private managerial reports. These reports are private and only available to authenticated users.

#### Public User View

<img width="1295" alt="public-user-view" src="https://user-images.githubusercontent.com/66766688/231913970-8be08c02-ebd4-4651-9430-afc40162ff31.png">

<img width="483" alt="mobile-public-user-view" src="https://user-images.githubusercontent.com/66766688/231914218-96ed4e56-b441-470d-b5b9-9817dc173ff0.png">

#### Private User View (Lightmode Theme)

<img width="1428" alt="private-user-lightmode" src="https://user-images.githubusercontent.com/66766688/231915518-4e632657-6d1a-4b76-9a51-a73b696b1d8f.png">

## Frontend

The front-end is written in TypeScript and built with the NextJS framework and React functional components.

Tailwind CCS was combined with Styled-Components. Every React functional component has its own separate styled-component tailwind file. This allows extremely fast ui changes without compromising code quality. Tailwind was chosen due to its ease of use and its effectiveness in providing a mobile first design that can be easily adjusted for wide screen monitors.

React-Toastify is used to display form validation errors.

In order to display Markdown (markdown content is provided by users using the rich-text editor), Tailwind typography and React Markdown were implemented.

## Backend

The backend is written in TypeScript and built with Strapi, an open-source NodeJS framework.

For authorization, Strapi utilizes an ACL strategy for protection. The ACL strategy manages the permissions between groups of users. Everytime an API request is sent, it will check if the Authorization header is present. If it is, it will obtain the JWT token, which contains the User ID and it will verify whether or not the user making the request has access to the resource.

The SAAS product Cloudinary was chosen to host image files. When an image file is uploaded to Cloudinary, it creates multiple image sizes which help to improve SEO. The back end is hosted on Heroku which does not provide local file storage, thus, Cloudinary is used for storage.

SQLite was used for the development database and PostgreSQL was chosen for the production database.

<img width="964" alt="Screen Shot 2022-08-20 at 10 35 22 AM" src="https://user-images.githubusercontent.com/66766688/185748651-d121bb06-9af0-4440-8cf3-79462d69900f.png">

### Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Strapi](https://strapi.io/)
- [Tailwind](https://tailwindcss.com/)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- [Tailwind-Styled-Components](https://github.com/MathiasGilson/Tailwind-Styled-Component)
- [HeroIcons](https://heroicons.com/)
- [Eslint](https://eslint.org/)
- [PostCSS](https://postcss.org/)
- [Query String - qs](https://www.npmjs.com/package/qs)
- [Cloudinary](https://cloudinary.com/)
- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Cookie](https://www.npmjs.com/package/cookie)
