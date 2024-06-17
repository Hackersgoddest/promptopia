"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Form from '@components/Form'

const EditPrompt = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')

    const [submitting, setSubmitting] = useState(false)
    const [postPrompt, setPostPrompt] = useState({
        prompt: '',
        tag: '',
    })

    useEffect(() => {
        (async () => {
            if (!promptId) return
            try {
                const response = await fetch(`/api/prompt/${promptId}`)
                const data = await response.json()
                setPostPrompt({
                    prompt: data.prompt,
                    tag: data.tag
                })
            } catch (error) {
                console.log(error)
            }
        })()
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        if (!promptId) return alert('Prompt ID not found')

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: postPrompt.prompt,
                    tag: postPrompt.tag
                })
            })
            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type="Edit"
            postPrompt={postPrompt}
            setPostPrompt={setPostPrompt}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default EditPrompt
