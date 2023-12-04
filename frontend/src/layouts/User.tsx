import React from "react";
import {
  Navigation,
  MusicsSection,
  Footer,
  ContactForm
} from '../components'

type Props = {};

const User = (props: Props) => {
  return (
    <div className="min-h-screen w-full">
      <Navigation/>
      <MusicsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default User;
