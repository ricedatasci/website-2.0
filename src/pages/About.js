import React from 'react';
import Layout from '../layouts/Layout.js';
import Header from '../components/shared/Header.js';
import Blurb from '../components/shared/Blurb.js';
import Card from '../components/shared/Card.js';
import '../styles/About.css';

const About = () => {
  const topTitle = 'about Rice DataSci';
  const aboutBlurb =
    'Rice DataSci is a club at Rice for undergraduates passionate about Data Science. Our goal is to create a coherent and interdisciplinary community for Data Science at Rice through academic and social events, and by collaborating with some great university organizations such as the d2k lab and k2i.';

  const officialChapterBlurb =
    'Rice DataSci is an official student chapter of the American Statistical Association.';

  return (
    <Layout>
      <div className='aboutContainer'>
        <Header title={topTitle} />
        <Blurb description={aboutBlurb} />
        <Blurb description={officialChapterBlurb} />
        <Blurb description='For more information:' />
        <Card>
          <p>Test to see if card styling is working</p>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
