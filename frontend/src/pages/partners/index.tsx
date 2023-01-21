import { PartnersList } from "@components/entities/partners/PartnersList";
import { Container } from "@components/ui/container/Container";
import { NextPage } from "next";

const Partners: NextPage = (): JSX.Element => {
  return (
    <Container>
      <PartnersList />
    </Container>
  );
};

export default Partners;
