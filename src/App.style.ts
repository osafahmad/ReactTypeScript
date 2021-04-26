import styled ,{createGlobalStyle} from "styled-components";

import BGImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height : 100%;
    }
    body{
        background-image : url(${BGImage});
        background-size :   cover;
        margin : 0 ;
        padding : 0 20px ;
        display flex ;
        justify-content : center
    }

    * {
        box-sizing : border-box;
        font-family : "Catamaran" , sans-sarif
    }
    .button {
        display: block;
        background-color: #bbb;
      }
      .calbutton {
        width: 25%;
        height: 60px;
        font-size: 30px;
      }
      
     
      .result {
        height: 60px;
        background-color: #bbb;
        width: 100%;
      }
      
      .result p {
        font-size: 40px;
        margin: 5px;
      
      }
      
      .calculator-body {
        max-width: 400px;
        margin: auto;
      }
`

