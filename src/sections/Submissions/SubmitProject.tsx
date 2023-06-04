import React, { useState, ChangeEvent,useEffect } from 'react';
import { NextPage } from 'next';
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "~/server/uploadthing";
import "@uploadthing/react/styles.css";
import { Manrope } from 'next/font/google';
import getHandler from "@/handlers/getHandler";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const manrope = Manrope({subsets:['latin']})

interface SubmitProjectState {
  projectName: string;
  description: string;
  url1: string;
  url2: string;
}

const SubmitProject: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/getTeamDetails`
    getHandler(URL)
      .then((res) => {
        if (res.statusCode != 200) {
          Toaster.error("You aren't in a team");
          router.push("/");
        }
      })
      .catch((err) => {
        Toaster.error("Internal Server Error");
        console.log(err);
      });
  }, []);

  

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUrl1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl1(event.target.value);
  };

  const handleUrl2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl2(event.target.value);
  };

  const handleSubmit = () => {
    // Perform validation or submit the form with the entered data
    // You can access the values in projectName, description, url1, url2, and selectedFile
  };

  const isFormValid = projectName && description && url1 ;


  return (
    <div className={`flex flex-col overflow-y-hidden mx-[10%] pt-[5%] ${manrope.className}`}>
      <div className="lg:w-3/4 bg-title rounded-lg shadow-md px-8 py-6 ">
        <h2 className="text-2xl font-bold mb-4">Project Submission</h2>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Project Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">URL 1 (GitHub URL)</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={url1}
              onChange={handleUrl1Change}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">URL 2 </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={url2}
              onChange={handleUrl2Change}
              type="text"
            />
          </div>
          <div className="mb-4">
            <UploadButton<OurFileRouter>
              endpoint="fileUploader"
              onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log('Files: ', res);
                  alert('Upload Completed');
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <button
            className={`bg-blue-500 text-white rounded px-4 py-2 font-semibold ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProject;
