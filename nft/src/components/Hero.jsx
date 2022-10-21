import  Herobtn  from "./Herobtn";
import  image  from "../assets/coverimage.png";
import  Count  from "./Count";
const Hero = () => {
 
    return (
        // <!-- Hero Section -->
        <section id="hero">
          {/* <!-- Flex Container --> */}
          <div
            class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
          >
            {/* <!-- Left item --> */}
            <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
              <h1
                class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
              >
                Discover, Collect and Sell NFTs
              </h1>
              <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
               Our goal is to empower individuals to find infinite potential and universal love in web3.
               <br />
               <br />
               Lets connect with our higher selves through meaningful art projects and professional development guided by thought leaders in Web 3 and the arts.

              </p>
              <div class="flex justify-center md:justify-start">
                <Herobtn/>
                
              </div>
              <Count/>
            </div>
            {/* <!-- Image --> */}
            <div class="md:w-1/2">
              <img src={image} alt="img" />
            </div>
          </div>
        </section>
    
    )

}
export default Hero