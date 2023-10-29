"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteBtnProps {
  productId: string;
}

const DeleteBtn = ({ productId }: DeleteBtnProps) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}products/${productId}`,
      {
        method: "DELETE",
      }
    );

    if (res.status === 200) {
      router.push("/menu");
      toast.success("Product has been deleted successfully");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  if (status === "loading" || !session?.user.isAdmin) {
    return;
  }

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4"
      onClick={handleDelete}
    >
      <Image src="/delete.png" alt="" width={20} height={20} />
    </button>
  );
};

export default DeleteBtn;
