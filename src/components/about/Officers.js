import React from 'react';
import Officer from './Officer';
const officersList = [
  {
    name: 'Daniel Cufiño',
    position: 'Web Designer',
    description:
      'My name is Daniel Cufino and I am filling this infromation with random text so that it looks substantive.',
    imgURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
  },
  {
    name: 'Daniel Cufiño',
    position: 'Web Designer',
    description:
      'My name is Daniel Cufino and I am filling this infromation with random text so that it looks substantive.',
    imgURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
  },
  {
    name: 'Daniel Cufiño',
    position: 'Web Designer',
    description:
      'My name is Daniel Cufino and I am filling this infromation with random text so that it looks substantive.',
    imgURL:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHnxiCqVkDnPw/profile-displayphoto-shrink_200_200/0/1600142325949?e=1646265600&v=beta&t=uFfOHt6apymdms-1XmRglZD1X4Q3lcLJ398wbhouHco',
  },
];

const Officers = () => {
  const officerList = officersList.map((officer) => (
    <Officer
      name={officer.name}
      position={officer.position}
      description={officer.description}
      imgURL={officer.imgURL}
    />
  ));
  return (
    <>
      <ul>{officerList}</ul>
    </>
  );
};

export default Officers;
