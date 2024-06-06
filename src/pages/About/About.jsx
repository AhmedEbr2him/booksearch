import './About.css';
import aboutImg from '../../images/about-img.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about_content grid'>
          <div className='about_img'>
            <img src={aboutImg} alt='About Image' />
          </div>

          <div className='about_text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi quasi,
              quibusdam optio ut error quis impedit at voluptatibus eos corrupti deleniti
              hic nesciunt repudiandae! Beatae esse recusandae voluptatum minus sint quod
              commodi illo excepturi voluptatem laudantium, dolorem, distinctio
              blanditiis?
            </p>
            <p className='fs-17'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, quisquam.
              Eveniet provident iste magni a ipsa qui natus culpa labore neque,
              necessitatibus in illum tenetur, ducimus ipsum? Optio, possimus magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
