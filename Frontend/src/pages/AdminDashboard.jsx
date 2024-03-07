import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, token } from "../config";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loading";
import userGetProfile from "../hooks/useFetchData";
import { toast } from "react-toastify";
import VerificationTable from "../components/Admins/VerificationTable";
import { AuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const { data, loading, error } = userGetProfile(`${BASE_URL}/contacts`);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <section>
      <div className="max-w-[1400px] px-5 mx-auto">
        <h1 className="font-bold text-3xl mb-[30px]">Doctors Verification</h1>
        <VerificationTable />
        <h1 className="font-bold text-3xl my-[30px]">Contact Form</h1>
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Message
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
                    <div className="text-base font-semibold">{item?.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{item?.name}</td>
                <td className="px-6 py-4">{item?.subject}</td>
                <td className="px-6 py-4">{item?.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-[#181A1E] py-3 px-6 mt-4 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
