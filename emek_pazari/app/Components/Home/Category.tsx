function Category() {
    const CategoryList = [
        {
            name : "dantel"
        },
        {
            name : "dantel"
        },
        {
            name : "dantel"
        },
        {
            name : "dantel"
        },
        {
            name : "dantel"
        },
    ]

    return(
      <div className="flex item-center justif-center px-3 md:px-10 gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto"> 
        {CategoryList.map((c, i) => (
          <div className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-point flex-1" key={i}> 
          {c.name} </div>))} 
      </div>
    )
  }

  export default Category

  

  //<div> {CategoryList.map((c, i) => (<div key={i}> {c.name} </div>))} </div>