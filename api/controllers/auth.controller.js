import bcrypt from 'bcrypt'
import prisma from '../api/prisma.js'

export const register = async (req, res) => {
  const { username, email, password } = req.body

  try {
    // hash the password
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    })

    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to create user!' })
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body

  try {
    // CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username },
    })

    if (!user) return res.status(401).json({ message: 'Invalid Credentials' })

    // CHECK IF PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid)
      return res.status(401).json({ message: 'Invalid Credentials' })

    // GENERATE COOKIE TOKEN ANS SEND TO USER
    // res.setHeader('Set-Cookie', 'test=' + 'myValue').json('success')
    const age = 1000 * 60 * 60 * 24 * 7
    res
      .cookie('test2', 'myValue2', { httpOnly: true, maxAge: age })
      .status(200)
      .json({ message: 'Login Successful' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to login' })
  }
}

export const logout = (req, res) => {}
