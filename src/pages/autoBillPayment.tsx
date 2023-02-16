import React from "react";
import SigUpUI from "@/common/signUp";
import { useRouter } from "next/router";

const AutoBillPayment = () => {
  const router = useRouter();
  return (
    <>
      <SigUpUI
        title={"Automated Bill Payment"}
        description={
          "An auto reminder that gives you notification on your reoccuring bills like your Dstv subscription,and PHCN recharge."
        }
        onPress={() => router.push("/accountType")}
        bgImg="Union3.png"
        bgcolor={"#b3aa99"}
      />
    </>
  );
};
export default AutoBillPayment;
