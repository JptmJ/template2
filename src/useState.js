import { useState } from "react";

function ColorState() {

    const Colors = ['', 'red', 'green', 'blue', 'white', 'black'];
    const [CurrentColorIndex, SetCurrentColorIndex] = useState(0);
    const ChangeColor = () => {
        SetCurrentColorIndex((prevIndex) => (prevIndex + 1) % Colors.length);
    }
    const CurrentColor = Colors[CurrentColorIndex];
    return (
        <>
            <h3>Current Color is {CurrentColor}</h3>
            <button onClick={ChangeColor}>Change Color State</button>
        </>
    )
}
export default ColorState;