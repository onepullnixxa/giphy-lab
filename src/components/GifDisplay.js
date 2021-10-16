import React from 'react';

const GifDisplay = (props) => {
    const { gif } = props;
    
    //this function returns the loaded JSX
    const loaded = () => {
        return (
            <>
                <img src={gif.data.images.original.url} alt="{gif.data.title}" />
            </>
        );
    };

    //this function returns loading... JSX
    const loading = () => {
        return <h2>Pull random gifs from Giphy</h2>;
    };

    return gif ? loaded() : loading();
};

export default GifDisplay;