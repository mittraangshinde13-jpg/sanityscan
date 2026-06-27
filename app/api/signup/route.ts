import { NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzkwpeFhFS_5Nzg0DGJzY2M4K5LcYIVg0M95o20NxYEhePjY_rMTt0OprKDpD3BhYc/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Incoming body:", body);

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const responseText = await response.text();

    console.log("Google Apps Script Status:", response.status);
    console.log("Google Apps Script Response:", responseText);

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      response: responseText,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}