import { INITIAL_EXPERIENCE_YEAR } from '@shared/constants';
import CareerSummary from './summary';

const Career = () => {
  const experienceTime = `${
    new Date().getFullYear() - INITIAL_EXPERIENCE_YEAR
  }`;

  return (
    <>
      <section className='contentTitle summary'>
        <CareerSummary experienceTime={experienceTime} />
      </section>

      {/* <section className='experience'>
        <CareerExperience />
      </section> */}
    </>
  );
};

export default Career;
