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
      "id": 1,
      "category": "Artist of the Year (Male)",
      "title": "A true creative genius!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 101, "name": "Haarit Buch", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005218/haarit_uf9uxg.jpg" },
        { "id": 102, "name": "Dhruv Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005215/dhruv_zt0ls3.jpg" },
        { "id": 103, "name": "Dev Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005394/dev_gvnyqd.jpg" },
        { "id": 104, "name": "Het Jain", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005220/het_xxbdv6.jpg" }
      ]
    },
    {
      "id": 2,
      "category": "Artist of the Year (Female)",
      "title": "Master of the creative arts!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 201, "name": "Dwitiya Vasavada", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005443/dwititya_iwrbn8.jpg" },
        { "id": 202, "name": "Khushi Pandey", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005439/khushi_va9apx.jpg" },
        { "id": 203, "name": "Priyanshi Gamit", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005437/Priyanshi_Gamit_23ce368_fulhvd.jpg" },
        { "id": 204, "name": "Heer Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005441/heer_drrrcg.jpg" }
      ]
    },
    {
      "id": 3,
      "category": "Mr. Persona",
      "title": "The gentleman with unmatched style!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 301, "name": "Manan Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741006455/MananPatel_uycauh.jpg" },
        { "id": 302, "name": "Mihir Timbadia", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004643/mihir_rqboeb.jpg" },
        { "id": 303, "name": "Ankit Singh", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004645/Ankit_Singhjpg_qb32gy.jpg" },
        { "id": 304, "name": "Nidhish Tomar", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005966/nidhish_pidbjg.png" }
      ]
    },
    {
      "id": 4,
      "category": "Mrs. Persona",
      "title": "Elegance and grace combined!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966411/Miss_Persona_vqpgtv.jpg",
      "selected_nominee_id": null,
      "nominees": [
        { "id": 401, "name": "Diya Mehta", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004405/diya_tumpjv.jpg" },
        { "id": 402, "name": "Drashti Prajapati", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004422/drashti_pcqe1m.jpg" },
        { "id": 403, "name": "Isha Bathwar", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004430/isha_t35yuy.jpg" },
        { "id": 404, "name": "Kaavya Jethwa", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741004432/kavya_blmmfs.jpg" }
      ]
    },
    {
      "id": 5,
      "category": "Sports Person of the Year (Male)",
      "title": "An unstoppable sports champion!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 501, "name": "Parth Baraiya", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005623/parth_dwsc4e.jpg" },
        { "id": 502, "name": "Yash Satasiya", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005615/yash_jlwibp.jpg" },
        { "id": 503, "name": "Avish Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005626/aavish_chjeu4.jpg" },
        { "id": 504, "name": "Siddham Varia", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005620/siddham_mnt91n.jpg" }
      ]
    },
    {
      "id": 6,
      "category": "Sports Person of the Year (Female)",
      "title": "A sports icon in the making!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 601, "name": "Bhakti Gohel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005702/bhakti_mmyvwy.jpg" },
        { "id": 602, "name": "Purva Thanki", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005706/Purva_Thanki_pgrw7u.jpg" },
        { "id": 603, "name": "Shrushti Damor", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005709/Shrushti_Damor_22CE003_Civil_3rd_Year_sngrh4.jpg" },
        { "id": 604, "name": "Yashvi Sevak", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741006105/WhatsApp_Image_2025-03-03_at_18.17.56_e92dabac_igwhak.jpg" }
      ]
    },
    {
      "id": 7,
      "category": "Rising Star",
      "title": "A future legend in the making!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 701, "name": "Vraj Upadhyay", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005035/Vraj_Upadhyay_g3gr8r.jpg" },
        { "id": 702, "name": "Drashti Shah", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005029/drashti_shah_acnu7f.jpg" },
        { "id": 703, "name": "Chintan Jadav", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005023/Chintan_Jadav_22CE080_orqevr.png" },
        { "id": 704, "name": "Jiya Patel", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1741005032/jiya_oyyori.jpg" }
      ]
    },
    {
      id: 8,
      category: "Face of the Year",
      title: "The most charismatic face of the year!",
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 801, name: "Arunika Ghosh", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1741004216/Arunika_Ghosh_nivx4g.jpg" },
        { id: 802, name: "Yash Luhar", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1741006101/WhatsApp_Image_2025-03-03_at_18.16.43_41bdfc90_mirtyq.jpg" },
        { id: 803, name: "Kankana Majumder", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1741004229/Kankana_pl35ay.jpg" },
        { id: 804, name: "Krisha Kansagra", src: "https://res.cloudinary.com/dezrdipur/image/upload/v1741004232/krisha_lfiua1.jpg" },
      ],
    },
    // {
    //   "id": 9,
    //   "category": "Rising Star (Female)",
    //   "title": "Shining bright with limitless potential!",
    //   src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966411/Rising-Star_Female_tklrv7.jpg",
    //   "selected_nominee_id": null,
    //   "nominees": [
    //     { "id": 901, "name": "Florence Pugh", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
    //     { "id": 902, "name": "Jenna Ortega", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
    //     { "id": 903, "name": "Anya Taylor-Joy", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
    //     { "id": 904, "name": "Millie Bobby Brown", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
    //   ]
    // },
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
