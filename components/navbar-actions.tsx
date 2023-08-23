"use client";

import { ShoppingBag } from "lucide-react";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto items-center flex gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2"></span>
      </Button>
    </div>
  );
};

export default NavbarActions;
