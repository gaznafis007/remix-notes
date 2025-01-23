/* eslint-disable react/prop-types */

const Button = ({ children, handler, params }) => {
  return (
    <button
      onClick={params ? () => handler(params) : handler}
      className="px-6 py-3 text-white bg-purple-500 hover:bg-purple-600 rounded-md delay-75"
    >
      {children}
    </button>
  );
};

export default Button;

