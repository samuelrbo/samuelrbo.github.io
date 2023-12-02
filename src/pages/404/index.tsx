import Book from '@components/Book/Book';
import { CLOSE_BOOK_DELAY, OPEN_BOOK_DELAY } from '@shared/constants';
import { TitleHelper } from '@shared/helpers/title.helper';
import './style.css';

const PageNotFound = () => {
  TitleHelper.setTitle('Page Not Found');

  return (
    <section className='centerContent'>
      <Book
        key='404'
        textPageLeft='404'
        textPageRight='Page Not Found'
        openDelay={OPEN_BOOK_DELAY}
        closeDelay={CLOSE_BOOK_DELAY}
      />
    </section>
  );
};

export default PageNotFound;
