import React from "react";
import Image from "next/image";
import loading from "../../public/loading.gif";
import { useAuth } from "@/hooks/useAuth";
import router from "next/router";

const ForceAuth = (props: any) => {
  const { user, isLoading } = useAuth();

  const renderAdmin = () => {
    return <>{props.children}</>;
  };

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen ">
        <Image src={loading} alt={"Loading logo"} />
      </div>
    );
  };

  if (!isLoading && user?.email) {
    return renderAdmin();
  } else if (isLoading) {
    return renderLoading();
  } else {
    router.push("/auth");
    return null
  }
  return null;
};

export default ForceAuth;
