interface ConditionalProps {
  icon: string
  header: string
  text: string
  iconAlt: string
}

function Conditional ({ icon, header, text, iconAlt }: ConditionalProps) {
  return (
    <div className='p-6 mb-6 shadow-lg shadow-blue-900/20 rounded-2xl'>
      <div className="flex gap-4">
        <img src={icon} alt={iconAlt} className='mb-8' />
        <h4 className='mb-6 font-semibold text-gray-800 text-2xl'>{header}</h4>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Conditional
