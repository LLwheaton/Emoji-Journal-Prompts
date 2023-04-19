import React, { useState } from "react";
function Emoji(props) {
    const [isClicked, setClicked] = React.useState(false);

    function handleClick() {
        console.log("Emoji was clicked");
    }

    function handleClick() {
        setMouseOver(true);
    }
    return (
        <span className="emoji" role="img" aria-label={props.label}>
            {props.emoji}
        </span>
    );
}

export default Emoji;