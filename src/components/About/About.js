import Container from "../UI/Container/Container";
import classes from "./About.module.css";
import Avatar from "../../assets/avartar.png";
const About = () => {
  return (
    <section id="about">
      <Container className="flex flex-col px-6 items-center">
        <span className="relative flex text-white mb-16 font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          About me
        </span>
        <div className="flex flex-col items-center justify-center min-w-full space-y-14 space-x-0 md:flex-row md:space-y-0 md:space-x-16">
          <div className={`${classes["about-me"]} md:w-1/2`}>
            <div className={classes.content}>
              <img src={Avatar} alt="" />
              <h2>
                A junior
                <br />
                <span>A front-end developer</span>
              </h2>
              <button>See more</button>
            </div>
          </div>
          <p className="border-2 border-white border-double py-10 px-8 tracking-wider text-justify text-white text-lg md:w-1/2 xl:w-1/3 lg:py-20">
            My name is Triet. Currently, I am a junior who is self-study and
            really serious about being a good frontend developer. With that, I
            will contribute to any project with my best.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;