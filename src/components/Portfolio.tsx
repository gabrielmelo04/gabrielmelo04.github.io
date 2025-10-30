import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { AnimatedTags } from './AnimatedTags';
import { Github } from 'lucide-react';
import { useRef } from 'react';
import { projects } from '../projects';

// Importa o tipo correto do Swiper
import type { Swiper as SwiperType } from 'swiper';

export function Portfolio() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section
      id="portfolio"
      className="w-full flex flex-col items-center py-8 bg-linear-to-b text-white border-b border-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-700 drop-shadow-lg">
        Portfólio
      </h2>

      <div
        className="w-full max-w-6xl pr-2 pl-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            1160: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 w-[290px] md:w-[340px] h-[500px] my-0 mx-auto flex flex-col">
                <div className="relative w-full h-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-2 top-4 bg-purple-700 hover:bg-purple-900 text-white px-2 py-2 rounded-lg font-medium shadow-md transition cursor-pointer"
                    >
                      <Github className="text-white w-6 h-6" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
                    >
                      Ver Projeto
                    </a>
                  </div>
                </div>

                <div className="p-5 pt-2 text-center flex-1 flex flex-col justify-between h-1/2 min-w-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition truncate">
                      {project.title}
                    </h3>
                    <AnimatedTags tags={project.tags} eixoX={project.eixoX} />
                    <p
                      className="text-gray-400 text-sm leading-relaxed text-justify indent-4 line-clamp-6"
                      title={project.description}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
