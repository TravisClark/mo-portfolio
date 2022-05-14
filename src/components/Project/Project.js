import Container from "../UI/Container/Container";
import todoImg from "../../assets/todo.png";
const Project = () => {
  return (
    <section id="projects">
      <Container className="flex flex-col space-y-12 mt-36 items-center">
          <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
            Projects
          </span>
        <div className="flex justify-center">
          <div className="rounded-xl flex flex-col border-2 border-gray-700 shadow-md items-center w-full shadow-slate-400 space-y-6 p-6 transition duration-700 hover:scale-105 hover:shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <a href="https://nextjs-todo-project.vercel.app" className="z-20">
              <img src={todoImg} className="rounded-xl" alt="" />
            </a>
            <p className="text-gray-400 text-lg text-center">
              Todo website which includes authentication, fetching data, adding,
              removing, updating data.
            </p>
            <div className="flex flex-row justify-evenly w-full">
              <a
                href="https://github.com/TravisClark/mo-portfolio.git"
                className="py-2 px-4 text-white rounded-xl font-medium bg-blue-500"
              >
                Source
              </a>
              <a
                href="https://nextjs-todo-project.vercel.app"
                className="py-2 px-6 text-white rounded-xl font-medium bg-blue-500"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Project;
