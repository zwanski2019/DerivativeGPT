export function StepSolution({ data }) {
    return (
      <div className="space-y-4 p-4">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">Step 1: Original Function</h3>
          <p className="font-mono">{data.original}</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">Step 2: Apply Derivative Rules</h3>
          <ul className="list-inside list-disc space-y-2">
            {data.steps?.map((step, index) => (
              <li key={index} className="font-mono">
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">Step 3: Final Result</h3>
          <p className="font-mono">{data.derivative}</p>
        </div>
      </div>
    )
  }
  
  