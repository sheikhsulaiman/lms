import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { courseId } = params;
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });
  if (!course) {
    return redirect("/");
  }
  const requiredFields = [
    course.description,
    course.imageUrl,
    course.title,
    course.price,
    course.categoryId,
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `${completedFields} / ${totalFields}`;
  return <div>CourseId: {params.courseId}</div>;
};

export default CourseIdPage;
