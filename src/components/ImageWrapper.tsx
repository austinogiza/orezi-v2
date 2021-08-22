import React from "react";
import styled from "styled-components"



interface ImageProps{
    src: any,
    alt: string,
    width: number
height: number
   
}

const ImageWrapper:React.FC<ImageProps> =props => {

    const {src,alt,width,height}= props;
    return (
        <Body width={width} height={height} src={src} alt={alt} />  
            
    )
}

const Body = styled.img<ImageProps>`
max-width: ${props=>props.width};
max-height: ${props=>props.height};
width: 100%;
height: 100%;

`

export default ImageWrapper
