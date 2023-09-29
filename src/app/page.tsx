import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import { is } from "drizzle-orm";

import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export default async function Home() {
	const { userId } = auth();
	const user: User | null = await currentUser();
	const isAuth = !userId;
	console.log("userIDDDD ", isAuth);
	return (
		<div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="flex flex-col items-center text-center">
					<div className="flex items-center">
						<h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
						<UserButton afterSignOutUrl="/" />
					</div>

					<p className="max-w-xl mt-1 test-lg text-slate-600">
						Join millions of students, researchers and professionals to
						instantly answer questions and research with AI
					</p>

					<div className="flex mt-2">
						{isAuth && <Button>Go to Chats</Button>}
					</div>

					<div className="w-full mt-4">
						{isAuth ? (
							<FileUpload />
						) : (
							<Link href={"/sign-in"}>
								<Button>
									Login to Get Started <LogIn className="w-4 h-4 ml-2" />
								</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
