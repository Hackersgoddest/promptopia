'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [prompts, setPrompts] = useState([])
  const [filterPrompts, setFilterPrompts] = useState([])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    loadPrompts()
  }, [])

  useEffect(() => {
    if (!searchText) setFilterPrompts(prompts)
    const filteredPrompts = filterBySearchText(searchText)
    setFilterPrompts(filteredPrompts)
  }, [searchText])

  const loadPrompts = async () => {
    try {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPrompts(data)
      setFilterPrompts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const filterBySearchText = (data) => {
    const lowerCaseData = data.toLowerCase();
    return prompts.filter((prompt) => {
      const matchesPrompt = prompt.prompt.toLowerCase().includes(lowerCaseData);
      const matchesTag = prompt.tag && prompt.tag.toLowerCase().includes(lowerCaseData);
      const matchesCreator = prompt.creator.username.toLowerCase().includes(lowerCaseData);
      return matchesPrompt || matchesTag || matchesCreator;
    });
  };
  

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input type="text" placeholder='Search for prompts by username, content or tag'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer' />
      </form>

      <PromptCardList
        data={filterPrompts}
        handleTagClick={(tag) => setSearchText(tag)}
      />
    </section>
  )
}

export default Feed