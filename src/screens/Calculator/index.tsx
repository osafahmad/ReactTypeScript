import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import KeyPadComponent from './KeyPad';
import ResultComponent from './Result';

const Calculator = (props:any)=>{
    const [result , isSetResult] = useState<string>("")
    const onClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        const number = e.currentTarget.name
        if(number === "=")
            calculate()
        else if(number === "C")
            reset();
        else if(number === "CE")
            backspace();
        else
        isSetResult(result + number);
    }
    const reset =()=>{
        isSetResult("");
    }
    const backspace =()=>{
        const backSapce = result.slice(0, -1)
        isSetResult(backSapce);
    }
    const calculate = ()=>{
        try {
            isSetResult((eval(result) || "" ) + "");
        } catch (e) {
            isSetResult("Error");
           

        }
    }
    return(
    <div style={{justifyContent:"center"}}>
        <h1>Simple Calculator</h1>
        <ResultComponent result={result}/>
        <KeyPadComponent callBack={onClick}/>
    </div>

    );
}

export default Calculator;