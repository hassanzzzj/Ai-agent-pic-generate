import os
from langfuse import Langfuse

class MonitorService:
    def __init__(self):
        self.enabled = os.getenv("LANGFUSE_ENABLED", "false").lower() == "true"
        self.langfuse = None
        if self.enabled:
            self.langfuse = Langfuse(
                public_key=os.getenv("LANGFUSE_PUBLIC_KEY"),
                secret_key=os.getenv("LANGFUSE_SECRET_KEY"),
                host="https://cloud.langfuse.com"
            )

    def trace(self, name: str, **kwargs):
        if self.enabled and self.langfuse:
            return self.langfuse.trace(name=name, **kwargs)
        return None
