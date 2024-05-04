import axios from 'axios';
import apiKeys from './data/config';

export const setCategoryHandler = (setCategory, setLoadMore) => (text) => {
  setLoadMore(1);
  setCategory(text.toLowerCase());
};

export const handleDateChange = (setDate) => (type, value) => {
  setDate((prevDate) => ({
    ...prevDate,
    [type]: value
  }));
};

export const sourcesHandler = (setSources) => (source) => {
  setSources(source);
};

export const newsAPI = async (category, loadMore, date, setNewsArray, setNewsResults, sources, newsArray) => {
  try {
    // News from NewsAPI.ORG
    const newsFromNewsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKeys[0].newsApiKey}&pageSize=${loadMore+2}${date.from ? `&from=${date.from}` : ''}${date.to ? `&to=${date.to}` : ''}&sortBy=publishedAt&sources=${sources ? sources : ''}`);

    // News from The Guardian
    const newsFromGuardian = await axios.get(`https://content.guardianapis.com/search?q=${category}&api-key=${apiKeys[0].guardianApiKey}&page-size=${loadMore+2}${date.from ? `&from-date=${date.from}` : ''}${date.to ? `&to-date=${date.to}` : ''}&order-by=newest`);
    
    // News from New York Times
    // const newsFromNewYorkTimes = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${apiKeys[0].newYorkTimesApiKey}&page=${1}`);

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

    const transformedNewsFromNewsAPI = newsFromNewsAPI.data.articles.map(article => ({
      ...article,
      loadedTimestamp: Date.now()
    }));

    // const transformedNewsFromNewYorkTimes = newsFromNewYorkTimes.data.response.docs.map(article => ({
    //   source: {
    //     id: article.web_url,
    //     name: article.source
    //   },
    //   author: article.byline.person[0].firstname + ' ' + article.byline.person[0].lastname,
    //   title: article.abstract,
    //   description: article.lead_paragraph,
    //   url: article.web_url,
    //   urlToImage: '',
    //   publishedAt: article.pub_date,
    //   content: ''
    // }));

    setNewsArray(prevNewsArray => {
      const combinedNews = [...prevNewsArray];

      transformedNewsFromNewsAPI.forEach(article => {
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
};
