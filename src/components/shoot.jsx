import styles from "./styles/shoot.module.css";
import "./styles/test.css";
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export const Shoot = () => {
    const [value , setValue] = useState("");
    const [dummy, setDummy] = useState([1,2,3,4,5]);
    const [emptyValue, setEmptyValue] = useState([])
    dummy.sort((a,b) => a-b)
    const handleInput = (e) => {
        setValue(e.target.value-1);
    }
    const handleShoot = () => { 
        
        if(emptyValue.includes(value+1)){
            alert("You have already shot this number");
        }
        else{
            // emptyValue.push(value+1)
            if(value > 4 || value < 0){
                alert("You can shoot only in range 1 to 5");
            }
            else{

                setEmptyValue([...emptyValue,value+1])
            }
        }
        setDummy(dummy.filter(x => x !== value+1))
    }
    const handleReplace = (e) => {
        // setDummy(e.target.value)

        let value = +e.target.innerHTML;
        setDummy([...dummy, value]);
        setEmptyValue(emptyValue.filter(x => x !== value));
        console.log(dummy)
    }
    // console.log(dummy)

  return (
    <div className = {styles.container}>
       
        <div className = {styles.leftContainer}>
        <h1>Display</h1>
            <div className = {styles.emptyDiv}>
                {emptyValue.map(item=>{
                    return(
                        <div onClick = {handleReplace} key = {item} className = {styles.assignCircles} id = {`a${item}`}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>



        <div className = {styles.middleContainer} id = {styles.textID}>
            <div className = {styles.circlesDiv}>
                {dummy.map(item => {
                    return (
                        <div  key = {item} className = {styles.circle} id = {`a${item}`}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>



        <div className = {styles.rightContainer}>
                <h1>Controls</h1>
                <div className = {styles.inputsDiv}>
                    {/* <input onChange = {handleInput}></input> */}
                    <TextField style = {{padding:"10px"}}  variant="outlined" onChange = {handleInput} />
                    <br />
                    <Button variant = "contained" onClick = {handleShoot}>Shoot</Button>
                </div>
        </div>
    </div>
  )
}
