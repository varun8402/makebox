import { BlueSwitch } from "../components/blueswitchmodel";
import { BrownSwitch } from "../components/brownswitchmodel";
import { RedSwitch } from "../components/redswitchmodel";


const SwitchSection = () => {
    return (
        <div className="">
            <h3 className = "text-center text-lg text-white mr-2 font-thin" >Customizable</h3>
            <h1 className ="text-[4em] text-white text-center font-bold ">Cherry MX Switches</h1>
            <div className = "flex gap-8 w-full justify-center items-center text-[32px] font-semibold">
                <h2 className = "text-[#F96F6F]">Red </h2>
                <h2 className = "text-[#2E83F3]">Blue </h2>
                <h2 className = "text-[#8E5726]">Brown </h2>
            </div>
            <div className = "flex flex-col  md:flex-row gap-20 justify-between items-center mt-21 px-30 ">
                <div className = "rounded-3xl p-4  transition-transform  py-20">
                    <RedSwitch />
                </div>
                    
            <div className = "flex flex-col items-center gap-4rounded-3xl p-4 transition-transform  py-20">
                <BlueSwitch />
            </div>
            <div className = "flex flex-col items-center gap-4 rounded-3xl p-4  transition-transform  py-20">
                <BrownSwitch />
            </div>
            </div>
            <div className = "flex flex-col  md:flex-row gap-20 justify-between items-center mt-8 px-28">
            <div className = "max-w-lg">
            <h2 className = "text-white text-xl font-thin px-4  "><span className = "font-semibold">Cherry MX  <span className = "text-[#F96F6F]">Red</span></span>: This switch color is known for its smooth and linear key press. It  requires a light touch and has no tactile bump or audible click. Cherry  MX Red switches are popular among gamers and typists who prefer a quiet  and effortless typing experience. Imagine typing on a keyboard that glides effortlessly under your fingers, making it ideal for rapid  keystrokes in gaming or typing sessions.</h2>
            </div>
            <div className = "max-w-lg">
             <h2 className = "text-white text-xl font-thin px-4 "><span className = "font-semibold">Cherry MX  <span className = "text-[#2E83F3]">Blue</span></span>: If you enjoy tactile and clicky feedback with each key press, Cherry MX  Blue switches are the way to go. These switches have a distinct tactile  bump and produce a satisfying click sound, making them a favorite among typists who appreciate the audible feedback. The tactile bump provides a slight resistance, giving you a sense of confirmation with every keystroke.</h2>
            </div>
            <div className = "max-w-lg">
             <h2 className = "text-white text-xl font-thin"><span className = "font-semibold">Cherry MX  <span className = "text-[#8E5726]">Brown</span></span>: If you enjoy tactile and clicky feedback with each key press, Cherry MX  Blue switches are the way to go. These switches have a distinct tactile  bump and produce a satisfying click sound, making them a favorite among typists who appreciate the audible feedback. The tactile bump provides a slight resistance, giving you a sense of confirmation with every keystroke.</h2>
             </div>
            </div>
        </div>
    );
}
export default SwitchSection;