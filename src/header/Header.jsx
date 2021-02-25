import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { selectToken } from '../model/state/Selector.js';
import StorageHandler from '../helpers/functions/storageHandler.js';

function Header() {
    const token = useSelector(selectToken) || StorageHandler.getToken();
    const history = useHistory();
    const decoded = jwt_decode(token)
    console.log(decoded)

    useEffect(() => {
        if (token) {
            StorageHandler.setToken(token)
        }
    }, [token]);
    return(
        <div>
            {token ?
                <h1>{token}</h1> 
            :
                <h1>Welcome to Cookbook</h1>
            }
            {/* <h1>{token}</h1> */}
        </div>
    )
}

export default Header;
