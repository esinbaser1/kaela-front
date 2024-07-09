import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import AdminInformationCard from "../../components/AdminInformationCard";

const AdminInformation = () => {
  const [informationServer, setInformationServer] = useState([]);
  const [responseMessage, setResponseMessage] = useState([]);

  useEffect(() => {
    fetchInformation();
  }, []);

  const fetchInformation = async () => {
    try {
      const response = await axios.get(
        "http://localhost/travail-perso/kaela-couture/adminInformation"
      );

      if (response.data.success) {
        setInformationServer(response.data.information);

        if (response.data.information === 0) {
          setResponseMessage("There are no products");
        }
      } else {
        setResponseMessage("Product loading failure");
      }
    } catch (error) {
      console.error("Error when loading products:", error);
      setResponseMessage("Error when loading products");
    }
  };

  return (
    <div>
      <Navigation />
      <h2>My information</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Mobile</th>
              <th>Address</th>
              <th className="action-header" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {informationServer.length > 0 ? (
              informationServer.map((info) => (
                <AdminInformationCard  key={info.id} infos={info}/>

              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                 No information available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInformation;
