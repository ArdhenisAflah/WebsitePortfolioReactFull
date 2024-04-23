import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Hizratech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Magang
        <span className="text-textGreen tracking-wide">
          @hizratech_konsultan
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2024 - April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Belajar struktur perusahaan dan pembagian jobtask.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Terlibat dalam pemasaran dan pelayanan webinar atau seminar online
          mulai dari E-kinerja Guru dan pemanfaatan AI dalam pembelajaran.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Belajar cara menggunakan Adobe Premiere Pro dan aplikasi Photoshop
          beserta editing apps lainnya untuk mengedit video promosi Psikologi
          PT.Hizratech dan promosi Bapak kamsol sebagai bakal calon gubernur.
        </li>
      </ul>
    </motion.div>
  );
};

export default Hizratech;
