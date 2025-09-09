"use client";

import React, { useState } from "react";
import FireFliesAIDataFlowDiagram from "./firefliesai-diagram";
import MaintainXDataFlowDiagram from "./maintainx-diagram";
import TattleDataFlowDiagram from "./tattle-diagram";
import MomosDataFlowDiagram from "./momos-diagram";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconChevronDown } from "@tabler/icons-react";

type DiagramType = "fireflies" | "maintainx" | "tattle" | "momos";

const diagrams = {
  fireflies: {
    name: "FireFlies AI",
    component: FireFliesAIDataFlowDiagram,
  },
  maintainx: {
    name: "MaintainX",
    component: MaintainXDataFlowDiagram,
  },
  tattle: {
    name: "Tattle",
    component: TattleDataFlowDiagram,
  },
  momos: {
    name: "Momos",
    component: MomosDataFlowDiagram,
  },
};

export default function DiagramsPage() {
  const [selectedDiagram, setSelectedDiagram] =
    useState<DiagramType>("fireflies");

  const SelectedDiagramComponent = diagrams[selectedDiagram].component;

  return (
    <div className="relative">
      {/* Floating Dropdown */}
      <div className="fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="min-w-48 shadow-lg bg-white/95 backdrop-blur-sm border-gray-200"
            >
              {diagrams[selectedDiagram].name} Diagram
              <IconChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="shadow-xl bg-white/95 backdrop-blur-sm"
          >
            {Object.entries(diagrams).map(([key, diagram]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => setSelectedDiagram(key as DiagramType)}
                className={selectedDiagram === key ? "bg-accent" : ""}
              >
                {diagram.name} Diagram
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Diagram Content */}
      <SelectedDiagramComponent />
    </div>
  );
}
