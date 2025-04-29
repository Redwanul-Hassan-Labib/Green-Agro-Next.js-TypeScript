
import React from "react";
import Lightbox from "react-18-image-lightbox";

// type DataType = {
//   images: any;
//   setIsOpen: any;
//   photoIndex: any;
//   setPhotoIndex: any;

// }

type DataType = {
  images: string[]; // Assuming images is an array of strings (URLs of images)
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the open/close state
  photoIndex: number; // Current index of the photo being displayed
  setPhotoIndex: React.Dispatch<React.SetStateAction<number>>; // Function to set the photo index
};


 

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }:  DataType ) => {
  return (
    <React.Fragment>
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    </React.Fragment>
  );
};

export default ImagePopup;



