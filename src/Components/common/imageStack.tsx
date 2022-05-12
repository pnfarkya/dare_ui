import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageStack = ({imageData}) => {
    console.log(imageData);
    return (
        <ImageList cols={2} rowHeight={50} style={{ overflow: "hidden", width: 100, height: 100 }}>
            {imageData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                src={`${item.url}?w=50&h=50&fit=crop&auto=format`}
                srcSet={`${item.url}?w=50&h=50&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
        ))}
        </ImageList>
  );
};

export default ImageStack;

