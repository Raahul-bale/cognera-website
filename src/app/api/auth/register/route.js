import { NextResponse } from 'next/server'
import { createUser, validatePassword, validateEmail } from '@/lib/auth'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password, fullName, agreeToTerms } = body

    // Validate input
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!agreeToTerms) {
      return NextResponse.json(
        { error: 'You must agree to the Terms & Conditions' },
        { status: 400 }
      )
    }

    // Validate password
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: passwordValidation.errors.join(', ') },
        { status: 400 }
      )
    }

    // Create user
    const user = await createUser({ email, password, fullName })

    return NextResponse.json(
      { message: 'User created successfully', user },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }
}




