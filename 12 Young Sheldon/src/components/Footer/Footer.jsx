import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Link
      className=" text-base font-medium text-gray-900 hover:text-gray-700"
      to="/"
    >
      Contact Us
    </Link>
  );
}

export default Footer;
