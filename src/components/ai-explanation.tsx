"use client"

import { useChat } from "ai/react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AIExplanation({ data }) { 
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        role: "system",
        content: `You are a helpful math tutor. The user is working with the function: ${data.original}
                 Its derivative is: ${data.derivative}`,
        id: ""
      },
    ],
  })

  return (
    <Card className="flex h-[400px] flex-col">
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4 flex gap-3">
            <Avatar>
              <AvatarImage src={message.role === "user" ? "/user-avatar.png" : "/ai-avatar.png"} />
              <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm text-gray-500">{message.role === "user" ? "You" : "AI Tutor"}</p>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about the derivative..."
            className="flex-1 rounded-md border px-3 py-2"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}

