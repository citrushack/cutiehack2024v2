"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import cutiehackLOGO from "@/public/assets/cutieLogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses = {},
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y flex h-full w-full flex-col items-center font-righteous text-white">
      <div className="mt-4 flex w-full flex-row justify-end space-x-4">
        <Button asChild variant="back">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button
          variant="back"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          Sign Out
        </Button>
      </div>
      <div className="flex w-10/12 flex-col items-center pb-12 pt-5 md:w-1/2 xl:w-1/3">
        <Image src={cutiehackLOGO} className="m-4 w-1/3" alt="Logo" />
        <p className="m-0 w-full rounded-t-xl bg-[#3a439b] px-4 py-4 text-xl font-semibold">
          {header}
        </p>
        <div className="rounded-b-xl bg-[#5661C6] p-8">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
                packet={packet}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
