import React, {useState, useEffect} from 'react';
import RecipeCard from '@/components/RecipeCard'

function  RecipeGrid({data}) {

  return (
    <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16 w-full">
      { data.map((item, i) => {
        return (
          <RecipeCard key={i} data={item}></RecipeCard>
          )
        })
      }
      
    </div>
  );
    
}


export default RecipeGrid;