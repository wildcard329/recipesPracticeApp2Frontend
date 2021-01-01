import React, { useState } from 'react';

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
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <input type='file' onChange={onChangeForm} />
            </form>
        </div>
    )
}

export default Testimageupload;
