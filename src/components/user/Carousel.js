import React from "react";
const RenderCarousel = ({ srcImg }) => {
  return (
    <div className="lg:min-w-[calc((100%-24px)/4)] md:min-w-[calc((100%-16px)/3)] sm:min-w-[calc((100%-8px)/2)] max-sm:min-w-[calc((100%-8px)/2)] rounded overflow-hidden px-2 snap-start ">
      <img className="rounded" src={srcImg} alt="" />
    </div>
  );
};
const Carousel = () => {
  return (
    <div className="flex overflow-hidden ">
      
      <div className=" flex flex-nowrap overflow-auto gap-2  scrollbar-thumb-gray-900 scrollbar-track-gray-100 snap-x">
        <RenderCarousel
        
          srcImg={`https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E`}
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
        <RenderCarousel
          srcImg={
            "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332857954_593363748959852_501940114511433263_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=U4vNeTDx0SIAX_rGv0p&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDvNn7mHUtLXS4cA9V-79uZjAQJ18nhRiiA3W-I7IoIaQ&oe=64009C3E"
          }
        />
      </div>
     
    </div>
  );
};

export default Carousel;
