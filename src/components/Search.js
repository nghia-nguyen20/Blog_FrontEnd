import React, {useState} from "react";

function Search(props) {

    const sentDataSearch = (event) => {
        // console.log('keyword', event.target.value);
        props.getDataSearch(event.target.value);
    }

    return(
        <div className="mt-2 mb-2">
            <input class="form-control" type="text" placeholder="enter your keyword" onChange={sentDataSearch}/>
        </div>
    )
}

export default Search;