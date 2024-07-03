import React from "react";
import PhotoAlbum from "react-photo-album";
import Heading from "../components/heading";

function Gallery({ title, photos, layout }) {
  return (
    <>
      <Heading value={title} />
      <div className="pt-10 pb-10">
        <PhotoAlbum photos={photos} layout={layout} />
      </div>
    </>
  );
}

export default Gallery;
