import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6366daa879b0914b75d87474.mockapi.io/crud-react/${id}`, {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
        navigate("/read");
      });
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div className="container p-4">
        <h1>Update</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
             <Link to={"/read"}>
             <button className="btn btn-secondary m-2">Back</button></Link>
                

        </form>
      </div>
    </>
  );
};

export default Update;
