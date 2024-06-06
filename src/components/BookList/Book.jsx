import './BookList.css';
import { Link } from 'react-router-dom';

const Book = book => {
  return (
    <div className='book_item flex flex-column justify-between'>
      <div className='book_item_img'>
        <img src={book.cover_img} alt='Cover' />
      </div>
      <div className='book_item_info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book_item_info_item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book_item_info_item author fs-15'>
          <span className='text-capitalize fw-7'>Author:&nbsp;</span>
          {book.authoer ? <span>Unknown</span> : <span>{book.author}</span>}
        </div>

        <div className='book_item_info_item edition_count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions:&nbsp;</span>
          <span>{book.edition_count}</span>
        </div>
        <div className='book_item_info_item publish_year fs-15'>
          <span className='text-capitalize fw-7'>First Puplish Year:&nbsp;</span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
