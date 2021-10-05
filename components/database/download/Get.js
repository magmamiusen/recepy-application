import { useState } from "react";

const Get = props => {
    let card = props.data
    const [index, setIndex] = useState(0);
    return (
        <div>
            {card.map(document => {
                return (
                    <div key={Math.random()} >
                        <h1>{document.name}</h1>
                        <h3>{document.type}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Get;