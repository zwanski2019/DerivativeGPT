from typing import Optional, Tuple
import sympy as sp
import numpy as np
import matplotlib.pyplot as plt
from .logger import Logger

class DerivativeCalculator:
    """
    A class to calculate and visualize derivatives of mathematical functions.
    """
    
    def __init__(self):
        self.logger = Logger()
        self.x = sp.Symbol('x')
        self.current_function = None
        self.current_derivative = None

    def calculate(self, function_str: str) -> Tuple[sp.Expr, sp.Expr]:
        """
        Calculate the derivative of a given function.
        
        Args:
            function_str (str): The mathematical function as a string
            
        Returns:
            Tuple[sp.Expr, sp.Expr]: The original function and its derivative
        """
        try:
            self.logger.log(f"Processing function: {function_str}")
            
            # Convert string to sympy expression
            self.current_function = sp.sympify(function_str)
            
            # Calculate derivative
            self.current_derivative = sp.diff(self.current_function, self.x)
            
            self.logger.log(f"Derivative calculated: {self.current_derivative}")
            
            return self.current_function, self.current_derivative
            
        except Exception as e:
            self.logger.log(f"Error calculating derivative: {str(e)}", level="ERROR")
            raise

    def visualize(self, x_min: float = -10, x_max: float = 10, points: int = 1000) -> None:
        """
        Visualize the original function and its derivative.
        
        Args:
            x_min (float): Minimum x value for visualization
            x_max (float): Maximum x value for visualization
            points (int): Number of points to plot
        """
        if not self.current_function or not self.current_derivative:
            raise ValueError("No function has been calculated yet")

        try:
            # Create x values
            x_vals = np.linspace(x_min, x_max, points)
            
            # Convert sympy expressions to numpy functions
            f = sp.lambdify(self.x, self.current_function, 'numpy')
            df = sp.lambdify(self.x, self.current_derivative, 'numpy')
            
            # Calculate y values
            y_vals = f(x_vals)
            dy_vals = df(x_vals)
            
            # Create plot
            plt.figure(figsize=(12, 6))
            
            # Plot original function
            plt.subplot(1, 2, 1)
            plt.plot(x_vals, y_vals, 'b-', label='f(x)')
            plt.grid(True)
            plt.title('Original Function')
            plt.legend()
            
            # Plot derivative
            plt.subplot(1, 2, 2)
            plt.plot(x_vals, dy_vals, 'r-', label="f'(x)")
            plt.grid(True)
            plt.title('Derivative')
            plt.legend()
            
            plt.tight_layout()
            plt.show()
            
        except Exception as e:
            self.logger.log(f"Error in visualization: {str(e)}", level="ERROR")
            raise

