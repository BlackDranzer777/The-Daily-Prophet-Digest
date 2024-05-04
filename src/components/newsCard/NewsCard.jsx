import React, {memo} from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(' ');
    const hour =  parseInt(date[4].substring(0,2))
    const time = hour>12 ? true: false;
  return (
    <div className='news-card left-right-border-large'>
        {newsItem.urlToImage ? 
            <img className='news-image left-right-border-small' src={newsItem.urlToImage ? newsItem.urlToImage : ``} alt={newsItem.title} />
            : <></>
        }
        <div className="news-text">
            <div>
                <span className="title">
                    {newsItem.title}
                </span>
                <br/>
                <span className="author">
                    <a href={newsItem.url} target='__blank'>
                        <b>short</b>{" "}
                    </a>
                    <span className="muted">
                        by {newsItem.author ? newsItem.author : "unknown"}/{" "}
                        {time?`${hour-12}:${date[4].substring(3,5)} pm ` : `${hour}:${date[4].substring(3,5)} am `}
                        on {date[2]} {date[1]} {date[3]}, {date[0]}
                    </span>
                </span>
            </div>
            <div className="lower-news-text">
                <div className="description">
                    {newsItem.description}
                </div>
                {/* <div className="description">
                    {newsItem.content}
                </div> */}
                <span className="read-more">
                    read more at{" "}
                    <a href={newsItem.url} target='__blank'>
                        <b>{newsItem.source.name}</b>
                    </a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default memo(NewsCard)