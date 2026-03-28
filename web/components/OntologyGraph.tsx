'use client'

import { useCallback } from 'react'
import {
  ReactFlow,
  Node,
  Edge,
  Handle,
  Position,
  NodeProps,
  MarkerType,
  Background,
  BackgroundVariant,
  Controls,
  useNodesState,
  useEdgesState,
  NodeTypes,
} 

from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// ─── Custom node components ──────────────────────────────────────────────────

/** Central scenario node — hexagon shape */
function HexagonNode({ data }: NodeProps) {
  return (
    <div className="relative" style={{ width: 168, height: 96 }}>
      <Handle type="target" position={Position.Left} style={{ left: 8 }} />
      <Handle type="target" position={Position.Top} style={{ top: 8 }} />
      <Handle type="source" position={Position.Right} style={{ right: 8 }} />
      <Handle type="source" position={Position.Bottom} style={{ bottom: 8 }} />
      <div
        className="node-central w-full h-full flex items-center justify-center text-center"
        style={{
          clipPath: 'polygon(14% 0%, 86% 0%, 100% 50%, 86% 100%, 14% 100%, 0% 50%)',
          background: 'linear-gradient(135deg, #3b0764, #7c3aed)',
          fontSize: 12,
          fontWeight: 700,
          color: '#ede9fe',
          letterSpacing: '0.01em',
          padding: '0 28px',
        }}
      >
        {data.label as string}
      </div>
    </div>
  )
}

/** Entity node — rounded rectangle (Pilot, Aircraft, Runway, ATC) */
function EntityNode({ data }: NodeProps) {
  return (
    <div className="relative" style={{ width: 148, height: 48 }}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div
        className="w-full h-full flex items-center justify-center px-3 text-center"
        style={{
          borderRadius: 8,
          background: '#0f2a4a',
          border: '1.5px solid #2563eb',
          fontSize: 12,
          fontWeight: 500,
          color: '#93c5fd',
        }}
      >
        {data.label as string}
      </div>
    </div>
  )
}

/** Context node — ellipse (Airport, Weather) */
function ContextNode({ data }: NodeProps) {
  return (
    <div className="relative" style={{ width: 132, height: 60 }}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} />
      <div
        className="w-full h-full flex items-center justify-center text-center px-3"
        style={{
          borderRadius: '50%',
          background: '#062936',
          border: '1.5px solid #06b6d4',
          fontSize: 12,
          fontWeight: 500,
          color: '#a5f3fc',
        }}
      >
        {data.label as string}
      </div>
    </div>
  )
}

/** Procedure node — diamond shape (Landing Procedure) */
function ProcedureNode({ data }: NodeProps) {
  return (
    <div className="relative" style={{ width: 148, height: 80 }}>
      <Handle type="target" position={Position.Top} style={{ top: 2 }} />
      <Handle type="source" position={Position.Left} />
      <div
        className="w-full h-full flex items-center justify-center text-center"
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          background: 'linear-gradient(135deg, #052e16, #065f46)',
          fontSize: 11,
          fontWeight: 600,
          color: '#6ee7b7',
          padding: '0 30px',
        }}
      >
        {data.label as string}
      </div>
    </div>
  )
}

/** Pill node — AI suggested sub-concept (Wind, Visibility) */
function PillNode({ data }: NodeProps) {
  return (
    <div className="relative" style={{ width: 100, height: 36 }}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div
        className="w-full h-full flex items-center justify-center text-center px-3"
        style={{
          borderRadius: 999,
          background: '#0f172a',
          border: '1.5px dashed #475569',
          fontSize: 11,
          fontWeight: 500,
          color: '#64748b',
        }}
      >
        {data.label as string}
      </div>
    </div>
  )
}

const nodeTypes: NodeTypes = {
  hexagon: HexagonNode,
  entity: EntityNode,
  context: ContextNode,
  procedure: ProcedureNode,
  pill: PillNode,
}

// ─── Graph data ──────────────────────────────────────────────────────────────

const initialNodes: Node[] = [
  // Central
  { id: 'landing-op', type: 'hexagon',   position: { x: 400, y: 230 }, data: { label: 'Landing Operation' } },
  // Entities
  { id: 'pilot',      type: 'entity',    position: { x: 100, y: 120 }, data: { label: 'Pilot' } },
  { id: 'aircraft',   type: 'entity',    position: { x: 80,  y: 300 }, data: { label: 'Aircraft' } },
  { id: 'runway',     type: 'entity',    position: { x: 700, y: 300 }, data: { label: 'Runway' } },
  { id: 'atc',        type: 'entity',    position: { x: 80,  y: 450 }, data: { label: 'Air Traffic Control' } },
  // Context
  { id: 'airport',    type: 'context',   position: { x: 680, y: 120 }, data: { label: 'Airport' } },
  { id: 'weather',    type: 'context',   position: { x: 400, y: 60  }, data: { label: 'Weather' } },
  // Procedure
  { id: 'procedure',  type: 'procedure', position: { x: 400, y: 420 }, data: { label: 'Landing Procedure' } },
  // AI-suggested pills
  { id: 'wind',       type: 'pill',      position: { x: 590, y: 30  }, data: { label: 'Wind' } },
  { id: 'visibility', type: 'pill',      position: { x: 760, y: 60  }, data: { label: 'Visibility' } },
]

const mkEdge = (
  id: string,
  source: string,
  target: string,
  label: string,
  color = '#3b82f6',
  animated = true,
): Edge => ({
  id,
  source,
  target,
  label,
  animated,
  style: { stroke: color, strokeWidth: 1.5 },
  labelStyle: { fill: '#94a3b8', fontSize: 10, fontFamily: 'JetBrains Mono, monospace' },
  labelBgStyle: { fill: '#080814', fillOpacity: 0.85 },
  labelBgBorderRadius: 4,
  labelBgPadding: [4, 6] as [number, number],
  markerEnd: { type: MarkerType.ArrowClosed, color },
})

const initialEdges: Edge[] = [
  mkEdge('e1', 'landing-op', 'pilot',     'performed by',      '#6366f1'),
  mkEdge('e2', 'landing-op', 'aircraft',  'involves',          '#6366f1'),
  mkEdge('e3', 'landing-op', 'runway',    'uses',              '#3b82f6'),
  mkEdge('e4', 'landing-op', 'airport',   'occurs at',         '#3b82f6'),
  mkEdge('e5', 'landing-op', 'weather',   'affected by',       '#0ea5e9'),
  mkEdge('e6', 'weather',    'wind',      'includes',          '#06b6d4', false),
  mkEdge('e7', 'weather',    'visibility','includes',          '#06b6d4', false),
  mkEdge('e8', 'landing-op', 'procedure', 'follows',           '#10b981'),
  mkEdge('e9', 'pilot',      'atc',       'communicates with', '#f59e0b'),
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function OntologyGraph() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div style={{ width: '100%', height: '100%', paddingTop: 44 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.4}
        maxZoom={1.6}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1}
          color="#1e1e3f"
        />
        <Controls
          showInteractive={false}
          style={{ bottom: 16, right: 16, top: 'auto', left: 'auto' }}
        />
      </ReactFlow>
    </div>
  )
}