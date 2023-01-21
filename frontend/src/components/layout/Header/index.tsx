import React from "react";
import Link from "next/link";

import { HEADER_FILE } from "@src/data/data";
import { Container } from "@components/ui/container/Container";

import Logo from "@images/logo.svg";
import Burger from "@icons/burger.svg";
import { Button } from "@src/components/ui/button/Button";

export const Header: React.FC = () => {
  const [OpenMobileMenu, setOpenMobileMenu] = React.useState(false);
  return (
    <Container>
      <div className="flex flex-row items-center justify-between py-5">
        <a href="/">
          <Logo className="w-[120px] h-[35px] lg:h-[65px] lg:w-[250px] cursor-pointer" />
        </a>
        <div className="hidden flex-row items-center justify-end gap-7 lg:flex">
          {HEADER_FILE &&
            HEADER_FILE.map((header) => (
              <Link key={header.id} href={header.link} passHref>
                <a className="leadinf-24 font-medium transition-all focus:scale-110 focus:text-orange">
                  {header.title}
                </a>
              </Link>
            ))}
          <Button type="contact">Contact us</Button>
        </div>
        {OpenMobileMenu ? (
          <Burger className="h-2.5 w-4 lg:hidden" onClick={() => setOpenMobileMenu(!OpenMobileMenu)} />
        ) : (
          <Burger className="h-2.5 w-4 lg:hidden" onClick={() => setOpenMobileMenu(!OpenMobileMenu)} />
        )}
      </div>
      {OpenMobileMenu && (
        <div className="flex w-full flex-col gap-5 lg:hidden">
          {HEADER_FILE &&
            HEADER_FILE.map((header) => (
              <Link key={header.id} href={header.link}>
                <a className="leadinf-24 border-b border-orange pb-2 text-14 font-medium transition-all focus:scale-105 focus:border-primary focus:text-orange">
                  {header.title}
                </a>
              </Link>
            ))}
        </div>
      )}
    </Container>
  );
};
