const DetailsSections = () => {
  return (
    <div className = "mt-10 bg-black py-10 px-10 flex flex-col gap-5 pb-30">
        <div >
            <h1 className = "font-md text-[#898989] text-center mt-10 ">MAKEBOX</h1>
            <h1 className = "font-bold text-7xl text-white text-center mt-8">Details to notice.</h1>
            <div className="flex gap-60">
                <img src = "https://res.cloudinary.com/dwdsw96fy/image/upload/v1759085218/makebox2_raybqp.png" alt = "detailsimg" className = "w-[30%] ml-[-4%] mt-10"/>
                 <div className = "text-white text-center max-w-2xl mx-auto mt-25 font-thin text-lg">
                <ul className = "list-disc text-left space-y-2 text-2xl flex flex-col gap-12">
                    <li><span  className="font-semibold">Seamless Interaction</span> – Intuitive tactile controls blended with digital precision for a fluid creative workflow.</li>
                    <li className="ml-20"><span className="font-semibold">Unlimited Customization </span>– Fully adaptable interface and controls tailored to every creative style.</li>
                    <li><span  className="font-semibold">Powerful Performance </span>– Engineered with advanced hardware and software integration for professional-grade editing.</li>
                    <li className="ml-20"><span  className="font-semibold">Creative Freedom</span> – Unlock limitless possibilities with tools designed to push boundaries and bring any vision to life.</li>
                </ul>
            </div>
            </div>
           


            <div className="flex flex-col mt-20 items-center justify-center">
                <h2 className = "text-white text-7xl font-semibold max-w-3xl text-center mt-30">Personalized workflow for all needs</h2>
                <img src = "https://res.cloudinary.com/dwdsw96fy/image/upload/v1759086060/boardlayoutpng1_hh6skk.png" alt = "detailsimg" className = "w-[40%] mt-20"/>
            </div>
            <div className = "text-white text-center max-w-2xl mx-auto  mt-20">
                <p>Push boundaries and bring any vision to life through seamless  interactions and unlimited creative control. MAKEBOX is our most  powerful and highly customizable editing console for creative  professionals.</p>
            </div>
        </div>
    </div>
  )
}

export default DetailsSections;