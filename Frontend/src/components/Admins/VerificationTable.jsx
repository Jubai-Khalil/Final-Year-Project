import { BASE_URL, token } from "../../config";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loading";
import userGetProfile from "../../hooks/useFetchData";
import { toast } from "react-toastify";

const VerificationTable = () => {
  //get all doctors
  const { data, loading, error } = userGetProfile(
    `${BASE_URL}/doctors/admin/retrieve-all-doctors`
  );

  const verifyDoctor = async (doctorId) => {
    try {
      const res = await fetch(`${BASE_URL}/doctors/verify/${doctorId}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "Please try again");
      }
      toast.success("Doctor verified");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Approval Status
          </th>
        </tr>
      </thead>

      <tbody>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {data?.map((item) => (
          <tr key={item.id}>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <div className="pl-3">
                <div className="text-base font-semibold">{item?.name}</div>
              </div>
            </th>
            <td className="px-6 py-4">{item?.email}</td>
            <td className="px-6 py-4">{item?._id}</td>
            <td className="px-6 py-4">
              {item.isApproved === "approved" && (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Approved
                </div>
              )}

              {item.isApproved !== "approved" && (
                <div className="flex items-center">
                  <button
                    onClick={() => verifyDoctor(item._id)}
                    className="px-5 py-2 rounded-full text-white bg-irisBlueColor mr-2"
                  >
                    {loading ? "Verifying...." : "Verify"}
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VerificationTable;
