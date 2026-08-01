function SuggestionCard({ suggestions }) {
  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        AI Suggestions
      </h2>

      <ul className="space-y-3">

        {suggestions?.map((item, index) => (

          <li key={index}>
            💡 {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default SuggestionCard;