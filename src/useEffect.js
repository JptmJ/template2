import React, { useEffect, useState } from 'react';

function Button1() {

    const [Btn1, setBtn1] = useState(0);
    const Btn1Click = () => {
        setBtn1(Btn1 + 1);
    }
    useEffect(() => {
        alert('Button is clicked');
    }, [Btn1], []);
    return (
        <>
            <button onClick={Btn1Click}>Click Button {Btn1}</button>
        </>

    )

}

export default Button1;
