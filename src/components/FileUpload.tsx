"use client";
import { uploadToS3 } from "@/lib/s3";
import { Inbox } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
	const { getRootProps, getInputProps } = useDropzone({
		accept: { "application/pdf": [".pdf"] },
		maxFiles: 1,
		onDrop: async (acceptedFiles) => {
			// console.log("accepted");
			const file = acceptedFiles[0];
			console.log(file);

			if (file.size > 10 * 1024 * 1024) {
				alert("Please upload a file smaller than 10MB");
				return;
			}

			try {
				const data = await uploadToS3(file);
				console.log("data", data);
			} catch (error) {
				console.log(error);
				alert("Error uploading file");
				return;
			}
		},
	});
	return (
		<div className="p-2 bg-white rounded-xl">
			<div
				{...getRootProps({
					className:
						"border-dashed border-2 border-gray-50 cursor-pointer rounded-xl py-8 flex justify-center items-center flex-col ",
				})}
			>
				<input className="hidden" {...getInputProps} />
				<div className="flex justify-center items-center flex-col">
					<Inbox className="w-10 h-10 text-blue-500" />
					<p className="mt-2 text-sm text-slate-400">Drop PDF here</p>
				</div>
			</div>
		</div>
	);
};

export default FileUpload;
