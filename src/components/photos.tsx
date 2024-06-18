import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `${asset}`;
}

const Photos = [
  { asset: "/portfolio/PO-1.jpeg", width: 1080, height: 780 },
 
  { asset: "/portfolio/PO-2.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-3.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-4.jpeg", width: 1080, height: 1620 },
  { asset: "/portfolio/PO-5.jpeg", width: 1080, height: 607 },
  { asset: "/portfolio/PO-6.jpeg", width: 1080, height: 608 },
  { asset: "/portfolio/PO-7.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-8.jpeg", width: 1080, height: 1549 },
  { asset: "/portfolio/PO-9.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-10.jpeg", width: 1080, height: 694 },
  { asset: "/portfolio/PO-11.jpeg", width: 1080, height: 607 },
  { asset: "/portfolio/PO-12.jpeg", width: 1080, height: 608 },
  { asset: "/portfolio/PO-13.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-14.jpeg", width: 1080, height: 1549 },
  { asset: "/portfolio/PO-15.jpeg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-16.jpg", width: 1080, height: 694 },
  { asset: "/portfolio/PO-20.jpg", width: 1080, height: 1549 },
  { asset: "/portfolio/PO-21.jpg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-22.jpg", width: 1080, height: 694 },
  
  { asset: "/portfolio/PO-17.jpg", width: 1080, height: 608 },
  { asset: "/portfolio/PO-18.jpg", width: 1080, height: 720 },
  { asset: "/portfolio/PO-19.jpg", width: 1080, height: 1549 },
 
//   { asset: "image12.5a9347ea.jpg", width: 1080, height: 1620 },
//   { asset: "image13.ce46dd98.jpg", width: 1080, height: 720 },
//   { asset: "image14.68b2812c.jpg", width: 1080, height: 1440 },
//   { asset: "image15.4461facf.jpg", width: 1080, height: 1620 },
//   { asset: "image16.5ad17d8b.jpg", width: 1080, height: 810 },
//   { asset: "image17.a242e897.jpg", width: 1080, height: 595 },
//   { asset: "image18.0479bde8.jpg", width: 1080, height: 160 },
//   { asset: "image19.ab7b61f4.jpg", width: 1080, height: 810 },
//   { asset: "image20.f62571df.jpg", width: 1080, height: 720 },
//   { asset: "image21.14c9bee0.jpg", width: 1080, height: 1440 },
].map(
  ({ asset, width, height }) =>
    ({
      src: assetLink(asset, width),
      width,
      height,
      srcSet: breakpoints.map((imageWidth) => ({
        src: assetLink(asset, imageWidth),
        width: imageWidth,
        height: Math.round((height / width) * imageWidth),
      })),
    }) as Photo,
);

export default Photos;
