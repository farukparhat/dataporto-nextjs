"use client";

import React from "react";
import { ReactFlow, Node, Edge, Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { LucideIcon } from "lucide-react";

// Types for our flexible diagram API
interface FlexibleNodeData {
  label: string;
  icon?: LucideIcon | React.ComponentType<any>;
  iconColor?: string;
  description?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showHandles?: boolean;
}

export interface FlexibleDiagramNode {
  id: string;
  label: string;
  icon?: LucideIcon | React.ComponentType<any>;
  iconColor?: string;
  description?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  stage?: number; // Stage number for horizontal flows (0, 1, 2, etc.)
}

export interface FlexibleDiagramConnection {
  from: string;
  to: string;
  animated?: boolean;
  color?: string;
  label?: string;
}

export interface FlexibleDiagramProps {
  nodes: FlexibleDiagramNode[];
  connections: FlexibleDiagramConnection[];
  title?: string;
  height?: string;
  className?: string;
  layout?: "horizontal" | "vertical";
}

// Custom node component
const FlexibleNode = ({ data }: { data: FlexibleNodeData }) => {
  const getVariantStyles = (variant: string = "default") => {
    const baseColors = {
      default: {
        background: "bg-white",
        border: "border-gray-200",
        hover: "hover:border-gray-300",
        text: "text-gray-900",
        handle: "#6b7280",
      },
      primary: {
        background: "bg-gradient-to-r from-blue-500 to-indigo-600",
        border: "border-blue-300",
        hover: "hover:border-blue-400",
        text: "text-white",
        handle: "#ffffff",
      },
      success: {
        background: "bg-gradient-to-r from-green-50 to-emerald-50",
        border: "border-green-200",
        hover: "hover:border-green-300",
        text: "text-green-900",
        handle: "#10b981",
      },
      warning: {
        background: "bg-gradient-to-r from-yellow-50 to-amber-50",
        border: "border-yellow-200",
        hover: "hover:border-yellow-300",
        text: "text-yellow-900",
        handle: "#eab308",
      },
      danger: {
        background: "bg-gradient-to-r from-red-50 to-rose-50",
        border: "border-red-200",
        hover: "hover:border-red-300",
        text: "text-red-900",
        handle: "#ef4444",
      },
    };

    return baseColors[variant as keyof typeof baseColors] || baseColors.default;
  };

  const getSizeStyles = (size: string = "md") => {
    const sizes = {
      sm: {
        container: "w-32 h-8 px-3 py-1",
        icon: "h-3 w-3",
        text: "text-xs",
        handle: "w-2 h-2",
      },
      md: {
        container: "w-40 h-10 px-4 py-2",
        icon: "h-4 w-4",
        text: "text-sm",
        handle: "w-3 h-3",
      },
      lg: {
        container: "w-48 h-12 px-6 py-3",
        icon: "h-5 w-5",
        text: "text-base",
        handle: "w-4 h-4",
      },
    };

    return sizes[size as keyof typeof sizes] || sizes.md;
  };

  const variant = getVariantStyles(data.variant);
  const size = getSizeStyles(data.size);
  const IconComponent = data.icon;

  return (
    <div
      className={`${size.container} flex items-center shadow-md rounded-md ${variant.background} border-2 ${variant.border} ${variant.hover} transition-colors relative`}
    >
      <div className="flex items-center space-x-2 flex-1">
        {IconComponent && (
          <IconComponent
            className={`${size.icon} ${data.iconColor || variant.text}`}
          />
        )}
        <div
          className={`${size.text} font-medium ${variant.text} truncate flex-1`}
        >
          {data.label}
        </div>
      </div>

      {data.description && (
        <div
          className={`absolute -bottom-6 left-0 right-0 text-xs ${variant.text} opacity-70 text-center truncate`}
        >
          {data.description}
        </div>
      )}

      {data.showHandles !== false && (
        <>
          <Handle
            type="target"
            position={Position.Left}
            className={`${size.handle} !border-2 !border-white`}
            style={{ backgroundColor: variant.handle }}
          />
          <Handle
            type="source"
            position={Position.Right}
            className={`${size.handle} !border-2 !border-white`}
            style={{ backgroundColor: variant.handle }}
          />
        </>
      )}
    </div>
  );
};

// Helper function to generate layout positions
const generateLayout = (
  nodes: FlexibleDiagramNode[],
  layout: "horizontal" | "vertical" = "horizontal",
  connections?: FlexibleDiagramConnection[]
): Node[] => {
  // Check if nodes have stage information for horizontal layout
  const hasStages =
    layout === "horizontal" && nodes.some(node => node.stage !== undefined);

  if (hasStages) {
    // Stage-based layout for horizontal flows
    const stageGroups: { [stage: number]: FlexibleDiagramNode[] } = {};

    // Group nodes by stage
    nodes.forEach(node => {
      const stage = node.stage || 0;
      if (!stageGroups[stage]) {
        stageGroups[stage] = [];
      }
      stageGroups[stage].push(node);
    });

    const stages = Object.keys(stageGroups)
      .map(Number)
      .sort((a, b) => a - b);
    const positionedNodes: Node[] = [];

    stages.forEach((stageNumber, stageIndex) => {
      const stageNodes = stageGroups[stageNumber];
      const stageX = 100 + stageIndex * 300; // 300px spacing between stages

      // Calculate total height needed for this stage
      const totalNodeHeight = stageNodes.length * 80; // 80px per node
      const startY = 150 - totalNodeHeight / 2; // Center the group vertically

      stageNodes.forEach((node, nodeIndex) => {
        const nodeY = startY + nodeIndex * 80; // 80px spacing between nodes in same stage

        positionedNodes.push({
          id: node.id,
          type: "flexible",
          position: { x: stageX, y: nodeY },
          data: {
            label: node.label,
            icon: node.icon,
            iconColor: node.iconColor,
            description: node.description,
            variant: node.variant || "default",
            size: node.size || "md",
          },
        });
      });
    });

    return positionedNodes;
  }

  // Check if this is a multiple-to-one pattern
  const isMultipleToOne =
    connections &&
    connections.length > 0 &&
    connections.filter(conn => {
      const targetNode = conn.to;
      return connections.filter(c => c.to === targetNode).length > 1;
    }).length > 0;

  if (isMultipleToOne) {
    // Special layout for multiple sources feeding into one target
    const targetNode = connections!.find(
      conn => connections!.filter(c => c.to === conn.to).length > 1
    )?.to;

    const sourceNodes = nodes.filter(node => node.id !== targetNode);
    const targetNodeData = nodes.find(node => node.id === targetNode);
    const outputNodes = nodes.filter(
      node =>
        node.id !== targetNode &&
        !sourceNodes.some(source => source.id === node.id)
    );

    const positionedNodes: Node[] = [];

    // Position source nodes in a fan pattern with better spacing
    sourceNodes.forEach((node, index) => {
      // Calculate angle based on number of sources for optimal distribution
      const totalSources = sourceNodes.length;
      const angleStep = totalSources === 1 ? 0 : Math.PI / (totalSources + 1); // Spread over 180 degrees
      const angle = (index + 1) * angleStep - Math.PI / 2; // Center around -90 degrees

      const x = 100 + Math.sin(angle) * 180; // Increased radius
      const y = 150 + Math.cos(angle) * 100; // Better vertical spacing

      positionedNodes.push({
        id: node.id,
        type: "flexible",
        position: { x, y },
        data: {
          label: node.label,
          icon: node.icon,
          iconColor: node.iconColor,
          description: node.description,
          variant: node.variant || "default",
          size: node.size || "md",
        },
      });
    });

    // Position target node in center with more space
    if (targetNodeData) {
      positionedNodes.push({
        id: targetNodeData.id,
        type: "flexible",
        position: { x: 400, y: 150 },
        data: {
          label: targetNodeData.label,
          icon: targetNodeData.icon,
          iconColor: targetNodeData.iconColor,
          description: targetNodeData.description,
          variant: targetNodeData.variant || "default",
          size: targetNodeData.size || "md",
        },
      });
    }

    // Position output nodes to the right with better spacing
    outputNodes.forEach((node, index) => {
      positionedNodes.push({
        id: node.id,
        type: "flexible",
        position: { x: 600, y: 120 + index * 100 },
        data: {
          label: node.label,
          icon: node.icon,
          iconColor: node.iconColor,
          description: node.description,
          variant: node.variant || "default",
          size: node.size || "md",
        },
      });
    });

    return positionedNodes;
  }

  // Default linear layout
  return nodes.map((node, index) => {
    const spacing =
      layout === "horizontal" ? { x: 200, y: 80 } : { x: 100, y: 120 };
    const position =
      layout === "horizontal"
        ? { x: index * spacing.x + 50, y: 100 }
        : { x: 100, y: index * spacing.y + 50 };

    return {
      id: node.id,
      type: "flexible",
      position,
      data: {
        label: node.label,
        icon: node.icon,
        iconColor: node.iconColor,
        description: node.description,
        variant: node.variant || "default",
        size: node.size || "md",
      },
    };
  });
};

// Helper function to generate edges from connections
const generateEdges = (connections: FlexibleDiagramConnection[]): Edge[] => {
  return connections.map((connection, index) => ({
    id: `edge-${index}`,
    source: connection.from,
    target: connection.to,
    animated: connection.animated || false,
    style: { stroke: connection.color || "#6b7280" },
    label: connection.label,
  }));
};

// Main flexible diagram component
const FlexibleFlowDiagram: React.FC<FlexibleDiagramProps> = ({
  nodes,
  connections,
  title,
  height = "h-96",
  className = "",
  layout = "horizontal",
}) => {
  const nodeTypes = {
    flexible: FlexibleNode,
  };

  const reactFlowNodes = generateLayout(nodes, layout, connections);
  const reactFlowEdges = generateEdges(connections);

  return (
    <div className={`w-full ${height} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <div className="w-full h-full bg-gray-50 rounded-lg border relative">
        <style jsx global>{`
          .react-flow__node {
            border: none !important;
            padding: 0 !important;
            background: none !important;
            cursor: default !important;
          }
          .react-flow__node-flexible {
            border: none !important;
            cursor: default !important;
          }
          .react-flow__edge {
            cursor: default !important;
          }
          .react-flow__handle {
            cursor: default !important;
          }
          .react-flow__pane {
            cursor: default !important;
          }
        `}</style>
        <ReactFlow
          nodes={reactFlowNodes}
          edges={reactFlowEdges}
          nodeTypes={nodeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          minZoom={0.1}
        >
          <Background color="#f1f5f9" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlexibleFlowDiagram;
