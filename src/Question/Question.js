import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h1>Question Answer Section</h1>
            <div className='react-work'>
             <h3>QUESTION-1:How React Work?</h3>
             <p>    1.If we want to create any project based on react then we must follow some rules,the first rule is that we need to create a react app by creating or installing react app we can work on react project.
                    2.For creating any react app we must install npx create-react-app my-app(my-app is can vary every time because it mean our project name).
                    3.When we work on react we see a common word which is component ,under the component each component responsible for rendering small and  we can say it is reusable piece of HTML,it can be nested.
                    4.React also create a vitual DOM that is basically a DOM tree representation in Javascript,so when we need to read or write to the DOM it use vitual representation and which is faster.
                    5.React element are plain object and it is very cheap to create.
                    6.React app are very take care of it updating the DOM to match the react element for this reason it very fast and its speed is very high.
             </p>
             <h3>QUESTION-1:How useState Work?</h3>
             <p>    1.useState is allow a state variable in functional component.
                    2.We can pass the initial state to this function and returns a variable with the current state value and also the another function update this value.
                    3.useState help us to add state function to component.
                    4.It especially use local component state but larger project it face some problem.
                    5.useState takes the initial value of the state variable as an argument.

             </p>
            </div>
        </div>
    );
};

export default Question;
