import First from "./home/page";
import {SparklesPreview} from '@/components/Tockon/teckon'
import {BackgroundLinesDemo} from '@/components/footer/footer'



export default function Home() {
  return (

    <>
     <div  className=" dark:bg-black h-full min-w-screen">

     <SparklesPreview/>
     </div>
   
    <div className="dark:bg-black h-full w-screen" >
          
        <First/>
       
    </div>
        
    <div  className=" h-full min-w-screen">
    <BackgroundLinesDemo/>
</div>

    </>
  );
}
