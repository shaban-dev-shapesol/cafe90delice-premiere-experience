import { Instagram, Facebook, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import social1 from '@/assets/social/social-1.jpg';
import social2 from '@/assets/social/social-2.jpg';
import social3 from '@/assets/social/social-3.jpg';
import social4 from '@/assets/social/social-4.jpg';
import social5 from '@/assets/social/social-5.jpg';
import social6 from '@/assets/social/social-6.jpg';

const SocialMediaSection = () => {
  // Real Instagram posts data from Cafe90Delice
  const instagramPosts = [{
    id: 1,
    image: social1,
    caption: 'Delicious treats and premium coffee at Cafe90Delice ☕ #Cafe90Delice #PremiumCoffee #Manchester',
    likes: 145,
    comments: 18,
    date: '3 days ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }, {
    id: 2,
    image: social2,
    caption: 'Fresh pastries and artisan coffee - the perfect combination! 🥐 #FreshPastries #ArtisanCoffee',
    likes: 123,
    comments: 15,
    date: '5 days ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }, {
    id: 3,
    image: social3,
    caption: 'Beautiful café atmosphere at Cafe90Delice ✨ #CafeVibes #Manchester #Coffee',
    likes: 167,
    comments: 22,
    date: '1 week ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }, {
    id: 4,
    image: social4,
    caption: 'Professional photography session at our beautiful café 📸 #CafePhotography #ProfessionalShoot',
    likes: 189,
    comments: 28,
    date: '1 week ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }, {
    id: 5,
    image: social5,
    caption: 'Birthday celebrations made special at Cafe90Delice 🎂 #BirthdayParty #SpecialCelebrations',
    likes: 201,
    comments: 31,
    date: '2 weeks ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }, {
    id: 6,
    image: social6,
    caption: 'Cozy corner for intimate gatherings and meetings ☕ #IntimateSpace #BusinessMeetings',
    likes: 156,
    comments: 19,
    date: '2 weeks ago',
    link: 'https://www.instagram.com/cafe_delice_/'
  }];
  return <section className="section-padding bg-gradient-to-br from-accent to-warm">
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
            <Button className="btn-premium flex items-center gap-3" onClick={() => window.open('https://www.instagram.com/cafe_delice_/', '_blank')}>
              <Instagram className="w-5 h-5" />
              Follow @cafe_delice_
            </Button>
            <Button variant="outline" className="btn-outline-premium flex items-center gap-3" onClick={() => window.open('https://www.facebook.com/profile.php?id=61560319606863', '_blank')}>
              <Facebook className="w-5 h-5" />
              Like Our Page
            </Button>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => <div key={post.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 card-hover animate-on-scroll cursor-pointer" style={{
          animationDelay: `${index * 100}ms`
        }} onClick={() => window.open(post.link, '_blank')}>
              <div className="aspect-square overflow-hidden">
                <img src={post.image} alt={`Instagram post from @cafe_delice_ - ${post.caption.slice(0, 50)}...`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
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
            </div>)}
        </div>

        {/* Social Stats */}
        

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
    </section>;
};
export default SocialMediaSection;