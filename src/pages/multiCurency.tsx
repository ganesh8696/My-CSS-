import React from "react";
import SigUpUI from "@/common/signUp";
import { useRouter } from "next/router";

const MultiCurency = () => {
  const router = useRouter();
  const value = router.query;
  console.log(router, "value");

  return (
    <>
      <SigUpUI
        title={"Multi-curency Wallet"}
        description={
          "Send money to over 170 countries,choose from over 5 currencies."
        }
        onPress={() => router.push("/singleUseCard")}
        bgImg="Union.png"
        bgcolor={"#4b4b4d"}
      />
    </>
  );
};
export default MultiCurency;
