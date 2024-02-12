"use client";

import { api } from "@/convex/_generated/api";
import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnails.createThumbnail);

  const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser);

  return (
    <main className="">
      {isSignedIn ? <SignOutButton /> : <SignInButton />}

      {isSignedIn && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            const title = formData.get("title") as string;

            await createThumbnail({ title });

            form.reset();
          }}
        >
          <label>Title</label>
          <input name="title" className="text-black" />
          <button>Create</button>
        </form>
      )}
      {isSignedIn &&
        thumbnails?.map((item) => <div key={item._id}>{item.title}</div>)}
    </main>
  );
}
