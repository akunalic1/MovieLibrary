import React, { useEffect, useState } from "react";
import "../../css/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import picture from "../../images/user.jpg";
import { getLogedInUser } from "../../storageActions";
const Account = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getLogedInUser());
  }, []);

  return (
    <div className="account glassmorphism">
      <div className="account-image">
        <img className="image" src={picture} alt="User image"></img>
      </div>
      <div className="user-info text-w-6 text-white">
        <div className="data">
          <p className="label">First name</p>
          <p>{user.firstName}</p>
          {/*<a className="">
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </a>*/}
        </div>
        <div className="data">
          <p className="label">Last name</p>
          <p>{user.lastName}</p>
          {/*<a>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </a>*/}
        </div>
        <div className="data">
          <p className="label">Email</p>
          <p>{user.email}</p>
          {/*   <a className="">
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </a>*/}
        </div>
        <div className="data">
          <p className="label">Password</p>
          <p>{user.password}</p>
          {/* <a className="">
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </a>*/}
        </div>
        {/* <div className="data">
          <img className="small-img" src={picture}></img>
         <a className="">
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </a>
        </div>*/}
      </div>
    </div>
  );
};

export default Account;
