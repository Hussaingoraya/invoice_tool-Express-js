import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faTimes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function Client() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = clientData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigate = () => {
    navigate("/client/new");
  };
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const getClientData = await axios.get("http://localhost:8000/clients");
        setClientData(getClientData.data);
        console.log(clientData, "getResposne");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id,"delete")
    try {
      await axios.delete(`http://localhost:8000/clients/${id}`);
      setClientData(
        clientData.filter((item) => {
          return item._id !== id;
        })
      );
      console.log(clientData,"show deleted")
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleUpdateClient = (client)=>{
    navigate("/client/new", { state: { client } });

  }
  return (
    <>
      <Navbar />
      <div className="spacer"></div>

      <div className="container">
        <div className="row">
          <div className="col-5 navtab">
            <div className="client-edit-header page-header">
              <h1>Client</h1>
              <div className="loading-indicator"></div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5 invoice-search">
            <form className=" form-search-bar" role="search">
              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search by Client Name"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success invoice-btn "
                type="submit"
                onClick={handleNavigate}
              >
                New Client
              </button>
            </form>
          </div>
        </div>
        <div className="tab-content mt-2" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="invoice">
                    Name
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col" className="empty-space"></th>
                  <th
                    style={{ textAlign: "left" }}
                    scope="col"
                    className="balance"
                  >
                    Website
                  </th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((client, i) => (
                    <tr key={i}>
                      <td>{client.name}</td>
                      <td>{client.email}</td>
                      <td>{client.address1}</td>
                      <td>{client.phone}</td>
                      <td></td>
                      <td>{client.website}</td>
                      <td style={{ display: "flex" }}>
                        <div className="edit-icon">
                          <FontAwesomeIcon icon={faEdit} onClick={()=>handleUpdateClient(client)} />
                        </div>
                        <div className="trash-icon">
                          <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(client._id)} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th scope="row">
                      <span>
                        You have no invoice<span>,</span>{" "}
                        <Link to={"/client/new"}>
                          add your first client today
                        </Link>
                      </span>
                    </th>
                  </tr>
                )}
              </tbody>
            </table>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
