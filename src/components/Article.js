import styled from 'styled-components'

const Article = ({snippet, headline, subSectionName, webUrl, leadParagraph, id, pubDate }) => {

    return ( <div>
        <CardContainer>
            <ArticleHeader>{headline}</ArticleHeader>
            <ContentContainer>
                <Date>{pubDate.slice(0, 10)}</Date>
                <Snippett>"{snippet}"</Snippett>
                <Section>Section: {subSectionName}</Section>
                <ArticleContent>{leadParagraph}</ArticleContent>
                <hr />
                <LinkToArticle><Source href={webUrl} target="_blank">Read It!</Source></LinkToArticle>
            </ContentContainer>
        </CardContainer>
    </div> );
}

const CardContainer = styled.div`
    margin-top: 15px;
`
const ArticleHeader = styled.div`
    background-color: #434C5E;
    color:#eceff4;
    font-size: 2em;
    border-radius: 12px 12px 0 0;
    width: 18rem;
    margin-right: 15px;
    padding-left: 20px;
    padding-right: 22px;
    padding-top: 15px;
    padding-bottom: 15px;
    
`
const Section = styled.p`
    padding-bottom: 10px;
`
const ContentContainer = styled.div`
    background-color: #2E3440;
    color:#eceff4;
    width: 18rem;
    border: 1px solid rgba(46, 49, 49, 0.2);
    border-radius: 0 0 12px 12px;
    margin-right: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
`
const Snippett = styled.div`
    color: #D8DEE9;
    font-style: italic;
    padding-bottom: 15px;
    text-align: justify;
    text-justify: inter-word;
`
const Date = styled.div`
    color: #D8DEE9;
    padding-bottom: 10px;
`
const ArticleContent = styled.div`
    padding-bottom: 10px;
    text-align: justify;
    text-justify: inter-word;
`
const LinkToArticle = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`
const Source = styled.a`
    text-decoration: none;
    color: #2E3440;
    background-color: #ECEFF4;
    padding: 10px;
    border-radius: 12px;
    margin-top: 10x;
    margin-bottom: 10px;
`
export default Article;
