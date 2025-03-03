"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import toast from "react-hot-toast"
import { useUser } from "@clerk/nextjs"
import { Loader } from "lucide-react"

export function AppleCardsCarouselDemo() {
  const [isLoading, setLoading] = useState(false)


  
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



  const { user } = useUser()
  const selectedIds = data.map((item) => item.selected_nominee_id)
  const actualvalues = selectedIds.filter((item) => item !== null)

  const handleSubmit = async () => {
    const email = user.primaryEmailAddress?.emailAddress

    if (actualvalues.length !== 8) {
      return toast.error("Please vote for all categories")
    }

    try {
      setLoading(true)  

      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actualvalues, email }),
      })

      if (res.ok) {
        toast.success("Voted Successfully!")
      } else {
        const errorMessage = await res.text()
        toast.error(`${errorMessage}`)
      }
    } catch (error) {
      console.error("Voting failed:", error)
      toast.error("Something went wrong! Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const updateImageSrc = (index, newSrc) => {
    console.log(newSrc)
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, src: newSrc.src, title: newSrc.name, selected_nominee_id: newSrc.id } : item,
      ),
    )
  }

  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={{ ...card, content: <DummyContent updateImageSrc={updateImageSrc} index={index} images={card.nominees} /> }}
      index={index}
    />
  ))

  return (
    <div className="w-full h-full py-20 flex flex-col justify-center items-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold   font-sans">Vote your favorite person.</h2>

      <Carousel items={cards} />
      <div className="flex justify-center items-center m-4">
        <AlertDialog className="">
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-white font-semibold  bg-orange-500 hover:bg-orange-600 hover:text-white border-none">
              {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : "Vote"}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-10/12 rounded-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-black">Are you absolutely sure?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>



    </div>
  )
}

const DummyContent = ({ updateImageSrc, index, images }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      {images.map((imgSrc, i) => (
        <div key={i}>
          <Image
            key={i}
            src={imgSrc.src || "/placeholder.svg"}
            alt={`Dummy Image ${i + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain cursor-pointer mb-4 text-black"
            onClick={() => updateImageSrc(index, imgSrc)} // Updates src when clicked
          />
          <h2 className=" text-black text-center font-bold">{imgSrc.name}</h2>
        </div>
      ))}
      <p className="text-neutral-600 dark:text-neutral-400  md:text-3xl text-2xl font-bold mt-4 text-center font-sans max-w-3xl mx-auto">
        Click to vote your nominee
      </p>
    </div>
  )
}

export default AppleCardsCarouselDemo

