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
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content="Alwaysjad" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col min-h-screen w-screen items-center justify-center bg-black ">
        {children}
      </div>
    </>
  );
}
