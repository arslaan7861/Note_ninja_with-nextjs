export async function like({ st }: { st: string }) {
  "use server";
  console.log("liked comment");
}
export async function dislike({ st }: { st: string }) {
  "use server";
  console.log("disliked comment");
}
