import type { APIContext } from "astro";
import { newtApiClient } from "@/api/newtApiClient";
import { getOgImage } from "@/components/OgImage";
import type { Member } from "@/types/newt";

export const getStaticPaths = async () => {
  const client = newtApiClient();

  const {items: members} = await client.getContents<Member>({
    appUid: "website",
    modelUid: "member",
  });
  
  return members.map((member) => ({
    params: { slug: member.slug },
  }));
}

export async function get({ params }: APIContext) {
  const client = newtApiClient();
  const {items: members} = await client.getContents<Member>({
    appUid: "website",
    modelUid: "member",
  });

  const member = members.find((member) => member.slug === params.slug);

  if (!member) {
    return {
      status: 404,
      body: "Not Found",
    };
  }

  const body = await getOgImage(member.name);

  return {
    status: 200,
    body,
    encoding: "binary",
  };
}