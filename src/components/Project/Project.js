import Container from "../UI/Container/Container";
import todoImg from "../../assets/todo.png";
const Project = () => {
  return (
    <section id="projects">
      <Container className="flex flex-col px-6 space-y-12 mt-36 items-center">
        <span className="relative flex text-white font-bold text-2xl md:text-4xl after:w-full after:bg-white after:h-0.5 after:absolute after:mt-8 after:md:mt-12 ">
          Projects
        </span>
        <div className="flex justify-center">
          <div className="rounded-xl flex flex-col border-2 border-gray-700 shadow-md items-center w-full shadow-slate-400 space-y-6 p-6 transition duration-700 hover:scale-105 hover:shadow-2xl sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <a href="https://nextjs-todo-project.vercel.app" className="z-20">
              <img src={todoImg} className="rounded-xl" alt="" />
            </a>
            <span className="text-sky-500 text-2xl font-bold relative flex justify-center after:absolute after:w-1/2 after:bg-sky-500 after:h-1 after:mt-12">
              TODO List
            </span>
            <p className="text-gray-400 text-lg text-justify pt-6">
              Todo website which includes authentication, fetching data, adding,
              removing, updating data.
            </p>
            <div className="flex flex-col items-center w-full md:flex-row">
              <div className="flex flex-row justify-around w-full">
                <span className="p-2 text-orange-700 rounded-xl">Next JS</span>
                <span className="p-2 text-orange-700 rounded-xl">
                  Redux-toolkit
                </span>
              </div>
              <div className="flex flex-row justify-around w-full">
                <span className="p-2 text-orange-700 rounded-xl">React</span>
                <span className="p-2 text-orange-700 rounded-xl">
                  Material-UI
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-evenly w-full">
              <a
                href="https://github.com/TravisClark/mo-portfolio.git"
                className="py-2 px-4 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
              >
                Source
              </a>
              <a
                href="https://nextjs-todo-project.vercel.app"
                className="py-2 px-6 text-white rounded-xl font-medium bg-blue-500 lg:bg-transparent border border-blue-500 transition duration-500 hover:lg:bg-blue-500 hover:lg:ease-out"
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
