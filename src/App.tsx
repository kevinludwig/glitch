import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';

class App extends React.Component {
    public render () {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <p>Hello World!</p>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}
export default App;
