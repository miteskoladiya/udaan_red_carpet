"use client";

import { motion } from "framer-motion";

import React, { useContext, useRef, useState } from "react";
import { BlurImage, Carousel, CarouselContext } from "@/components/ui/apple-cards-carousel";
import { redirect } from "next/navigation";

export function AppleCardsCarouselDemo2() {
  
    const [data, setData] = useState([
        {
          id: 1,
          category: "Face of the Year",
          title: "The most charismatic face of the year!",
          src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 101, name: "MacBook", src: "https://assets.aceternity.com/macbook.png" },
            { id: 102, name: "iPhone", src: "https://assets.aceternity.com/iphone.png" },
            { id: 103, name: "iPad", src: "https://assets.aceternity.com/ipad.png" },
            { id: 104, name: "Apple Watch", src: "https://assets.aceternity.com/watch.png" }
          ]
        },
        {
          id: 2,
          category: "Artist of the Year (Male)",
          title: "A true creative genius!",
          src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 201, name: "AirPods", src: "https://assets.aceternity.com/airpods.png" },
            { id: 202, name: "Apple TV", src: "https://assets.aceternity.com/apple-tv.png" },
            { id: 203, name: "HomePod", src: "https://assets.aceternity.com/homepod.png" },
            { id: 204, name: "Magic Keyboard", src: "https://assets.aceternity.com/magic-keyboard.png" }
          ]
        },
        {
          id: 3,
          category: "Artist of the Year (Female)",
          title: "Master of the creative arts!",
          src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
          selected_nominee_id: null,

          nominees: [
            { id: 301, name: "Apple Pencil", src: "https://assets.aceternity.com/apple-pencil.png" },
            { id: 302, name: "iMac", src: "https://assets.aceternity.com/imac.png" },
            { id: 303, name: "Mac Mini", src: "https://assets.aceternity.com/mac-mini.png" },
            { id: 304, name: "Mac Studio", src: "https://assets.aceternity.com/mac-studio.png" }
          ]
        },
        {
          id: 4,
          category: "Sports Person of the Year (Male)",
          title: "An unstoppable sports champion!",
          src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop",
          selected_nominee_id: null,

          nominees: [
            { id: 401, name: "Mac Pro", src: "https://assets.aceternity.com/mac-pro.png" },
            { id: 402, name: "iPhone SE", src: "https://assets.aceternity.com/iphone-se.png" },
            { id: 403, name: "iPhone Pro", src: "https://assets.aceternity.com/iphone-pro.png" },
            { id: 404, name: "Apple Vision Pro", src: "https://assets.aceternity.com/apple-vision-pro.png" }
          ]
        },
        {
          id: 5,
          category: "Sports Person of the Year (Female)",
          title: "A sports icon in the making!",
          src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop",
          selected_nominee_id: null,

          nominees: [
            { id: 501, name: "Apple Car", src: "https://assets.aceternity.com/apple-car.png" },
            { id: 502, name: "MacBook Air", src: "https://assets.aceternity.com/macbook-air.png" },
            { id: 503, name: "MacBook Pro", src: "https://assets.aceternity.com/macbook-pro.png" },
            { id: 504, name: "Thunderbolt Display", src: "https://assets.aceternity.com/thunderbolt-display.png" }
          ]
        },
        {
          id: 6,
          category: "Mr. Persona",
          title: "The gentleman with unmatched style!",
          src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 601, name: "Magic Mouse", src: "https://assets.aceternity.com/magic-mouse.png" },
            { id: 602, name: "iPhone 15", src: "https://assets.aceternity.com/iphone-15.png" },
            { id: 603, name: "Apple VR", src: "https://assets.aceternity.com/apple-vr.png" },
            { id: 604, name: "AirPods Max", src: "https://assets.aceternity.com/airpods-max.png" }
          ]
        },
        {
          id: 7,
          category: "Mrs. Persona",
          title: "Elegance and grace combined!",
          src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 701, name: "iPad Mini", src: "https://assets.aceternity.com/ipad-mini.png" },
            { id: 702, name: "iPad Air", src: "https://assets.aceternity.com/ipad-air.png" },
            { id: 703, name: "MacBook M3", src: "https://assets.aceternity.com/macbook-m3.png" },
            { id: 704, name: "Apple Smart Keyboard", src: "https://assets.aceternity.com/smart-keyboard.png" }
          ]
        },
        {
          id: 8,
          category: "Rising Star (Male)",
          title: "A future legend in the making!",
          src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 801, name: "MacBook Retina", src: "https://assets.aceternity.com/macbook-retina.png" },
            { id: 802, name: "Mac Mini M2", src: "https://assets.aceternity.com/mac-mini-m2.png" },
            { id: 803, name: "Apple Magic Trackpad", src: "https://assets.aceternity.com/magic-trackpad.png" },
            { id: 804, name: "iPad Pro", src: "https://assets.aceternity.com/ipad-pro.png" }
          ]
        },
        {
          id: 9,
          category: "Rising Star (Female)",
          title: "Shining bright with limitless potential!",
          src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
          selected_nominee_id: null,
          nominees: [
            { id: 901, name: "iPhone 14 Pro", src: "https://assets.aceternity.com/iphone-14-pro.png" },
            { id: 902, name: "Apple Studio Display", src: "https://assets.aceternity.com/studio-display.png" },
            { id: 903, name: "Mac Studio M2", src: "https://assets.aceternity.com/mac-studio-m2.png" },
            { id: 904, name: "Apple AirTag", src: "https://assets.aceternity.com/airtag.png" }
          ]
        }
      ]);

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} onclick={()=>redirect("/vote")}  />
    ));

    return (
        <div className="w-full h-full py-20 flex flex-col justify-center items-center">
           

            <Carousel items={cards} />

            
        </div>
    );
}
export const Card = ({
    card,
    index,
    layout = false
  }) => {
    
  
    return (<>
     
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={()=>redirect("/vote")}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-[90vw] md:h-[40rem] lg:w-[1000px] overflow-hidden flex flex-col items-start justify-start relative z-10">
        <div
          className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left">
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0" />
      </motion.button>
    </>);
  };
  
export default AppleCardsCarouselDemo2;