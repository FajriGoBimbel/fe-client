import BlankLayout from "@/components/Layouts/BlankLayout";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const goaDatas = [
  {
    no: 1,
    title: "GOA 12 SMA IPA-TA. 23/24",
    kelas: "12 SMA IPA",
    soal: 40,
    waktu: 40,
    isSelesai: false,
  },
];

const GoAssesment = () => {
  return (
    <div className="container mx-auto my-10 md:my-20 px-4 sm:px-0">
      <Link href="/dashboard" className="flex gap-x-2 items-center mb-10">
        <BiLeftArrowAlt className="w-8 h-8" />
        <p className="font-bold text-base">GO ASSESMENT (GOA)</p>
      </Link>
      {goaDatas.map((item, index) => (
        <div
          key={index}
          className="border-2 border-black rounded-xl p-4 w-full mb-6"
        >
          <div className="flex gap-x-10 items-start md:items-center">
            <div
              className={`border-2 border-black rounded-xl p-3 ${
                item.isSelesai ? "bg-primary-success-300" : ""
              }`}
            >
              <p className="uppercase text-center font-bold">
                GOA <br /> 0{item.no}
              </p>
            </div>
            <div className="uppercase">
              <p className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">
                {item.title}
              </p>
              <p className="text-xs uppercase">
                {item.kelas} | {item.soal} Soal | {item.waktu} Menit
              </p>
            </div>
          </div>

          <div className="flex gap-x-4 mt-6 md:mt-0 justify-center md:justify-end items-center">
            {item.isSelesai !== true ? (
              <Link
                href="./go-assesment/soal"
                className="shadow-button !py-2 !text-sm"
              >
                Kerjakan
              </Link>
            ) : (
              <Link
                href="./go-assesment/hasil"
                className="outline-shadow-button !py-2 !text-sm"
              >
                Lihat Hasil
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

GoAssesment.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};

export default GoAssesment;
