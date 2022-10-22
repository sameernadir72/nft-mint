import  Herobtn  from "./Herobtn";
import  image  from "../assets/Hero_img.jpeg";
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
                class="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left"
              >
                VIRES IN NUMERIS
              </h1>
              <p class="max-w-sm text-center md:text-left font-semibold" >
              Let's empower individuals to find their potential  in web3, connecting with our higher selves in the space through professional development guided by thought leaders in Web 3 and the arts.
              </p>
              <div class="flex justify-center md:justify-start">
              <Count/>
              </div>
              <div>
                <Herobtn/>
              </div>
            </div>
            {/* <!-- Image --> */}
            <div class="md:w-1/2 lg:ml-28">
              <img src={image} alt="img" />
            </div>
          </div>
        </section>
    
    )

}
export default Hero