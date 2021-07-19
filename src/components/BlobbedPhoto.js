const BlobbedPhoto = ({ photo }) => {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="50%" id="blobSvg">
            <pattern id="img1" width="1" height="1">
                <image href={photo} x="-50" y="-50" width="100%" height="100%" />
            </pattern>
            <path id="blob" d="M431,287.5Q417,325,392.5,353Q368,381,338,405.5Q308,430,268,445.5Q228,461,177,462.5Q126,464,105,417.5Q84,371,63.5,332.5Q43,294,32,247.5Q21,201,58.5,169.5Q96,138,122,105.5Q148,73,186.5,44Q225,15,268,38.5Q311,62,364,63.5Q417,65,435,112.5Q453,160,449,205Q445,250,431,287.5Z" fill="url(#img1)"></path>
        </svg>
    );
}

export default BlobbedPhoto;