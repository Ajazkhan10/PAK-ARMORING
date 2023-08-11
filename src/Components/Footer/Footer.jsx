import React from "react";
import logo from "../../Assert/svg/image.svg";
// import facebook from "../../Assert/svg/facebook.svg";
// import twitter from "../../Assert/svg/twitter.svg";
// import linkedin from "../../Assert/svg/akar-icons_linkedin-fill.svg";
// import whatsapp from "../../Assert/svg/WhatsApp - png.png";
const Footer = () => {
  return (
    <div>
      <section className="footer-main flex flex-col items-start gap-[40px] lg:flex-row  lg:gap-[120px]  bg-[#000] text-[#fff]  py-[80px] w-full">
        <div className="footer_box   items-start">
          <div className="logoSide flex gap-[20px] px-[80px] ">
            <div className="logo_img">
              <img src={logo} alt="logo" className="w-[62px] h-[70px] " />
            </div>
            <div className="text-[#fff] font-Ubuntu not-italic leading-normal ">
              <h2 className="text-[20px] font-bold">Pak Armoring (PVT) LTD.</h2>
              <h4 className="text-[12px] font-medium">
                Armored Vehicles Specialist
              </h4>
            </div>
          </div>
        </div>
        <div class="footer_box flex flex-col gap-[30px] px-[80px]">
          <h2 className="text-[20px] font-bold">About Company</h2>
          <ul className="flex flex-col gap-[20px] px-[30px]">
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
        <div class="footer_box flex flex-col  gap-[30px] px-[80px]">
          <h2 className="text-[20px] font-bold ">Products</h2>
          <ul className="grid grid-rows-6 grid-flow-col gap-[20px] gap-x-[50px]  px-[30px]">
            <li>
              <a href="vips_inner?link=BMW">BMW X Series</a>
            </li>
            <li>
              <a href="vips_inner?link=Range_Rover">Range Rover</a>
            </li>
            <li>
              <a href="vips_inner?link=Toyota_Fortuner">Fortuner</a>
            </li>
            <li>
              <a href="vips_inner?link=Kia_Sorento">Sorento</a>
            </li>
            <li>
              <a href="vips_inner?link=Mercedes_Benz">Mercedez Benz</a>
            </li>

            <li>
              <a href="vips_inner?link=Toyota_Corolla">Toyota Corolla</a>
            </li>
            <li>
              <a href="vips_inner?link=Toyota_Camry">Toyota Camry</a>
            </li>
            <li>
              <a href="vips_inner?link=Toyota_Vigo">Toyota Revo</a>
            </li>
            <li>
              <a href="vips_inner?link=HiAce">HiAc</a>
            </li>
            <li>
              <a href="vips_inner?link=Coaster">Coaster</a>
            </li>
            <li>
              <a href="MultiPurposeVehicles">Sagr APC &amp; UQAAB</a>
            </li>
          </ul>
        </div>
        <div class="footer_box flex flex-col px-[80px]">
          <h2 className="text-[20px] font-bold py-[30px] ">Office Address:</h2>
          <p className="px-[30px]">
            Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road,
            Karachi.
          </p>
          <ul class="address px-[30px]">
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
