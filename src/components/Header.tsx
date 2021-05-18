import React from 'react';

const Header = (props:any)=>{
    
    return(
     <div >
        <nav>
          <ul style={{justifySelf:"center"}}>
            <li>
              <p onClick={props.handleNavigate}>Home</p>
            </li>
            <li>
            <p>Calculator</p>
            </li>
            <li>
            <p>Next</p>
            </li>
          </ul>
        </nav> 
        </div>

    );
}

export default Header;