# Quiz

## Unidirectional Data Flow

### Q1: Which of the sentence about Unidirectional Data Flow is not true?

- A: state is passed to the view and to child components
- B: state is passed to the view and to parent components
- C: actions are triggered by the view
- D: actions can update the state
---
### Q2: What is the definition of "view"?

- A: The view is the UI - result of the application state.
- B: The React Component
- C: The engine that generates the UI.
- D: The template used to generate the UI.
---
### Q3: Which of the following does not describe "action"?

- A: It is triggered by an event.
- B: It is a function.
- C: It produces or changes states.
- D: The click or tap event.
---
### Q4: Which of the following does not describe "state"?

- A: Refers to the React state.
- B: The data stored in `localStorage`.
- C: It can be updated using `useState` hook.
- D: It can be updated using `setState` API.
---
### Q5: What does it mean to "lift state up"?

- A: To make a state visible to other components.
- B: To toggle the visibility of the state within its component.
- C: To encapsulate the state and expose the data to be modified via a function.
- D: Storing the state in the common ancestral component.

### Q6: What benefits does it brings to lift state up?
_(more than one possible answer)_

- A: It allows components to be reused.**
- B: It allows the use of props.
- C: It allows the use of functional components.
- D: It allows better state management.**
---
### Q7: What is a presentational component?
_(more than one possible answer)_

- A: It is a CSS component.
- B: It is a component focuses on rendering what users see.
- C: It is a a pure component.
- D: It is a not a component.
---
### Q8: Which sentence do not describe a container component?

- A: It contains the lifted state.
- B: It does not handle UI related.
- C: It renders multiple children components.
- D: It guides the CSS styling of children components.
---
### Q9: What benefit does it bring to separate presentational and container component?

- A: It promotes a better coding practice where data and UI components are loosely coupled.
- B: It improves the performance of the rendering.
- C: It is a more secured way to write React code.
- D: It eases the use of external libraries.
---
### Q10: What is inverse data flow?

- A: It is to send data back to the server.
- B: It stores data in localStorage.
- C: It sends data from children to parent component.
- D: It fetches data from server.
