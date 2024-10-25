// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name
      },
      tags: ['Official Website Signup'] // Add your desired tags here
    };

    const response = await fetch(
      `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(data)
      }
    );

    // If member already exists, update their tags
    if (response.status === 400) {
      const existingMember = await fetch(
        `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${Buffer.from(
          email.toLowerCase()
        ).toString('hex')}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            ...data,
            status_if_new: 'subscribed'
          })
        }
      );

      if (!existingMember.ok) {
        throw new Error('Failed to update existing member');
      }

      return NextResponse.json({
        success: true,
        message: 'Subscription updated successfully!'
      });
    }

    if (!response.ok) {
      const responseData = await response.json();
      console.error('Mailchimp API error:', responseData);
      return NextResponse.json(
        { 
          error: 'Subscription failed', 
          details: responseData.detail || responseData.message
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!'
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}