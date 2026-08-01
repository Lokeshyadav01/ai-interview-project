function StrengthCard({ strengths }) {
  return (
    <div className="bg-green-50 rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Strengths
      </h2>

      <ul className="space-y-3">

        {strengths?.map((item, index) => (

          <li key={index}>
            ✅ {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default StrengthCard;