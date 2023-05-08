import Image from "next/image";

import ArrowLeft from "@/public/img/arrow-left.svg";
import ArrowRight from "@/public/img/arrow-right.svg";
import Burger from "@/public/img/burger.svg";
import Clock from "@/public/img/clock.svg";
import CloseIcon from "@/public/img/close.svg";
import Logo from "@/public/img/xcal.svg";
import Profile from "@/public/img/profile.svg";
import Search from "@/public/img/search.svg";

export enum Asset {
  Calendar = "/img/calendar.svg",
  Diagram = "/img/diagram.svg",
  Logout = "/img/logout.svg",
  Message = "/img/message.svg",
  Settings = "/img/setting.svg",
}

interface ISvgAssets {
  name: Asset;
  width: number;
  height: number;
  alt: string;
}

function Svg({ name, width, height, alt }: ISvgAssets) {
  return <Image src={name} width={width} height={height} alt={alt} />;
}
export {
  ArrowLeft,
  ArrowRight,
  Burger,
  Clock,
  CloseIcon,
  Logo,
  Profile,
  Search,
};
export default Svg;
