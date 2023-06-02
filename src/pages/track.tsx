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
            
        </div>
    </>
    
  );
};

export default Track;
