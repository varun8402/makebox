import { ThreeDModel2 } from "../components/3dmodel2";
const ThreeDModelSection = () => {
    return (
        <div className="py-20 px-20 mt-20">
            <h1 className="text-5xl font-bold text-white  mb-12 ml-20">
               Take a closer look.
               <br/>
               <span className = "text-[#21AEF5] text-2xl ml-2">3D model</span>
            </h1>
            <div className = "flex justify-between px-50 items-center rounded-[5%] bg-black mx-40">
                
                <div className = "max-w-lg text-center mt-10">
                   <ul className="flex flex-col gap-10 text-white text-xl font-thin px-10"> 
                    <li className = "bg-[#333333] p-2 px-5 rounded-2xl">Aluminium unibody</li>
                    <li className = "bg-[#333333] p-2 px-5 rounded-2xl">Mechanical Switches</li>
                    <li className = "bg-[#333333] p-2 px-5 rounded-2xl">Solid Dials</li>
                    <li className = "bg-[#333333] p-2 px-5 rounded-2xl">Customization</li>
                   </ul>
                </div>
                <div className = "ml-10">
                    <ThreeDModel2 />
                </div>
            </div>
        </div>
    );
}
export default ThreeDModelSection ;