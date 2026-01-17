
import HeroPage from "./Hero";
import Profile from "./Profile/profile";
import JourneyPage from "./Journey";


const HomePage = () => {
  return (
    <>

       <section className="pt-30 sm:pt-45">
        <Profile />
      </section>
      <section>
        <JourneyPage />
      </section>
    </>
  );
};

export default HomePage;
