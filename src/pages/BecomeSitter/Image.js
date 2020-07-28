import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService";
import { Form, Button } from "react-bootstrap";

function Images() {
  const [images, setImages] = useState();

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dsuvhhlxm",
      tags: [tag, "anImage"],
      uploadPreset: "vnqxy7xe",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          setImages(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);

  return (
    <CloudinaryContext cloudName="dsuvhhlxm">
      <div className="App">
        <Form className="mt-5 mb-3">
          <h3>Required Profile Photo</h3>
          <p>Well-lit, clear frontal face photos</p>
          
          <Button
            variant="outline-primary"
            onClick={() => beginUpload("image")}
          >
            Upload Image
          </Button>

         
            <Image publicId={images}>
              <Transformation
                width="400"
                height="400"
                gravity="face"
                radius="max"
                crop="crop"
              />
              <Transformation width="200" crop="scale" />
            </Image>
            
        </Form>
      </div>
    </CloudinaryContext>
  );
}

export default Images;
