import React from 'react'
import type { CatFact } from "@/types";

const SSRPage =async  () => {
        const response = await fetch(`https://catfact.ninja/fact` , {
          cache: "no-cache",
        });
        const data: CatFact = await response.json();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>SSR Page</h2>
        <h3>Cat Fact : {data.fact}</h3>
    </div>
  )
}

export default SSRPage