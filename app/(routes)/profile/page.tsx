import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Profile() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>User Profile</h1>
      <p className='mb-6'>Here you can view and edit your profile information.</p>
        <UserProfile/>
    </div>
  )
}

export default Profile