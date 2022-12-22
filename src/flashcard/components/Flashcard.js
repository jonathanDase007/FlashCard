import "./Flashcard.css";

const Wrapper = ({classname, value, onClick}) => {
    return <div className = "wrapper" onClick = {onClick}>
        <h1>{value}</h1>
    </div>;
};

export default Wrapper;