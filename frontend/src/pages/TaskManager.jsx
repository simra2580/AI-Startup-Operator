import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const initialData = {
  todo: ["Landing Page", "Authentication"],
  progress: ["Dashboard UI"],
  done: ["Project Setup"],
};

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialData);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Task Manager
      </h1>

      <DragDropContext onDragEnd={() => {}}>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(tasks).map(([column, items]) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="glass-card p-5 min-h-[400px]"
                >
                  <h2 className="text-2xl font-bold capitalize mb-5">
                    {column}
                  </h2>

                  {items.map((task, index) => (
                    <Draggable
                      draggableId={task}
                      index={index}
                      key={task}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white/10 p-4 rounded-xl mb-4"
                        >
                          {task}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}