"use client";

import React from "react";
import { ReactFlow, Node, Edge, Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { LucideIcon, Folder, Users } from "lucide-react";
import { Aws, DataBricks, Snowflake } from "./brand-icons";
import Image from "next/image";

interface NodeData {
  label: string;
  icon?: LucideIcon;
  iconColor?: string;
  clientType?: string;
  outputType?: string;
}

// Custom node component for data sources
const DataSourceNode = ({ data }: { data: NodeData }) => {
  const IconComponent = data.icon;
  return (
    <div className="w-40 h-10 flex items-center px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors relative">
      <div className="flex items-center space-x-2">
        {IconComponent && (
          <IconComponent className={`h-5 w-5 ${data.iconColor}`} />
        )}
        <div className="text-sm font-medium text-gray-900 truncate">
          {data.label}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-blue-500 !border-2 !border-white"
      />
    </div>
  );
};

// Custom node component for Dataporto
const DataportoNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="w-60 px-6 py-4 shadow-lg rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-blue-300 relative">
      <div className="flex items-center space-x-3">
        <Image
          src="/icon-transparent-white.png"
          alt="Dataporto"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <div className="text-lg font-bold text-white">{data.label}</div>
      </div>
      <div className="text-sm text-blue-100 mt-1">Manage your data shares</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-4 h-4 !bg-white !border-2 !border-blue-300"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-4 h-4 !bg-white !border-2 !border-blue-300"
      />
    </div>
  );
};

