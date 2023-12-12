import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./FooterBar.module.css";
import FooterCol from "../FooterCol/FooterCol";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const FooterBar = () => {
  const date = new Date();

  const footerInfo = [
    {
      title: "logo",
      list: [
        "hello@yourCode.com",
        "+20 91813 23 2309",
        "Somewhere in the World",
      ],
    },

    {
      title: "Home",
      list: ["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"],
    },
    { title: "AboutUs", list: ["Company", "Achievements", "Our Goals"] },
    {
      title: "Social Profiles",
      list: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
    },
  ];

  // const icons = [
  //   <SiGmail color="grey" />,
  //   <BsTelephoneFill color="grey" />,
  //   <FaLocationDot color="grey" />,
  // ];

  const socialList = [];

  //   const footerInfo = {
  //     logo: ["hello@yourCode.com", "+20 91813 23 2309", "Somewhere in the World"],
  //     Home: ["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"],
  //     AboutUs: ["Company", "Achievements", "Our Goals"],
  //   };

  return (
    <footer className="bg-body text-dark text-center text-md-start ">
      <Container className="p-4 py-5">
        <Row>
          {footerInfo.map((item) => (
            <FooterCol title={item.title} list={item.list} />
          ))}
        </Row>
      </Container>

      <div className={styles.copyRightText}>
        <span> &copy;{date.getFullYear()}</span>
        <a>YourCode.</a>
        <span> All rights reserved.</span>
      </div>
    </footer>
  );
};

// {/* <Col lg="3" md="6" className="mb-4 mb-md-0">
//         <h5 className="text-uppercase">Footer Content</h5>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
//           atque ea quis molestias. Fugiat pariatur maxime quis culpa
//           corporis vitae repudiandae aliquam voluptatem veniam, est atque
//           cumque eum delectus sint!
//         </p>
//       </Col>
//       */}

//       <Col lg="3" md="6" className="mb-4 mb-md-0">
//         <h5 className="text-uppercase">Links</h5>
//         {/* logo */}

//         <ul className="list-unstyled ">
//           {contactInfo.map((item) => (
//             <li className="d-flex gap-1">
//               <span>ll</span>
//               <a href="#!" className="text-dark text-decoration-none">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </Col>

//       {footerInfo.map((item) => (
//         <Col lg="3" md="6" className="mb-4 mb-md-0">
//           <h5 className="text-uppercase">{item[0]}</h5>
//           {/* logo */}

//           <ul className="list-unstyled ">
//             {item[1].map((ele) => (
//               <li>
//                 <a href="#!" className="text-dark text-decoration-none">
//                   {ele}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </Col>
//       ))}

//       <Col lg="3" md="6" className="mb-4 mb-md-0">
//         <h5 className="text-uppercase">Social Profiles</h5>

//         <p>
//           Est tempor mollit adipisicing fugiat eu labore commodo aliqua
//           officia commodo commodo elit proident labore. Aute amet non dolor
//           Lorem sunt pariatur laborum deserunt irure exercitation qui Lorem
//           nisi. Aliquip cillum deserunt occaecat sint anim officia ullamco
//           labore deserunt sunt.
//         </p>
//         {/* <ul className="list-unstyled ">
//           {footerInfo.logo.map((item) => (
//             <li>
//               <a href="#!" className="text-dark text-decoration-none">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul> */}
//       </Col>

//       {/* <Col lg="3" md="6" className="mb-4 mb-md-0">
//         <h5 className="text-uppercase mb-0">Links</h5>

//         <ul className="list-unstyled">
//           <li>
//             <a href="#!" className="text-white">
//               Link 1
//             </a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">
//               Link 2
//             </a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">
//               Link 3
//             </a>
//           </li>
//           <li>
//             <a href="#!" className="text-white">
//               Link 4
//             </a>
//           </li>
//         </ul>
//       </Col> */}

//       {/* <Col  className="mb-4 mb-md-0">
//         <h5 className="text-uppercase">Links</h5>
//         logo

//         <ul className="list-unstyled ">
//           {footerInfo.logo.map((item) => (
//             <li>
//               <a href="#!" className="text-dark text-decoration-none">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </Col> */}
