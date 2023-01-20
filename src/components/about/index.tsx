import * as S from './style'
import { Subtitle } from '../subtitle/subtitle'

export const About = ()=>{
    return(
        <>
           
           <Subtitle content="Sobre mim"/>
            <S.Resume>
                Me chamo Leonardo, estudo programação a 2 anos com foco em desenvolvimento front-end.
                Sou apaixonado por tecnologia
                Busco sempre novos métodos e tecnologias para me tornar um profissional cada vez melhor.
                Atualmente estou em busca da minha primeira oportunidade profissional.
            </S.Resume>
        </>
    )
}