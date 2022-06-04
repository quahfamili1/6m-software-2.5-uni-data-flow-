# Brief

## Preparation

Clone the [lesson repo](https://github.com/su-ntu-ctp/6m-software-2.8-uni-data-flow.git) from GitHub. Change to the `app` folder copy the `begin` sub-folder into a working folder, e.g. `work`. Change into your work folder and start the React app.

```
cd work
npm start
```
The starting code is basically the same code we saw earlier, with `Counter` now renamed as `Product, and additional input field and `Add Product` button at the bottom of the page.

## Lesson Overview

For this session, we will continue where we left off with passing functions as props and diving deeper into how React components are connected and further addinng more features into our app.

A good practice when designing React components is to generalise them into two categories of components:

- Presentational
- Container

### Presentational Components

Presentational components are only concerned with rendering the view according to a styling and data passed to them. They rely on props for their data, but do not have direct access to data stores. They are sometimes known as *dumb components*.

- Concerned about how data looks
- Have their own styles
- Do not change props (immutable)
- Rarely have their own state

### Container Components

Containers contain the business logic of the application. They can make API calls, do processing, compute values, etc. They usually depend on presentational components to show their data. Also known as *smart components*.

- Concerned about how things work
- Uses states to serve data sources
- Provides data to presentational components

## Part 1: Refactor the Code

Refactor 'Product.js' by splitting up the component into smaller logical container and presentational components. The starter 'Product' component relationship looks like the following:

![Product component relationship diagram](assets/components-begin.png)

`Product` is a container component which:
- Stores and manages all state variables
- Handles update functions
- Calculates all business logic (in next part)

Refactor `Product` and move the presentational parts into a new `Card` component which:
- Receives data and handler functions from `Product` as props
- Displays data output
- Accepts user input using `Input`
- Provision a new `View` component to display product data

![Final Product](assets/components-final.png)

## Part 2: Create View Component

The `View` component shall receive a list of items from `Product` and display at as a table at the bottom of the page. The data items in each row contains the product name and price, with provision to easily add additional columns later.   

## Part 3: Generate the Product Item List

The `Product` component shall store the the list as an array with two elements: product name and price:

```js
const [list, setList] = const useState([])


```