'use client'
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Signoutbtn() {
  return (
    <Button onClick={() => signOut({ callbackUrl: '/' })}>
      Sign out
    </Button>
  )
}

