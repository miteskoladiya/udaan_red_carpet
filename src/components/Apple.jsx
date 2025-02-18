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
      src: "/images/categories/Face_Of_The_Year.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 101, name: "Emma Watson", src: "/images/nominees/ambani.jpg" },
        { id: 102, name: "Chris Hemsworth", src: "/images/nominees/Elon.jpg" },
        { id: 103, name: "Zendaya", src: "/images/nominees/modi.jpg"},
        { id: 104, name: "Timothée Chalamet", src: "/images/nominees/images1.jpg" },
      ],
    },
    {
      id: 2,
      category: "Artist of the Year (Male)",
      title: "A true creative genius!",
      src: "/images/categories/Artist_Of_The_Year_Male.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 201, name: "Drake", src: "https://assets.aceternity.com/drake.jpg" },
        { id: 202, name: "The Weeknd", src: "https://assets.aceternity.com/the-weeknd.jpg" },
        { id: 203, name: "Kendrick Lamar", src: "https://assets.aceternity.com/kendrick-lamar.jpg" },
        { id: 204, name: "Bad Bunny", src: "https://assets.aceternity.com/bad-bunny.jpg" },
      ],
    },
    {
      id: 3,
      category: "Artist of the Year (Female)",
      title: "Master of the creative arts!",
      src:"/images/categories/Artist_Of_The_Year_Female.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 301, name: "Taylor Swift", src: "https://assets.aceternity.com/taylor-swift.jpg" },
        { id: 302, name: "Beyoncé", src: "https://assets.aceternity.com/beyonce.jpg" },
        { id: 303, name: "Ariana Grande", src: "https://assets.aceternity.com/ariana-grande.jpg" },
        { id: 304, name: "Billie Eilish", src: "https://assets.aceternity.com/billie-eilish.jpg" },
      ],
    },
    {
      id: 4,
      category: "Sports Person of the Year (Male)",
      title: "An unstoppable sports champion!",
      src:"/images/categories/Sports_Person_Of_The_Year_Male.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 401, name: "Lionel Messi", src: "https://assets.aceternity.com/messi.jpg" },
        { id: 402, name: "LeBron James", src: "https://assets.aceternity.com/lebron-james.jpg" },
        { id: 403, name: "Novak Djokovic", src: "https://assets.aceternity.com/djokovic.jpg" },
        { id: 404, name: "Patrick Mahomes", src: "https://assets.aceternity.com/mahomes.jpg" },
      ],
    },
    {
      id: 5,
      category: "Sports Person of the Year (Female)",
      title: "A sports icon in the making!",
      src: "/images/categories/Sports_Person_Of_The_Year_Female.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 501, name: "Serena Williams", src: "https://assets.aceternity.com/serena-williams.jpg" },
        { id: 502, name: "Simone Biles", src: "https://assets.aceternity.com/simone-biles.jpg" },
        { id: 503, name: "Naomi Osaka", src: "https://assets.aceternity.com/naomi-osaka.jpg" },
        { id: 504, name: "Alex Morgan", src: "https://assets.aceternity.com/alex-morgan.jpg" },
      ],
    },
    {
      id: 6,
      category: "Mr. Persona",
      title: "The gentleman with unmatched style!",
      src: "/images/categories/Mr_Persona.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 601, name: "Ryan Reynolds", src: "https://assets.aceternity.com/ryan-reynolds.jpg" },
        { id: 602, name: "Idris Elba", src: "https://assets.aceternity.com/idris-elba.jpg" },
        { id: 603, name: "Tom Hardy", src: "https://assets.aceternity.com/tom-hardy.jpg" },
        { id: 604, name: "Michael B. Jordan", src: "https://assets.aceternity.com/michael-b-jordan.jpg" },
      ],
    },
    {
      id: 7,
      category: "Mrs. Persona",
      title: "Elegance and grace combined!",
      src: "/images/categories/Miss_Persona.jpg",   
      selected_nominee_id: null,
      nominees: [
        { id: 701, name: "Gal Gadot", src: "https://assets.aceternity.com/gal-gadot.jpg" },
        { id: 702, name: "Blake Lively", src: "https://assets.aceternity.com/blake-lively.jpg" },
        { id: 703, name: "Zoe Saldana", src: "https://assets.aceternity.com/zoe-saldana.jpg" },
        { id: 704, name: "Lupita Nyong'o", src: "https://assets.aceternity.com/lupita-nyongo.jpg" },
      ],
    },
    {
      id: 8,
      category: "Rising Star (Male)",
      title: "A future legend in the making!",
      src: "/images/categories/Rising-Star_Man.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 801, name: "Timothée Chalamet", src: "https://assets.aceternity.com/timothee-chalamet.jpg" },
        { id: 802, name: "Austin Butler", src: "https://assets.aceternity.com/austin-butler.jpg" },
        { id: 803, name: "Jacob Elordi", src: "https://assets.aceternity.com/jacob-elordi.jpg" },
        { id: 804, name: "Paul Mescal", src: "https://assets.aceternity.com/paul-mescal.jpg" },
      ],
    },
    {
      id: 9,
      category: "Rising Star (Female)",
      title: "Shining bright with limitless potential!",
      src:"/images/categories/Rising-Star_Female.jpg",
      selected_nominee_id: null,
      nominees: [
        { id: 901, name: "Florence Pugh", src: "https://assets.aceternity.com/florence-pugh.jpg" },
        { id: 902, name: "Jenna Ortega", src: "https://assets.aceternity.com/jenna-ortega.jpg" },
        { id: 903, name: "Anya Taylor-Joy", src: "https://assets.aceternity.com/anya-taylor-joy.jpg" },
        { id: 904, name: "Millie Bobby Brown", src: "https://assets.aceternity.com/millie-bobby-brown.jpg" },
      ],
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

      {/* {data.map((item, i) => {
  const selectedNominee = item.nominees.find(nominee => nominee.id === item.selected_nominee_id);
  return (
    <div key={i} className="text-white font-bold">
      {selectedNominee ? selectedNominee.name : "Not selected"}
    </div>
  );
})} */}

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

