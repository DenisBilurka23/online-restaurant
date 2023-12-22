import Showcase from "@/app/components/Showcase";
import MenuSection from "@/app/components/Sections/Menu";

export default function Home() {
  return (
      <div className='flex w-full h-auto flex-col items-center justify-center'>
        <Showcase />
        <MenuSection />
      </div>
  )
}
