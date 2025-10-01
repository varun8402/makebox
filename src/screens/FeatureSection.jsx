const FeatureCard = ({ title, description, children }) => {
    return (
        <div className="flex h- flex-1 flex-col items-center gap-6 rounded-3xl border border-[#8D8D8D] bg-black p-8 text-center transition-transform hover:scale-105 duration-300"> 
            <div className="flex h-38 items-center justify-center">
                {children}
            </div>
            <div>
                <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
                <p className="text-md font-thin text-white">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeatureSection = () => {
    return (
        <div className="flex flex-col items-center px-4 py-16 sm:px-10 mt-16">
            <h1 className="text-5xl font-bold text-white self-start mb-12" data-aos="fade-up">
                Features ..
            </h1>
            <div className="flex w-full flex-col gap-8 md:flex-row md:items-stretch " data-aos="fade-up">
                <FeatureCard
                    title="Mechanical Switches"
                    description="MX RGB Switches are available in several variants and the main three are Cherry MX Red, Blue and Brown. They successively deliver linear, click, and tactile style feedback."
                >
                    <img 
                        src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1758988042/png_switch_1_a6g42p.png" 
                        alt="Mechanical Switches" 
                        className="max-h-full object-contain"
                    />
                </FeatureCard>

                <FeatureCard
                    title="Aluminium Unibody"
                    description="It’s great as is, but with Custom Mode you can create up to 4 layers of customized layouts of commands and actions."
                >
                    <img 
                        src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1758988067/alumin_png_1_kuay80.png" 
                        alt="Aluminium Unibody"
                        className="max-h-full object-contain"
                    />
                </FeatureCard>

                <FeatureCard
                    title="Customization"
                    description="Now you can freely switch between your tools and software like Lightroom Classic and Photoshop without ever losing focus."
                >
                    <div className="flex items-center justify-center gap-4">
                        <img 
                            className=" object-contain" 
                            src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1758987754/Creative_Cloud_a9gbap.png" 
                            alt="Creative Cloud Logo"
                        />
                        <img 
                            className=" w-28 object-contain" 
                            src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1758987754/Figma_q1evfa.png" 
                            alt="Figma Logo" 
                        />
                    </div>
                </FeatureCard>
            </div>
        </div>
    );
};

export default FeatureSection;

