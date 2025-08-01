import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Failed to fetch job:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    
    fetchJob();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return <div>JobPage - {job.title}</div>;
};

export default JobPage;