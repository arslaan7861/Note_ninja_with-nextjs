import React from "react";
import { ProfilePlaceholder } from "../icons/profile";

function ProfileLabel({
  username,
  imageUrl,
}: {
  username: string;
  imageUrl?: string;
}) {
  return (
    <label
      htmlFor="profile"
      className="relative text-secondary_text flex flex-col items-center gap-2"
    >
      <ProfilePlaceholder></ProfilePlaceholder>

      <p>
        {imageUrl ? "Tap to change profile image" : "Select a profile image"}
      </p>
    </label>
  );
}

export default ProfileLabel;
