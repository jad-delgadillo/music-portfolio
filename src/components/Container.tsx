import Head from "next/head";
import React from "react";

export default function Container(props: any) {
  const { children } = props;
  const meta = {
    title: "Jorge Aldem",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen w-screen items-center justify-center ">
        {children}
      </div>
    </>
  );
}
