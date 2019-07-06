import React, {useEffect} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type Props = React.PropsWithChildren<RouteComponentProps>

export default withRouter((props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    return props.children as any;
});

