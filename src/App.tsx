import * as React from 'react';
import {Provider} from 'react-redux';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

import AppRoutes from './AppRoutes';

interface IProps {
    store: any;
}

const theme = createMuiTheme();

export default (props: IProps) => {
    return (
        <Provider store={props.store}>
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </Provider>
    );
}

