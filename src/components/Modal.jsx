import InputField from "./InputField";

/* eslint-disable react/prop-types */
function Modal({
  onClickClose,
  onClickSave,
  onClickDelete,
  heading,
  isDelete,
  modalHeight,

  // managestaff
  isAddStaff,
  staffOnchange,
  mobileOnCHange,
  usernameOnChange,
  passwordOnchange,
  houseFlatOnChnage,
  streetOnChange,
  coutryDistOnChange,
  countryOnChange,
  postcodeOnchange,
  emailOnchange,

  isEditStaff,
  staffEditOnchange,
  mobileEditOnCHange,
  usernameEditOnChange,
  houseFlatEditOnchange,
  streetEditOnchange,
  postCodeEditOnchange,
  cityEditOnchange,
  countryEditOnchange,
  latEditOnchange,
  longEditOnchange,
  staffEditValue,
  mobileEditValue,
  usernameEditValue,
  houseFlatEditValue,
  streetEditValue,
  postCodeEditValue,
  cityEditValue,
  countryEditValue,
  latEditValue,
  longEditValue,
}) {
  return (
    <>
      <div
        className="absolute bg-black/50 h-full w-full  z-10 "
        onClick={onClickClose}
      ></div>
      <div
        className={`z-20 animate__animated animate__fadeInDownBig  absolute bg-white dark:bg-[#2a2e3f] w-1/2 ${
          modalHeight ? modalHeight : "h-1/2"
        }  top-32 left-1/4 rounded-md shadow-md`}
      >
        {/* Header */}
        <div className="flex justify-between items-center h-12 px-4 border-b text-xl">
          {heading}
          <div
            className="cursor-pointer hover:text-red-500"
            onClick={onClickClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto h-[70vh]">
          {/* manage staff */}
          {isAddStaff && (
            <>
              <div className="grid grid-cols-2 px-10 py-3 gap-y-2">
                <InputField title="Staff Name" onChange={staffOnchange} />
                <InputField title="Mobile" onChange={mobileOnCHange} />
                <InputField title="Username" onChange={usernameOnChange} />
                <InputField title="Password" onChange={passwordOnchange} />
                <InputField
                  title="House/Flat Number"
                  onChange={houseFlatOnChnage}
                />
                <InputField
                  title="Street Name and city"
                  onChange={streetOnChange}
                />
                <InputField
                  title="County/District"
                  onChange={coutryDistOnChange}
                />
                <InputField title="County" onChange={countryOnChange} />
                <InputField title="Postcode" onChange={postcodeOnchange} />
                <InputField title="Email" onChange={emailOnchange} />
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-500">
                      Designation
                    </span>
                  </label>
                  <select className="select select-bordered text-gray-400 font-medium">
                    <option disabled selected className="">
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-gray-500">Country</span>
                  </label>
                  <select className="select select-bordered text-gray-400 font-medium">
                    <option disabled selected className="">
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                  </select>
                </div>
              </div>
            </>
          )}
          {isEditStaff && (
            <>
              <div className="grid grid-cols-2 px-10 py-3 gap-y-2 h-[50vh] gap-x-3 overflow-y-auto">
                <InputField
                  title="Staff Name"
                  onChange={staffEditOnchange}
                  value={staffEditValue}
                />
                <InputField
                  title="Mobile"
                  onChange={mobileEditOnCHange}
                  value={mobileEditValue}
                />
                <InputField
                  title="Username"
                  onChange={usernameEditOnChange}
                  value={usernameEditValue}
                />
                <InputField
                  title="House/Flat Number"
                  onChange={houseFlatEditOnchange}
                  value={houseFlatEditValue}
                />
                <InputField
                  title="Street Name "
                  onChange={streetEditOnchange}
                  value={streetEditValue}
                />
                <InputField
                  title="Postcode"
                  onChange={postCodeEditOnchange}
                  value={postCodeEditValue}
                />
                <InputField
                  title="City"
                  onChange={cityEditOnchange}
                  value={cityEditValue}
                />
                <InputField
                  title="Country"
                  onChange={countryEditOnchange}
                  value={countryEditValue}
                />
                <InputField
                  title="Latitude"
                  onChange={latEditOnchange}
                  value={latEditValue}
                />
                <InputField
                  title="Longitude"
                  onChange={longEditOnchange}
                  value={longEditValue}
                />
              </div>
            </>
          )}
        </div>
        {/* Actions */}
        <div className="absolute bottom-2 right-5 space-x-4 flex ">
          <div
            className="btn btn-sm  border text-red-600"
            onClick={onClickClose}
          >
            Cancel
          </div>
          {!isDelete && (
            <div
              className="btn btn-sm bg-teal-600 text-white hover:bg-teal-700"
              onClick={onClickSave}
            >
              Save
            </div>
          )}
          {isDelete && (
            <div
              className="btn bg-red-600 text-white hover:bg-red-700"
              onClick={onClickDelete}
            >
              Delete
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
