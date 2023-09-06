
import {useState} from "react";

const FunctionalState = () => {

    let [sampleContent, ChangeElement] = useState("Hello World");
    let [color, ChangeColor] = useState ("red");

    function changeSomething(){
        ChangeElement("Wow Nabago na!");
        // eslint-disable-next-line eqeqeq
        color == "red" ? ChangeColor("yellow") : ChangeColor ("red");
    }

    return(
        <>
            <h1 style={{background: color}}>{sampleContent}</h1>
            <button onClick ={() => changeSomething()}>Change Sample Element</button>
        </>
    );
}

export default FunctionalState;