import { Button } from '@/components/ui/button'
import React from 'react'

function AiChat() {
  return (
    <div>
      <div className="flex items-center justify-between  mb-4">
        <div className="">
        <h1 className='text-2xl font-semibold mb-2'>AI Chat Question & Answer</h1>
        <p className='text-gray-500'>Smarter career decisions start here — get tailored advice, real-time market insights, and a roadmap built just for you with the power of AI.</p>
      </div>
      <Button>+New Chat</Button>
      </div>

      <div>
        {/* Empty state Options */}
      </div>

      <div>
        {/* Message List */}
      </div>

      <div>
        {/* Message Input */}
      </div>

    </div>
  )
}

export default AiChat