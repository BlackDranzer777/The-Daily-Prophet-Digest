import { Container } from '@mui/material'
import React, {memo} from 'react'
import NewsCard from '../newsCard/NewsCard'
import './NewsContent.css';

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {

  return (
    <div className="container left-right-border-large">
      <Container maxWidth='xl' >
        <div className='content-container'>
            <div className="content">

            </div>
            {newsArray.map((newsItem, index) => (
                newsItem.url !== "https://removed.com" ?
                <NewsCard newsItem={newsItem} key={index}/>
                : <></>
            ))}
            {
              loadMore<=newsResults && 
              <>
                <hr/>
                <button className='load-more' onClick={() => setLoadMore(loadMore+3)}>
                  Load More
                </button>
              </>
            }
            
        </div>
      </Container>
    </div>
  )
}

export default memo(NewsContent);