import React from "react";
import { Outlet } from "react-router-dom";

export default function JobsLayout() {
  return (
    <section>
      <h2>Jobs</h2>
      <Outlet />
    </section>
  );
}
