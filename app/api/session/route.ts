import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import { NextResponse } from 'next/server'

export default async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Not Authorized' }, { status: 400 })
  return NextResponse.json({ success: session }, { status: 200 })
}
