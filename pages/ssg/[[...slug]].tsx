import React from "react";
import NextLink from "next/link";

export async function getStaticPaths() {
  // Fetch all parts data

  // Generate paths for each part
  //   const paths = allParts?.results?.map((part) => ({
  //     params: { id: part.id.toString() },
  //   }));

  const test = [1, 2, 3];
  const paths = test.map((i) => ({ params: { slug: [String(i)] } }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const argument = "ARG";
  const slug = params.slug;

  return { props: { argument, slug } };
}

export default function TestSsg({
  argument,
  slug,
}: {
  argument: string;
  slug: string;
}) {
  return (
    <div>
      HERE!!
      <p>{argument}</p>
      <p>{slug}</p>
      <NextLink href="/">Home</NextLink>
    </div>
  );
}
