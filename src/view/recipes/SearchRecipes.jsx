import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import RecipeController from '../../controller/RecipeController.js';

function SearchRecipes() {
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch({[e.target.name]: e.target.value});
    };

    const submitSearchQuery = () => {
        RecipeController.sendSearchQuery(search);
    };
    return(
        <div>
            <input name='search' placeholder='search recipes' onChange={handleSearch} />
            <Button onClick={submitSearchQuery}>Search</Button>
        </div>
    )
}

export default SearchRecipes;
