import avatar from "../assets/avt.png";

const Testimonial = () => {
  return (
    <section id="testimonial mobileContainer my-5">
      <div
        className="m-auto flex flex-col justify-center items-center md:max-w-[70%]
      text-center"
      >
        <h2 className="h3">Testimonials</h2>
        <h2 className="h2 ">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={avatar}
          alt="avatar logo"
          width={50}
          height={50}
          className="rounded-full my-3"
        />
        <p className="cardText">Amélie Laurent</p>
        <p className="small">Product Manager, Sisyphus</p>
      </div>
    </section>
  );
};
export default Testimonial;
