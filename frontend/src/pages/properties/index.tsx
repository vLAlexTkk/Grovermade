import { PropertiesList } from "@components/entities/properties/PropertiesList";
import { Container } from "@components/ui/container/Container";
import { NextPage } from "next";

const Properties: NextPage = (): JSX.Element => {
  return (
    <Container>
      <PropertiesList />
    </Container>
  );
};

export default Properties;
