import React from 'react'
import type { CatFact } from "@/types";

const ISRPage =async  () => {
        const response = await fetch(`https://catfact.ninja/fact` , {
          cache: "no-cache",
        });
        const data: CatFact = await response.json();
  return (
    <div>
        <h3>Cat Fact : {data.fact}</h3>
    </div>
  )
}

export default ISRPage