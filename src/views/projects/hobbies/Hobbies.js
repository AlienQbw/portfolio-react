import { Wrapper } from './Hobbies.styles';
import { useEffect } from 'react';

const Hobbies = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(true);

    return () => {
      changeBackground(false);
    };
  }, []);
  return (
    <Wrapper>
      <div className="hobbies-title">
        <h1>
          Meanwhile,
          <br /> in my free time
        </h1>
      </div>
      <div className="hobbies-container">
        <div className="hobbies-card f1">
          <div className="hobbies-card-cover"></div>
          <h4 className="hobbies-card-title">Formula 1</h4>
          <div className="hobbies-card-overlay">
            <p>
              I have watched F1 from an early age, and I remember watching it
              with my dad, when Robert Kubica was driving. Still, till this day
              I love watching it, even though our Polish driver is not there.
              But the beast will come back 👊.
            </p>
          </div>
        </div>
        <div className="hobbies-card piano">
          <div className="hobbies-card-cover"></div>
          <h4 className="hobbies-card-title">Piano</h4>
          <div className="hobbies-card-overlay">
            <p>
              I play the piano as a hobby, so I'm not even close to being the
              next Chopin 😉, but I do my best and enjoy it, and that's what
              matters to me.
            </p>
          </div>
        </div>
        <div className="hobbies-card arduino">
          <div className="hobbies-card-cover"></div>
          <h4 className="hobbies-card-title">Arduino</h4>
          <div className="hobbies-card-overlay">
            <p>
              I don't have much knowledge of robotics, but I've always liked
              building things that are "touchable". So Arduino (which is not
              that complicated) allows me to do so and I have a lot of fun with
              it 😄.
            </p>
          </div>
        </div>
        <div className="hobbies-card smartwatch">
          <div className="hobbies-card-cover"></div>
          <h4 className="hobbies-card-title">Smartwatches</h4>
          <div className="hobbies-card-overlay">
            <p>
              Since, I like smartwatches (and wear one myself), I enjoy having a
              nice watch face on it. So, I had a little fun with a "Facer
              creator" tool. Gallery of my watch faces you can see&nbsp;
              <a href="https://www.facer.io/u/alienq" target="_blank">
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="hobbies-card sport">
          <div className="hobbies-card-cover"></div>
          <h4 className="hobbies-card-title">Sport</h4>
          <div className="hobbies-card-overlay">
            <p>
              I was fencer for the 9 years and loved the sport, unfortunately I
              had to quit due to the lack of coaches in my hometown. But apart
              from that, since I was a child, my parents took me skiing every
              year, and I decided to continue this tradition 🙂.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hobbies;
