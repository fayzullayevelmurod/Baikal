import TeamSlider from '../team-slider';
import { Title } from '../title';
import './our-guides.scss'
export const OurGuides = () => {
  return (
    <section className='our-guides'>
      <Title text='Наши' subText='гиды' />

      <div className="container">
        <TeamSlider />
      </div>
    </section>
  );
};
