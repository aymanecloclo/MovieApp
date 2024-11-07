
const ListCategories=({genres})=>{
 
    return(
        <>

<div className="w-1/4 text-sm font-medium text-gray-900 bg-gray-900  border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white scroll-y-1">
  {genres.map((genre)=>{ return(
 <button key={genre.id}  aria-current="true" type="button" className="w-full px-4 py-2 font-medium text-left rtl:text-right text-white   border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600 ">
       {genre.name}
    </button>)
  })}
   

</div>

        </>
    );
}
export default ListCategories;