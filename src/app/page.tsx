import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
     <SignedOut>
       <SignUpButton mode='modal'>
        Sign Up
      </SignUpButton>
     </SignedOut>
     <SignedIn>
      <SignOutButton>
        LogOut
      </SignOutButton>
     </SignedIn>
    </div>
  )
}

export default page