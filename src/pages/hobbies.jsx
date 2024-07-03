import React from "react";
import Header from "../components/header";
import Gallery from "../components/gallery";

function Hobbies() {
  const soccerPhotos = [
    {
      src: "/images/soccer/1.jpg",
      width: 2048,
      height: 1365,
    },
    {
      src: "/images/soccer/2.jpg",
      width: 2048,
      height: 1365,
    },
    {
      src: "/images/soccer/3.jpg",
      width: 2048,
      height: 1365,
    },
    {
      src: "/images/soccer/4.jpg",
      width: 2048,
      height: 1365,
    },
    {
      src: "/images/soccer/5.jpg",
      width: 2048,
      height: 1365,
    },
    {
      src: "/images/soccer/6.jpg",
      width: 2048,
      height: 1365,
    },
  ];

  const travelPhotos = [
    { src: "/images/travel/nz1.jpg", width: 1000, height: 700 },
    { src: "/images/travel/nz2.jpg", width: 600, height: 800 },
    { src: "/images/travel/nz3.jpg", width: 600, height: 800 },
    { src: "/images/travel/nz4.jpg", width: 600, height: 800 },
    { src: "/images/travel/nz5.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/jpn1.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/jpn2.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/jpn3.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/jpn4.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/us1.jpg", width: 3024, height: 4032 },
    { src: "/images/travel/mx1.jpg", width: 3024, height: 4032 },
  ];
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col m-auto container max-w-screen-lg justify-center p-5">
        <div className="flex flex-row text-white w-full h-full justify-between">
          <div>
            <h1 className="text-3xl">A list of my hobbies!</h1>
          </div>
        </div>
        <Gallery photos={soccerPhotos} title="Soccer" layout="rows" />
        <Gallery photos={travelPhotos} title="Travel" layout="masonry" />
      </div>
    </div>
  );
}

export default Hobbies;
