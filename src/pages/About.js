import React from 'react';
import Layout from '../layouts/Layout.js';

import Officers from '../components/about/Officers.js';
const About = () => {
  // const topTitle = 'about Rice DataSci';
  // const aboutBlurb =
  //   'Rice DataSci is a club at Rice for undergraduates passionate about Data Science. Our goal is to create a coherent and interdisciplinary community for Data Science at Rice through academic and social events, and by collaborating with some great university organizations such as the d2k lab and k2i.';

  // const officialChapterBlurb =
  //   'Rice DataSci is an official student chapter of the American Statistical Association.';

  return (
    <Layout>
      {/* <div>{aboutBlurb}</div>
      <div>{officialChapterBlurb}</div> */}
      <Officers />
    </Layout>
  );
};

export default About;
