'use client'

import { useState } from "react"
import { Input } from "./ui/Input"

const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <>
        </>
    )
}

export default Search

// .filter((post) => {
//     return search.toLowerCase() === ''
//       ? post
//       : post.properties?.Name.title.toLowerCase.includes(search)
//   })