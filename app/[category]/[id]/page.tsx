import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import articles from '../../../../content/articles.json';

export default function ArticlePage({ params }: { params: { category: string; id: string } }) {
  const article = articles.find(post => 
    post.id.toString() === params.id && 
    post.category.toLowerCase() === params.category.replace('-', ' ').toLowerCase()
  );

  if (!article) return notFound();

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href={`/category/${params.category}`} className="text-red-600 hover:text-red-700">
            ← Back to {params.category.replace('-', ' ')}
          </Link>
        </div>
        
        <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-4">
          {article.category}
        </span>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <div className="relative h-96 w-full mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">{article.description}</p>
          {/* In a real app, you would have full article content here */}
          <p className="text-gray-700 mb-4">This is where the full article content would appear...</p>
          <p className="text-gray-700">Additional paragraphs of content would go here.</p>
        </div>
      </div>
    </div>
  );
}