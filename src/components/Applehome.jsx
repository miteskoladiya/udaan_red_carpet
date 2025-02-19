"use client";

import { motion } from "framer-motion";

import React, { useContext, useRef, useState } from "react";
import {
  BlurImage,
  Carousel,
  CarouselContext,
} from "@/components/ui/apple-cards-carousel";
import { redirect } from "next/navigation";

export function AppleCardsCarouselDemo2() {

  const [data, setData] = useState([
    {
      id: 1,
      category: "Face of the Year",
      title: "The most charismatic face of the year!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 101, name: "Emma Watson", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966381/modi_fg6bxi.jpg" },
        { id: 102, name: "Chris Hemsworth", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966381/Elon_bf3z8v.jpg" },
        { id: 103, name: "Zendaya", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966380/images1_wuymlz.jpg" },
        { id: 104, name: "Timothée Chalamet", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966379/ambani_vxudzs.webp" },
      ],
    },
    {
      "id": 2,
      "category": "Artist of the Year (Male)",
      "title": "A true creative genius!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 201, "name": "Drake", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 202, "name": "The Weeknd", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 203, "name": "Kendrick Lamar", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 204, "name": "Bad Bunny", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 3,
      "category": "Artist of the Year (Female)",
      "title": "Master of the creative arts!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 301, "name": "Taylor Swift", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 302, "name": "Beyoncé", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 303, "name": "Ariana Grande", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 304, "name": "Billie Eilish", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 4,
      "category": "Sports Person of the Year (Male)",
      "title": "An unstoppable sports champion!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 401, "name": "Lionel Messi", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 402, "name": "LeBron James", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 403, "name": "Novak Djokovic", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 404, "name": "Patrick Mahomes", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 5,
      "category": "Sports Person of the Year (Female)",
      "title": "A sports icon in the making!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 501, "name": "Serena Williams", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 502, "name": "Simone Biles", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 503, "name": "Naomi Osaka", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 504, "name": "Alex Morgan", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 6,
      "category": "Mr. Persona",
      "title": "The gentleman with unmatched style!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 601, "name": "Ryan Reynolds", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 602, "name": "Idris Elba", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 603, "name": "Tom Hardy", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 604, "name": "Michael B. Jordan", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 7,
      "category": "Mrs. Persona",
      "title": "Elegance and grace combined!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 701, "name": "Gal Gadot", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 702, "name": "Blake Lively", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 703, "name": "Zoe Saldana", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 704, "name": "Lupita Nyong'o", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 8,
      "category": "Rising Star (Male)",
      "title": "A future legend in the making!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 801, "name": "Timothée Chalamet", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 802, "name": "Austin Butler", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 803, "name": "Jacob Elordi", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 804, "name": "Paul Mescal", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
    {
      "id": 9,
      "category": "Rising Star (Female)",
      "title": "Shining bright with limitless potential!",
      "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 901, "name": "Florence Pugh", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 902, "name": "Jenna Ortega", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 903, "name": "Anya Taylor-Joy", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 904, "name": "Millie Bobby Brown", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
  ]);
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      onclick={() => redirect("/vote")}
    />
  ));

  return (
    <div className="w-full h-full py-20 flex flex-col justify-center items-center">
      <Carousel items={cards} />
    </div>
  );
}
export const Card = ({ card, index, layout = false }) => {
  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => redirect("/vote")}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-[90vw] md:h-[40rem] lg:w-[1000px] overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export default AppleCardsCarouselDemo2;
