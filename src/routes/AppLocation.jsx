import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectDestination } from '../model/state/Selector.js';
import LocationHelper from '../helpers/functions/locationHandler.js';

export const AppLocation = () => {
    const history = useHistory();
    const destination = LocationHelper.setRouteDestination(useSelector(selectDestination));
    history.push(destination)
    return(<></>)
};
