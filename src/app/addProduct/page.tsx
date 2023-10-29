"use client";

import { CLOUD_NAME, UPLOAD_PRESET } from "@/constants/constants";
import { Option } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });
  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "price" ? Number(e.target.value) : e.target.value,
      };
    });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "additionalPrice"
            ? Number(e.target.value)
            : e.target.value,
      };
    });
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const item = (target.files as FileList)[0];
    setFile(item);
  };

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file!);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      }
    );

    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = await upload();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: inputs.title,
          desc: inputs.desc,
          price: inputs.price,
          catSlug: inputs.catSlug,
          options,
          img: url,
        }),
      });

      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>Add New Product</h1>
        <div className="w-full flex flex-col gap-2">
          <label>Image</label>
          <input
            type="file"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            onChange={handleImgChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Desc</label>
          <textarea
            name="desc"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input
            type="number"
            name="price"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Category</label>
          <input
            type="text"
            name="catSlug"
            className="ring-1 ring-red-200 p-2 rounded-sm"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Options</label>
          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="ring-1 ring-red-200 p-2 rounded-sm"
              onChange={handleOptionChange}
            />
            <input
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
              className="ring-1 ring-red-200 p-2 rounded-sm"
              onChange={handleOptionChange}
            />
          </div>
          <button
            type="button"
            className="w-52 bg-red-500 text-white p-2"
            onClick={() => setOptions((prev) => [...prev, option])}
          >
            Add Option
          </button>
        </div>
        <div>
          {options.map((item, idx) => (
            <div
              key={idx}
              className="ring-1 ring-red-500 p-2 rounded-md cursor-pointer"
              onClick={() =>
                setOptions(options.filter((opt) => opt.title !== item.title))
              }
            >
              <span>{item.title}</span>
              <span>{item.additionalPrice}</span>
            </div>
          ))}
        </div>
        <button type="submit" className="w-full p-2 bg-red-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
