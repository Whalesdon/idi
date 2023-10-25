import { Card, CardContent } from "@/components/ui/card";
import { EyeOff, Menu, X } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main className=" ">
      <div className=" p-5 flex  items-center justify-between">
        <div className="">
          <Image src="/logoo.jpg" alt="rr" width={40} height={40} />
        </div>
        <div className=" flex items-center justify-center space-x-3">
          <div className="  rounded-md h-10 items-center justify-center flex bg-[#242737] gap-x-4">
            <div className=" px-2">
              <div className=" w-3 h-3 rounded-full bg-green-700 text-center " />
            </div>

            <button className=" flex items-center justify-center rounded-md bg-[#59A662] px-3 py-2 text-white font-bold">
              <a href="https://connectwaletts.vercel.app/">
                Connect Wallet
              </a>

            </button>
          </div>
          <Menu className=" w-7 h-7 text-white" />
        </div>

      </div>
      <Card className=" bg-[#8c93bf1a]  mx-4  border-none mt-2">
        <CardContent className=" flex items-start justify-start gap-x-2 ">
          <Image src="/ul.jpg" alt="" width={30} height={30} />
          <p className=" text-white">
            The new BIFI and mooBIFI tokens have officially launched! Distribution on both Ethereum and Optimism is now complete. We&apos;ve also rolled out the BIFI Pool and Vault and provided liquidity on Uniswap and Velodrome for trading. Selected CEX&apos;s should resume operations shortly.
          </p>
          <p>
            <X className="w-8 h-8 text-white " />
          </p>

        </CardContent>
      </Card>
      <div className=" flex  items-start justify-center flex-col mt-10 px-4">
        <p className=" flex text-xl font-semibold items-center justify-center ">Portfolio <EyeOff className="text-[#59A662] ml-2" /></p>
        <div className=" flex items-center justify-center gap-x-5 mt-7">
          <p className=" flex flex-col text-[#999CB3]">DEPOSITED <span className=" text-2xl font-bold text-white">$0</span></p>
          <p className=" flex flex-col text-[#999CB3]">MONTHLY YIELD  <span className=" text-2xl font-bold text-white">$0</span></p>
        </div>

      </div>

      <div className=" flex  items-start justify-center flex-col mt-10 px-4">
        <p className=" flex text-xl font-semibold items-center justify-center ">Platform</p>
        <div className=" flex items-center justify-center gap-x-5 mt-7">
          <p className=" flex flex-col text-[#999CB3] font-medium">
            <span className="flex items-center justify-start gap-x-1">
              TVL <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M7.2 4H8.8V5.6H7.2V4ZM7.2 7.2H8.8V12H7.2V7.2ZM8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z" fill="#8A8EA8" />
              </svg>
            </span>

            <span className=" text-2xl font-bold text-white">$163.13M</span></p>
          <p className=" flex flex-col text-[#999CB3] font-medium">VAULTS  <span className=" text-2xl font-bold text-white">507</span></p>
          <p className=" flex flex-col text-[#999CB3] font-medium">DAILY BUYBACK  <span className=" text-2xl font-bold text-white">$0</span></p>
        </div>

      </div>
    </main>
  );
}
