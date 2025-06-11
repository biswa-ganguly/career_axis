"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState'

function AiChat() {

  const [userInput, setUserInput] = useState<string>("");
  

  return (
    <div className='p-4'>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className='text-2xl font-semibold mb-2'>AI Chat Question & Answer</h1>
          <p className='text-gray-500'>Make smarter career moves with AI-powered insights and advice.</p>
        </div>
        <Button>+ New Chat</Button>
      </div>

      <div className='flex flex-col justify-center items-center h-[75vh]'>
        <div>
          {/* Empty state Options */}
          <EmptyState selectedQuestion={(question:any)=>setUserInput(question)} />
        </div>

        <div className='flex-1'>
          {/* Message List */}
        </div>

        <div className='flex items-center w-[800px] justify-between gap-2'>
          <Input placeholder='Type your message here...' value={userInput} 
          onChange={(e)=> setUserInput(e.target.value)} />
          <Button><Send /></Button>
        </div>
      </div>
    </div>
  )
}

export default AiChat
