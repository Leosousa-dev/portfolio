import * as S from './style'
import { Subtitle } from '../subtitle/subtitle'

export const Tecnologies = ()=>{
    return(
        <S.Container>
            <Subtitle content="Tecnologias"/>
            <p>Abaixo estão algumas tecnologias e ferramentas que utilizo no meu dia a dia em projetos pessoais.</p>
            <S.FlexBox>
                <S.BoxCol>
                    <S.Title>⚛️ Front-end</S.Title>
                    <span>Experiência com</span>
                    <S.List>
                        <li>React js & Styled-components</li>
                        <li>Tailwindcss</li>
                    </S.List>           
                </S.BoxCol>
                <S.BoxCol>
                    <S.Title>📱 ui/ux</S.Title>
                    <span>Experiência com</span>
                    <S.List>
                        <li>design e prototipação ultilizando <strong>Figma</strong></li>
                    </S.List>           
                </S.BoxCol>
            </S.FlexBox>
        </S.Container>
    )
}