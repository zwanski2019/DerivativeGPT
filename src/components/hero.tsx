import { Button } from "../components/ui/button"; // Corrected import path
import { Github } from "lucide-react";

export const Hero = () => {
  return (
    <div className="py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white shadow-lg">
        DerivativeGPT
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> Calculator</span>
      </h1>
      <p className="mx-auto mb-8 max-w-[700px] text-gray-200 md:text-xl">
        The world's most advanced derivative calculator. Powered by AI, featuring 3D visualization, step-by-step
        solutions, and a vibrant community of mathematicians.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="transition duration-300 ease-in-out transform hover:scale-105">Try It Now</Button>
        <Button size="lg" variant="outline" className="transition duration-300 ease-in-out transform hover:scale-105">
          <Github className="mr-2 h-4 w-4" />
          Star on GitHub
        </Button>
      </div>
    </div>
  );
}
