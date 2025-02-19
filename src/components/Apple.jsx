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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
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
      src: "https://res.cloudinary.com/dezrdipur/image/upload/v1739966420/Sports_Person_Of_The_Year_Male_e4h4b7.jpg",      "selected_nominee_id": null,
      "nominees": [
        { "id": 901, "name": "Florence Pugh", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 902, "name": "Jenna Ortega", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 903, "name": "Anya Taylor-Joy", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" },
        { "id": 904, "name": "Millie Bobby Brown", "src": "https://res.cloudinary.com/dezrdipur/image/upload/v1739967710/demo_llzqc5.jpg" }
      ]
    },
  ]);



  const { user } = useUser()
  const selectedIds = data.map((item) => item.selected_nominee_id)
  const actualvalues = selectedIds.filter((item) => item !== null)

  const handleSubmit = async () => {
    const email = user.primaryEmailAddress?.emailAddress

    if (actualvalues.length !== 9) {
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

