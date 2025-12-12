import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load users from file
function loadUsers() {
  ensureDataDir()
  if (fs.existsSync(USERS_FILE)) {
    try {
      const data = fs.readFileSync(USERS_FILE, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }
  return []
}

// Save users to file
function saveUsers(users) {
  ensureDataDir()
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
}

export async function hashPassword(password) {
  return await bcrypt.hash(password, 10)
}

export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword)
}

export function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export async function createUser(userData) {
  const { email, password, fullName } = userData
  
  const users = loadUsers()
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    throw new Error('User with this email already exists')
  }

  // Hash password
  const hashedPassword = await hashPassword(password)

  // Create user
  const newUser = {
    id: Date.now().toString(),
    email,
    fullName,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    provider: 'credentials'
  }

  users.push(newUser)
  saveUsers(users)

  return {
    id: newUser.id,
    email: newUser.email,
    fullName: newUser.fullName
  }
}

export async function authenticateUser(email, password) {
  const users = loadUsers()
  const user = users.find(u => u.email === email)
  
  if (!user) {
    throw new Error('Invalid email or password')
  }

  if (user.provider !== 'credentials') {
    throw new Error('Please sign in with your OAuth provider')
  }

  const isValid = await verifyPassword(password, user.password)
  
  if (!isValid) {
    throw new Error('Invalid email or password')
  }

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName
  }
}

export function validatePassword(password) {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const errors = []

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`)
  }
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter')
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter')
  }
  if (!hasNumber) {
    errors.push('Password must contain at least one number')
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function createOrFindOAuthUser(userData) {
  const { email, fullName, provider, providerId, picture } = userData
  
  const users = loadUsers()
  
  // Check if user already exists by email or provider ID
  let existingUser = users.find(u => 
    u.email === email || 
    (u.provider === provider && u.providerId === providerId)
  )

  if (existingUser) {
    // Update user info if needed
    existingUser.fullName = fullName || existingUser.fullName
    existingUser.picture = picture || existingUser.picture
    saveUsers(users)
    
    return {
      id: existingUser.id,
      email: existingUser.email,
      fullName: existingUser.fullName
    }
  }

  // Create new OAuth user
  const newUser = {
    id: Date.now().toString(),
    email,
    fullName: fullName || 'User',
    provider,
    providerId,
    picture,
    createdAt: new Date().toISOString()
  }

  users.push(newUser)
  saveUsers(users)

  return {
    id: newUser.id,
    email: newUser.email,
    fullName: newUser.fullName
  }
}
