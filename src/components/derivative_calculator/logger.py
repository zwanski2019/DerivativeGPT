from datetime import datetime
from typing import Optional

class Logger:
    """
    A simple logger class for tracking calculations and errors.
    """
    
    def __init__(self, log_file: Optional[str] = None):
        self.log_file = log_file
        
    def log(self, message: str, level: str = "INFO") -> None:
        """
        Log a message with timestamp and level.
        
        Args:
            message (str): The message to log
            level (str): The log level (INFO, WARNING, ERROR)
        """
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_message = f"[{timestamp}] {level}: {message}"
        
        print(log_message)
        
        if self.log_file:
            with open(self.log_file, 'a') as f:
                f.write(log_message + '\n')

