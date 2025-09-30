export default function Input({ input, handleInput, fetchWeatherData }) {
  return (
    <div className="input-container lg:flex gap-5 justify-center p-5">
      <input
        className="flex-2 border-4 w-full px-4 py-2 border-black-300 rounded-3xl bg-sky-200 text-black font-bold"
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={handleInput}
      />
      <button
        className="flex-1 w-full border-4 rounded-3xl bg-sky-200 font-bold cursor-pointer"
        onClick={fetchWeatherData}
      >
        Search
      </button>
    </div>
  );
}
