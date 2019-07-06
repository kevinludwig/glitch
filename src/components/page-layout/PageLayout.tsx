import * as React from 'react';
import AppBar from './AppBar';

interface IProps {
    children: React.ReactNode;
}

export default (props: IProps) => {
    return (
        <div>
            <AppBar />
            {props.children}
        </div>
    );
}
