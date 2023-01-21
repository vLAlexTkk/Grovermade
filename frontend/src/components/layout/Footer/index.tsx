import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { FOOTER_FILE } from "@src/data/data";

import { Container } from "@components/ui/container/Container";

import Logo from "public/images/logo.svg";
import Facebook from "@icons/socials/facebook.svg";
import Instagram from "@icons/socials/instagram.svg";
import Twitter from "@icons/socials/twitter.svg";
import YouTube from "@icons/socials/youtube.svg";
import LinkedId from "@icons/socials/linkedin.svg";

interface CircleProps {
  children: ReactNode;
  className?: string;
}

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const Cirlce: React.FC<CircleProps> = (props) => {
  return (
    <div
      className={clsx(
        "flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-full border border-orange bg-orange text-white transition-all hover:scale-110 hover:bg-white hover:text-orange",
        props.className
      )}
    >
      <a href="#link">{props.children}</a>
    </div>
  );
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <div
      className={clsx(
        "cursor-pointer text-14 font-medium leading-17 transition-all hover:scale-110 hover:text-primary lg:text-16",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between gap-10 py-5 lg:flex-row">
        <div className="grif-cols-1 grid gap-6">
          <Logo className="h-[35px] w-[120px] cursor-pointer lg:h-[65px] lg:w-[250px]" />
          <p className="text-14 leading-24 md:text-16">
            Contrary to popular is not simply <br /> random text
          </p>
          <div className="grid max-w-[250px] grid-cols-5 gap-3">
            <Cirlce>
              <Facebook className="h-3 w-1.5" />
            </Cirlce>
            <Cirlce>
              <Instagram className="h-3 w-3" />
            </Cirlce>
            <Cirlce>
              <Twitter className="h-3 w-3.5" />
            </Cirlce>
            <Cirlce>
              <YouTube className="h-2 w-3.5" />
            </Cirlce>
            <Cirlce>
              <LinkedId className="h-3 w-3 " />
            </Cirlce>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 md:grid-cols-3">
          {FOOTER_FILE &&
            FOOTER_FILE.map((info) => (
              <div key={info.id} className="flex flex-col">
                <h2 className="pb-4 text-16 font-semibold leading-33 lg:pb-6 lg:text-22">{info.title}</h2>
                <div className="flex flex-col gap-3">
                  <Paragraph>{info.detailedInfoFirst}</Paragraph>
                  <Paragraph>{info.detailedInfoSecont}</Paragraph>
                  <Paragraph>{info.detailedInfoThirt}</Paragraph>
                  <Paragraph>{info.detailedInfoFourth}</Paragraph>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};
