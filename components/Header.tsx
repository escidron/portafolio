
import Typewriter from 'typewriter-effect';
export default function Header() {
  return (
    <div>
        {/* <div className="typewriter mx-auto w-[400px]">
            <h1 className='text-4xl text-slate-50'>Hi,my name&apos;s Eduardo, I&apos;am a Software Developer</h1>
        </div> */}

        <Typewriter 
        onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString("Hi, my name's Eduardo!")           
              .deleteAll()
                .start()
              .typeString("I'am a Software Developer");
          }}
        options={{
            //strings: ["Hi, my name's Eduardo", "I'am a Software Developer"],
            autoStart: true,
            loop: true,
            
        }}
        />
    </div>
  )
}
