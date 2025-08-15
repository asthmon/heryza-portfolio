import DataImage from "./data"
import { listTools, listProyek } from "./data"

function App() {


  return (
    <>
      <div className="home grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="home">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl ">
            <img src={DataImage.HeroImage} alt="" className="w-10 rounded-b-md" loading="lazy" />
            <q>Learn new things, every day</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Im Heryza Alfiansyah</h1>
          <h3 className="text-5xl/tight font-bold mb-6 typing-text">Im a, <span></span></h3>
          <p className="text-base/loose mb-6 opacity-50">Passionate about coding and problem solving, I thrive on turning ideas into functional, elegant solutions. As a junior programmer, I bring enthusiasm, a hunger for learning, and a solid foundation in modern development tools and practices.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-cyan-500 shadow-xl shadow-cyan-500/50 p-4 rounded-2xl hover:bg-cyan-400 transition delay-150 duration-300 ease-in-out hover:scale-110 active:scale-110">Download CV <i className="ri-download-fill ri-lg"></i></a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition delay-150 duration-300 ease-in-out hover:scale-110 active:scale-110" >Looks Project <i className="ri-arrow-down-long-fill ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[550px] shadow-xl shadow-cyan-500/70 rounded-xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up"
          data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            With some of completed projects and years of hands-on experience, I combine creativity with technical precision to deliver impactful solutions. My work is rooted in a deep understanding of modern technologies and a commitment to clean, efficient code.
            Whether tackling complex challenges or refining user experiences, I thrive on turning ideas into reality. Every project reflects my dedication to quality, innovation, and continuous learning.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
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
        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools that i used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="300">I rely on a powerful set of tools to streamline my development workflow and create efficient, high-quality projects.
            Here are some tools that I usually use</p>
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
      </div>
      {/* About */}

      {/* Projects */}
      <div className="projects mt-32 py-10" id="project">
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

      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Send me a message</p>
        <form action="https://formsubmit.co/heryzariz15@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="name" placeholder="Name" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" s>Email</label>
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
