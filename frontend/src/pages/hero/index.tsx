import { HeroList } from "@components/entities/hero/HeroList";
import { Container } from "@components/ui/container/Container";
import { NextPage } from "next";

const HeroBlock: NextPage = (): JSX.Element => {
  return (
    <Container>
      <HeroList/>
    </Container>
  );
};

export default HeroBlock;
