import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. Tertarik Kerjasama?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Sebagai pelajar saya masih dalam proses belajar yang butuh banyak
        bimbingan, namun beberapa projek Blender khususnya humanoid Blender
        modelling sedang saya kerjakan, jika tertarik silahkan berkontak, senang
        hati untuk belajar ataupun berkolaborasi!.
      </p>

      <a href="mailto:noor.jsdivs@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
