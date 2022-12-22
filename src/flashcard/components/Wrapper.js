import "./Wrapper.css";

const Wrapper = ({children, onClick}) => {
    return <div className = "wrapper" onClick = {onClick}></div>;
};

export default Wrapper;