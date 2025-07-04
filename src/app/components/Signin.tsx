'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function SignInButton() {
  return (
    <Button onClick={() => signIn('google', { callbackUrl: '/' })}>
      Sign in with Google
    </Button>
  )
}

