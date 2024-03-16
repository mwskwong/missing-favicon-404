import { FC } from "react";

const Page: FC<{ params: { slug: string } }> = ({ params }) => (
  <div>{params.slug}</div>
);

export default Page;
