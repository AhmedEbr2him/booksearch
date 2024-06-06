import '../BookList/BookList.css';
import { useGlobalContext } from '../../contextApp';
import Loading from '../Loader/Loader';
import cover_img from '../../images/cover_not_found.jpg';
import Book from '../BookList/Book';
//https://covers.openlibrary.org/b/id/240727-S.jpg
const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map(singleBook => {
    return {
      ...singleBook,
      //removing /works/ to get only book id
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : cover_img,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>

        <div className='booklist_content grid'>
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
