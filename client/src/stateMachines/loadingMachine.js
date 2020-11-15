import { Machine } from "xstate";

const loadingMachine = new Machine({
  id: "machine",
  initial: "appLoading",
  states: {
    appLoading: {
      on: {
        START: "pageLoading",
      },
    },
    pageLoading: {
      on: {
        RESTART: { type: "final" },
      },
    },
    stop: {
      type: "final",
    },
  },
});

export default loadingMachine;
