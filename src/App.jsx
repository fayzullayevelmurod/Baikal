import {
  AboutUs,
  Intro,
  SelectTour,
  Footer,
  Contact,
  Reviews,
  Journey,
  OurAdvantages,
  OurGuides,
} from './components';
import { Modal } from './components/modal/modal';

export const App = () => {
  return (
    <div className='wrapper'>
      <a href='#' className='up-btn'>
        <svg
          width='32'
          height='16'
          viewBox='0 0 40 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM1 9H39V7H1V9Z'
            fill='#FFBD4E'
          />
        </svg>
      </a>
      <Intro />
      <AboutUs />
      <SelectTour />
      <OurAdvantages />
      <OurGuides />
      <Reviews />
      <Journey />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
};
