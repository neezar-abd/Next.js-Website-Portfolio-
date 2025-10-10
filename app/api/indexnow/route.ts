import { NextResponse } from "next/server";

// IndexNow API endpoint
export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neezar.tech";
    const key = process.env.INDEXNOW_KEY || "generate-a-random-key-here";

    // Submit to IndexNow
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: new URL(siteUrl).hostname,
        key: key,
        keyLocation: `${siteUrl}/${key}.txt`,
        urlList: [url],
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "URL submitted to IndexNow",
      });
    } else {
      return NextResponse.json(
        { error: "Failed to submit to IndexNow" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("IndexNow error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to verify
export async function GET() {
  return NextResponse.json({
    message: "IndexNow API endpoint",
    status: "active",
  });
}
