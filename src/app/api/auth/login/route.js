import { NextResponse } from 'next/server'
import { authenticateUser, generateToken } from '@/lib/auth'
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Authenticate user
    const user = await authenticateUser(email, password)

    // Generate token
    const token = generateToken(user)

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return NextResponse.json(
      { message: 'Login successful', user, token },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401 }
    )
  }
}






