"use client";
import { NavLink } from "./Navlink";

const SideNav = () => {
  const links = [
    {
      icon: "./assets/home.png",
      text: "Dashboard",
      href: "/",
    },
    {
      icon: "./assets/home.png",
      text: "Lab Test",
      href: "/lab",
    },
    {
      icon: "./assets/home.png",
      text: "Appointment",
      href: "/Appointment",
    },
    {
      icon: "./assets/home.png",
      text: "Medicine Order",
      href: "/Medicine",
    },
    {
      icon: "./assets/home.png",
      text: "Message",
      href: "/Message",
    },
    {
      icon: "./assets/home.png",
      text: "Payment",
      href: "/Payment",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pl-8 pt-4 bg-white w-60 h-screen border-2 border-[#EAEFF4] shadow-lg">
      <h1 className="text-[#013CC6] text-2xl">Admin</h1>
      {links.map((link) => (
        <NavLink exact href={link.href} className="flex gap-2">
          <img className="w-5 h-5" src={link.icon} alt="" /> {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default SideNav;
