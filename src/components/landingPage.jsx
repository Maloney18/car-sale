import Searchbar from "./searchbar"
import CarItem from "./carItem"
import { useSelector } from "react-redux"
import ReactPaginate from "react-paginate"
import { useState } from "react"
import { BsFillCloudHaze2Fill } from 'react-icons/bs'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"


const LandingPage = () => {
    const {allCars, searchCars, empty} = useSelector(store => store.db)

    const [pageNumber, setPageNumber] = useState(0)
    const carsPerPage = 6
    const pagesVisited = pageNumber * carsPerPage

    const displayAllCars = allCars.slice(pagesVisited, pagesVisited + carsPerPage)
    const searchItem = searchCars.slice(pagesVisited, pagesVisited + carsPerPage)
    const noOfPages = searchCars.length !== 0 ? Math.ceil(searchCars.length / 6) : Math.ceil(allCars.length / 6)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="flex items-center flex-col m-auto w-95 gap-10  pb-5">
            <Searchbar />

            
            {   empty ?
                ( 
                    <div className="flex flex-col items-center gap-y-5 h-80">
                        <BsFillCloudHaze2Fill className="fill-current text-red-500 h-20 w-20"/>

                        <div className=" flex  flex-col gap-y-1">
                            <p className="font-semibold text-xl self-center">Item not found</p>
                            <p className="text-center">Clear the search box to see all items, or try searching for another item</p>
                        </div>
                    </div>
                ) :
                searchCars.length !== 0 ?
                <div className='grid md:grid-col-3 gap-5 w-full'>       
                    {
                        searchItem.map( car => (
                            <CarItem key={car.id} details={car} />
                        ))
                    }
                </div>  :    
                <div className='grid md:grid-col-3 gap-5 w-full '>
                    {       
                        displayAllCars.map( car => (
                            <CarItem key={car.id} details={car} />
                        ))
                    }
                </div> 
            }

            {
                !empty && 
                <div className="w-full bg-gray-100 flex flex-col md:flex-row md:items-center justify-between p-2.5 rounded-2xl gap-5 shadow-md inset-2 border-white">
                    <p className="font-semibold">
                        {`${pagesVisited + carsPerPage} from ${searchCars.length !== 0 ? searchCars.length : allCars.length}`}
                    </p>

                    <ReactPaginate
                        previousLabel= {<AiOutlineArrowLeft />}
                        nextLabel= {<AiOutlineArrowRight />}
                        pageCount={noOfPages}
                        onPageChange={changePage}
                        containerClassName="paginate flex items-center gap-1.5 md:gap-2.5"
                        previousLinkClassName="p-2 bg-white"
                        nextLinkClassName="p-2 bg-white"
                        activeClassName="active"
                        disabledClassName="bg-gray-100"
                    />
                </div>
            }
        </div>
    )
}

export default LandingPage