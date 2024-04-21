import { useState, useEffect } from 'react'
import './App.module.css'
import { searchImg } from '../../images-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import SearchBar from '../SearchBar/SearchBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const selectedImage = (selectedImage) => {
    setSelectedImageUrl(selectedImage);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

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
        setImg((prevImg) => {
          return [...prevImg, ...data];
        });
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
      {img.length > 0 && <ImageGallery items={img} onImageClick={selectedImage}/>}
      {isLoading && <Loader />}
      {img.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        selectedModalImage={selectedImageUrl}
      />
    </div>
  )
}