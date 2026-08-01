import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#16a34a",
  "#dc2626",
];

function SkillPieChart({
  matched,
  missing,
}) {

  const data = [
    {
      name: "Matched",
      value: matched,
    },
    {
      name: "Missing",
      value: missing,
    },
  ];

  return (
    <PieChart
      width={350}
      height={300}
    >

      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={100}
      >

        {data.map((entry, index) => (

          <Cell
            key={index}
            fill={COLORS[index]}
          />

        ))}

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>
  );
}

export default SkillPieChart;