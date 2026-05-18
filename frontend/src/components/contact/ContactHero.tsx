const ContactHero = () => {
  return (
    <section className="relative -mt-3 h-[70vh] flex items-center justify-center text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
        }}
      ></div>

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Let’s Shape Your <span className="text-accent">Future Together</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 text-white/90">
          Connect with Erfolg experts for career guidance and study abroad consultation.
        </p>

        {/* <button className="bg-white text-black px-8 py-3 mt-4 rounded-xl font-semibold hover:bg-gray-900 transition">
          Arrange a Consultation
        </button> */}
      </div>
    </section>
  );
};

export default ContactHero;