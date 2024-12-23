
import GridBoxService from "./GridBoxService";
import HeadingAction from "./HeadingAction";

const ServiceSecond = () => {
  return (
    <section id="secvice_second" className="py-32 sm:py-48 md:py-52 lg:py-64">
      <div className="container">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <HeadingAction title="What we can do for you." mini_text="Services" content="We focus only on what we know and what will make life easier for
                you and your customers, nothing more. This specialization allows
                us to provide you with solid, personalized solutions without
                unnecessary distractions." buttonText="View our work"  />
          <GridBoxService />
        </div>
      </div>
    </section>
  );
};

export default ServiceSecond;
