
import Typewriter from 'typewriter-effect';
export default function Header() {
  return (
    <div>
        <Typewriter 
        onInit={(typewriter) => {
            typewriter.pauseFor(1500).typeString("Hi, my name's Eduardo!")           
              .deleteAll()
                .start()
              .typeString("I'am a Software Engineer");
          }}
        options={{
            autoStart: true,
            loop: true,
        }}
        />
    </div>
  )
}
