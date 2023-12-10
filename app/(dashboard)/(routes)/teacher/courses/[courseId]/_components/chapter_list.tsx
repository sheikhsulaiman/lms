"use client";

import { Chapter } from "@prisma/client";
import React, { useEffect, useState } from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import { Grip, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChapterListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
}

const ChapterList = ({ items, onEdit, onReorder }: ChapterListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setChapters(items);
  }, [items]);
  if (!isMounted) {
    return null;
  }
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {chapters.map((chapter, index) => (
              <Draggable
                key={chapter.id}
                draggableId={chapter.id}
                index={index}
              >
                {(provided) => (
                  <div
                    className={cn(
                      "flex items-center gap-x-2 bg-slate-200 border-slate-200 border text-slate-700 rounded-md mb-4 text-sm",
                      chapter.isPublished &&
                        "bg-yellow-100 border-yellow-200 text-yellow-700"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2 py-3 border-r flex bg-yellow-50 border-r-slate-200 hover:bg-slate-200 rounded-l-md transition",
                        chapter.isPublished &&
                          "border-r-yellow-200 hover:bg-yellow-200"
                      )}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Grip className="h-5 w-5 text-yellow-700" />
                    </div>
                    {chapter.title}
                    <div className="flex ml-auto gap-y-2 pr-2 items-center">
                      {chapter.isFree && (
                        <Badge className="bg-green-500">Free</Badge>
                      )}
                      <Badge
                        className={cn(
                          "bg-slate-500",
                          chapter.isPublished && "bg-yellow-400"
                        )}
                      >
                        {chapter.isPublished ? "published" : "Draft"}
                      </Badge>
                      <Pencil
                        className="h-4 w-4 m-2 cursor-pointer hover:opacity-75 transition"
                        onClick={onEdit.bind(this, chapter.id)}
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ChapterList;
