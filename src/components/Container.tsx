import Head from "next/head";
import React from "react";

export default function Container(props: any) {
  const { children } = props;
  const meta = {
    title: "Alwaysjad.— dangerously good music.",
    description: `Bringing ideas that provoke emotions to life.`,
    image:
      "https://res.cloudinary.com/dzepeibjw/image/upload/v1659152027/Metadata-image---alw_nrcnx6.png",
    type: "website",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen w-screen items-center justify-center bg-black ">
        {children}
      </div>
    </>
  );
}
