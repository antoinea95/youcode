import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/src/components/layout/layout";
import Link from "next/link";

export default function Page() {

    return (
        <Layout>
            <LayoutHeader>
                <LayoutTitle>Courses</LayoutTitle>
            </LayoutHeader>
            <LayoutContent>
                <Link href={"/admin/courses"}> See your courses</Link>
            </LayoutContent>
        </Layout>
    )
    
}