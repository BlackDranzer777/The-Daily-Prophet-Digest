import {setLoadMore, setCategory, setDate, setSources} from './App';

//Handlers
 export const setCategoryHandler = (text) => {
    setLoadMore(1)
    return setCategory(text.toLowerCase())
  }

export  const handleDateChange = (type, value) => {
    setDate((prevDate) => ({
      ...prevDate,
      [type]: value
    }));
  };

export  const sourcesHandler = (source) => {
    return setSources(source)
  }