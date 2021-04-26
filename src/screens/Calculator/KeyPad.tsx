import React, {Component} from 'react';

interface ButtonType {
    callBack:(e:React.MouseEvent<HTMLButtonElement>) => void
}


const  KeyPadComponent :React.FC<ButtonType>  =({callBack})=> {

    
        return (
            <div className="button">
                <button  className={"calbutton"} name="(" onClick={callBack}>(</button>
                <button className={"calbutton"} name="CE" onClick={callBack}>CE</button>
                <button className={"calbutton"} name=")" onClick={callBack}>)</button>
                <button className={"calbutton"} name="C" onClick={callBack}>C</button><br/>


                <button className={"calbutton"} name="1" onClick={callBack}>1</button>
                <button className={"calbutton"} name="2" onClick={callBack}>2</button>
                <button className={"calbutton"} name="3" onClick={callBack}>3</button>
                <button className={"calbutton"} name="+" onClick={callBack}>+</button><br/>


                <button className={"calbutton"} name="4" onClick={callBack}>4</button>
                <button className={"calbutton"} name="5" onClick={callBack}>5</button>
                <button className={"calbutton"} name="6" onClick={callBack}>6</button>
                <button className={"calbutton"} name="-" onClick={callBack}>-</button><br/>

                <button className={"calbutton"} name="7" onClick={callBack}>7</button>
                <button className={"calbutton"} name="8" onClick={callBack}>8</button>
                <button className={"calbutton"} name="9" onClick={callBack}>9</button>
                <button className={"calbutton"} name="*" onClick={callBack}>x</button><br/>


                <button className={"calbutton"} name="." onClick={callBack}>.</button>
                <button className={"calbutton"} name="0" onClick={callBack}>0</button>
                <button className={"calbutton"} name="=" onClick={callBack}>=</button>
                <button className={"calbutton"} name="/" onClick={callBack}>÷</button><br/>
            </div>
        );
    
}


export default KeyPadComponent;