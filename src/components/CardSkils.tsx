
interface CardSkilsProps {
  children: React.ReactNode
}

export function CardSkils({ children }: CardSkilsProps) {
  return (
    <div
      className="w-25 h-25 lg:w-40 lg:h-40 bg-gray-800 flex flex-col items-center justify-center py-2 rounded-2xl border-b-4 border-purple-700 lg:border-b-0 lg:hover:border-b-4 lg:hover:border-purple-700 group shadow-md hover:shadow-lg transition-all duration-200"
    >
      {children}
    </div>
  )
}