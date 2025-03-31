import React from "react";
import "../CaseStudies/CaseStudies.css";
const CaseStudies = () => {
  return (
    <section style={{ paddingTop: "15vh" }} id="work">
      <h1 className="case-heading-wrapper">Expirience & Projects</h1>
      <div className="case-study-wrapper">
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://drive.google.com/file/d/1mCQ9SMvCW_8y4alHOuWZNL0io8XBT6CC/view"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Internship Work</p>
            <h1>Software Engineer Intern | CredenTek, Pune</h1>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Developed the Fantail-P (Xfer4Sure) Application: Utilized React.js to design and maintain a secure file
              transfer web application tailored for internal banking use, improving user experience and system functionality.</p></li>
            </ul>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Implemented Advanced Admin Dashboard Features: Resolved the challenge of detecting multiple device
              logins under the same account and enforced automatic logout of previously active sessions.</p></li>
            </ul>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Industry-Specific Expertise: Contributed to solutions for BFSI and NBFC clients, aligning development with
              industry standards and security requirements.</p></li>
            </ul>

            <hr />
          </div>
        </a>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://budget-tracker-green-two.vercel.app/sign-in?redirect_url=https%3A%2F%2Fbudget-tracker-green-two.vercel.app%2F"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Personal Project</p>
            <h1>Budget Tracker | Next.js, ShadcnUI, Postgresql, Prisma ORM, Tailwind</h1>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Developed a financial management platform using Next.js, streamlining transaction management by 40%, offering
              category-based analytics, and aggregating historical data for 25% better financial insights</p></li>
            </ul>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Improved user interface responsiveness by 30% using TypeScript, Tailwind CSS, Shadcn UI, and React-Query, with
              Recharts for interactive data visualization, increasing user engagement by 20%</p></li>
            </ul>
            <hr />
          </div>
        </a>

        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://tsk-atln.vercel.app/"
        >
          <div className="cases">
            <div className="link">
              <img
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/link-icon.png.png?updatedAt=1698502979937"
              ></img>
            </div>
            <p>Personal Project</p>
            <h1>SQL Query Runner | ReactJs, JavaScript, CSS, Zustand</h1>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Developed a SQL Query Runner with Zustand state management, implementing debounced search functionality and optimized query filtering based on bookmarked and recent status</p></li>
            </ul>
            <ul>
              <li><p style={{fontSize:"18px",width:"90%"}}>Enhanced user experience by designing a responsive UI, including a sidebar for query navigation and a results viewer for efficient data display and interaction</p></li>
            </ul>
            <hr />
          </div>
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
