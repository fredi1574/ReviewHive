const Separator = ({ title }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span
          className={`w-full border-t ${!title ? "border-gray-100" : ""}`}
        />
      </div>
      <div className="relative flex px-20 text-sm">
        <span className="bg-white px-2 text-gray-500">{title}</span>
      </div>
    </div>
  );
};

export default Separator;
