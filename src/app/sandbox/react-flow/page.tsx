"use client";

import React from "react";
import { Database, Server, Globe, BarChart3 } from "lucide-react";
import FlexibleFlowDiagram, {
  FlexibleDiagramNode,
  FlexibleDiagramConnection,
} from "@/components/flexible-flow-diagram";

// Demo page with examples
export default function ReactFlowDemoPage() {
  // Example 1: Simple data processing flow
  const dataProcessingNodes: FlexibleDiagramNode[] = [
    {
      id: "source",
      label: "Data Source",
      variant: "default",
      description: "Raw data input",
    },
    {
      id: "process",
      label: "Processing",
      variant: "primary",
      description: "Transform & clean",
    },
    {
      id: "storage",
      label: "Storage",
      variant: "success",
      description: "Persist results",
    },
    {
      id: "api",
      label: "API",
      variant: "warning",
      description: "Expose data",
    },
  ];

  const dataProcessingConnections: FlexibleDiagramConnection[] = [
    { from: "source", to: "process", animated: true, color: "#2970ff" },
    { from: "process", to: "storage", animated: true, color: "#2970ff" },
    { from: "storage", to: "api", animated: true, color: "#2970ff" },
  ];

  // Example 2: Vertical workflow
  const workflowNodes: FlexibleDiagramNode[] = [
    {
      id: "start",
      label: "Start",
      variant: "success",
      size: "sm",
    },
    {
      id: "review",
      label: "Review",
      variant: "warning",
      size: "sm",
    },
    {
      id: "approve",
      label: "Approve",
      variant: "primary",
      size: "sm",
    },
    {
      id: "deploy",
      label: "Deploy",
      variant: "danger",
      size: "sm",
    },
  ];

  const workflowConnections: FlexibleDiagramConnection[] = [
    { from: "start", to: "review", animated: true },
    { from: "review", to: "approve", animated: true },
    { from: "approve", to: "deploy", animated: true },
  ];

  // Example 3: Custom sizing
  const sizingNodes: FlexibleDiagramNode[] = [
    {
      id: "small",
      label: "Small",
      variant: "default",
      size: "sm",
    },
    {
      id: "medium",
      label: "Medium",
      variant: "primary",
      size: "md",
    },
    {
      id: "large",
      label: "Large Node",
      variant: "success",
      size: "lg",
    },
  ];

  const sizingConnections: FlexibleDiagramConnection[] = [
    { from: "small", to: "medium", animated: true },
    { from: "medium", to: "large", animated: true },
  ];

  // Example 4: Multiple sources feeding into one target (using stages)
  const dataAggregationNodes: FlexibleDiagramNode[] = [
    {
      id: "source1",
      label: "Database A",
      icon: Database,
      variant: "default",
      description: "Customer data",
      size: "sm",
      stage: 0, // Stage 0: Data Sources
    },
    {
      id: "source2",
      label: "Database B",
      icon: Database,
      variant: "default",
      description: "Product data",
      size: "sm",
      stage: 0, // Stage 0: Data Sources
    },
    {
      id: "source3",
      label: "API",
      icon: Globe,
      variant: "default",
      description: "External data",
      size: "sm",
      stage: 0, // Stage 0: Data Sources
    },
    {
      id: "aggregator",
      label: "Data Warehouse",
      icon: Server,
      variant: "primary",
      description: "Unified storage",
      size: "lg",
      stage: 1, // Stage 1: Processing
    },
    {
      id: "output",
      label: "Analytics",
      icon: BarChart3,
      variant: "success",
      description: "Business insights",
      size: "md",
      stage: 2, // Stage 2: Output
    },
  ];

  const dataAggregationConnections: FlexibleDiagramConnection[] = [
    {
      from: "source1",
      to: "aggregator",
      animated: true,
      color: "#2970ff",
      label: "ETL",
    },
    {
      from: "source2",
      to: "aggregator",
      animated: true,
      color: "#2970ff",
      label: "ETL",
    },
    {
      from: "source3",
      to: "aggregator",
      animated: true,
      color: "#2970ff",
      label: "API",
    },
    {
      from: "aggregator",
      to: "output",
      animated: true,
      color: "#10b981",
      label: "Query",
    },
  ];

  // Example 5: Stage-based pipeline with multiple nodes per stage
  const pipelineNodes: FlexibleDiagramNode[] = [
    // Stage 0: Data Sources
    {
      id: "source1",
      label: "User Data",
      icon: Database,
      variant: "default",
      description: "User profiles",
      size: "sm",
      stage: 0,
    },
    {
      id: "source2",
      label: "Event Data",
      icon: Database,
      variant: "default",
      description: "User actions",
      size: "sm",
      stage: 0,
    },
    {
      id: "source3",
      label: "External API",
      icon: Globe,
      variant: "default",
      description: "Third-party data",
      size: "sm",
      stage: 0,
    },
    // Stage 1: Processing
    {
      id: "processor1",
      label: "Data Cleaner",
      icon: Server,
      variant: "primary",
      description: "Clean & validate",
      size: "md",
      stage: 1,
    },
    {
      id: "processor2",
      label: "Transformer",
      icon: Server,
      variant: "primary",
      description: "Transform data",
      size: "md",
      stage: 1,
    },
    // Stage 2: Storage
    {
      id: "storage",
      label: "Data Lake",
      icon: Database,
      variant: "success",
      description: "Unified storage",
      size: "lg",
      stage: 2,
    },
    // Stage 3: Output
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      variant: "warning",
      description: "Visualization",
      size: "md",
      stage: 3,
    },
    {
      id: "api",
      label: "API",
      icon: Globe,
      variant: "warning",
      description: "Data access",
      size: "md",
      stage: 3,
    },
  ];

  const pipelineConnections: FlexibleDiagramConnection[] = [
    // Stage 0 to Stage 1
    {
      from: "source1",
      to: "processor1",
      animated: true,
      color: "#2970ff",
      label: "ETL",
    },
    {
      from: "source2",
      to: "processor1",
      animated: true,
      color: "#2970ff",
      label: "ETL",
    },
    {
      from: "source3",
      to: "processor2",
      animated: true,
      color: "#2970ff",
      label: "API",
    },
    // Stage 1 to Stage 2
    {
      from: "processor1",
      to: "storage",
      animated: true,
      color: "#10b981",
      label: "Store",
    },
    {
      from: "processor2",
      to: "storage",
      animated: true,
      color: "#10b981",
      label: "Store",
    },
    // Stage 2 to Stage 3
    {
      from: "storage",
      to: "dashboard",
      animated: true,
      color: "#f59e0b",
      label: "Query",
    },
    {
      from: "storage",
      to: "api",
      animated: true,
      color: "#f59e0b",
      label: "Query",
    },
  ];

  return (
    <div className="container mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Flexible React Flow Diagrams
        </h1>
        <p className="text-gray-600 mb-8">
          A collection of examples showing how to create flow diagrams easily
          with a flexible API.
        </p>
      </div>

      {/* Example 1: Data Processing Flow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Example 1: Data Processing Pipeline
        </h2>
        <FlexibleFlowDiagram
          title="Data Processing Flow"
          nodes={dataProcessingNodes}
          connections={dataProcessingConnections}
          layout="horizontal"
        />
      </div>

      {/* Example 2: Vertical Workflow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Example 2: Approval Workflow (Vertical)
        </h2>
        <FlexibleFlowDiagram
          title="Approval Process"
          nodes={workflowNodes}
          connections={workflowConnections}
          layout="vertical"
          height="h-80"
        />
      </div>

      {/* Example 3: Different Sizes */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Example 3: Different Node Sizes
        </h2>
        <FlexibleFlowDiagram
          title="Size Variations"
          nodes={sizingNodes}
          connections={sizingConnections}
          layout="horizontal"
        />
      </div>

      {/* Example 4: Multiple Sources to One Target */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Example 4: Multiple Sources Feeding Into One Target
        </h2>
        <FlexibleFlowDiagram
          title="Data Aggregation Pattern"
          nodes={dataAggregationNodes}
          connections={dataAggregationConnections}
          layout="horizontal"
          height="h-96"
        />
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Pattern:</strong> This example shows how multiple data
            sources (Database A, Database B, and API) all feed into a single
            Data Warehouse node, which then outputs to Analytics. This is a
            common pattern in data engineering and ETL processes.
          </p>
        </div>
      </div>

      {/* Example 5: Stage-based Pipeline */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Example 5: Stage-based Pipeline Layout
        </h2>
        <FlexibleFlowDiagram
          title="Data Processing Pipeline with Stages"
          nodes={pipelineNodes}
          connections={pipelineConnections}
          layout="horizontal"
          height="h-96"
        />
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Stages:</strong> This example demonstrates the new
            stage-based layout where nodes are organized into stages (0, 1, 2,
            3). Nodes in the same stage are vertically stacked, creating a clear
            pipeline flow from data sources → processing → storage → output.
          </p>
        </div>
      </div>

      {/* API Documentation */}
      <div className="bg-gray-50 rounded-lg p-6 mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">API Usage</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-medium text-gray-700">Node Configuration:</h3>
            <ul className="mt-2 space-y-1 text-gray-600 ml-4">
              <li>
                • <code>variant</code>: 'default' | 'primary' | 'success' |
                'warning' | 'danger'
              </li>
              <li>
                • <code>size</code>: 'sm' | 'md' | 'lg'
              </li>
              <li>
                • <code>icon</code>: Any Lucide icon or React component
              </li>
              <li>
                • <code>description</code>: Optional subtitle text
              </li>
              <li>
                • <code>stage</code>: Stage number for horizontal flows (0, 1,
                2, etc.)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Connection Options:</h3>
            <ul className="mt-2 space-y-1 text-gray-600 ml-4">
              <li>
                • <code>animated</code>: Boolean for animated flow
              </li>
              <li>
                • <code>color</code>: Custom edge color
              </li>
              <li>
                • <code>label</code>: Optional edge label
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Layout Options:</h3>
            <ul className="mt-2 space-y-1 text-gray-600 ml-4">
              <li>
                • <code>layout</code>: 'horizontal' | 'vertical'
              </li>
              <li>
                • <code>height</code>: Custom height class (e.g., 'h-96')
              </li>
              <li>
                • <code>className</code>: Additional CSS classes
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-700">Stage-based Layout:</h3>
            <ul className="mt-2 space-y-1 text-gray-600 ml-4">
              <li>
                • For horizontal layouts, add <code>stage</code> property to
                nodes
              </li>
              <li>• Nodes with the same stage number are vertically stacked</li>
              <li>• Stages are arranged horizontally from left to right</li>
              <li>• Perfect for pipeline and workflow diagrams</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
