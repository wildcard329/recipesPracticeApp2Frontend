import React, { useState } from 'react';
import RecipeController from '../controller/RecipeController';

function Testimageupload() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const onChangeForm = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename: ', filename);
        RecipeController.sendTestData(formData);
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type='file' onChange={onChangeForm} />
                {file ? <img src={file} /> : null}
                <button onClick={onSubmitForm}>Submit</button>
            </form>
        </div>
    )
}

export default Testimageupload;
