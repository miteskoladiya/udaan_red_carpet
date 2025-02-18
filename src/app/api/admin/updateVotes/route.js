// src/app/api/admin/updateVotes/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { Nominee } from '@/model/User';

export async function POST(request) {
  try {
    const { nomineeId, votes } = await request.json();
    await connectDB();
    
    const nominee = await Nominee.findByIdAndUpdate(
      nomineeId,
      { votes },
      { new: true }
    );
    return NextResponse.json(nominee);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}