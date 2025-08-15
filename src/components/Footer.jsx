export default function Footer() {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-lg font-bold"> &copy; Heryza Alfiansyah</h1>
            <div className="flex gap-7">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/asthmon">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/heryza-alfiansyah-4157b634a/">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="#">
                    <i className="ri-twitter-fill ri-2x"></i>
                </a>
            </div>
        </div>

    )
}