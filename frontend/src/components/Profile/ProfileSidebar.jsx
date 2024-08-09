import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  // Function to determine the class for an item based on its active status
  const getItemClass = (itemId) => 
    `flex items-center cursor-pointer w-full mb-8 ${
      active === itemId ? "bg-[#B36EBA] rounded-lg" : "bg-transparent"
    }`;

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className={getItemClass(1)}
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>

      <div
        className={getItemClass(2)}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>

      <div
        className={getItemClass(3)}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className={getItemClass(4)}
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      <div
        className={getItemClass(5)}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      <div
        className={getItemClass(6)}
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className={getItemClass(7)}
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className={getItemClass(8)}
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings size={20} color={active === 8 ? "white" : "black"} />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[white]" : "text-[black]"
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

      <div
        className={getItemClass(9)}
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 9 ? "white" : "black"} />
        <span
          className={`pl-3 ${
            active === 9 ? "text-[white]" : "text-[black]"
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
