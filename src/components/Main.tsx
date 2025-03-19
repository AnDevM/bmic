interface MainProps {
    children?: React.ReactNode;
  }
  
  function Main({ children }: MainProps) {
    return <main className="max-w-[1440px] mx-auto">{children}</main>;
  }
  
  export default Main;