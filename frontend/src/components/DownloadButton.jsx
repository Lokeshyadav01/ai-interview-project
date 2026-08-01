function DownloadButton() {

  const handleDownload = () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
    >
      Download Report
    </button>
  );
}

export default DownloadButton;