"use server";
export async function like({ st }: { st: string }) {
  console.log("liked comment");
}
export async function dislike({ st }: { st: string }) {
  console.log("disliked comment");
}
