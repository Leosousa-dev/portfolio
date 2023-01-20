import * as S from './style'
import { Subtitle } from '../subtitle/subtitle'
import tumb from '../../assets/tumb.png'
import Data from '../../data/db.json'
export const Projects = ()=>{

    return(
        <>
            <S.Container>
                <Subtitle content="Projetos"/>
                <S.FlexContainer>
                    {Data.Projects.map((projects,index)=>{
                        return(
                            <S.Box key={index}>
                                <S.Tumb src={tumb} alt="tumb-project"/>
                                <h3>{projects.Title}</h3>
                                <ul>
                                    <S.ItemList>{projects.Stacks}</S.ItemList>
                                </ul>
                                <S.Link href={projects.Link} target="_blank">
                                        {projects.TitleLink}-&gt;
                                </S.Link>
                            </S.Box>
                            
                        )
                    })}
                </S.FlexContainer>
            </S.Container>
        </>
    )
}