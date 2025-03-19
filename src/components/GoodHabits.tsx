interface GoodHabitsProps {
  icon: string
  header: string
  text: string
  alt: string
  last?: string
}

function GoodHabits ({ icon, header, text, alt, last }: GoodHabitsProps) {
  return (
    <div
      className={`px-6 pt-14 bg-gradient-to-l from-cyan-50/50 to-cyan-50/5 ${last} md:flex gap-10 md:px-10 lg:flex-col`}
    >
      <img src={icon} alt={alt} className='mb-8 lg:size-16' />
      <div>
        <h4 className='mb-6 font-semibold text-gray-800 text-2xl'>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default GoodHabits
