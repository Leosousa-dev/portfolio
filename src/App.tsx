import * as S from "./styles/globalStyles"
import {GlobalStyles} from './styles/globalStyles'
import { Hero } from "./components/hero/hero"
import { Projects } from "./components/projects"
import { About } from "./components/about"
import { Footer } from "./components/footer/index"
import { Tecnologies } from "./components/tecnologies/tecnologies"
function App() {


  return (
    <>
    <GlobalStyles/>
      <S.Containercircle>
          <S.Circle/>
      </S.Containercircle>
      <S.MainContainer>
          <Hero/>
          <About/>
          <Tecnologies/>
          <Projects/>
          <Footer/>
      </S.MainContainer>
    </>
  )
}

export default App
