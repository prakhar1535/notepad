import { NextRequest, NextResponse } from "next/server";
import { getJson } from "serpapi";
import * as Dotenv from "dotenv";

Dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;

export async function POST(req: NextRequest) {
  const { title } = await req.json();

  if (!title) {
    return NextResponse.json({ message: "Title is required" }, { status: 400 });
  }

  const params = {
    engine: "google",
    q: title,
    api_key: apiKey,
  };

  try {
    const response = await getJson(params);
    const results = response["organic_results"];
    const videoReuslts = response["inline_videos"];
    const videoTtile = videoReuslts.length > 0 ? videoReuslts[0].title : null;
    const videoLink = videoReuslts.length > 0 ? videoReuslts[0].link : null;
    const firstLink = results.length > 0 ? results[0].link : null;
    const linkTitle = results.length > 0 ? results[0].title : null;
    const linkSource = results.length > 0 ? results[0].source : null;

    return NextResponse.json(
      {
        link: firstLink,
        title: linkTitle,
        source: linkSource,
        video_title: videoTtile,
        video_link: videoLink,
      },

      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data from SerpAPI" },
      { status: 500 }
    );
  }
}
