import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const getData = await retrieveDataById("products", id);
    if (getData) {
      return NextResponse.json({
        status: 200,
        message: "Succes get data",
        data: getData,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  } else {
    const getData = await retrieveData("products");
    if (getData) {
      return NextResponse.json({
        status: 200,
        message: "Succes get data",
        data: getData,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
}
