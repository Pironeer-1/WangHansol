import React, {useState} from "react";

function SingUp(props){
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <lable>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
                <button type="submit">제출</button>
            </lable>
        </form>
    );
}

export default SingUp;