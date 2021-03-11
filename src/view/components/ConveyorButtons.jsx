import React, { useState } from 'react';
import RecipeController from '../../controller/RecipeController';

function ConveyorButtons({list}) {
    const [start, setStart] = useState(false);
    const [visibleArr, setVisibleArr] = useState(5);
    const [incrementing, setIncrementing] = useState(false);

    const startConveyor = () => {
        RecipeController.relayStart({start, list})
        setStart(true);
    };

    const stopConveyor = () => {
        RecipeController.relayStop({start, list})
        setStart(false);
    };

    const increment = () => {
        RecipeController.relayIncrement({incrementing, list})
        setIncrementing(!incrementing);
    };

    const iterateConveyor = () => {
        if (start) {
            setVisibleArr(visibleArr)
        } else {
            setVisibleArr(visibleArr+1)
        }
    }
    return(
        <div className='conveyor-system'>
            <div className={start ? 'conveyor green-disabled' : 'conveyor green-selectable'} onClick={startConveyor} />
            <div className={start || incrementing ? 'conveyor blue-disabled' : 'conveyor blue-selectable'} onClick={iterateConveyor} onMouseDown={increment} onMouseUp={increment} />
            <div className={start ? 'conveyor red-selectable' : 'conveyor red-disabled'} onClick={stopConveyor} />
        </div>
    )
}

export default ConveyorButtons;
