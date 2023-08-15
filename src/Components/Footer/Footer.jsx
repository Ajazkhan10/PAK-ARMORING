import React from "react";
// import logo from "../../Assert/svg/image.svg";
// import facebook from "../../Assert/svg/facebook.svg";
// import twitter from "../../Assert/svg/twitter.svg";
// import linkedin from "../../Assert/svg/akar-icons_linkedin-fill.svg";
// import whatsapp from "../../Assert/svg/WhatsApp - png.png";
const Footer = () => {
  return (
    <div>
      <section className=" bg-secondary_gray_300 text-light_white grid  lg:grid-cols-4 py-[30px] px-[30px]">
        <div className="flex flex-col items-start">
          <h2 className="text-[20px] font-bold">Pak Armoring (PVT) LTD.</h2>
          <h4 className="text-[12px] font-medium">
            Armored Vehicles Specialist
          </h4>
        </div>
        <div>
          <h2 className="text-[20px] font-bold pb-[30px]">About Company</h2>
          <ul className="flex flex-col gap-[10px] ">
            <li>
              <a href="aDd">Overview</a>
            </li>
            <li>
              <a href="about-us">Company Profile</a>
            </li>
            <li>
              <a href="ceo-message">CEO Message</a>
            </li>
            <li>
              <a href="vision-and-mission">Mission &amp; Vision</a>
            </li>
            <li>
              <a href="asfasd">Certifications</a>
            </li>
            <li>
              <a href="fassfsa">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] font-bold pb-[30px] ">Overview</h2>
          <ul className="flex flex-col gap-[10px] ">
            <li>
              <a href="about-us">Company Profile</a>
            </li>
            <li>
              <a href="ceo-message">CEO Message</a>
            </li>
            <li>
              <a href="vision-and-mission">Mission &amp; Vision</a>
            </li>
            <li>
              <a href="asfasd">Certifications</a>
            </li>
            <li>
              <a href="fassfsa">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] font-bold pb-[30px] ">Office Address:</h2>
          <p className="">
            Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road,
            Karachi.
          </p>
          <ul class="address gap-[10px] ">
            <li class="flex_">
              <span>
                <i class="fas fa-phone-volume"></i>
              </span>
              <a href="tel:923039234333">0303 9234222 - 0303 9234333</a>
            </li>
            <li class="flex_">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <a href="mailto:info@pakarmoring.com">info@pakarmoning.com</a>
            </li>
            <li class="flex_">
              <span>
                <i class="fa fa-globe"></i>
              </span>
              <a href="index.html">www.pakarmoning.com</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="footerBottom flex mx-auto bg-secondary_gray text-[#fff]">
        <div className="standard_2 flex_ spacebetween flex justify-between  mx-auto items-center">
          <ul className="flex justify-between items-center mx-auto">
            <li className="">
              Copyrights 2021 <a href="index">Pak Armoring</a> All rights
              Reserved.<a href="sxasd">| Disclaimer</a>
              <a href="dasda">| Sitemap</a>
            </li>

            <li>Design and Develop by</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
