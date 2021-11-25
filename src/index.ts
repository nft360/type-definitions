import * as nodeTypes from "./interfaces/definitions";
import { OverrideVersionedType } from "@polkadot/types/types";
import { typesFromDefs, jsonrpcFromDefs } from "./utils";

import v100 from "./spec/v100";
import v230 from "./spec/v229";
import v299 from "./spec/v299";

export { nodeTypes };

export const types = typesFromDefs(nodeTypes);

export const rpc = jsonrpcFromDefs(nodeTypes);

const bundle = {
  rpc,
  types: [
    {
      minmax: [0, 100],
      types: v100.types,
    }, {
      minmax: [100, 229],
      types: v230.types,
    }, {
      minmax: [230, 299],
      types: v299.types,
    }, {
      minmax: [300, undefined],
      types,
    },
  ] as OverrideVersionedType[],
};
export const typesBundleForPolkadot = {
  spec: {
    deer: bundle,
  },
};
