export default function QuantityCounter({
  count = 1,
  handleAdd,
  handleSub,
} = {}) {
  return (
    <div className="bg-light-gray flex justify-center items-center gap-x-3 py-2 px-7">
      <button
        onClick={handleSub}
        className="hover:text-orange"
      >
        -
      </button>
      <span className="text-Dark font-bold text-sm">{count}</span>
      <button
        onClick={handleAdd}
        className="hover:text-orange"
      >
        +
      </button>
    </div>
  );
}
