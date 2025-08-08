"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/waitlist-modal";

type Props = React.ComponentProps<typeof Button> & {
  source?: string;
};

export default function WaitlistButton({
  source = "homepage",
  onClick,
  children,
  ...props
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        {...props}
        onClick={(e) => {
          onClick?.(e);
          setOpen(true);
        }}
      >
        {children}
      </Button>
      <WaitlistModal open={open} onOpenChange={setOpen} source={source} />
    </>
  );
}
