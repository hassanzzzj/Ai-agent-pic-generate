from langgraph.graph import StateGraph, END
from .state import AgentState
from .nodes import planner_node, generator_node, critic_node

workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("planner", planner_node)
workflow.add_node("generator", generator_node)
workflow.add_node("critic", critic_node)

# Set entry point
workflow.set_entry_point("planner")

# Add edges
workflow.add_edge("planner", "generator")
workflow.add_edge("generator", "critic")
workflow.add_edge("critic", END)

# Compile
app = workflow.compile()
