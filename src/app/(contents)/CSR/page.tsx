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
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <h3>Cat Fact : {data.fact}</h3>
    </div>
  );
};
export default CSRPage;