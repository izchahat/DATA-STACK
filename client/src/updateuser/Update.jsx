import React, { useEffect, useState } from "react"
import "./update.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
    const users = {
        name: "",
        email: "",
        address: "",
    };
    const [user, setUser,] = useState(users);
    const navigate = useNavigate();
    const { id } = useParams();

    const inputHandler = (e) =>{
        const {name, value}= e.target
        console.log(name, value)
        
        setUser({ ...user, [name]: value });
    }

    useEffect (()=>{
        axios.get(`https://data-stack-server-zb9q.onrender.com/api/user/${id}`)
        .then((response) => {
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    const SubmitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`https://data-stack-server-zb9q.onrender.com/api/update/user/${id}`,user)
        .then((response)=>{
            toast.success(response.data.message, { position: "top-right" });
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }



  return (
    <div className="addUser">
    <Link to="/" type="button" class="btn btn-secondary">
    <i class="fa-solid fa-backward"></i> Back
    </Link>
    <h3>Update User</h3>
    <form className="addUserForm" onSubmit={SubmitForm}>
        <div className="inputGroup">
        <lable htmlFor="name">Name:</lable>
        <input
        type="text"
        id="name"
        value={user.name}
        onChange={inputHandler}
        name="name"
        autoComplete="off"
        placeholder="Enter your Name"
        />

        </div>
        <div className="inputGroup">
        <lable htmlFor="email">Email:</lable>
        <input
        type="email"
        id="email"
        value={user.email}
        onChange={inputHandler}
        name="email"
        autoComplete="off"
        placeholder="Enter your Email"
        />

        </div>
        <div className="inputGroup">
        <lable htmlFor="address">Address:</lable>
        <input
        type="text"
        id="address"
        value={user.address}
        onChange={inputHandler}
        name="address"
        autoComplete="off"
        placeholder="Enter your Address"
        />

        </div>
        <div className="inputGroup">
            <button type="submit" class="btn btn-primary">
            Submit
            </button>
        </div>


    </form>
    </div>
  )
}

export default UpdateUser