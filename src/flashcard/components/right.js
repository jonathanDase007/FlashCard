import "./right.css"


const Arrow = ({onClick}) => {
    return <div className= "Right" onClick={onClick}>
        <img 
            src = {require("./images/images.png")}
            />
    </div>
}

export default Arrow;