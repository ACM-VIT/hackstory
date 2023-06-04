import React, { useState, ChangeEvent,useEffect } from 'react';
import { NextPage } from 'next';
import { UploadButton } from "@uploadthing/react";
import type { FileUploadRouter } from "@/server/uploadthing";
import "@uploadthing/react/styles.css";
import { Manrope } from 'next/font/google';
import getHandler from "@/handlers/getHandler";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";
import postHandler from '@/handlers/postHandler';

const manrope = Manrope({subsets:['latin']})

interface SubmitProjectState {
  projectName: string;
  description: string;
  projectLink: string;
  otherLinks: string;
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
  const [projectLink, setProjectLink] = useState("");
  const [otherLinks, setOtherLinks] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUrl1Change = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectLink(event.target.value);
  };

  const handleUrl2Change = (event: ChangeEvent<HTMLInputElement>) => {
    setOtherLinks(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
		if (projectName.trim() === "") {
			Toaster.error("Project name cannot be empty");
			return;
		}

    if (description.trim() === ""){
      Toaster.error("Description cannot be empty");
			return;
    }

    if (projectLink.trim() === ""){
      Toaster.error("Project link cannot be empty");
			return;
    }

		const toaster = Toaster.startLoad();

		const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/submission/create`;

		const res = await postHandler(URL, {
			projectName: projectName,
      projectLink: projectLink,
      description: description,
      otherLinks: otherLinks,
		});

		if (res.status === 1) {
			Toaster.stopLoad(toaster, "Project Submitted", 1);
			router.push("/team");
		} else {
			Toaster.stopLoad(toaster, "An error occured...", 0);
		}
	};

  const isFormValid = projectName && description && projectLink ;


  return (
    <div className={`flex flex-col overflow-y-hidden mx-[10%] pt-[3%] ${manrope.className}`}>
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
            <label className="block text-lg font-semibold mb-1">GitHub Link</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={projectLink}
              onChange={handleUrl1Change}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">Other Links</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 bg-inherit"
              value={otherLinks}
              onChange={handleUrl2Change}
              type="text"
            />
          </div>
          
          <button
            className={`bg-blue-500 text-white rounded px-4 py-2 font-semibold ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Submit
          </button>
          
          <div className="mb-4 mt-8 flex-col">
            <div className='text-xl font-semibold'>Want to add any other files?</div>
            <div className='mt-8'>
              <UploadButton<FileUploadRouter>
                endpoint="fileUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log('Files: ', res)
                    Toaster.success("File Uploaded")
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  console.log(error.message)
                  Toaster.error("An error occurred..")
                }}
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProject;
