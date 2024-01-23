import { db } from '@vercel/postgres';
import Link from 'next/link'

const client = await db.connect();

export default async function Projects() {
    const projects = await client.sql`SELECT * FROM projects;`;
  
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24"> 
        <h2>This is the projects component pulling from DB</h2> 
        {projects.rows.map((project) => (
          <div key={project.project_id}>
            <Link href={`/projects/${project.link}`}>{project.name}</Link>
          </div>
        ))}
      </div>
    );d
  }
  