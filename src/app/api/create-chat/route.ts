import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
	try {
		const body = await req.json();
		const { file_key, file_name } = body;
		return NextResponse.json({ message: "Success" });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
}
