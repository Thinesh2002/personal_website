const stats = [
  { label: "Projects", value: "300+" },
  { label: "Pleasure", value: "8.9" },
  { label: "Customers", value: "3000+" },
  { label: "Team", value: "23" },
];

const Stats = () => {
  return (
    <section className="container mx-auto py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, i) => (
        <div key={i}>
          <h3 className="text-3xl text-neon font-bold">{stat.value}</h3>
          <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
