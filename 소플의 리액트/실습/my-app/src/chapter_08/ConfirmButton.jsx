import React, { useState} from "react";

function ConfirmButton(props){
    const [ isToggleOn, setIsToggleOn] = useState(false);


    //방법 2. arrows funtion을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((prevIsToggleOn) => !prevIsToggleOn);
    }

    return(
        <button onClick={handleClick} disabled={isToggleOn}>
            {isToggleOn ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;