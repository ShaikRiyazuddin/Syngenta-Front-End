import styles from "./styles/shoot.module.css";
import "./styles/test.css";
import {useState} from "react"



export const Shoot = () => {
    const [value , setValue] = useState("");
    const [dummy, setDummy] = useState([1,2,3,4,5])


    const circles = [1,2,3,4,5];

    // const dummyCircles = [...circles];

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    console.log(value)
    const handleShoot = () => {
        const circles = [1,2,3,4,5];
        circles.filter(circle => circle != value)
        console.log(circles)
    }


  return (
    <div className = {styles.container}>
        <div className = {styles.leftContainer}>
            <div className = {styles.emptyDiv}></div>
        </div>



        <div className = {styles.middleContainer} id = {styles.textID}>
            <div className = {styles.circlesDiv}>
                {dummy.map(item => {
                    return (
                        <div key = {item} className = {styles.circle} id = {`a${item}`}>
                        </div>
                    )
                })}
            </div>
        </div>



        <div className = {styles.rightContainer}>
                <div className = {styles.inputsDiv}>
                    <input onChange = {handleInput}></input>
                    <br />
                    <button onClick = {handleShoot}>Shoot</button>
                </div>
        </div>
    </div>
  )
}
