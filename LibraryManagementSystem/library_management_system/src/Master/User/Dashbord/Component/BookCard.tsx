type BookCardProps = {
  title: string;
  author: string;
  category: string;
  onCheckout?: () => void;
};

export default function BookCard({ title, author, category, onCheckout }: BookCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">Author: {author}</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
      <button
        onClick={onCheckout}
        className="mt-3 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
      >
        Checkout
      </button>
    </div>
  );
}
