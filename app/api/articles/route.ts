import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join('/tmp', 'articles.json');

export async function GET() {
  try {
    const originalPath = path.join(process.cwd(), 'app/content/articles.json');
    try {
      await fs.access(filePath);
    } catch {
      const data = await fs.readFile(originalPath, 'utf-8');
      await fs.writeFile(filePath, data);
    }
    const data = await fs.readFile(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading articles:', error);
    return NextResponse.json({ error: 'Failed to read articles' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedArticles = await request.json();
    await fs.writeFile(filePath, JSON.stringify(updatedArticles, null, 2));
    return NextResponse.json({ message: 'Articles updated' });
  } catch (error) {
    console.error('Error writing articles:', error);
    return NextResponse.json({ error: 'Failed to update articles' }, { status: 500 });
  }
}