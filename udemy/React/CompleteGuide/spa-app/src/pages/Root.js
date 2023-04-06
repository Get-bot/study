import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../compontent/MainNavigation";
import classes from "./Root.module.css";

const RootLayot = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayot;
