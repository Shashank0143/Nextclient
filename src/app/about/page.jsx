import React from "react";
import { Typography, Container, Grid} from "@mui/material";
// import MetaData from "../component/layouts/MataData/MataData";
import AboutImage1 from "../../assets/images/About/about-Img_1.jpg";
import AboutImage2 from "../../assets/images/About/about-Img_2.jpg";
import Image from "next/image";
// import { Link } from "react-router-dom";

const About = () => {

  return (
    <>
      <div className="about_us">
        {/* <MetaData title={"About Us"} /> */}
        <Container className="container_12">
        <Typography
                variant="h1"
                component="h1"
                className="title_about"
              >
                About Us
              </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
                <Image src={AboutImage1} className="image_about" alt="Award Winning"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="introText_about">
                P&H by Priyanshu, a prominent high fashion brand established in 2019 following Mr. Priyanshu Pandey&apos;s recognition as the winner of the DLF Emporio Fashion Designer of the Year award, has quickly become synonymous with bespoke elegance and versatility. The brand&apos;s journey began with a prestigious opportunity to showcase its collection at DLF Emporio, setting the stage for its ascent in the fashion industry.

                Specializing in customization, P&H by Priyanshu caters to a wide spectrum of fashion needs, ranging from men&apos;s and women&apos;s wear to party attire, formal wear, themed outfits, bridal ensembles, and casual clothing. Each garment reflects a meticulous attention to detail and a deep understanding of contemporary fashion trends, ensuring that every piece embodies sophistication and exclusivity.

                Driven by a passion for innovation and quality craftsmanship, P&H by Priyanshu continues to redefine high fashion by seamlessly blending traditional techniques with modern aesthetics. Their commitment to creating unique and personalized clothing experiences has garnered a loyal clientele seeking distinctiveness and refinement in their wardrobes.

                As a brand that prides itself on creativity and customer satisfaction, P&H by Priyanshu remains dedicated to setting new standards of excellence in the world of couture, offering unparalleled customization and timeless elegance for every occasion.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="body1" className="introText_about">
                Mr. Priyanshu Pandey, recognized at the 2019 DLF Emporio Designer Awards, is celebrated for his creativity and innovation in fashion. A graduate of NIFT and Amity University, he established his brand P&H by Priyanshu with a strong foundation in design, refined through collaborations with prestigious fashion houses like Marie Claire Paris, Manish Malhotra, and Nitin Bal Chauhan.

                Priyanshu Pandey&apos;s designs are renowned for their meticulous craftsmanship, intricate details, and a modern interpretation of global fashion trends. His distinctive style effortlessly blends traditional artistry with contemporary elegance, appealing to a discerning clientele.

                His achievements at the DLF Emporio Designer Awards highlight his significant contributions to the fashion industry, showcasing his commitment to pushing creative boundaries and setting new standards in haute couture.

                <h4 style={{marginTop:"1rem"}}>Mission Statement</h4>
                At P&H by Priyanshu, our mission is to redefine high fashion with bespoke garments that embody sophistication, elegance, and individuality, delivering exceptional, personalized fashion experiences that set new standards in couture excellence.
                <h4 style={{marginTop:"1rem"}}>Vision Statement</h4>
                Our vision at P&H by Priyanshu is to gain global recognition as a leader in creativity, innovation, and superior craftsmanship in the fashion industry. We aspire to innovate continually, blending traditional techniques with modern aesthetics to create timeless pieces that inspire confidence and celebrate personal style. Through our commitment to quality, exclusivity, and client satisfaction, we aim to build enduring relationships with our discerning clientele worldwide.

              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image
                src={AboutImage2}
                alt="Fashion Clothing"
                className="image_about"
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Fashion Clothing is dedicated to providing high-quality Fashion
            equipment and accessories to Fashion enthusiasts worldwide. Our
            mission is to empower Fashioners with the best tools to enhance
            their performance on the field. With a focus on innovation,
            craftsmanship, and customer satisfaction, we have become a trusted
            brand in the Fashion community.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Since our inception in 2019, we have built a strong customer base
            and expanded our product range to cater to the diverse needs of
            players at every level. We take pride in offering genuine Fashion
            products that are carefully curated and tested for quality and
            performance. Our team of experts works closely with manufacturers to
            ensure that our customers receive top-notch products.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At Fashion Clothing, we believe in fostering long-term relationships
            with our customers. We provide excellent customer service and strive
            to exceed expectations at every step. We are committed to delivering
            a seamless online shopping experience and ensuring customer
            satisfaction. Join us on this exciting journey as we continue to
            grow and expand our reach in the world of Fashion.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Fashion Clothing is driven by the mission to provide high-quality
            Fashion equipment and accessories at affordable prices. We aim to
            make Fashion accessible to players worldwide and support their
            passion for the sport. Our mission is to offer a wide range of
            Fashion equipment, including bats, balls, protective gear, and
            accessories, that meet the highest standards of quality and
            performance.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            We are committed to continuously innovating and improving our
            product range to meet the evolving needs of Fashioners. Our team of
            experts works closely with manufacturers and conducts rigorous
            quality testing to ensure that every product we offer delivers
            exceptional performance on the field. We believe that every player
            deserves the best tools to enhance their skills and achieve their
            Fashioning goals.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container> */}
      </div>
    </>
  );
};

export default About;
