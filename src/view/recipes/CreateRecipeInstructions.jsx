// import React, { useState } from 'react';
// import { FormGroup, Button } from 'react-bootstrap';

// import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';

// function CreateRecipeInstructions() {
//     const [instruction1IsEntered, setInstruction1IsEntered] = useState(false);
//     const [instruction2IsEntered, setInstruction2IsEntered] = useState(false);
//     const [instruction3IsEntered, setInstruction3IsEntered] = useState(false);
//     const [instruction4IsEntered, setInstruction4IsEntered] = useState(false);
//     const [instruction5IsEntered, setInstruction5IsEntered] = useState(false);
//     const [fourInstructions, setFourInstructions] = useState(false);
//     const [fiveInstructions, setFiveInstructions] = useState(false);
//     const [instructions, setInstructions] = useState({
//         instruction1: null,
//         instruction2: null,
//         instruction3: null,
//         instruction4: null,
//         instruction5: null
//     });

//     const handleInstructions = e => {
//         setInstructions({...instructions, [e.target.state]: e.target.value});
//     };

//     const sendInstruction1Props = () => {
//         setInstruction1IsEntered(true);
//     };

//     const sendInstruction2Props = () => {
//         setInstruction2IsEntered(true);
//     };

//     const sendInstruction3Props = () => {
//         setInstruction3IsEntered(true);
//     };

//     const sendInstruction4Props = () => {
//         setInstruction4IsEntered(true);
//     };

//     const sendInstruction5Props = () => {
//         setInstruction5IsEntered(true);
//     };

//     const editInstruction1 = () => {
//         setInstruction1IsEntered(false);
//     };

//     const editInstruction2 = () => {
//         setInstruction2IsEntered(false);
//     };

//     const editInstruction3 = () => {
//         setInstruction3IsEntered(false);
//     };

//     const editInstruction4 = () => {
//         setInstruction4IsEntered(false);
//     };

//     const editInstruction5 = () => {
//         setInstruction5IsEntered(false);
//     };

//     const extendInstructions = () => {
//         if (!fourInstructions) {
//             setFourInstructions(true);
//         } else if (fourInstructions && !fiveInstructions) {
//             setFiveInstructions(true);
//         }
//     }

//     return(
//         <div>
//             <FormGroup>
//                 <ul>
//                     <li onClick={editInstruction1}>
//                         <textarea id='instruction1' name='instruction1' placeholder='instruction' onChange={handleInstructions} onBlur={sendInstruction1Props} className={instruction1IsEntered ? 'none' : 'edit-create-recipe-list'} />
//                         <AddRecipeInstructions instruction={instructions.instruction1} instructionIsEntered={instruction1IsEntered} />
//                     </li>
//                     <li onClick={editInstruction2}>
//                         <textarea id='instruction2' name='instruction2' placeholder='instruction' onChange={handleInstructions} onBlur={sendInstruction2Props} className={instruction2IsEntered ? 'none' : 'edit-create-recipe-list'} />
//                         <AddRecipeInstructions instruction={instructions.instruction2} instructionIsEntered={instruction1IsEntered} />
//                     </li>
//                     <li onClick={editInstruction3}>
//                         <textarea id='instruction3' name='instruction3' placeholder='instruction' onChange={handleInstructions} onBlur={sendInstruction3Props} className={instruction3IsEntered ? 'none' : 'edit-create-recipe-list'} />
//                         <AddRecipeInstructions instruction={instructions.instruction3} instructionIsEntered={instruction3IsEntered} />
//                     </li>
//                     {fourInstructions && 
//                     <li onClick={editInstruction4}>
//                         <textarea id='instruction4' name='instruction4' placeholder='instruction' onChange={handleInstructions} onBlur={sendInstruction4Props} className={instruction4IsEntered ? 'none' : 'edit-create-recipe-list'} />
//                         <AddRecipeInstructions instruction={instructions.instruction4} instructionIsEntered={instruction4IsEntered} />
//                     </li>}
//                     {fourInstructions && fiveInstructions && 
//                     <li onClick={editInstruction5}>
//                         <textarea id='instruction5' name='instruction5' placeholder='instruction' onChange={handleInstructions} onBlur={sendInstruction5Props} className={instruction5IsEntered ? 'none' : 'edit-create-recipe-list'} />
//                         <AddRecipeInstructions instruction={instructions.instruction5} instructionIsEntered={instruction5IsEntered} />
//                     </li>}
//                 </ul>
//             </FormGroup>
//             {!fiveInstructions && <Button onClick={extendInstructions}>More Instructions</Button>}
//         </div>
//     )
// }

