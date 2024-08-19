const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSupriseMe,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {LabelName}
        </label>

        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="bg-gray-200 text-gray-800 text-xs font-medium py-1 px-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            Surprise Me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-white border border-gray-300 rounded-lg text-gray-900 text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-shadow duration-300"
      />
    </div>
  );
};

export default FormField;
