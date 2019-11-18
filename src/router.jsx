import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NoMatch from './componets/NoMatch'
import Test from './componets/test'
import ReceivesData from './componets/ReceivesData'
import App from "./App";


class Router extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/test" component={Test} />
                    <Route exact path="/receives" component={ReceivesData} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
