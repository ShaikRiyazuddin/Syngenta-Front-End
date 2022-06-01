import styles from "./styles/shoot.module.css";
import "./styles/test.css";
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export const Shoot = () => {
    const [value , setValue] = useState("");
    const [dummy, setDummy] = useState([1,2,3,4,5]);
    const [emptyValue, setEmptyValue] = useState([]);

    //  Sorting functionality for the arrangement of the colors in the middle div as per there intial positions

    dummy.sort((a,b) => a-b)
    const handleInput = (e) => {
        setValue(e.target.value-1);
    }

    // Logic to move color to empty and remove from orginal position
    const handleShoot = () => { 
        if(emptyValue.includes(value+1)){
            alert("You have already shot this number");
        }
        else{
            if(value > 4 || value < 0){
                alert("You can shoot only in range 1 to 5");
            }
            else{

                setEmptyValue([...emptyValue,value+1])
            }
        }
        setDummy(dummy.filter(x => x !== value+1))
    }

    //Removing colors from empty div

    const handleReplace = (e) => {
        let value = +e.target.innerHTML;
        setDummy([...dummy, value]);
        setEmptyValue(emptyValue.filter(x => x !== value));
        console.log(dummy)
    }

  return (
    <div className = {styles.container}>
       
        //Display div where we can see the colors when the color is shot

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


        //Middle div where the colors are intially displayed

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

        //Controls div where we can enter the number to shoot

        <div className = {styles.rightContainer}>
                <h1>Controls</h1>
                <div className = {styles.inputsDiv}>
                    <TextField style = {{padding:"10px"}}  variant="outlined" onChange = {handleInput} />
                    <br />
                    <Button variant = "contained" onClick = {handleShoot}>Shoot</Button>
                </div>
        </div>
    </div>
  )
}
