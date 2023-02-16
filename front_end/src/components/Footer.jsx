import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>

    <div class="footer-content">

      <h3>TUFIN </h3>

      <p>The purpose of “Tufin” app is a tool to assist the
students/parents to find private tutors in an interactive
manner. It aims to complement the efforts of a student to
find a desirable teacher. </p>

      <ul class="socials">

        <li><a href="#"><i class="fa fa-facebook"></i></a></li>

        <li><a href="#"><i class="fa fa-twitter"></i></a></li>

        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>

        <li><a href="#"><i class="fa fa-youtube"></i></a></li>

        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>

      </ul>

    </div>

    <div class="footer-bottom">

      <p>Copyright &copy @Harshit </p>

      <div class="footer-menu">

        <ul class="f-menu">

          <li><a href="">Home</a></li>

          <li><a href="">Login</a></li>

          <li><a href="">Register</a></li>

          {/* <li><a href=""></a></li> */}

        </ul>

      </div>

    </div>

  </footer>
  );
};

export default Footer;