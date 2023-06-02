import { useRouter } from "next/router";
import React, { useEffect } from "react";


const Track = () => {
  const router = useRouter();
  const { track } = router.query;

  useEffect(() => {
    console.log(track);
  }, [track]);

  return (
    <>
        <div className="text-white">
            Create array containing details of the track and display those details.
            Since next useRouter {"doesn't"} really support props, we are sending it as a router query.
        </div>
    </>
    
  );
};

export default Track;
