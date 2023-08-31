import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Cog6ToothIcon,
  EyeIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setPagination } from "../redux/manageStaff/staffSlice";

const ManageStaff = () => {
  const dispatch = useDispatch();

  // selector
  const { staffs, pagination } = useSelector((state) => state.staff);

  // states
  const [sidebarOpen, setsidebarOpen] = useState(true);
  const [addnewStaffModal, setaddnewStaffModal] = useState(false);
  const [editModalopen, seteditModalopen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [openTableActions, setopenTableActions] = useState();
  const [searchInput, setSearchInput] = useState();
  // const [pagination, setPagination] = useState({
  //   take: 25,
  //   currentPage: 1,
  // });

  const payload = {
    inputData: {
      redoq_csd_staff_Display_Name: "",
      redoq_csd_staff_Mobile_Number: "",
      redoq_csd_staff_Username: "",
      redoq_csd_staff_Password: "",
      redoq_csd_staff_Address_Line_1: "",
      redoq_csd_staff_Address_Line_2: "",
      redoq_csd_staff_County: "",
      redoq_csd_staff_Country: "",
      redoq_csd_staff_Postcode: "",
      redoq_csd_staff_Email_Address: "",
      redoq_csd_staff_Designation: "",
      redoq_csd_staff_Country_Access: "",
    },
  };

  const [addNewStaff, setAddNewStaff] = useState(payload);
  const [editStaff, setEditStaff] = useState();

  useEffect(() => {
    dispatch({
      type: "GET_ALL_STAFF",
      payload: {
        body: {
          inputData: {
            redoq_csd_staff_Designation: "Super Admin",
            redoq_csd_staff_Id: 14,
            pagination: {
              skip: pagination.take * (pagination.currentPage - 1),
              take: pagination.take,
              currentPage: pagination.currentPage,
            },
            keyword: "",
            staffType: 0,
          },
        },
      },
    });
  }, [pagination.take, pagination.currentPage, dispatch]);

  // functions
  const handleSearch = () => {
    dispatch({
      type: "GET_ALL_STAFF",
      payload: {
        body: {
          inputData: {
            redoq_csd_staff_Designation: "Super Admin",
            redoq_csd_staff_Id: 14,
            pagination: {
              skip: 0,
              take: 25,
              currentPage: 1,
            },
            keyword: searchInput,
            staffType: 0,
          },
        },
      },
    });
  };

  const handleAddStaff = () => {
    dispatch({
      type: "CREATE_NEW_STAFF",
      payload: {
        body: addNewStaff,
      },
    });
    setaddnewStaffModal(false);
  };

  const handleEditSTaff = () => {
    dispatch({
      type: "UPDATE_STAFF",
      payload: {
        body: editStaff,
      },
    });
    seteditModalopen(false);
  };
  console.log(editStaff, "edit staff");

  return (
    <>
      {addnewStaffModal && (
        <Modal
          heading="Add New Staff"
          onClickClose={() => {
            setaddnewStaffModal(false);
          }}
          onClickSave={handleAddStaff}
          modalHeight="h-[80vh]"
          isAddStaff={true}
          staffOnchange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Display_Name: e.target.value,
              },
            });
          }}
          mobileOnCHange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Mobile_Number: e.target.value,
              },
            });
          }}
          usernameOnChange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Username: e.target.value,
              },
            });
          }}
          passwordOnchange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Password: e.target.value,
              },
            });
          }}
          houseFlatOnChnage={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Address_Line_1: e.target.value,
              },
            });
          }}
          streetOnchange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Address_Line_2: e.target.value,
              },
            });
          }}
          coutryDistOnChange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_County: e.target.value,
              },
            });
          }}
          countryOnChange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Country: e.target.value,
              },
            });
          }}
          postcodeOnchange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Postcode: e.target.value,
              },
            });
          }}
          emailOnchange={(e) => {
            setAddNewStaff({
              ...addNewStaff,
              inputData: {
                ...addNewStaff.inputData,
                redoq_csd_staff_Email_Address: e.target.value,
              },
            });
          }}
        />
      )}
      {editModalopen && (
        <Modal
          modalHeight={`h-[70vh]`}
          heading="Edit New Staff"
          onClickClose={() => {
            seteditModalopen(false);
          }}
          isEditStaff={true}
          staffEditValue={editStaff?.inputData?.redoq_csd_staff_First_Name}
          staffEditOnchange={(e) => {
            setEditStaff({
              ...editStaff,
              inputData: {
                ...editStaff.inputData,
                redoq_csd_staff_First_Name: e.target.value,
              },
            });
          }}
          mobileEditValue={editStaff?.inputData?.redoq_csd_staff_Mobile_Number}
          mobileEditOnCHange={(e) => {
            setEditStaff({
              ...editStaff,
              inputData: {
                ...editStaff.inputData,
                redoq_csd_staff_Mobile_Number: e.target.value,
              },
            });
          }}
          usernameEditValue={editStaff?.inputData?.redoq_csd_staff_Username}
          usernameEditOnChange={(e) => {
            setEditStaff({
              ...editStaff,
              inputData: {
                ...editStaff.inputData,
                redoq_csd_staff_Username: e.target.value,
              },
            });
          }}
          houseFlatEditValue={
            editStaff?.inputData?.redoq_csd_staff_Address_Line_1
          }
          houseFlatEditOnchange={(e) => {
            setEditStaff({
              ...editStaff,
              inputData: {
                ...editStaff.inputData,
                redoq_csd_staff_Address_Line_1: e.target.value,
              },
            });
          }}
          onClickSave={handleEditSTaff}
        />
      )}
      {deleteModalOpen && (
        <Modal
          heading="Delete Staff"
          onClickClose={() => {
            setdeleteModalOpen(false);
          }}
          isDeleteStaff={true}
        />
      )}
      <div className="w-screen fixed  ">
        <Navbar
          sidebarOpenOnclick={() => {
            setsidebarOpen(!sidebarOpen);
          }}
        />
        <div className="flex ">
          <Sidebar sidebarOpen={sidebarOpen} />

          <div className="pt-2 px-3 w-full">
            {/* search and filter */}
            <div className=" pt-5 ">
              <div className="text-lg font-medium font-sans">Manage Staff</div>
              <div className=" space-y-5 pt-5">
                <div className="flex space-x-3  items-center">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="focus:outline-none px-2 py-1 border w-96 border-gray-400 rounded-md"
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <button
                    onClick={handleSearch}
                    className=" btn btn-sm border border-gray-500 rounded-md border-16 bg-black text-white hover:bg-gray-600"
                  >
                    Proceed
                  </button>
                </div>
                <button
                  onClick={() => {
                    setaddnewStaffModal(true);
                  }}
                  className="btn btn-sm bg-black text-white hover:bg-gray-600"
                >
                  <PlusIcon className="w-5 h-5" />
                  Add new staff
                </button>
              </div>
            </div>
            {/* table */}
            <div className="">
              <div className="join flex justify-end py-2">
                <div className="join">
                  <button
                    onClick={() => {
                      dispatch(
                        setPagination({
                          currentPage: pagination.currentPage - 1,
                          take: pagination.take - 25,
                        })
                      );
                    }}
                    className="join-item btn btn-sm"
                  >
                    «
                  </button>
                  <button
                    className={`join-item btn btn-sm ${
                      pagination?.currentPage === 1 && "btn-active"
                    }`}
                  >
                    1
                  </button>
                  <button
                    className={`join-item btn btn-sm ${
                      pagination?.currentPage === 2 && "btn-active"
                    }`}
                  >
                    2
                  </button>
                  <button
                    className={`join-item btn btn-sm ${
                      pagination?.currentPage === 3 && "btn-active"
                    }`}
                  >
                    3
                  </button>
                  <button
                    className={`join-item btn btn-sm ${
                      pagination?.currentPage === 4 && "btn-active"
                    }`}
                  >
                    4
                  </button>

                  <button
                    onClick={() => {
                      dispatch(
                        setPagination({
                          currentPage: pagination.currentPage + 1,
                          take: pagination.take + 25,
                        })
                      );
                    }}
                    className="join-item btn btn-sm"
                  >
                    »
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto  h-[60vh] overflow-y-auto scroll-smooth ">
                <table className="w-full mt-3 table  table-pin-rows  ">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="tableheader">SL No</th>
                      <th className="tableheader">Staff ID</th>
                      <th className="tableheader">Name</th>
                      <th className="tableheader">Designation</th>
                      <th className="tableheader">Username</th>
                      <th className="tableheader">Contact Numbers </th>
                      <th className="tableheader">Email </th>
                      <th className="tableheader border-r-0">Action</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-y-auto ">
                    {staffs?.map((staff, index) => (
                      <tr
                        key={staff.redoq_csd_staff_Id}
                        className="text-gray-600 text-sm"
                      >
                        <td className="tableCell">{index + 1}</td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_Id}
                        </td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_First_Name +
                            " " +
                            staff?.redoq_csd_staff_Last_Name}
                        </td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_Designation}
                        </td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_Username}
                        </td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_Mobile_Number}
                        </td>
                        <td className="tableCell">
                          {staff?.redoq_csd_staff_Email_Address}
                        </td>
                        <td className="tableCell border-r-0   relative">
                          <Cog6ToothIcon
                            // want to make this icon clickable, and when hover it spin and show a dropdown menu
                            className="w-5 h-5 cursor-pointer flex justify-center mx-auto  "
                            onClick={() => {
                              setopenTableActions(staff?.redoq_csd_staff_Id);
                            }}
                          />
                          {openTableActions === staff.redoq_csd_staff_Id && (
                            <div
                              id="defaultModal"
                              tabIndex="-1"
                              aria-hidden="true"
                              className=" flex z-20 absolute transform -translate-x-36 -translate-y-8 dark:bg-[#2a2e3f] bg-slate-100 px-2 py-1 shadow-xl rounded-s-md rounded-bl-lg "
                            >
                              <div
                                className="text-blue-500 iconButton"
                                data-tip="Edit Staff"
                                onClick={() => {
                                  seteditModalopen(true);
                                  setEditStaff({
                                    inputData: staff,
                                  });
                                }}
                              >
                                <PencilIcon className="w-5 h-5 " />
                              </div>
                              <div
                                className="text-red-500 iconButton"
                                data-tip="Delete Staff"
                                onClick={() => {
                                  setdeleteModalOpen(true);
                                }}
                              >
                                <TrashIcon className="w-5 h-5 " />
                              </div>
                              <div
                                className="text-stone-500 iconButton"
                                data-tip="View Staff"
                                onClick={() => {
                                  setdeleteModalOpen(true);
                                }}
                              >
                                <EyeIcon className="w-5 h-5 " />
                              </div>
                              <div
                                className="text-red-500 iconButton"
                                data-tip="Close"
                                onClick={() => {
                                  setopenTableActions();
                                }}
                              >
                                <XMarkIcon className="w-5 h-5 " />
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageStaff;
