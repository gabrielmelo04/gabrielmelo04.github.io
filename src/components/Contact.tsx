import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <div id="links" className="w-full py-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-700 drop-shadow-lg">
        Links
      </h2>

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://github.com/gabrielmelo04.png"
            alt="Gabriel Melo"
            className="w-[150px] mb-2 h-fit rounded-xl drop-shadow-xl border-2 border-white/20"
          />
          <div>
            <span className="flex gap-2 items-center text-md text-gray-100"><Mail className="text-white" size={25} /> gmelo8720@gmail.com</span>
          </div>

          <div className="flex gap-6 justify-center items-center mt-2">
            <a
              href="https://github.com/gabrielmelo04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-linear-to-br from-gray-800 to-gray-600 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Github className="text-white" size={26} />
            </a>

            <a
              href="https://linkedin.com/in/gabriel-melo-63698bb6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-linear-to-br from-blue-700 to-blue-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="text-white" size={26} />
            </a>

            <a
              href="https://www.instagram.com/gabriielnmello/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-linear-to-br from-pink-500 via-purple-500 to-yellow-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <Instagram className="text-white" size={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
