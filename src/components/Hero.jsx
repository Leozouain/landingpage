import Button from "../atoms/Button";
import rArrow from "../assets/rArrow.svg";
import play from "../assets/play.svg";
import laptop from "../assets/laptop.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="  bg-gradient-to-r from-gray-100 to-blue-200/80 min-h-[80vh]
      flex justify-center items-center py-5 "
    >
      <div className="mobileContainer flex flex-col justify-center items-center ">
        <div className="flex gap-5 basicBorder justify-center items-center">
          <div className=" basicBorder flex justify-center items-center gap-1">
            <div className="bg-black w-2 h-2 rounded-full" />
            <p className="small ">New features</p>
          </div>
          <p className="small "> Check out the team dashboard</p>
        </div>
        <h1 className="h1 my-6 text-center">
          Beatitul analytics to grow smarter
        </h1>

        <h3 className="p md:max-w-[70%] text-center ">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </h3>
        <div className="flex flex-col md:flex-row  gap-5 py-7 w-full md:w-fit">
          <Button primary={true} icon={play}>
            Demo
          </Button>
          <Button primary={false}>Sign up</Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
