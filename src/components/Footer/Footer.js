import React from "react";
import "../Footer/Footer.css";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <footer style={{ paddingTop: "15vh" }} id="contact">
      <div className="footer-wrapper">
        <div className="touch-heading-wrapper">
          <h1>Get In Touch</h1>
        </div>
        {/* <img
          className="overlap-image"
          src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/Section.png?updatedAt=1698551530363"
        ></img> */}
        <div className="social-parent">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://www.linkedin.com/in/sudhanshu-yadav-48099a227/"
          >
            <div className="social-wrapper2">
              <div>
                <div className="logo-wrapper">
                  <div className="logo-container">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_252_6648)">
                        <mask
                          id="mask0_252_6648"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="25"
                        >
                          <path
                            d="M24 0.121094H0V24.1211H24V0.121094Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_252_6648)">
                          <path
                            d="M20.447 20.5731H16.893V15.0041C16.893 13.6761 16.866 11.9671 15.041 11.9671C13.188 11.9671 12.905 13.4121 12.905 14.9061V20.5731H9.351V9.12109H12.765V10.6821H12.811C13.288 9.78209 14.448 8.83209 16.181 8.83209C19.782 8.83209 20.448 11.2021 20.448 14.2871L20.447 20.5731ZM5.337 7.55409C4.193 7.55409 3.274 6.62809 3.274 5.48909C3.274 4.35109 4.194 3.42609 5.337 3.42609C6.477 3.42609 7.401 4.35109 7.401 5.48909C7.401 6.62809 6.476 7.55409 5.337 7.55409ZM7.119 20.5731H3.555V9.12109H7.119V20.5731ZM22.225 0.121094H1.771C0.792 0.121094 0 0.895094 0 1.85009V22.3921C0 23.3481 0.792 24.1211 1.771 24.1211H22.222C23.2 24.1211 24 23.3481 24 22.3921V1.85009C24 0.895094 23.2 0.121094 22.222 0.121094H22.225Z"
                            fill="#0A66C2"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_252_6648">
                          <rect
                            width="34"
                            height="34"
                            fill="white"
                            transform="translate(0 0.121094)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="detail-wrapper">
                  <h1>Linkedin</h1>
                  <p>My Linkedin Feed</p>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://twitter.com/Ayush_shivhare1"
          >
            <div className="social-wrapper2">
              <div className="">
                <div className="logo-wrapper">
                  <div className="logo-container">
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_252_6662)">
                        <path
                          d="M18.9014 0.515625H22.5815L14.5415 8.73364L24 19.9166H16.5941L10.7935 13.1342L4.1563 19.9166H0.473926L9.07358 11.1265L0 0.515625H7.59393L12.8372 6.71496L18.9014 0.515625ZM17.6098 17.9466H19.649L6.48589 2.3821H4.29759L17.6098 17.9466Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_252_6662">
                          <rect
                            width="24"
                            height="20"
                            fill="white"
                            transform="translate(0 0.121094)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="detail-wrapper">
                  <h1>X.Com</h1>
                  <p>Posting Curosities</p>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/SudhanshuAi?tab=repositories"
          >
            <div className="social-wrapper2">
              <div className="">
                <div style={{ marginLeft: "0.5vw" }} className="logo-wrapper">
                  <div className="logo-container">
                  <GithubOutlined style={{ fontSize: '44px',color:"white" }} />

                  </div>
                </div>
                <div className="detail-wrapper">
                  <h1>GitHub</h1>
                  <p>See My Work</p>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="mailto:sudhanshu26uv@gmail.com"
          >
            <div className="social-wrapper2">
              <div className="">
                <div className="logo-wrapper">
                  <div className="logo-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="40" viewBox="0 0 54 40" fill="none">
  <path d="M3.63545 40H12.1182V19.3992L0 10.3105V36.3646C0 38.3762 1.62989 40 3.63545 40Z" fill="#4285F4"/>
  <path d="M41.2031 40H49.6858C51.6975 40 53.3213 38.3702 53.3213 36.3646V10.3105L41.2031 19.3992" fill="#34A853"/>
  <path d="M41.2031 3.64576V19.3994L53.3213 10.3108V5.46349C53.3213 0.967648 48.1892 -1.59534 44.5962 1.10095" fill="#FBBC04"/>
  <path d="M12.1172 19.3991V3.64551L26.659 14.5519L41.2008 3.64551V19.3991L26.659 30.3055" fill="#EA4335"/>
  <path d="M0 5.46349V10.3108L12.1182 19.3994V3.64576L8.72508 1.10095C5.12598 -1.59534 0 0.967648 0 5.46349Z" fill="#C5221F"/>
</svg>
                  </div>
                </div>
                <div className="detail-wrapper">
                  <h1>Mail</h1>
                  <p>Connect with Me</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
