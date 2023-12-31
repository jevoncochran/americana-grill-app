import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;

  // TODO: I want the left and right side link containers to be equal in width
  // And the logo to be displayed directly in the center of the nav
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      {/* LEFTSIDE LINKS */}
      <div className="hidden md:flex gap-4 lg:gap-6">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="#">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 text-center">
        <Link href="/">Americana Grill</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT SIDE LINKS */}
      <div className="hidden md:flex gap-4 lg:gap-6 items-center justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>(510) 827-2727</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
