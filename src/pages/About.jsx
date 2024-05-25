const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="rounded-lg shadow-2xl w-96 h-96 "
          />
          <div className="lg:w-1/2 text-center">
            <h1 className="text-5xl font-bold">Hello!</h1>
            <p className="py-6">
              My name is Abu Hanif, and I am a dedicated and hardworking
              individual with a passion for learning and growth. Currently, I am
              diving into the world of web technology, eagerly expanding my
              skills and knowledge in this dynamic field
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
