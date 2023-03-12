import React from "react";
const RenderCarousel = ({ srcImg }) => {
  return (
    <div className="lg:min-w-[calc((100%-24px)/4)] md:min-w-[calc((100%-16px)/3)] sm:min-w-[calc((100%-8px)/2)] max-sm:min-w-[calc((100%-8px)/2)] rounded overflow-hidden px-2 snap-start cursor-pointer hover:opacity-90 max-h-[400px]">
      <img className="rounded" src={srcImg} alt="" />
    </div>
  );
};
const Carousel = () => {
  return (
    <div className="flex overflow-hidden ">
      
      <div className=" flex flex-nowrap overflow-auto gap-2  scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-x">
        <RenderCarousel
        
          srcImg={`https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg`}
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
        <RenderCarousel
          srcImg={
            "https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          }
        />
      </div>
     
    </div>
  );
};

export default Carousel;
