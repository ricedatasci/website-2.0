import React from 'react';
import Layout from '../layouts/Layout.js';
import Header from '../components/shared/Header.js';
import Blurb from '../components/shared/Blurb.js';
import Card from '../components/shared/Card.js';
import Officer from '../components/about/Officer.js';
import classes from '../styles/About.module.css';
import Officers from '../components/about/Officers.js';
const About = () => {
  const topTitle = 'about Rice DataSci';
  const aboutBlurb =
    'Rice DataSci is a club at Rice for undergraduates passionate about Data Science. Our goal is to create a coherent and interdisciplinary community for Data Science at Rice through academic and social events, and by collaborating with some great university organizations such as the d2k lab and k2i.';

  const officialChapterBlurb =
    'Rice DataSci is an official student chapter of the American Statistical Association.';

  return (
    <Layout>
      <Officers />
      {/* <div className={classes.aboutContainer}>
        <Header title={topTitle} />
        <Blurb description={aboutBlurb} />
        <Blurb description={officialChapterBlurb} />
        <Blurb description='For more information:' />
      </div> */}
      {/* <div className={classes.officerContainer}>
        <Card>
          <Officer
            name='Daniel Cufino'
            position='Web Designer'
            description='My name is Daniel Cufino and I am filling this infromation with random text so that it looks substantive.'
          />
        </Card>
        <Card>
          <Officer
            name='Daniel Cufino'
            position='Web Designer'
            description='My name is Daniel Cufino and I am filling this infromation with random text so that it looks substantive.'
          />
        </Card>
      </div> */}
    </Layout>
  );
};

export default About;
