"use client";

import { Order } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      id,
      updatedStatus,
    }: {
      id: string;
      updatedStatus: string;
    }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedStatus),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const updatedStatus = input.value;
    mutation.mutate({ id, updatedStatus });
    toast.success("Order status has been updated!");
  };

  if (isLoading || status === "loading") {
    return <p>Loading...</p>;
  }

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
          {data.map((item: Order) => (
            <tr
              key={item.id}
              className={`text-sm md:text-base odd:bg-gray-100 ${
                item.status !== "delivered" && "!bg-red-50"
              }`}
            >
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">27.11.23</td>
              <td className="py-6 px-1">{item.price}</td>
              <td className="hidden md:block py-6 px-1">
                Coca Cola(2), Big Mac, Large Fries
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-red-400 p-2 rounded-full">
                      <Image src="/edit.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