// export default CreateRecipeInstructions;
import React, { useState } from 'react';
import { FormGroup, Button } from 'react-bootstrap';

import AddRecipeInstructions from '../formComponents/addRecipe/AddRecipeInstructions.jsx';

function CreateRecipeInstructions() {
    const [instruction1IsEntered, setInstruction1IsEntered] = useState(false);
    const [instruction2IsEntered, setInstruction2IsEntered] = useState(false);
    const [instruction3IsEntered, setInstruction3IsEntered] = useState(false);
    const [instruction4IsEntered, setInstruction4IsEntered] = useState(false);
    const [instruction5IsEntered, setInstruction5IsEntered] = useState(false);
    const [fourInstructions, setFourInstructions] = useState(false);
    const [fiveInstructions, setFiveInstructions] = useState(false);
    const [instructions, setInstructions] = useState({
        instruction1: null,
        instruction2: null,
        instruction3: null,
        instruction4: null,
        instruction5: null
    });

    const sendInstruction1Props = () => {
        setInstruction1IsEntered(true);
    }

    const sendInstruction2Props = () => {
        setInstruction2IsEntered(true);
    }

    const sendInstruction3Props = () => {
        setInstruction3IsEntered(true);
    }

    const sendInstruction4Props = () => {
        setInstruction4IsEntered(true);
    }

    const sendInstruction5Props = () => {
        setInstruction5IsEntered(true);
    }
  
    const editInstruction1 = () => {
        setInstruction1IsEntered(false);
    }

    const editInstruction2 = () => {
        setInstruction2IsEntered(false);
    }

    const editInstruction3 = () => {
        setInstruction3IsEntered(false);
    }

    const editInstruction4 = () => {
        setInstruction4IsEntered(false);
    }

    const editInstruction5 = () => {
        setInstruction5IsEntered(false);
    }
  
    const extendInstructions = () => {
        if (!fourInstructions) {
            setFourInstructions(true);
        } else if (fourInstructions && !fiveInstructions) {
            setFiveInstructions(true);
        };
    };

    const handleInstructions = e => {
        setInstructions({...instructions, [e.target.name]: e.target.value});
    };


    return(
        <div>
            <FormGroup>
                <ul>
                    <li onClick={editInstruction1}>
                        <textarea id='instruction1' placeholder='instruction' type='text' name='instruction1' onChange={handleInstructions} onBlur={sendInstruction1Props} className={instruction1IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeInstructions instruction={instructions.instruction1} instructionIsEntered={instruction1IsEntered} />
                    </li>
                    <li onClick={editInstruction2}>
                        <textarea id='instruction2' placeholder='instruction' type='text' name='instruction2' onChange={handleInstructions} onBlur={sendInstruction2Props} className={instruction2IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeInstructions instruction={instructions.instruction2} instructionIsEntered={instruction2IsEntered} />
                    </li>
                    <li onClick={editInstruction3}>
                        <textarea id='instruction3' placeholder='instruction' type='text' name='instruction3' onChange={handleInstructions} onBlur={sendInstruction3Props} className={instruction3IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeInstructions instruction={instructions.instruction3} instructionIsEntered={instruction3IsEntered} />
                    </li>
                    {fourInstructions && 
                    <li onClick={editInstruction4}>
                        <textarea id='instruction4' placeholder='instruction' type='text' name='instruction4' onChange={handleInstructions} onBlur={sendInstruction4Props} className={instruction4IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeInstructions instruction={instructions.instruction4} instructionIsEntered={instruction4IsEntered} />
                    </li>}
                    {fourInstructions && fiveInstructions &&
                    <li onClick={editInstruction5}>
                        <textarea id='instruction5' placeholder='instruction' type='text' name='instruction5' onChange={handleInstructions} onBlur={sendInstruction5Props} className={instruction5IsEntered ? 'none' : 'edit-create-recipe-list'} />
                        <AddRecipeInstructions instruction={instructions.instruction5} instructionIsEntered={instruction5IsEntered} />
                    </li>}
                </ul>
            </FormGroup>
            {!fiveInstructions && <Button onClick={extendInstructions}>More Instructions</Button>}
        </div>
    )
}

export default CreateRecipeInstructions;
