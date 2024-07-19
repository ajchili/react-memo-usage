import { memo, useEffect, useState } from "react";

export function Timer({ enabled = false }: { enabled?: boolean }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let intervalId: number | undefined;

    if (enabled) {
      intervalId = setInterval(() => setNow(Date.now()), 100);
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  return <p className={enabled ? "bg-blue-400" : "bg-amber-400"}>{now}</p>;
}

export function TimerWithDeepProps({
  deepProps: { enabled = false },
}: {
  deepProps: { enabled?: boolean };
}) {
  return <Timer enabled={enabled} />;
}

export const MemoizedTimer = memo(Timer);
export const MemoizedTimerWithDeepProps = memo(TimerWithDeepProps);
