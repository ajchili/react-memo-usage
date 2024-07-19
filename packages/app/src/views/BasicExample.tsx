import { useState } from "react";
import {
  Timer,
  MemoizedTimer,
  MemoizedTimerWithDeepProps,
  TimerWithDeepProps,
} from "../components/Timer.js";

const objectNotManagedInState = {
  enabled: false,
};

export function BasicExample() {
  const [enabled, setEnabled] = useState(false);

  const objectTangentiallyManagedInState = { enabled };

  return (
    <div className="p-2">
      <span>Enable Timer: </span>
      <input
        name="timer"
        type="checkbox"
        checked={enabled}
        onChange={() => {
          setEnabled(!enabled);
          objectNotManagedInState.enabled = !enabled;
        }}
      />

      <table>
        <thead>
          <tr>
            <th className="p-2">Details</th>
            <th className="p-2">Object external to state and class</th>
            <th className="p-2">Object internal to class</th>
            <th className="p-2">Object constructed with state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>Timer</code> component
            </td>
            <td className="p-2">
              <Timer enabled={objectNotManagedInState.enabled} />
            </td>
            <td className="p-2">
              <Timer enabled={objectTangentiallyManagedInState.enabled} />
            </td>
            <td className="p-2">
              <Timer enabled={enabled} />
            </td>
          </tr>
          <tr>
            <td>
              <code>MemoizedTimer</code> component
            </td>
            <td className="p-2">
              <MemoizedTimer enabled={objectNotManagedInState.enabled} />
            </td>
            <td className="p-2">
              <MemoizedTimer
                enabled={objectTangentiallyManagedInState.enabled}
              />
            </td>
            <td className="p-2">
              <MemoizedTimer enabled={enabled} />
            </td>
          </tr>
          <tr>
            <td>
              <code>TimerWithDeepProps</code> component
            </td>
            <td className="p-2">
              <TimerWithDeepProps deepProps={objectNotManagedInState} />
            </td>
            <td className="p-2">
              <TimerWithDeepProps
                deepProps={objectTangentiallyManagedInState}
              />
            </td>
            <td className="p-2">
              <TimerWithDeepProps deepProps={{ enabled }} />
            </td>
          </tr>
          <tr>
            <td>
              <code>MemoizedTimerWithDeepProps</code> component
            </td>
            <td className="p-2">
              <MemoizedTimerWithDeepProps deepProps={objectNotManagedInState} />
            </td>
            <td className="p-2">
              <MemoizedTimerWithDeepProps
                deepProps={objectTangentiallyManagedInState}
              />
            </td>
            <td className="p-2">
              <MemoizedTimerWithDeepProps deepProps={{ enabled }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
