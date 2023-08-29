/* eslint-disable react/prop-types */
const InputField = ({ title, onChange, value }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-gray-500">{title}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
