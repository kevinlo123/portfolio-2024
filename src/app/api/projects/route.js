import { db } from '@vercel/postgres';

export async function GET() {
  try {
    const client = await db.connect();
    const projects = await client.sql`SELECT * FROM projects;`;
    
    return Response.json(projects.rows);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
