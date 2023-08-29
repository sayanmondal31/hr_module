import axios from "axios";

export const addStaffAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/managestaff/new-registration-staff`,
    payload.body,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        uuid: "eyJpdiI6Ik1lNk43MjkyWldiYS9jL0pyVG10SFE9PSIsInZhbHVlIjoiVnV4U0JSaVlKLzJWSm1xQTgwMDhSdz09IiwibWFjIjoiZTU2MDg5Nzc2YjAzMzc1OTkwMDAxNTc5NWYxOTk0MjkyMmMwNjY3MWZkNmQ2ZjExOGQ0ZTBkNjY4ZGY0ZTU5YyJ9",
        jjpi: "eyJpdiI6IlBQL0h3Ry9sSHJoT3dGVHM0RDhvZnc9PSIsInZhbHVlIjoiU1FjdkxwUWhUWHNXRWlodW82UWNUak96Z3VZeVloOFV0RUM4Wmk2SUc4UT0iLCJtYWMiOiI0MTAwNjRiOTlkOWMxMzJkMzRiZDFjNWU1MWM0MDFiODUyMmRkYWI2ZDkyMmY5MDNlY2QwOTE4ZGE1ZjcwNjI2In0=",
        redoq_csd_staff_id: 14,
        staffid: 14,
      },
    }
  );

  return response;
};

export const getAllStaffAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/managestaff/get-all-staffs`,
    payload.body,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        uuid: "eyJpdiI6Ik1lNk43MjkyWldiYS9jL0pyVG10SFE9PSIsInZhbHVlIjoiVnV4U0JSaVlKLzJWSm1xQTgwMDhSdz09IiwibWFjIjoiZTU2MDg5Nzc2YjAzMzc1OTkwMDAxNTc5NWYxOTk0MjkyMmMwNjY3MWZkNmQ2ZjExOGQ0ZTBkNjY4ZGY0ZTU5YyJ9",
        jjpi: "eyJpdiI6IlBQL0h3Ry9sSHJoT3dGVHM0RDhvZnc9PSIsInZhbHVlIjoiU1FjdkxwUWhUWHNXRWlodW82UWNUak96Z3VZeVloOFV0RUM4Wmk2SUc4UT0iLCJtYWMiOiI0MTAwNjRiOTlkOWMxMzJkMzRiZDFjNWU1MWM0MDFiODUyMmRkYWI2ZDkyMmY5MDNlY2QwOTE4ZGE1ZjcwNjI2In0=",
        redoq_csd_staff_id: 14,
        staffid: 14,
      },
    }
  );

  return response;
};

export const updateStaffAction = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/managestaff/edit-staff`,
    payload.body,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        uuid: "eyJpdiI6Ik1lNk43MjkyWldiYS9jL0pyVG10SFE9PSIsInZhbHVlIjoiVnV4U0JSaVlKLzJWSm1xQTgwMDhSdz09IiwibWFjIjoiZTU2MDg5Nzc2YjAzMzc1OTkwMDAxNTc5NWYxOTk0MjkyMmMwNjY3MWZkNmQ2ZjExOGQ0ZTBkNjY4ZGY0ZTU5YyJ9",
        jjpi: "eyJpdiI6IlBQL0h3Ry9sSHJoT3dGVHM0RDhvZnc9PSIsInZhbHVlIjoiU1FjdkxwUWhUWHNXRWlodW82UWNUak96Z3VZeVloOFV0RUM4Wmk2SUc4UT0iLCJtYWMiOiI0MTAwNjRiOTlkOWMxMzJkMzRiZDFjNWU1MWM0MDFiODUyMmRkYWI2ZDkyMmY5MDNlY2QwOTE4ZGE1ZjcwNjI2In0=",
        redoq_csd_staff_id: 14,
        staffid: 14,
      },
    }
  );
  return response;
};
