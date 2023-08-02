import React from 'react';

export const DeltaView = ({ delta }) => {
  const deltas = JSON.parse(delta);
  return (
    <div>
      {deltas.ops.map((op) => {
        if (op.insert) {
          return <span>{op.insert}</span>;
        } else if (op.attributes) {
          return <span style={op.attributes}>{op.insert}</span>;
        }
        // etc
      })}
    </div>
  );
};
