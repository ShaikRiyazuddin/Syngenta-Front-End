import styles from "./styles/shoot.module.css";
import "./styles/test.css";
import {useState} from "react"

const emptyValue = []
export const Shoot = () => {
    const [value , setValue] = useState("");
    const [dummy, setDummy] = useState([1,2,3,4,5]);
    const [triger, setTriger] = useState(1);
 

    const handleInput = (e) => {
        setValue(e.target.value-1);
    }
    const handleShoot = () => {
        let x = dummy;
        x.splice(value, 1);
        setDummy(x);
        setTriger(triger+1);


        console.log(dummy.length);
        if(value > dummy.length){
            alert("Please enter a value between 1 and 5");
        }
        else{           
            emptyValue.push(value+1)    
        }   

    }
    console.log(emptyValue)

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
                            {item}
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
