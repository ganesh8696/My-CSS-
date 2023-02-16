import React from "react";
import SigUpUI from "@/common/signUp";
import { useRouter } from "next/router";

const SingleUseCard = () => {
  const router = useRouter();
  return (
    <>
      <SigUpUI
        title={"Pay with single-use cards"}
        description={
          "Spend like a local with excellent exchange rate when you travel global and spend effortlessly."
        }
        onPress={() => router.push("/autoBillPayment")}
        bgImg={"Union2.png"}
        bgcolor={"#4b4b4d"}
      />
    </>
  );
};
export default SingleUseCard;
