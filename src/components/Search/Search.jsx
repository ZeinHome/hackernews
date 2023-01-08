export default function Search({
  onSearchChange,
  value,
  onSubmit,
  children,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onSearchChange}
        value={value}
        placeholder="Wait..."
      />
      <button type="submit">{children}</button>
    </form>
  );
}
