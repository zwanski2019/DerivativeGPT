import { NextResponse } from "next/server"
import * as math from "mathjs"

export async function POST(req: Request) {
  try {
    const { function: func } = await req.json()

    // Parse the function
    const node = math.parse(func)

    // Calculate derivative
    const derivative = math.derivative(node, "x")

    // Generate steps (simplified example)
    const steps = ["Apply the power rule", "Apply the chain rule where necessary", "Simplify the expression"]

    return NextResponse.json({
      original: func,
      derivative: derivative.toString(),
      steps,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to calculate derivative" }, { status: 500 })
  }
}

