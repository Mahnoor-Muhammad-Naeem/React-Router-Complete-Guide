import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Job Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Description: </b>We are seeking a passionate and skilled Web
        Developer to join our growing team. In this role, you will design and
        develop user-friendly web applications, collaborate with
        cross-functional teams, and ensure the delivery of high-quality
        solutions. You’ll play a key role in improving our online presence and
        creating engaging digital experiences for our customers.
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:5000/jobs/${id}');
  if (!res.ok) {
    throw Error("Could not find job details");
  }

  return res.json();
};
