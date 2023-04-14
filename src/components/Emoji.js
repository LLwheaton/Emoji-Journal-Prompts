function Emoji(props) {
    return (
        <span className="emoji" role="img" aria-label={props.label}>
            {props.emoji}
        </span>
    );
}

export default Emoji;