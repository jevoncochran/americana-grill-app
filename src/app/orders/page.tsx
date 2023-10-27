const OrdersPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price </th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789112324</td>
            <td className="py-6 px-1">27.11.23</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Coca Cola(2), Big Mac, Large Fries
            </td>
            <td className="py-6 px-1">On the way (approximately 10 min...)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789112324</td>
            <td className="py-6 px-1">27.11.23</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Coca Cola(2), Big Mac, Large Fries
            </td>
            <td className="py-6 px-1">On the way (approximately 10 min...)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789112324</td>
            <td className="py-6 px-1">27.11.23</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Coca Cola(2), Big Mac, Large Fries
            </td>
            <td className="py-6 px-1">On the way (approximately 10 min...)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">123456789112324</td>
            <td className="py-6 px-1">27.11.23</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Coca Cola(2), Big Mac, Large Fries
            </td>
            <td className="py-6 px-1">On the way (approximately 10 min...)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
