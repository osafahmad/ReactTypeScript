import { BrowserRouter as Router,Switch,Route,Link ,useRouteMatch} from "react-router-dom";
import Home from "./screens/Home";
import Calculator from "./screens/Calculator";
import { GlobalStyle } from "./App.style";
import {Topics,Topic} from "./screens/Topics/index";
import NotFound from "./screens/NotFound";

const Routes =()=>{
    return (
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/calculator" component={Calculator}/>
                <Route path="/topics" component={Abc}/>
                <Route path="*"  component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;

const Abc =()=>{
    let match = useRouteMatch();
    return(
        <>
        <h2>Topics</h2>
        <h3>Please select a topic.</h3>
        <ul>
          <li>
            <Link to={`${match.url}/components?name=netflix`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state?name=youtube`}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
            
            <Route path={`${match.path}/:topicI`} component={Topic} />
            <Route path={match.path} component={Topics} />
        </Switch>
        </>
    )
}