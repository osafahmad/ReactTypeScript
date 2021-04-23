import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from "./screens/Home";
import Calculator from "./screens/Calculator";
import { GlobalStyle } from "./App.style";
const Routes =()=>{
    return (
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/calculator" component={Calculator}/>
            </Switch>
        </Router>
    )
}

export default Routes