import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './searchbar/Searchbar';
import { getNews } from 'services/getNews';
import { Button } from './button/Button';
import { Loader } from 'components/loader/Loader';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import Modal from './modal/Modal';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonTogle, setButtonTogle] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currenPreview, setCurrenPreview] = useState('');
  const [totalImage, setTotalImage] = useState(0);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    setIsLoading(true);

    getNews(searchText, page)
      .then(response => response.json())
      .then(data => {
        if (!data.total) {
          Notiflix.Notify.failure(
            'Sorry, but nothing was found for your search'
          );
        }

        setImg(prevImg => [...prevImg, ...data.hits]);
        setTotalImage(data.total);

        const hits = data.hits;
        buttonToglee(hits.length);
        console.log(page);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText,page]);

  const openModal = url => {
    setCurrenPreview(url);
    setIsModal(true);
  };

  const modalClose = () => {
    setIsModal(false);
  };

  const handleSearch = searchText => {
    setSearchText(searchText);
    setImg([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const buttonToglee = length => {
    if (length >= 12) {
      return setButtonTogle(true);
    }
    return setButtonTogle(false);
  };

  return (
    <>
      <Searchbar handleSearch={handleSearch} />

      {img.length !== 0 && <ImageGallery data={img} onImageClick={openModal} />}

      {isLoading && <Loader />}
      {img.length !== totalImage && buttonTogle && (
        <Button onLoadMore={onLoadMore} />
      )}
      {isModal && <Modal onModalClose={modalClose} image={currenPreview} />}
    </>
  );
}

// export class App extends Component {
//   state = {
//     searchText: '',
//     page: 1,
//     img: [],
//     isLoading: false,
//     buttonTogle: false,
//     data: null,
//     isModal: false,
//     currenPreview: '',
//     totalImage: 0,
//   };

//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.searchText !== this.state.searchText ||
//       this.state.page !== prevState.page
//     ) {
//       this.setState({ isLoading: true });

// getNews(this.state.searchText, this.state.page)
//   .then(response => response.json())
//   .then(data => {
//     if (!data.total) {
//       Notiflix.Notify.failure(
//         'Sorry, but nothing was found for your search'
//       );
//     }

//     const hits = data.hits;
//     this.buttonTogle(hits.length);

//     this.setState(prevState => ({
//       img: [...prevState.img, ...data.hits],
//       totalImage: data.total,
//     }));

//     console.log(this.state.img);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     this.setState({ isLoading: false });
//   });
// }
//   }

// openModal = url => {
//   this.setState({ currenPreview: url, isModal: true });
// };

// modalClose = () => {
//   this.setState({ isModal: false });
// };

// onLoadMore = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };

// buttonTogle = length => {
//   if (length >= 12) {
//     return this.setState({ buttonTogle: true });
//   }
//   return this.setState({ buttonTogle: false });
// };

// handleSearch = searchText => {
//   this.setState({ searchText, img: [], pag: 1 });
// };

//   render() {
//     const { handleSearch } = this;
//     const { isLoading, buttonTogle, isModal, currenPreview, img, totalImage } =
//       this.state;
// return (
//   <>
//     <Searchbar handleSearch={handleSearch} />

//     {img.length !== 0 && (
//       <ImageGallery data={img} onImageClick={this.openModal} />
//     )}

//     {isLoading && <Loader />}
//     {img.length !== totalImage && buttonTogle && (
//       <Button onLoadMore={this.onLoadMore} />
//     )}
//     {isModal && (
//       <Modal onModalClose={this.modalClose} image={currenPreview} />
//     )}
//   </>
// );
//   }
// }
