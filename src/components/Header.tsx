import logo from '/src/assets/images/logo.svg'

interface HeaderProps {
  children?: React.ReactNode
}

function Header ({ children }: HeaderProps) {
  return (
    <header className="bg-gradient-to-l from-blue-100 to-white text-center pt-8 px-6 rounded-br-[50px] pb-60 lg:max-w-5xl lg:w-2/3 lg:text-start lg:pt-20 lg:relative lg:ml-10">
      <img src={logo} alt='Logo' className='mx-auto h-10 w-10 mb-6 lg:h-16 lg:w-16 lg:mx-0 lg:mb-24' />
      {children}
    </header>
  )
}

export default Header
