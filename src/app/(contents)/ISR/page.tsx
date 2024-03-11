import React from 'react'
import type { CatFact } from "@/types";

const ISRPage =async  () => {
        const response = await fetch(`https://catfact.ninja/fact` , {
          next: {
            revalidate: 5,
          },
        });
        const data: CatFact = await response.json();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>ISR Page</h2>
        <h3>Cat Fact : {data.fact}</h3>
    </div>
  )
}

export default ISRPage