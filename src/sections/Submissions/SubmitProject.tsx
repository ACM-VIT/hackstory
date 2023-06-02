import React, { useState } from 'react';

const SubmitProject = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [domain, setDomain] = useState("");
  
  // Domain set as tags for testing.
  const data = [
    "Technology",
    "Innovation",
    "Programming",
    "Hackathon",
    "Finance"
  ];

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
          <p>Project Name</p>
          <input
            className='text-black'
            value={projectName}
            onChange={(e1) => setProjectName(e1.target.value)}
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
