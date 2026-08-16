import React from 'react'
import { useLoaderData } from 'react-router-dom'

//github page and contactus page understanding remaining
function Github() {
    const data = useLoaderData()//useLoaderData ek React Router Hook hai.Ye loader jo data return karta hai, us data ko component(data) ke andar laata hai.

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-4 rounded-lg'>
            <div>Github followers: {data?.followers ?? 0}</div>
            {data?.avatar_url && (
                <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-full shadow-lg" />
            )}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/nishkarshgupta987-svg')
        if (!response.ok) return { followers: 0, avatar_url: '' }
        return await response.json()
    } catch {
        return { followers: 0, avatar_url: '' }
    }
}