// Custom node component for client nodes
const ClientNode = ({ data }: { data: NodeData }) => {
  const getClientColors = (clientType: string) => {
    switch (clientType) {
      case "snowflake":
        return {
          background: "from-blue-50 to-sky-50",
          border: "border-blue-200",
          hoverBorder: "hover:border-blue-300",
          iconColor: "text-blue-600",
          handleColor: "#3b82f6",
        };
      case "databricks":
        return {
          background: "from-orange-50 to-red-50",
          border: "border-orange-200",
          hoverBorder: "hover:border-orange-300",
          iconColor: "text-orange-600",
          handleColor: "#ea580c",
        };
      case "sftp":
        return {
          background: "from-green-50 to-emerald-50",
          border: "border-green-200",
          hoverBorder: "hover:border-green-300",
          iconColor: "text-green-600",
          handleColor: "#10b981",
        };
      default:
        return {
          background: "from-yellow-50 to-amber-50",
          border: "border-yellow-200",
          hoverBorder: "hover:border-yellow-300",
          iconColor: "text-yellow-600",
          handleColor: "#eab308",
        };
    }
  };

  const colors = getClientColors(data.clientType || "");

  return (
    <div
      className={`w-26 h-10 flex items-center px-3 py-2 shadow-md rounded-md bg-gradient-to-r ${colors.background} border-2 ${colors.border} ${colors.hoverBorder} transition-colors relative`}
    >
      <div className="flex items-center space-x-2">
        <Users className={`h-4 w-4 ${colors.iconColor}`} />
        <div className="text-xs font-medium text-gray-900 truncate">
          {data.label}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !border-2 !border-white"
        style={{ backgroundColor: colors.handleColor }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !border-2 !border-white"
        style={{ backgroundColor: colors.handleColor }}
      />
    </div>
  );
};

// Custom node component for output platforms
const OutputNode = ({ data }: { data: NodeData }) => {
  const IconComponent = data.icon;

  const getOutputColors = (outputType: string) => {
    switch (outputType) {
      case "snowflake":
        return {
          background: "from-blue-50 to-sky-50",
          border: "border-blue-200",
          hoverBorder: "hover:border-blue-300",
          handleColor: "#3b82f6",
        };
      case "databricks":
        return {
          background: "from-orange-50 to-red-50",
          border: "border-orange-200",
          hoverBorder: "hover:border-orange-300",
          handleColor: "#ea580c",
        };
      case "sftp":
        return {
          background: "from-green-50 to-emerald-50",
          border: "border-green-200",
          hoverBorder: "hover:border-green-300",
          handleColor: "#10b981",
        };
      default:
        return {
          background: "from-green-50 to-emerald-50",
          border: "border-green-200",
          hoverBorder: "hover:border-green-300",
          handleColor: "#10b981",
        };
    }
  };

  const colors = getOutputColors(data.outputType || "");

  return (
    <div
      className={`w-40 h-10 flex items-center px-4 py-2 shadow-md rounded-md bg-gradient-to-r ${colors.background} border-2 ${colors.border} ${colors.hoverBorder} transition-colors relative`}
    >
      <div className="flex items-center space-x-2">
        {IconComponent && (
          <IconComponent className={`h-5 w-5 ${data.iconColor}`} />
        )}
        <div className="text-sm font-medium text-gray-900 truncate">
          {data.label}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !border-2 !border-white"
        style={{ backgroundColor: colors.handleColor }}
      />
    </div>
  );
};

const nodeTypes = {
  dataSource: DataSourceNode,
  dataporto: DataportoNode,
  client: ClientNode,
  output: OutputNode,
};

const initialNodes: Node[] = [
  // Data Source Nodes (Left side)
  {
    id: "postgres",
    type: "dataSource",
    position: { x: 50, y: 50 },
    data: {
      label: "S3, RDS, EFS",
      icon: Aws,
      iconColor: "text-blue-600",
    },
  },
  {
    id: "snowflake-source",
    type: "dataSource",
    position: { x: 50, y: 110 },
    data: {
      label: "Snowflake",
      icon: Snowflake,
      iconColor: "text-blue-500",
    },
  },
  {
    id: "databricks-source",
    type: "dataSource",
    position: { x: 50, y: 170 },
    data: {
      label: "Databricks",
      icon: DataBricks,
      iconColor: "text-orange-500",
    },
  },

  // Dataporto Node (Center)
  {
    id: "dataporto",
    type: "dataporto",
    position: { x: 280, y: 85 },
    data: { label: "dataporto" },
  },

  // Client Nodes (Between Dataporto and Outputs)
  {
    id: "client-snowflake",
    type: "client",
    position: { x: 600, y: 50 },
    data: {
      label: "Client A",
      clientType: "snowflake",
    },
  },
  {
    id: "client-databricks",
    type: "client",
    position: { x: 600, y: 110 },
    data: {
      label: "Client B",
      clientType: "databricks",
    },
  },
  {
    id: "client-sftp",
    type: "client",
    position: { x: 600, y: 170 },
    data: {
      label: "Client C",
      clientType: "sftp",
    },
  },

  // Output Platform Nodes (Right side)
  {
    id: "snowflake-output",
    type: "output",
    position: { x: 800, y: 50 },
    data: {
      label: "Snowflake",
      icon: Snowflake,
      iconColor: "text-blue-600",
      outputType: "snowflake",
    },
  },
  {
    id: "databricks-output",
    type: "output",
    position: { x: 800, y: 110 },
    data: {
      label: "Databricks",
      icon: DataBricks,
      iconColor: "text-orange-600",
      outputType: "databricks",
    },
  },
  {
    id: "sftp-output",
    type: "output",
    position: { x: 800, y: 170 },
    data: {
      label: "sFTP",
      icon: Folder,
      iconColor: "text-green-600",
      outputType: "sftp",
    },
  },
];

const initialEdges: Edge[] = [
  // Input edges (data sources to Dataporto)
  {
    id: "postgres-dataporto",
    source: "postgres",
    target: "dataporto",
    animated: true,
    style: { stroke: "#6b7280" },
  },
  {
    id: "snowflake-source-dataporto",
    source: "snowflake-source",
    target: "dataporto",
    animated: true,
    style: { stroke: "#6b7280" },
  },
  {
    id: "databricks-source-dataporto",
    source: "databricks-source",
    target: "dataporto",
    animated: true,
    style: { stroke: "#6b7280" },
  },

  // Output edges (Dataporto to clients)
  {
    id: "dataporto-client-snowflake",
    source: "dataporto",
    target: "client-snowflake",
    animated: true,
    style: { stroke: "#3b82f6" },
  },
  {
    id: "dataporto-client-databricks",
    source: "dataporto",
    target: "client-databricks",
    animated: true,
    style: { stroke: "#ea580c" },
  },
  {
    id: "dataporto-client-sftp",
    source: "dataporto",
    target: "client-sftp",
    animated: true,
    style: { stroke: "#10b981" },
  },

  // Client to platform edges
  {
    id: "client-snowflake-output",
    source: "client-snowflake",
    target: "snowflake-output",
    animated: true,
    style: { stroke: "#3b82f6" },
  },
  {
    id: "client-databricks-output",
    source: "client-databricks",
    target: "databricks-output",
    animated: true,
    style: { stroke: "#ea580c" },
  },
  {
    id: "client-sftp-output",
    source: "client-sftp",
    target: "sftp-output",
    animated: true,
    style: { stroke: "#10b981" },
  },
];

export default function FlowDiagram() {
  return (
    <div className="w-full h-96 bg-gray-50 rounded-lg border">
      <style jsx global>{`
        .react-flow__node {
          border: none !important;
          padding: 0 !important;
          background: none !important;
          cursor: default !important;
        }
        .react-flow__node-output {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-dataSource {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-dataporto {
          border: none !important;
          cursor: default !important;
        }
        .react-flow__node-client {
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
        nodes={initialNodes}
        edges={initialEdges}
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
  );
}
