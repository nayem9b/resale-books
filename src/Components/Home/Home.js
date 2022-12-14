import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import BooksCategory from "../BooksCategory/BooksCategory";
import { useQuery } from "@tanstack/react-query";
import AdvertisedCard from "../AdvertisedCard/AdvertisedCard";
import { AuthContext } from "../Context/UserContext";
import { Content } from "../Content/Content";
import CategoryCard from "../Trial/CategoryCard/CategoryCard";
import BookLover from "../BookLover/BookLover";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/myproduct/:id")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // console.log(categories);

  const {
    data: advertisedproducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertised`);
      const data = await res.json();
      return data;
    },
  });

  const { user } = useContext(AuthContext);
  return (
    <section>
      <div className='flex mx-20 lg:mb-20'>
        <h1 className='w-1/2 text-7xl lg:mt-[270px] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-5xl '>
          Love to read books?
        </h1>
        <BookLover></BookLover>
      </div>

      <Content></Content>
      <h1 className='text-center text-5xl font-semibold mb-10'>
        Product Categories
      </h1>
      <div className='lg:ml-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-3 justify-center '>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.to}></CategoryCard>
        ))}
      </div>
      {advertisedproducts.length > 0 && (
        <div>
          <h1 className='text-center text-5xl font-semibold mb-10 '>
            Advertised Products
          </h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-6 gap-4'>
            {advertisedproducts.map((product) => (
              <AdvertisedCard
                product={product}
                key={product._id}></AdvertisedCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
