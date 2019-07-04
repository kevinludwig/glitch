import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';
import Home from 'components/pages/Home';
import NotFound from 'components/pages/NotFound';

export default () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}

