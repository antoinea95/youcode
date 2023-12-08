import { prisma } from "@/src/db/prisma";
import { getRequiredAuthSession } from "@/src/lib/auth";

export default async function Course({ params }: { params: { courseId: string } }) {

    const course = await prisma.course.findUnique({
        where: {
            id: params.courseId
        }
    })

    if(!course) {
        throw Error("Course not find")
    }

    return (
        <h1>{course.name}</h1>
    )
}