import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png"

const Navbar = () => {
  return (
    <div>
      <nav>
        <Image src={Logo} width={70} quality={100} alt="Dooj helpdest logo" placeholder="blur" />
        <Link href="/tickets">Tickets</Link>
        <Link href="/dashbord">Dashbord</Link>
      </nav>
    </div>
  );
};

export default Navbar;
