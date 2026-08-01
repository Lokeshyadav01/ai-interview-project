function WeaknessCard({ weaknesses }) {
  return (
    <div className="bg-red-50 rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-red-700 mb-4">
        Weaknesses
      </h2>

      <ul className="space-y-3">

        {weaknesses?.map((item, index) => (

          <li key={index}>
            ❌ {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default WeaknessCard;