import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllSeller = () => {
  const {
    data: allsellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/sellers`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully deleted the seller");
        refetch();
      });
  };

  const newInfo = {
    isVerified: true,
  };

  const handleEdit = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/advertised/${email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully verified the seller");
        refetch();
      });
  };

  return (
    <div>
      <h2 className='text-3xl'>All Sellers</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {" "}
                  <button
                    className='btn bg-yellow-400 border-none text-black hover:bg-yellow-500 btn-sm'
                    onClick={() => handleEdit(seller.email)}>
                    Verify
                  </button>{" "}
                </td>

                <td>
                  <button
                    className='btn btn-error hover:bg-red-700 btn-sm'
                    onClick={() => handleDelete(seller._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
