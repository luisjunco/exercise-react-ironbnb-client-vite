# React IronBnB


LAB/Exercise to practice React concepts (React Router, props, state, useEffect, API requests...)


## Our Goal

We're going to create a React application that interacts with an external API. 
It will have functionality to get information about apartments & create new apartments.


Sitemap/Wireframes:
- We will follow these wireframes: [https://whimsical.com/react-ironbnb-MVw1gkTJrekF2QTaEKCMJU](https://whimsical.com/react-ironbnb-MVw1gkTJrekF2QTaEKCMJU)


<!-- 
- Demo: [https://react-ironbnb.netlify.app/](https://react-ironbnb.netlify.app/) 
- @todo: implement "more details"
-->




## Ironbnb API

- We will interact with Ironbnb API.

- BaseURL: [https://ironbnb-m3.herokuapp.com](https://ironbnb-m3.herokuapp.com)

- Supported endpoints:

| HTTP verb | URL               | Request body                                                 | Action                                             |
| --------- | ----------------- | :----------------------------------------------------------- | :------------------------------------------------- |
| `GET`     | `/apartments`     | - - -                                                        | Returns an array with all the apartment documents. |
| `GET`     | `/apartments/:id` | - - -                                                        | Returns an apartment document by its id.           |
| `POST`    | `/apartments`     | { <br />  img: String, <br />  title: String,<br />  pricePerDay: Number <br />} | Creates a new apartment document.                  |


- As you can see, it follows REST.
- Responses are in JSON.





## Iteration 0: initial setup
- Fork + clone
- Install dependencies
- Run the app (hint: check package.json)


## Iteration 1: General structure and routing


Create the following components (for now, just display an `<h1>` in each component):

- NavBar
- HomePage
- ApartmentsList
- ApartmentDetails
- CreateApartment

<br />

Setup routing. You will need this behaviour:
- The `<NavBar />` component should be displayed in all pages
- If user visits `/`, display the `<HomePage />` component
- If user visits `/apartments`, display `<ApartmentsList />`
- If user visits `/apartments/42`, display `<ApartmentDetails />` (note, that `42` must be dynamic -- use URL params)
- If user visits `/create`, display `<CreateApartment />` (note: in the code, you may need this route earlie... otherwise "create" will be treated as an apartment id)

<br />

Implement the NavBar with links, so that the user can navigate (hint `<NavLink>`).

<br />

IMPORTANT: 
- For this iteration, do not implement the details of each component, just the general structure (make sure the user can navigate through the app).
- For the components hierarchy, keep all components as direct children of App.



## Iteration 2: ApartmentsList

Implement `<ApartmentsList />`, so that it makes a request to the API and displays a list with all apartments.

Hint: you will need to use `useEffect()`.

For now, don't worry about the button "more details" (we will implement this functionality later).




## Iteration 3: Create new Apartment

Implement the logic for `<CreateApartment />`.
- You will need a form (controlled component).
- When user submits, we need to send a POST request to the API.
- Once we get the response from the API, we can redirect the user to the list of apartments
  - do some research on how to redirect with react-router (hint: the library provides a custom hook `useNavigate()`)



## Iteration 4: ApartmentDetails

Implement the logic for `<ApartmentDetails />`.
This component should make a call to the API and display the details of an apartment, based on its id.



## Bonus Ideas I

- [ ] Store API baseUrl in .env (since we're using Vite, make sure your environment variables starts with the prefix `VITE_`)
- [ ] Single API call to get the info (instead of calling the API in `<ApartmentsList>` and `<ApartmentDetails>`)
  - Make one single call to the API in `<App>`
  - Pass the info as props to `<ApartmentsList>` and `<ApartmentDetails>`
- [ ] Conditional rendering: if an apartment has no image, display a default image
- [ ] Conditional rendering: if data from the API is not ready, display a message "loading"


## Bonus Ideas II (those are a bit more advanced; if needed, do some research and/or ask your LT/TAs)

- [ ] Display spinner/loader while data is loading
  - Option 1: there's many websites where you can find CSS for "spinners", for example [here](https://projects.lukehaas.me/css-loaders/). You can copy the CSS and then render a div with that specific className.
  - Option 2: render a component from a component library. For example, if you're using Ant Design, you can use [this component](https://ant.design/components/spin)
- [ ] CSS: Apply different ways to style React components (inline css, plain css with one file per component, scss...).
- [ ] CSS: use a component library (ex. React Bootstrap, Semantic UI, Ant Design, Chakra, Material UI...)

