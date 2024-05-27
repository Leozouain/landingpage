const Button = ({ children, primary, icon }) => {
  return (
    <button
      name="button"
      className={`${
        primary
          ? "border-solid border-2 hover:bg-gray-300"
          : "bg-sky-600 text-white hover:bg-sky-950"
      } py-3 px-5 rounded-2xl  gap-3 hover:scale-110 transition-all hover:shadow-2xl`}
    >
      <div className="flex gap-3 justify-center items-center  ">
        {icon ? (
          <img src={icon} alt="icon" height={15} width={15} className="flex " />
        ) : (
          ""
        )}
        <p className="cardText ">{children}</p>
      </div>
    </button>
  );
};
export default Button;
