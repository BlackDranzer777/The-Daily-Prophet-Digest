import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import NewsContent from './components/newsContent/NewsContent';
import axios from 'axios';
import Footer from './components/footer/Footer';
import apiKeys from './data/config';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [sources, setSources] = useState('');

  const [date, setDate] = useState({
    from: '', 
    to: new Date().toISOString().split('T')[0] 
  });


  //Handlers
  const setCategoryHandler = (text) => {
    setLoadMore(1)
    return setCategory(text.toLowerCase())
  }

  const handleDateChange = (type, value) => {
    setDate((prevDate) => ({
      ...prevDate,
      [type]: value
    }));
  };

  const sourcesHandler = (source) => {
    return setSources(source)
  }


  const newsAPI = async () => {
    try {
      //News from NewsAPI.ORG
      const newsFromNewsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKeys[0].newsApiKey}&pageSize=${loadMore+2}${date.from ? `&`+`from=`+date.from:``}${date.to ? `&`+`to=`+date.to:``}&sortBy=publishedAt&sources=${sources? sources :''}`);
      
      //News from Guardian
      const newsFromGuardian = await axios.get(`https://content.guardianapis.com/search?q=${category}&api-key=${apiKeys[0].guardianApiKey}&page-size=${loadMore+2}${date.from ? `&`+`from-date=`+date.from:``}${date.to ? `&`+`to-date=`+date.to:``}&order-by=newest`);
      
      //News from NewYorkTimes
      // const newsFromNewYorkTimes = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${apiKeys[0].newYorkTimesApiKey}&page=${1}`)
      

      //Transforming data from Guardian
      const transformedNewsFromGuardian = newsFromGuardian.data.response.results.map(article => ({
        source: {
          id: article.sectionId, 
          name: article.sectionName 
        },
        author: '',
        title: article.webTitle,
        description: '',
        url: article.webUrl,
        urlToImage: '', 
        publishedAt: article.webPublicationDate,
        content: '',
        loadedTimestamp: Date.now()
      }));


      //Transforming data from News API Org
      const transformedNewsFromNewsAPI = newsFromNewsAPI.data.articles.map(article => ({
        ...article,
        loadedTimestamp: Date.now()
      }));


      //Transforming data from NewYorkTimes
      // const transformedNewsFromNewYorkTimes = newsFromNewYorkTimes.data.response.docs.map(article => ({
      //   source: {
      //     id: article.web_url, // Using pillarId as a unique identifier for the source
      //     name: article.source // Using pillarName as the source name
      //   },
      //   author: article.byline.person[0].firstname + ' ' + article.byline.person[0].lastname , // You may need to adjust this based on available data in the Guardian API
      //   title: article.abstract,
      //   description: article.lead_paragraph, // You may need to adjust this based on available data in the Guardian API
      //   url: article.web_url,
      //   urlToImage: '', // You may need to adjust this based on available data in the Guardian API
      //   publishedAt: article.pub_date,
      //   content: ''
      // }));

      
      
      //Debugging-1
      // console.log("data from news API : ", newsFromNewsAPI.data.articles)

      
      setNewsArray((prevNewsArray) => {
            const combinedNews = [...prevNewsArray];
            
            transformedNewsFromNewsAPI.forEach(article => {
              // Checking if the article already exists in the news array by comparing URLs and If the article doesn't exist in the news array, add it
              const existingArticleIndex = prevNewsArray.findIndex(existingArticle => existingArticle.url === article.url);
              if (existingArticleIndex === -1) {
                combinedNews.push({
                  ...article,
                  loadedTimestamp: Date.now()
                });
              }
            });
          

            transformedNewsFromGuardian.forEach(article => {
              const existingArticleIndex = prevNewsArray.findIndex(existingArticle => existingArticle.url === article.url);
              if (existingArticleIndex === -1) {
                combinedNews.push({
                  ...article,
                  loadedTimestamp: Date.now()
                });
              }
            });
          
            const sortedNews = combinedNews.sort((a, b) => {
              return a.publishedAt - b.publishedAt;
            });
            return sortedNews;
          });
      
          setNewsResults(newsArray.length);

        
        } catch(error) {
          console.log(error);
        }
      }

  

  useEffect(() => {
    newsAPI();
  }, [loadMore]);

  useEffect(() => {
    // Reset newsArray to empty array when category changes
    setNewsArray([]);
    // Load new data based on the updated category
    newsAPI();
  }, [category, date]);

  return (
    <div className="App">
      <Navbar category={category} setCategoryHandler={setCategoryHandler} sourcesHandler={sourcesHandler} handleDateChange={handleDateChange} date={date}/>
      <NewsContent setLoadMore={setLoadMore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
