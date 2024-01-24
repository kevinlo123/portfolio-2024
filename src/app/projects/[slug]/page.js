import { db } from '@vercel/postgres';
import BlurImage from '../../components/BlurImage'


const client = await db.connect();

export default async function ProjectsTemplate ({ params }) {

    const project = await client.sql`SELECT * FROM projects WHERE link = ${params.slug};`;
    const imageURL = new TextDecoder().decode(project.rows[0].image);

    return (
        <main className="mt-40 ml-16">
            <h1>project template page</h1>
            <h2>{project.rows[0].name}</h2>
            <p>{project.rows[0].description}</p>
            <div style={{ width: '500px', height: 'auto' }}>
                <BlurImage image={imageURL} />
            </div>
        </main>
    )
}