"use client";

import { ShoppingBag } from "lucide-react";
import Button from "@/components/ui/button";

const NavbarActions = () => {
  return (
    <div className="ml-auto items-center flex gap-x-4">
      <Button>
        <ShoppingBag size={20} color="white"></ShoppingBag>
      </Button>
    </div>
  );
};

export default NavbarActions;
