import Iamgem from "../assets/gabriel_melo.png"

export function About() {
  return (
    <section id="about" className="w-full flex flex-col-reverse md:flex-row justify-between items-center py-2 gap-2 border-b-2 border-gray-700">
      <div className="w-full flex-1 flex flex-col items-center px-0 xl:px-70 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-700 drop-shadow-lg">
          Gabriel Melo
        </h2>
        <h3 className="text-md md:text-lg text-white tracking-wide font-light opacity-70 border-b-2 border-gray-700">Desenvolvedor Full Stack</h3>
        <div>
          <p className="text-sm md:text-md text-white tracking-wide text-justify py-4 indent-4">
            Sou Cientista da Computação apaixonado por tecnologia e inovação, com foco em desenvolvimento Full Stack. Envolvido diariamente com programação, domino as principais ferramentas do mercado, como JavaScript, TypeScript, HTML, React JS, Next JS e Node JS, o que me permite participar de todas as etapas da criação de soluções digitais. Em busca de constante evolução, estou cursando pós-graduação em Tech Developer 360, aprofundando conhecimentos em Front-end, Back-end, IA, DevOps e Gestão de Produtos. Meu objetivo é unir conhecimento técnico e visão estratégica para desenvolver aplicações completas, eficientes e com impacto positivo, entregando projetos robustos que realmente fazem diferença no dia a dia das pessoas.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end ">
        <img src={Iamgem} alt="Gabriel Melo" className="w-[150px] mb-2 md:mb-0 md:w-[300px] h-fit -mt-3 md:-mt-8" />
      </div>
    </section>
  )
}