import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  RouterConfig  from './routerConfig';
import NoMatch from '../components/NoMatch/nomatch';

class RouterComponent extends React.Component {
    render() {
        return( <BrowserRouter>
          <Switch>
            {RouterConfig.map((r, i) => {
                return <Route key={'Rounter_' + i}
                exact={r.exact? r.exact : false}
                path={r.path}
                component={r.component}/>
            })}
            <Route path="*" component={NoMatch}/>
            </Switch>
        </BrowserRouter>);
    }
}

export default RouterComponent;
