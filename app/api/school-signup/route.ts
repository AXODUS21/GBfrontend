import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email, 
      password, 
      schoolName, 
      contactName, 
      contactPhone, 
      district, 
      country 
    } = body

    // Validate required fields
    if (!email || !password || !schoolName || !contactName) {
      return NextResponse.json(
        { error: 'Missing required fields: email, password, schoolName, and contactName are required' },
        { status: 400 }
      )
    }

    // Get backend URL from environment
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'
    
    // Forward the request to the backend API
    const response = await fetch(`${backendUrl}/api/school-signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password, // Ensure password is included
        school_name: schoolName,
        contact_name: contactName,
        contact_phone: contactPhone,
        district,
        country: country || 'USA',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Failed to register school' },
        { status: response.status }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('School registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

