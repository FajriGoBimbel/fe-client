import { MdVerticalShadesClosed } from "react-icons/md";
import {
  Belajar,
  Calender,
  Cart,
  Dashboard,
  IconFK11,
  IconFK3,
  IconFK9,
  Laporan,
  Networking,
  TST,
} from "../../public/assets/svg";

const MenuDashboardMobile = [
  {
    kategori: "Belajar",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Rencana Latihan",
        path: "#",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Jadwal & TST",
        path: "#",
      },
    ],
  },
  {
    kategori: "Berlatih",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Buku Sakti",
        path: "#",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Racing Soal Harian",
        path: "#",
      },
    ],
  },
  {
    kategori: "Bertanding",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "TOBK",
        path: "/dashboard/tobk",
      },
    ],
  },
  {
    kategori: "Lainnya",
    sub: [
      {
        icon: MdVerticalShadesClosed,
        name: "Leaderboard",
        path: "/leaderboard",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Laporan Belajar",
        path: "/dashboard/laporan-belajar",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Social Network",
        path: "#",
      },
      {
        icon: MdVerticalShadesClosed,
        name: "Beli Produk",
        path: "/product",
      },
    ],
  },
];

export default MenuDashboardMobile;
