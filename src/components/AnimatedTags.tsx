import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const tagVariant = tv({
  base: 'px-2 py-1 rounded-lg text-xs lg:text-sm font-medium border-2 inline-block mb-2 mr-2',
  variants: {
    color: {
      HTML: 'bg-[#E34F26]/20 border-[#E34F26] text-[#E34F26]',
      CSS: 'bg-[#1572B6]/20 border-[#1572B6] text-[#1572B6]',
      JavaScript: 'bg-[#F7DF1E]/20 border-[#F7DF1E] text-[#F7DF1E]',
      TypeScript: 'bg-[#3178C6]/20 border-[#3178C6] text-[#3178C6]',
      'React.js': 'bg-[#61DAFB]/20 border-[#61DAFB] text-[#61DAFB]',
      'Next.js': 'bg-[#000000]/20 border-[#000000] text-[#FFFFFF]',
      'Node.js': 'bg-[#68A063]/20 border-[#68A063] text-[#68A063]',
      'React Native': 'bg-[#3DDC84]/20 border-[#3DDC84] text-[#3DDC84]',
      Fastify: 'bg-[#E36002]/20 border-[#E36002] text-[#E36002]',
      'Tailwind CSS': 'bg-[#06B6D4]/20 border-[#06B6D4] text-[#06B6D4]',
      'Styled-Components': 'bg-[#DB7093]/20 border-[#DB7093] text-[#DB7093]',
      Prisma: 'bg-[#2D3748]/20 border-[#2D3748] text-[#2D9CDB]',
      MySQL: 'bg-[#4479A1]/20 border-[#4479A1] text-[#4479A1]',
      PostgreSQL: 'bg-[#336791]/20 border-[#336791] text-[#336791]',
      Python: 'bg-[#3776AB]/20 border-[#3776AB] text-[#3776AB]',
      IA: 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-[#C084FC]',
      default: 'bg-gray-600/20 border-gray-600 text-gray-400',
    }

  },
  defaultVariants: {
    color: 'default',
  },
});

export function AnimatedTags({ tags, eixoX }: { tags: string[], eixoX: string }) {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        // Move para a esquerda
        await controls.start({
          x: ["0%", eixoX],
          transition: { duration: 6, ease: "linear" },
        });
        // Volta pra direita
        await controls.start({
          x: [eixoX, "0%"],
          transition: { duration: 6, ease: "linear" },
        });

        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        animate={controls}
        className="flex gap-2 whitespace-nowrap cursor-default select-none"
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className={twMerge(
              tagVariant({
                color:
                  (tagVariant.variants?.color?.[tag as keyof typeof tagVariant.variants.color]
                    ? tag
                    : "default") as keyof typeof tagVariant.variants.color,
              })
            )}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
