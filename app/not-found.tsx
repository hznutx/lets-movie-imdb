"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    },  );

    return () => clearTimeout(redirectTimer);
  }, [router]);

};

export default NotFound;
