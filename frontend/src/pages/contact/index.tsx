import { NextPage } from "next";
import { Container } from "@components/ui/container/Container";
import { ConactList } from "@components/entities/contact/ContactList";

const ContactUs: NextPage = (): JSX.Element => {
  return (
    <Container>
      <ConactList />
    </Container>
  );
};

export default ContactUs;
