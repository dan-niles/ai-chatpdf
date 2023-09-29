import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";

export const getPineconeClient = () => {
	return new Pinecone({
		environment: process.env.PINECONE_ENVIRONMENT!,
		apiKey: process.env.PINECONE_API_KEY!,
	});
};

export async function loadS3intoPinecone(fileKey: string) {
	console.log("Loading S3 into File system");
	const file_name = await downloadFromS3(fileKey);
}
