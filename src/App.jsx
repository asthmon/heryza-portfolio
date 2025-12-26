import DataImage from "./data"
import { listTools, listProyek } from "./data"

function App() {


  return (
    <>
      {/*Home*/}
      <div className="grid py-10 md:grid-cols-2 w-full items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl ">
            <img src={DataImage.SubImage} alt="" className="w-15 rounded-b-md" loading="lazy" />
            <q>Learn new things, every day</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Im <span className="text-6xl/tight main-header">Heryza Alfiansyah</span></h1>
          <h3 className="text-5xl/tight font-bold mb-6 typing-text">Im a, <span></span></h3>
          <p className="text-base/loose mb-6 opacity-70">
            I combine my skills in web development and data analysis to build functional applications powered by data-driven insights. Passionate about problem solving, I thrive on turning ideas into elegant solutions—whether through clean code or meaningful analysis. Eager to learn and grow, I leverage modern tools to deliver impact.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1pEk_TWSqQNx10lCMXKcKy36I4r7Ae09L/view?usp=drive_link" className="bg-cyan-400 shadow-xl shadow-cyan-500/50 p-4 rounded-2xl hover:bg-cyan-200 transition delay-150 duration-300 ease-in-out hover:scale-110 active:scale-110">Download CV <i className="ri-download-fill ri-lg"></i></a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition delay-150 duration-300 ease-in-out hover:scale-110 active:scale-110" >Looks Project <i className="ri-arrow-down-long-fill ri-lg"></i></a>
            <a href="https://www.linkedin.com/in/heryza-alfiansyah/" className="lg:w-13 lg:h-13 sm:w-17 sm:h-17 h-13 w-12 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill=""></path>
              </svg>
              <div className="absolute top-full left-0 w-full h-full shadow-xl shadow-cyan-500/50 rounded-full bg-cyan-400 z-0 transition-all duration-500 group-hover:top-0"></div>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[680px] rounded-xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div >
      {/*Home*/}

      {/* About */}
      <div id="aboutme" className="aboutme pt-10">
        < div className="mt-32 py-10" >
          <div className="xl:w-2/3 lg:w-auto w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up"
            data-aos-duration="1000">
            <img src={DataImage.SubImage} alt="image" className="w-20 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-lg/loose mb-10">
              With completed projects and hands-on experience across both development and analytics, I combine creativity with technical precision to deliver impactful solutions. My work is rooted in a deep understanding of modern technologies, data systems, and a commitment to clean, efficient code and clear, actionable insights. Whether tackling complex challenges, refining user experiences, or uncovering data-driven narratives, I thrive on turning ideas into reality. Every project reflects my dedication to quality, innovation, and continuous learning at the intersection of technology and data.
            </p>
            <div className="flex items-center justify-between">
              <img src={DataImage.SubImage} alt="image" className="w-30 rounded-md sm:block hidden" loading="lazy" />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">5<span className="text-cyan-300">+</span></h1>
                  <p>Finished Project</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">1<span className="text-cyan-300">+</span></h1>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">My Skill Set & Tools</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="300">My work is powered by a diverse toolkit designed for efficiency and quality across different domains.
            Whether I'm developing a web application, analyzing data, or managing a project, I rely on these tools to deliver optimal results.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(sfr => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md 
            hover:bg-zinc-800 group" key={sfr.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={sfr.dad}>
                <img src={sfr.gambar} alt="tolls image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{sfr.nama}</h4>
                  <p className="opacity-50">{sfr.ket}</p>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div >
      {/* About */}

      {/* Projects */}

      <div className="projects mt-32 py-20" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Heres Some Of my projects.</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proj => (
            <div key={proj.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proj.dad}>
              <img src={proj.gambar} alt="image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proj.nama}</h1>
                <p className="text-base/loose mb-4">{proj.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tools.map((dep, idx) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={idx}>{dep}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a className="bg-cyan-500 p-3 shadow-lg text-cyan-100 shadow-cyan-500/50 rounded-lg block border border-zinc-600 hover:bg-cyan-400 transition delay-150 duration-300 ease-in-out hover:scale-105" href={proj.link}>See</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}

      {/* Contact */}

      <div className="contact mt-32 sm:p-10 p-0 py-10" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Send me a message</p>
        <form action="https://formsubmit.co/heryzariz15@gmail.com" method="POST" className="bg-zinc-900 opacity-20 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="name" placeholder="Name" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="example123@gmail.com" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="text" className="font-semibold">Text</label>
              <textarea name="text" id="text" cols="45" rows="7" placeholder="Message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-cyan-500 shadow-xl shadow-cyan-500/50 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-cyan-400 transition delay-150 duration-300 ease-in-out hover:scale-110">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  )
}

export default App
