import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { AUDITOR_PERSONA, personaResponse } from '@/lib/persona';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, accessKey, chapterId } = body;

    if (!email && !accessKey) {
      return NextResponse.json(
        { error: 'Identifier required for Sanguine Optimization.' },
        { status: 400 }
      );
    }

    // Step 2: Ping user_purchases
    // We assume the table has columns like 'email' or 'access_key'
    const identifier = email || accessKey;
    const filterColumn = email ? 'email' : 'access_key';

    const { data: purchase, error: purchaseError } = await supabase
      .from('user_purchases')
      .select('*')
      .eq(filterColumn, identifier)
      .single();

    if (purchaseError || !purchase) {
      return NextResponse.json(
        { message: AUDITOR_PERSONA.rejection },
        { status: 403 }
      );
    }

    // Step 3: Fetch chapter from content_blocks
    // We assume content_blocks has 'id' and 'content'
    const { data: chapter, error: chapterError } = await supabase
      .from('content_blocks')
      .select('content')
      .eq('id', chapterId || 'latest') // Default to 'latest' if no specific ID
      .single();

    if (chapterError || !chapter) {
      return NextResponse.json(
        { error: 'Specified artifact could not be retrieved from the epochal anchor.' },
        { status: 404 }
      );
    }

    // Step 4: Deliver content in persona style
    const response = personaResponse(chapter.content);

    return NextResponse.json({
      success: true,
      auditor_report: response
    });

  } catch (error) {
    console.error('Audit Failure:', error);
    return NextResponse.json(
      { error: 'Internal system variance detected. Re-authenticate.' },
      { status: 500 }
    );
  }
}
