function Statistics() {
  const stats = [
    {
      number: "50+",
      title: "Projects Completed",
    },
    {
      number: "30+",
      title: "Happy Clients",
    },
    {
      number: "5+",
      title: "Years of Experience",
    },
    {
      number: "24/7",
      title: "Technical Support",
    },
  ];

  return (
    <section className="bg-green-900 px-8 py-20">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-5xl">
          Market Impact and Achievements
        </h2>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-sm transition duration-300 hover:bg-green-100"
            >
              <h2 className="mb-3 text-4xl font-bold text-green-700 md:text-5xl">
                {stat.number}
              </h2>

              <p className="font-medium text-slate-600">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;