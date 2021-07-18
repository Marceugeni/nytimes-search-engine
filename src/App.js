import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import './App.css';

import nyphoto from './assets/NYvector.jpg';
import Article from './components/Article';
import SearchFilter from './components/SearchFilter';
import SearchFilterByDate from './components/SearchFilterByDate';

function App() {
  const [articlesArray, setArticlesArray] = useState([]);
  const [section, setSection] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  console.log("section", section);
  console.log("date", date);

  useEffect(() => {
    async function myFetch() {
      try {
        let response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${section}&api-key=${process.env.REACT_APP_ASENGINE_API_KEY}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articles = await response.json();
        setArticlesArray(articles.response.docs);
        setIsLoading(false);
        } catch(e) {
        console.log(e);
      }
    }
    myFetch();
  }, [section, date]);

 const loaderStyles = {
      borderRadius: "12px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "20px",
      paddingBottom: "20px"
  }

  return (
    <AppBody>
      <ImageContainer>
        <NyPhoto src={nyphoto} alt="ny-image" />
        <PageTitle>NYTimes Article Search Engine</PageTitle>
        <SearchContainer>
          <SearchFilter inputText={(section) => setSection(section)}/>
          <SearchFilterByDate inputDate={(date) => setDate(date)}/>
        </SearchContainer>
      </ImageContainer>
      {isLoading ? (<img style={loaderStyles} src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47aimowhdtjspicudifmritl084k0xkt74p0i1smtu&rid=giphy.gif&ct=g" alt="loading"/>)
: 
      (<CardsContainer> 
        {articlesArray.map((article) => {
          const {snippet, headline:{main}, subsection_name, web_url, lead_paragraph, _id, pub_date} = article
          return(
              <Article 
                snippet={snippet}
                headline={main}
                subSectionName={subsection_name}
                webUrl={web_url}
                leadParagraph={lead_paragraph}
                id = {_id}
                pubDate = {pub_date}
                key={_id} />
          )
        })}
      </CardsContainer>)}
      <hr />
      <Footer>This app is made with ❤️  and 🍺  by Marc Eugeni.</Footer>
    </AppBody>
  );
}

const AppBody = styled.div`
  background-color: #252A33;
`

const ImageContainer = styled.div`
  position: relative;
`
const NyPhoto = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.8;
`
const PageTitle = styled.h1`
  color: #eceff4;
  position: absolute;
  top: 8px;
  left: 16px;
  padding-left: 10px;
  
`
const SearchContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

`
const Footer = styled.footer`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #eccef4;
`
export default App;
