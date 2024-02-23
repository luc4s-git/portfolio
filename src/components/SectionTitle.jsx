// eslint-disable-next-line react/prop-types
export default function SectionTitle({ text }) {
  return (
    <div className="border-b border-gray-300 p-5">
      <h2 className="text-3xl font-medium capitalize">{text}</h2>
    </div>
  );
}
