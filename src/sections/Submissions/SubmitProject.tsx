import React, { useState, ChangeEvent } from 'react';
import { NextPage } from 'next';

interface SubmitProjectState {
  projectName: string;
  selectedFile: File | null;
  domain: string;
}

const SubmitProject: NextPage = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [domain, setDomain] = useState("");

  // Domain set as tags for testing.
  const data: string[] = [
    "Technology",
    "Innovation",
    "Programming",
    "Hackathon",
    "Finance"
  ];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="">
				<div className="flex flex-col gap-y-12">
					<div className=" ml-10 mr-[20%] w-[80%] rounded-[20px] bg-title lg:ml-20 xl:ml-36">
						<div className="flex flex-col items-center justify-between gap-y-4 border-b border-yellow  py-4 text-center font-bold md:flex-row md:px-12 md:text-left lg:px-20">
							<p
								className={` px-2 text-[20px]`}
							>
								Project Submission
							</p>
						</div>
						<form>
              <div>
                  <p className={`ml-4 sm:ml-16 pt-[2rem] text-xl font-bold`}>Project Name</p>
                <input
                  className={`ml-4 mt-4  flex w-3/5 rounded border-b-2 border-black bg-inherit px-3 py-3 text-2xl  text-gray-700 focus:bg-inherit focus:outline-none sm:ml-16`}
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type='text'
                  autoComplete='new-password'
                />
              </div>
              <div>
                <p className={`ml-4 sm:ml-16 pt-[2rem] text-xl font-bold`}>Domain</p>
                <input
                  className={`ml-4 mt-4  flex w-3/5 rounded border-b-2 border-black bg-inherit px-3 py-3 text-2xl  text-gray-700 focus:bg-inherit focus:outline-none sm:ml-16`}
                  list="domain"
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Search"
                  value={domain}
                />
                <datalist id="domain">
                  {data.map((op) => (
                    <option key={op}>{op}</option>
                  ))}
                </datalist>
              </div>
              <div className='flex'>
								<p className={`ml-4 sm:ml-16 pt-[2rem] text-xl font-bold`}>Upload a file</p>
                <label htmlFor="file-upload" className="my-8 ml-4 rounded-[30px] bg-yellow px-8 py-2 text-center focus:outline-none sm:ml-16">
                  {selectedFile ? selectedFile.name : 'Choose File'}
                </label>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
							</div>
						</form>
					</div>
				</div>
        </div>
  );
};


export default SubmitProject;
