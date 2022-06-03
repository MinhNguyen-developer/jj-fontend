/** @format */
import {
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import CenterMenu from "../MenuBar/navbar.820px/CenterMenu";
const Footer = () => {
  const headingStyle =
    "uppercase mb-[12px] font-semibold text-[#191919] text-[1.2rem]";
  const paragraphStyle =
    "text-[#acacac] mb-[4px] leading-normal cursor-pointer";
  const socialStyle =
    "rounded-full border-2 border-white  mr-[1rem] cursor-pointer flex items-center justify-center";
  // const iconStyle = ""
  return (
    <div className="footer w-[100%] pt-[60px] px-[5%] pb-[40px] bg-[#f7f7f7]">
      <div className="grid footer-row grid-cols-4 gap-[64px] auto-rows-auto">
        <div>
          <h4 className={headingStyle}>Company</h4>
          <p className={paragraphStyle}>About</p>
        </div>
        <div>
          <h4 className={headingStyle}>Hanoi Office</h4>
          <p className={paragraphStyle}>bla bla bla</p>
          <h4 className={headingStyle}>Sai Gon Office</h4>
          <p className={paragraphStyle}>blo blo blo</p>
        </div>
        <div>
          <h4 className={headingStyle}>Policy</h4>
          <br />
          <h4 className={headingStyle}>Contact</h4>
          <p className={paragraphStyle}>Hotline: 012345678</p>
          <p className={paragraphStyle}>Email: info@mindx.edu.vn</p>
        </div>
        <div>
          <h4 className={headingStyle}>Social</h4>
          <div className="social flex">
            <a href="#" className={socialStyle}>
              <Facebook />
            </a>
            <a href="#" className={socialStyle}>
              <Instagram />
            </a>
            <a href="#" className={socialStyle}>
              <YouTube />
            </a>
            <a href="#" className={socialStyle}>
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <p className="pt-[38px] mt-[58px] text-[12px] text-[#acacac] border-t border-t-[#bbb]">
        Copyright @ by somebody
      </p>
    </div>
  );
};
export default Footer;
