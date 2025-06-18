import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const [job, setJob] = useState(null);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch("api/jobs/");
        const data = await res.json();
        setJobs(data);
        // In case of an error
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        // Whatever the outcome is, we stop the loading state
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
  });
  return <div>JobPage</div>;
};

export default JobPage;
