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
    <div className='text-white'>
      <div>
        <h1>Project Submission</h1>
      </div>
      <form>
        <div>
          <p>Project Name</p>
          <input
            className='text-black'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            type='text'
            autoComplete='new-password'
          />
        </div>
        <div>
          <p>Domain</p>
          <input
            list="domain"
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Search"
            value={domain}
            className='text-black'
          />
          <datalist id="domain">
            {data.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </datalist>
        </div>
        <div>
          <p>Upload File</p>
          <label htmlFor="file-upload" className="bg-yellow">
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
  );
};

export default SubmitProject;
