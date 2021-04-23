import React, {Component} from 'react';

interface ButtonType {
    callBack:(e:React.MouseEvent<HTMLButtonElement>) => void
}


const  KeyPadComponent :React.FC<ButtonType>  =({callBack})=> {

    
        return (
            <div className="button">
                <button name="(" onClick={callBack}>(</button>
                <button name="CE" onClick={callBack}>CE</button>
                <button name=")" onClick={callBack}>)</button>
                <button name="C" onClick={callBack}>C</button><br/>


                <button name="1" onClick={callBack}>1</button>
                <button name="2" onClick={callBack}>2</button>
                <button name="3" onClick={callBack}>3</button>
                <button name="+" onClick={callBack}>+</button><br/>


                <button name="4" onClick={callBack}>4</button>
                <button name="5" onClick={callBack}>5</button>
                <button name="6" onClick={callBack}>6</button>
                <button name="-" onClick={callBack}>-</button><br/>

                <button name="7" onClick={callBack}>7</button>
                <button name="8" onClick={callBack}>8</button>
                <button name="9" onClick={callBack}>9</button>
                <button name="*" onClick={callBack}>x</button><br/>


                <button name="." onClick={callBack}>.</button>
                <button name="0" onClick={callBack}>0</button>
                <button name="=" onClick={callBack}>=</button>
                <button name="/" onClick={callBack}>÷</button><br/>
            </div>
        );
    
}


export default KeyPadComponent;