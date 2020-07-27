import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";


function Upload() {
  const [images, setImages] = useState([])
  

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dsuvhhlxm",
      tags: [tag, 'anImage'],
      uploadPreset: "vnqxy7xe"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          setImages([...images, photos.info.public_id])
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
    
  }, [])

  console.log("image",images)

  return (
   <CloudinaryContext cloudName="dsuvhhlxm">
      <div className="App">
        <button onClick={() => beginUpload("image")}>Upload Image</button>
      <section>
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
      </section>
    </div>
   </CloudinaryContext>
  );
}

export default Upload;