import * as S from './style'
import hand from '../../assets/hand.png'

export const Hero = ()=>{

    return(

        <S.Container>
            <S.Welcome>
                Bem-vindo ao meu portfólio
            </S.Welcome>
            <S.Logo src={hand}/>
            <S.Title>
                Olá meu nome é Leonardo
            </S.Title>
            <S.Divider/>
            <S.Resume>
                Eu sou web developer com foco no <strong>front-end</strong> ultiliando react js, e sou apaixonado por <strong>ui/ux</strong> design
            </S.Resume>
            <S.Button>
                <a href="https://github.com/ls250/ls250" target="_blank">Github 👉️</a>
            </S.Button>
            
        </S.Container>
            
    )
}
