import { db } from '@vercel/postgres';
import Image from 'next/image'


const client = await db.connect();

export default async function ProjectsTemplate ({ params }) {

    const project = await client.sql`SELECT * FROM projects WHERE link = ${params.slug};`;
    const imageURL = new TextDecoder().decode(project.rows[0].image);

    return (
        <div>
            <h1>project template page</h1>
            <h2>{project.rows[0].name}</h2>
            <p>{project.rows[0].description}</p>
            <Image
                src={imageURL}
                width={500}
                height={500}
                alt="Picture of the website"
            />
        </div>
    )
}