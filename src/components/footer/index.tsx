import * as S from './style'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = ()=>{
    return(
       <S.Footer>
            <S.Container>
                <h4>Minhas redes:</h4>
                <S.Box>
                    <a href="https://github.com/ls250/ls250" target="_blank">
                        <AiFillGithub color='#fff' size={22}/>
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-sousa-9a5b81202/" target="_blank">
                        <AiFillLinkedin color='#fff' size={22}/>
                    </a>                    
                </S.Box>
            </S.Container>
            <S.paragraf>© 2022 Leonardo, no cookies here 🍪</S.paragraf>
       </S.Footer>
    )
}