import React from 'react';
import ReactDOM from 'react-dom';
import CLPEDIA from './CLPEDIA';
import { CLPEDIAAPIClient } from './APIClient';

import '../src/css/bootstrap.css';
import '../src/fonts/font-awesome/css/font-awesome.css';
import '../src/css/className.css';
import '../src/css/style.css';

// TODO: refactor next time
CLPEDIAAPIClient.init(result => {
    ReactDOM.render(
        <React.StrictMode>
            <CLPEDIA productRawData={result} />
        </React.StrictMode>,
        document.getElementById('root')
    );
});
