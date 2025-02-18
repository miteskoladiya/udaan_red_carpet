// src/app/api/admin/nominees/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { Nominee } from '@/model/User';

export async function GET() {
  try {
    await connectDB();
    const nominees = await Nominee.find().populate('position');
    return NextResponse.json(nominees);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}