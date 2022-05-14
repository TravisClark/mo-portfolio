import Container from "../UI/Container/Container";

const Technologies = () => {
  return (
    <section id="technologies">
      <Container className="flex flex-col space-y-12 items-center h-screen px-6">
        <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Technologies
        </span>
        <p className="text-xl text-white tracking-wider">
          These are some technologies that I've learnt so far through some small
          projects.
        </p>
        <div className=""></div>
      </Container>
    </section>
  );
};

export default Technologies;
