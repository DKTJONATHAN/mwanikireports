'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const CategoryPage: NextPage<{ params: { category: string } }> = ({ params }) => {
  const router = useRouter();
  const { category } = params;

  // Handle potential missing data
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await import('../../../content/articles.json');
        setArticles(response.default || response);
        setLoading(false);
      } catch (err) {
        setError('Failed to load articles');
        setLoading(false);
        console.error('Error loading articles:', err);
      }
    };

    fetchArticles();
  }, []);

  // Decode category and ensure it matches your categories
  const validCategories = ['news', 'breaking-news', 'sports', 'entertainment', 'tech', 'opinions', 'gossip'];
  const decodedCategory = decodeURIComponent(category);
  
  if (!validCategories.includes(decodedCategory)) {
    router.push('/');
    return null;
  }

  // Map URL-friendly category names to display names
  const categoryDisplayNames: Record<string, string> = {
    'news': 'News',
    'breaking-news': 'Breaking News',
    'sports': 'Sports',
    'entertainment': 'Entertainment',
    'tech': 'Tech',
    'opinions': 'Opinions',
    'gossip': 'Gossip'
  };

  const displayCategory = categoryDisplayNames[decodedCategory] || decodedCategory;

  // Filter and sort posts by category and date (latest first)
  const filteredPosts = articles
    .filter(post => post.category.toLowerCase().replace(' ', '-') === decodedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-red-600 mb-4"></i>
          <p className="text-xl font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-gray-50 w-full max-w-none">
      {/* Category Header */}
      <div className="w-full bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">{displayCategory}</h1>
            <span className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="w-full px-4 py-8">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority={filteredPosts.indexOf(post) < 3}
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <Link 
                        href={`/${post.category.toLowerCase().replace(' ', '-')}/${post.id}`}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-newspaper text-5xl text-gray-300 mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h2>
              <p className="text-gray-600">
                Check back later for new content in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;