import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your feedback" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
