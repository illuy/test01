import React from 'react'
import type { CatFact } from "@/types";

const SSGPage =async  () => {
        const response = await fetch(`https://catfact.ninja/fact`);
        const data: CatFact = await response.json();
  return (
    <div>
        <h3>Cat Fact : {data.fact}</h3>
    </div>
  )
}

export default SSGPage