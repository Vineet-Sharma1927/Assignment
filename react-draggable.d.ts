declare module 'react-draggable' {
    import * as React from 'react';
  
    export interface DraggableProps {
      axis?: 'both' | 'x' | 'y' | 'none';
      handle?: string;
      cancel?: string;
      grid?: [number, number];
      onStart?: (e: MouseEvent, data: DraggableData) => void | false;
      onDrag?: (e: MouseEvent, data: DraggableData) => void | false;
      onStop?: (e: MouseEvent, data: DraggableData) => void | false;
      bounds?: { left?: number; right?: number; top?: number; bottom?: number } | string;
      defaultPosition?: ControlPosition;
      position?: ControlPosition;
    }
  
    export interface DraggableData {
      node: HTMLElement;
      x: number;
      y: number;
      deltaX: number;
      deltaY: number;
      lastX: number;
      lastY: number;
    }
  
    export interface ControlPosition {
      x: number;
      y: number;
    }
  
    export default class Draggable extends React.Component<DraggableProps> {}
  }