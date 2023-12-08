import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/src/components/layout/layout";
import { prisma } from "@/src/db/prisma"
import { getRequiredAuthSession } from "@/src/lib/auth";
import Link from "next/link";

export default async function Courses() {

    const session = await getRequiredAuthSession();


    const courses = await prisma.course.findMany({
        where: {
            creatorId: session.user.id
        }
    });

    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>Courses</LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
            <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        Image
                    </TableHead>
                    <TableHead>
                        Name
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map(course => (
                        <TableRow key={course.id}>
                            <TableCell>
                                <Avatar className="rounded">
                                    <AvatarFallback>{course.image[0]}</AvatarFallback>
                                    {course.image && <img src={course.image} alt={course.name} />}
                                </Avatar>
                            </TableCell>
                            <TableCell>
                                <Link href={`/admin/courses/${course.id}`}>
                                    {course.name}
                                </Link>
                            </TableCell>
                        </TableRow>
                ))}
            </TableBody>
        </Table>
            </LayoutContent>
        </Layout>
    )
}