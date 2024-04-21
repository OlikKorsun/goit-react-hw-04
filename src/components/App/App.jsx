import { useState, useEffect } from 'react'
import './App.module.css'
import { searchImg } from '../../images-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import SearchBar from '../SearchBar/SearchBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

export default function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  const handleSearch = async (newSearch) => {
    setQuery(newSearch);
    setPage(1);
    setImg([]);
  };

   useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImg() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await searchImg(query, page);
        setImg(data);
      }
      catch (error) {
        setError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    getImg();
  }, [query, page]);

 
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      { error && <ErrorMessage/>}
      {img.length > 0 && <ImageGallery items={img} />}
      {isLoading && <Loader />}
      {img.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  )
}