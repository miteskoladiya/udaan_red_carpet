"use client"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function CardDemo({ nominee }) {
  const router = useRouter()

  return (
    <div className="max-w-xs w-full sm:max-w-md" >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-[1.75rem] shadow-xl mx-auto flex flex-col justify-end p-4 bg-white dark:bg-slate-900 text-black dark:text-white",
          "transition-all duration-500 border-animation",
        )}
        style={{
          backgroundImage: `url(${nominee.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="animated-border"></div>
        <div className="text relative z-50 bg-black/40 p-4 rounded-lg">
          <h1 className="font-bold text-xl md:text-3xl">{nominee.name}</h1>
          <p className="font-normal text-base mt-2">{nominee.description}</p>
        </div>
      </div>
    </div>
  )
}

