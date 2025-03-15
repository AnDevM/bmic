import Main from './components/Main'
import Header from './components/Header'
import Article from './components/Article'
import Calculator from './components/Calculator'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'

function App () {
  return (
    <Main>
      <Header>
        <Article />
        <Calculator />
      </Header>
      <FirstSection />
      <SecondSection />
    </Main>
  )
}

export default App
