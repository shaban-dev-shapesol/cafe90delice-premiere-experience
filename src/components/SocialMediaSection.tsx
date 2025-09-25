import { Instagram, Facebook, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialMediaSection = () => {
  // Mock social media posts data
  const instagramPosts = [
    {
      id: 1,
      image: '/api/placeholder/300/300',
      caption: 'Perfect birthday setup for Sarah\'s special day! 🎉 #Cafe90Delice #BirthdayMagic',
      likes: 127,
      comments: 12,
      date: '2 days ago'
    },
    {
      id: 2,
      image: '/api/placeholder/300/300',
      caption: 'Anniversary celebration with a touch of romance ❤️ #AnniversaryGoals',
      likes: 89,
      comments: 8,
      date: '3 days ago'
    },
    {
      id: 3,
      image: '/api/placeholder/300/300',
      caption: 'Corporate coffee break done right ☕ #BusinessMeeting #PremiumCoffee',
      likes: 156,
      comments: 15,
      date: '5 days ago'
    },
    {
      id: 4,
      image: '/api/placeholder/300/300',
      caption: 'Baby shower bliss with our afternoon tea selection 🍰 #BabyShower',
      likes: 203,
      comments: 24,
      date: '1 week ago'
    },
    {
      id: 5,
      image: '/api/placeholder/300/300',
      caption: 'Private hire setup for an exclusive event ✨ #PrivateHire #ExclusiveEvent',
      likes: 175,
      comments: 18,
      date: '1 week ago'
    },
    {
      id: 6,
      image: '/api/placeholder/300/300',
      caption: 'Engagement party perfection! Congratulations to the happy couple 💍',
      likes: 142,
      comments: 21,
      date: '2 weeks ago'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-accent to-warm">
      <div className="container-premium">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl heading-premium text-foreground mb-8">
            Follow Our Story
          </h2>
          <p className="text-xl text-premium max-w-3xl mx-auto leading-relaxed mb-8">
            Join our community and see the magic we create every day. From intimate celebrations 
            to grand events, follow along for inspiration and behind-the-scenes moments.
          </p>
          
          <div className="flex justify-center gap-6">
            <Button className="btn-premium flex items-center gap-3">
              <Instagram className="w-5 h-5" />
              Follow @cafe_delice_
            </Button>
            <Button variant="outline" className="btn-outline-premium flex items-center gap-3">
              <Facebook className="w-5 h-5" />
              Like Our Page
            </Button>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="flex justify-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        <span className="font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                      </div>
                    </div>
                    <Instagram className="w-8 h-8 mx-auto" />
                  </div>
                </div>
              </div>
              
              {/* Post Details */}
              <div className="p-4">
                <p className="text-premium text-sm leading-relaxed mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-on-scroll">
          <div className="text-center card-premium p-6">
            <Instagram className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">5.2K</div>
            <div className="text-premium text-sm">Followers</div>
          </div>
          
          <div className="text-center card-premium p-6">
            <Facebook className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">3.8K</div>
            <div className="text-premium text-sm">Likes</div>
          </div>
          
          <div className="text-center card-premium p-6">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">12K</div>
            <div className="text-premium text-sm">Total Likes</div>
          </div>
          
          <div className="text-center card-premium p-6">
            <Share2 className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">2.1K</div>
            <div className="text-premium text-sm">Shares</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 card-premium p-12 animate-on-scroll">
          <h3 className="text-3xl font-semibold text-foreground mb-4">
            Share Your Experience
          </h3>
          <p className="text-premium mb-8 max-w-2xl mx-auto leading-relaxed">
            Had a wonderful time at Cafe90Delice? We'd love to see your photos and hear about your experience. 
            Tag us for a chance to be featured on our social media!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              #Cafe90Delice
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              #CelebrationGoals
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              #ManchesterCafe
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              #PremiumCoffee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;