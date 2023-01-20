import * as S from './style'

type content ={
    content: string
}

export const Subtitle = ({content}:content)=>{
    return(
        <>
            <S.Wrap>
                <S.Circle/>
                <S.Subtitle>
                    {content}
                </S.Subtitle>
            </S.Wrap>
        </>
    )
}