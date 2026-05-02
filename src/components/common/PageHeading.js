export default function PageHeading({ title, description }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-blue-100">{description}</p>}
      </div>
    </div>
  );
}
