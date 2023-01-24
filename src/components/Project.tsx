import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project({ description, id, title, thumbnail, i }: any) {
  return (
    <div key={i} className="md:p-5 md:my-0 my-3 p-0">
      <Link href={`/music-projects/${id}`} passHref scroll={false}>
        <div className="relative md:hover:scale-[101%] transition-all  hover:shadow-xl rounded-xl p-2  hover:bg-zinc-50">
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={605}
            className="rounded-xl"
          />
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="font-extralight">{description}</p>
        </div>
      </Link>
    </div>
  );
}
