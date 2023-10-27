"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { title: "Home", url: "/" },
  { title: "Menu", url: "/menu" },
  { title: "Business Hours", url: "/" },
  { title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={toggleMenu}
        />
      )}

      {open && (
        <div className="w-full bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 z-10">
          {links.map((item, idx) => (
            <Link key={idx} href={item.url} onClick={toggleMenu}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={toggleMenu}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={toggleMenu}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={toggleMenu}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
