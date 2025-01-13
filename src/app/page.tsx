import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function HomePage() {
  const { userId } = auth()
  if (userId != null) redirect("/events")

  return (
    <div className="text-center container my-4 flex flex-col gap-4">
      
        <Header/>
        <div className='flex flex-col justify-center items-center p-8'>
        <div className='text-center max-w-3xl'>
        <h2 className='font-bold text-[60px] text-slate-700'>Easy Scheduling Ahead </h2>
        <h2 className='text-xl mt-5 text-slate-500'>Genius Event is Your Easy Event Scheduling App </h2>
        <div className='flex gap-4 flex-col mt-5'>
        <h3>Sign Up For Free With Google Account to get more unique experience with your google calendar</h3>
        <div className='flex justify-center gap-8'>
        <Image src='/banner1.jpg' width={400} height={400} alt=""/>
        </div>
        <div className=" flex justify-center rounded-full gap-20 ">
        <Button variant="destructive" asChild>
        <SignInButton />
        </Button>
        <Button variant="destructive" asChild>
        <SignUpButton />
        </Button>
        <UserButton />
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}
