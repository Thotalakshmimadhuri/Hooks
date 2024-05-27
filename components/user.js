import React, {useState, useEffect} from "react";

const User = (props) => {
    //value
    //the function to update the state
    const [planet. setplanet] = useState("earth");

    //componentDidMount
    useEffect(() => {
        //heavy computation
        console.log("Component Mounting");
    }, []);


    //ComponentDidUpdate
    useEffect(() => {
        console.log("Planet Changes");
    }, [planet]);


    console.log(planet);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() =>setPlanet("Pluto")}>{planet}</button>
        </div>
    );

}
//State -> A set of data that an individual component holds   
export default User;

//props -> properties/Parameters

//LIFE CYCLE METHODS
//1.MOUNT -> The component Is initially rendered in a dom
//1.a.Constructor -, 1.b.Render , 1.c.componentDidMount -sideeffects (get explore repos, activities, links)
//2.UPDATE -> Component is being updated
//2.a.Constructor 
//2.b.shouldComponentUpdate(nextProp, nextState) -> true or false
//2.c.render()
//2.d.getSnapShotBeforeUpdate(prevProp, prevState) ->  true or false
//2.e.componentDidUpdate()
//3.UNMOUNT ->Component is removed from the DOM