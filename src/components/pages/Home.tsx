import * as React from 'react';

import AsyncPage from 'components/AsyncPage';

export default () => {
    return (
        <AsyncPage isFetching={false}>
            <p>Hello World</p>
        </AsyncPage>
    );
}

