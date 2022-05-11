import Container from "../UI/Container/Container";
import { ReactComponent as Blob } from "../../assets/blob_6-6-39555.svg";
const Hero = () => {
  return (
    <section id="hero">
      <Container className="z-0 relative bg-gradient-to-b items-center justify-center flex flex-col h-screen">
        <div className="flex flex-row">
          <Blob className="blur-sm mt-80 pt-20 ml-0 h-fit" />
          <Blob className="blur-sm -mt-40 ml-40 h-fit" />
        </div>
        <div className="absolute flex flex-col space-y-8 p-16 w-2/3 md:w-full">
          <p className="text-6xl text-white font-medium md:text-4xl">
            Welcome To <br /> My Personal Portfolio
          </p>
          <p className="text-lg text-gray-400">
            Hi! My name is Triet but you can call me Mo. This is a portfolio of
            a student who intends to become a professional front-end dev in the
            next few years. Please feel free to look around and hopefully you
            can give me some feedbacks. Thanks you so much!{" "}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 w-fit text-white font-medium rounded-xl">
            Download CV
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
