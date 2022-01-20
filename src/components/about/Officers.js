import React from 'react';
import Officer from './Officer';
import classes from '../../styles/Officers.module.css';
const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env;
const DUMMY_LIST = [
  {
    name: 'Daniel Cufiño',
    position: 'Web Designer',
    description:
      'My name is Daniel Cufino and I am filling this information with random text so that it looks substantive.',
    imgURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
  },
  {
    name: 'Daniel Cufiño',
    position: 'Web Designer',
    description:
      'My name is Daniel Cufino and I am filling this information with random text so that it looks substantive.',
    imgURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
  },
];

const contentful = require('contentful');

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN,
});

const Officers = () => {
  // const officersJSX = officersList.map((officer) => (
  //   <Officer
  //     name={officer.name}
  //     position={officer.position}
  //     description={officer.description}
  //     imgURL={officer.imgURL}
  //   />
  // ));
  const officersList = [];
  client.getEntries().then((entries) => {
    entries.items.forEach((entry) => {
      officersList.push({
        name: entry.fields.name,
        position: entry.fields.position,
        description: entry.fields.description,
        imgURL:
          'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
      });
      // console.log(entry.fields.image.fields.file.url.slice(2));
    });
  });
  console.log(DUMMY_LIST);
  console.log();
  console.log(officersList);

  const officersJSX = officersList.map((officer) => (
    <Officer
      name={officer.name}
      position={officer.position}
      description={officer.description}
      imgURL={officer.imgURL}
    />
  ));
  console.log(officersJSX);
  return (
    <section className={classes.officers}>
      <ul>{officersJSX}</ul>
    </section>
  );
};

export default Officers;
