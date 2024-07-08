import axios from "axios";
import React, { useEffect, useState } from "react";

const DonerList = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/collectData")
      .then((res) => setRows(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <h1>Donnerlist</h1>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Date</th>
            <th scope="col">Gender</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item?.name}</td>
              <td>{item?.bloodgroup}</td>
              <td>{item?.date}</td>
              <td>{item?.gender}</td>
              <td>{item?.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DonerList;
