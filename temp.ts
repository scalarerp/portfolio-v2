<div className="grid place-items-center col-span-full md:col-span-3">
  <motion.div className="flex flex-col justify-center " variants={textContainer} initial="initial" animate="animate">
    <motion.p variants={fadeIn("up")} className="pl-1 mb-1 text-base font-medium text-gray-300">
      Full Stack Web Developer
    </motion.p>
    <motion.h1 variants={fadeIn("up")} className="mb-4 text-5xl font-semibold sm:text-7xl md:text-8xl">
      Sumit <span className="text-black text-stroke">Dey</span>{" "}
    </motion.h1>
    {/* / YouTuber@BackbenchCoder */}
    <motion.div variants={fadeIn("up")} className="flex pl-1 mb-2 space-x-5">
      <button
        onClick={() => window.open("mailto:dev.sumitdey@gmail.com")}
        className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-[#292d31]"
      >
        <GiTie />
        <span>Hire Me</span>
      </button>
      <button className="flex items-center justify-center px-4 py-2 space-x-2 border border-gray-700 rounded-sm shadow-sm bg-[#292d31]">
        <BsFileCode />
        <a download="Sumit Dey Resume.pdf" href="/Sumit's Resume.pdf">
          Get Resume
        </a>
      </button>
    </motion.div>
    <motion.p variants={fadeIn("up")} className="relative pl-1 mt-4 text-lg text-gray-200 w-max md:text-2xl font-nato">
      Looking for a full time
      <span className="text-green-400"> job </span>
      <svg
        width="50"
        height="35"
        viewBox="0 0 60 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute text-green-400 -bottom-7 -right-4"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M2.00024 25.3631C5.44721 16.6278 25.0002 -2.09741 57.3811 11.2481"
          className="stroke-current"
          stroke-width="2.89672"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </motion.p>
  </motion.div>
</div>;

// arrow
<motion.span
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [10, 0, 10],
    transition: {
      delay: 1,
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  }}
  className="absolute -translate-x-1/2 bottom-12 left-1/2"
>
  <RiArrowDownSLine className="w-6 h-6" />
</motion.span>;