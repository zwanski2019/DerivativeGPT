"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Visualization } from "@/components/visualization"
import { AIExplanation } from "@/components/ai-explanation"
import { StepSolution } from "@/components/step-solution"

export function Calculator() {
  const [function_str, setFunction] = useState("")
  const [result, setResult] = useState(null)

  const handleCalculate = async () => {
    try {
      const response = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ function: function_str }),
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error calculating derivative:", error)
    }
  }

  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <Input
          placeholder="Enter a function (e.g., x^2 + sin(x))"
          value={function_str}
          onChange={(e) => setFunction(e.target.value)}
        />
        <Button onClick={handleCalculate} className="w-full">
          Calculate Derivative
        </Button>
      </div>

      {result && (
        <Tabs defaultValue="visualization" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="steps">Step-by-Step</TabsTrigger>
            <TabsTrigger value="ai">AI Explanation</TabsTrigger>
          </TabsList>
          <TabsContent value="visualization">
            <Visualization data={result} />
          </TabsContent>
          <TabsContent value="steps">
            <StepSolution data={result} />
          </TabsContent>
          <TabsContent value="ai">
            <AIExplanation data={result} />
          </TabsContent>
        </Tabs>
      )}
    </Card>
  )
}

