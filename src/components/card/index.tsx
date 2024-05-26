import "./index.css";

const Card = () => {
  return (
    <div className="max-w-64 border-2 border-gray-100 border-solid rounded p-2">
      <img
        src="https://i.ebayimg.com/images/g/3DsAAOSwuspjbTWJ/s-l1200.jpg"
        alt="Nike product"
        className="rounded mb-2"
      />
      <h3 className="mb-3">Nike Shoes</h3>
      <p className="text-gray-400 mb-3 truncate_two max-h-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolore
        error enim perspiciatis? Animi, ab voluptatem placeat nulla laborum
        doloremque?
      </p>
      {/* colors */}
      <div className="flex flex-row gap-x-1 mb-3">
        <div className="w-4 h-4 bg-red-200 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
        <div className="w-4 h-4 bg-green-200 rounded-full"></div>
      </div>
      {/* cost and category */}
      <div className="flex flex-row justify-between items-center mb-2">
        <p className="text-blue-700 font-semibold">$350</p>
        <div className="flex flex-row gap-x-1 items-center">
          <p>Nike</p>
          <img
            src="https://i.ebayimg.com/images/g/3DsAAOSwuspjbTWJ/s-l1200.jpg"
            alt="Nike product"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-1">
        <button className="text-white font-bold py-2.5 bg-blue-700 rounded flex-1">
          Edit
        </button>
        <button className="text-white font-bold py-2.5 bg-red-700 rounded flex-1">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
