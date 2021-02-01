import React from 'react';
import ReactDOM from 'react-dom';
import CLPEDIA from './CLPEDIA';
import { CLPEDIAAPIClient } from './APIClient';

// TODO: refactor next time
CLPEDIAAPIClient.init(result => {
    ReactDOM.render(
        <React.StrictMode>
            <CLPEDIA productRawData={result} />
        </React.StrictMode>,
        document.getElementById('root')
    );
});
