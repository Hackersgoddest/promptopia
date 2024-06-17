"use client"

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data: session } = useSession()
    const [prompts, setPrompts] = useState([])
    const router = useRouter()
    const searchParams = useSearchParams()
    const userId = searchParams.get('id')

    useEffect(() => {
        (async () => {
            if (!session?.user.id && !userId) return
            try {
                console.log("fetching users prompts", userId)
                const id = userId || session?.user.id
                const response = await fetch(`/api/users/${id}/prompts`)
                const data = await response.json()
                setPrompts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const handleEdit = (prompt) => {
        router.push(`/update-prompt?id=${prompt._id}`)
    }
    const handleDelete = async (prompt) => {
        const hasConfirmed = confirm('Are you sure you want to delete this prompt?')
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${prompt._id.toString()}`, { method: 'DELETE' })
                const filteredPrompts = prompts.filter((p) => p._id !== prompt._id)
                setPrompts(filteredPrompts)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <Profile
            name={userId ? `${prompts && prompts[0]?.creator?.username}'s` : 'My'}
            desc={userId ? '' : 'Welcome to your personalized profile page'}
            data={prompts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile