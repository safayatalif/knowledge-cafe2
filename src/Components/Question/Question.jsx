import React from 'react';

const Question = () => {
    return (
        <div className='card shadow-md p-4 border bg-sky-50 mt-4'>
            <h1 className='font-bold'>Some Question To React</h1>
            <div className='card shadow p-4 border mt-2 bg-sky-200'>
                <h3 className='font-semibold'> 1.Props vs state</h3>
                <p>Props are data passed from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component. </p>
                <p>State is data that is managed within a component and is mutable, meaning it can be changed by the component. State is typically used to store data that is used to render the component .</p>
            </div>
            <div className='card shadow p-4 border mt-2 bg-sky-200'>
                <h3 className='font-semibold'>2.How does useState work?</h3>
                <p>useState is a hook that allows a functional component to have state.
                    It takes in an initial state as an argument and returns an array with two values:
                    the current state and a function that can be used to update the state.
                    The function takes in a new state value and updates the current state to that new value.</p>
            </div>
            <div className='card shadow p-4 border mt-2 bg-sky-200'>
                <h3 className='font-semibold'>3.Purpose of useEffect other than fetching data.</h3>
                <p>UseEffect can be used for many tasks other than fetching data, such as:</p>
                <ul className='list-disc p-8'>
                    <li>Managing component lifecycle events.</li>
                    <li>Setting up timers.</li>
                    <li>Handling component resizing events.</li>
                    <li>Updating the document title.</li>
                    <li>Adding event listeners.</li>
                </ul>
            </div>
            <div className='card shadow p-4 border mt-2 bg-sky-200'>
                <h3 className='font-semibold'>How Does React work?</h3>
                <p>React works by breaking down a user interface into individual components.
                    Each component is written as a JavaScript class that contains a
                    description of the component's view and the logic that governs how the component behaves.
                    When the component is rendered, React takes the description and builds the view.
                    React then keeps track of the component's state and re-renders the component when its state changes.</p>
            </div>
        </div>
    );
};

export default Question;