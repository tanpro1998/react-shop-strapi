import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="bg-blue-500 text-white flex justify-center p-4">
      <div className="w-1/2 flex items-center justify-between">
        <span className="uppercase">Be in touch with us:</span>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 outline-none text-black"
          />
          <button className="p-2 bg-black capitalize">join us</button>
        </div>
        <div className="flex space-x-4">
          <FacebookIcon className="cursor-pointer"/>
          <InstagramIcon className="cursor-pointer"/>
          <TwitterIcon className="cursor-pointer"/>
          <GoogleIcon className="cursor-pointer"/>
          <PinterestIcon className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
