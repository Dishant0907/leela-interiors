"use client"
import * as React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PhotoAlbum from "react-photo-album";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Photos from "@/components/photos";
import { Navbar } from "@/components/Navbar";

export default function Portfolio() {
  const [index, setIndex] = useState(-1);

  return (
    <>
    <Navbar/>
    <h1 className="text-black text-5xl ml-[1rem] mb-[1rem] mt-[9rem] md:text-8xl font-bold md:ml-[7rem] md:mb-[4rem]  md:mt-[9rem]">Checkout Our Work.</h1>
      <div className="md:block hidden px-[7rem]  pt-6  ">
      <PhotoAlbum photos={Photos} layout="columns" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
      </div>


      <div className=" block md:hidden p-3">
      <PhotoAlbum photos={Photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
      </div>
      <Lightbox
        slides={Photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}