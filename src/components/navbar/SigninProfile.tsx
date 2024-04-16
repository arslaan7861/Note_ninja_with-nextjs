"use react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

function SigninProfile() {
  const session = useSession();
  useEffect(() => {
    // session.update();
    console.log(session);
  });

  return <div>SigninProfile</div>;
}

export default SigninProfile;
