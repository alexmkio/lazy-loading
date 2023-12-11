import { Suspense, lazy } from "react";
import Loading from "../components/loading";

const Loaded = lazy(() => delayForDemo(import("../components/loaded")));

export default function Lazy() {
  return (
    <Suspense fallback={<Loading />}>
      <Loaded />
    </Suspense>
  );
}

function delayForDemo(promise: Promise<typeof import("../components/loaded")>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
