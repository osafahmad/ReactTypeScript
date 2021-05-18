import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useLocation
  } from "react-router-dom";

export const Topics = () => {
    let match = useRouteMatch();
    
    return (
      <div>
        
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        
      </div>
    );
  }

export function Topic() {
    let query = useQuery();
    console.log("Match",query.get("name"));
    let { topicI } = useParams<{ topicI: string }>();
    return <h3>Requested topic ID: {topicI}</h3>;
  }

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  