"use client";
import { CatFact } from "@/types";
import { useEffect, useState } from "react";

const CSRPage = () => {
  const [data, setData] = useState<CatFact | null>(null);

  const fetchCat = async () => {
    try {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result: CatFact = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

  if (!data) {
    return <div className='min-h-screen flex flex-col justify-center items-center'>
      <h3>로딩중...</h3>
      </div>;
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-2xl'>CSR Page</h2>
      <h3>Cat Fact : {data.fact}</h3>
    </div>
  );
};
export default CSRPage;