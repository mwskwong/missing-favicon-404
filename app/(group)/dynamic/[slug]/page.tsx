import { notFound } from "next/navigation";
import { FC } from "react";

const Page: FC<{ params: { slug: string } }> = ({ params }) => {
  if (params.slug !== "valid") notFound();
  return <div>{params.slug}</div>;
};

export default Page;
