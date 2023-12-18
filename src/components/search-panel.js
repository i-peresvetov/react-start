import React from "react";
import

const SearchPanel = () => {
    const serchText = 'seach'
    const serchStyle = {
        fontSize: '20px'
    }
    return (
        <input style={serchStyle} placeholder={serchText}></input>
    )
}

export default SearchPanel;