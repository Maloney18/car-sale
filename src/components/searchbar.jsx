import { useDispatch } from "react-redux"
import { populateSearch, clearSearch, resetEmpty } from "../db/features/cars"
import { useState } from "react"
import { RiSearch2Line, RiArrowDropDownLine } from 'react-icons/ri'

const Searchbar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const searchFunction = () => {
        search.length !== 0 ?
        dispatch(populateSearch(search.toLowerCase())) :
        dispatch(clearSearch())
    }

    return (
        <div className="p-2.5 rounded-2xl self-center flex items-center gap-5 bg-gray-100 w-full shadow-md">
            <div className="flex bg-white items-center rounded-full w-full justify-between md:w-1/2 py-2 pr-2.5 pl-3.5">
                <input 
                    type="text" 
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)

                        if (e.target.value.length === 0) {
                            dispatch(clearSearch())
                            dispatch(resetEmpty())
                        }
                    }}
                    className="bg-transparent md:w-4/6 outline-none border-none"
                    placeholder="Search..."
                />

                <RiSearch2Line className="w-5 h-5 cursor-pointer hover:opacity-5" onClick={() => searchFunction()}/>
            </div>

            <div className="hide gap-x-1.5 items-center cursor-pointer">
                <p>Relevance</p>
                <RiArrowDropDownLine />
            </div>

            <div className="hide gap-x-1.5 items-center cursor-pointer">
                <p>All brands</p>
                <RiArrowDropDownLine />
            </div>
        </div>
    )
}

export default Searchbar