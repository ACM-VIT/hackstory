import Header from "@/components/Common/Header";
import React from "react";
import SubmitProject from "@/sections/Submissions/SubmitProject";
import { UploadButton } from "@uploadthing/react";
import type { FileUploadRouter } from "@/server/uploadthing";
import "@uploadthing/react/styles.css";

const Submission = () => {
  return (
    <div>
      {/* <Header />
        <SubmitProject /> */}

      <UploadButton<FileUploadRouter>
        endpoint="fileUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Files uploaded successfully!");
        }}
        onUploadError={(err: Error) => {
          console.log("Error: ", err);
          alert("Skill issue");
        }}
      />
    </div>
  );
};

export default Submission;
