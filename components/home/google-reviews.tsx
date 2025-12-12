"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

// To fetch real Google reviews, you'll need:
// 1. Google Places API key
// 2. Place ID for Southbroom Dental
// 
// To get your Place ID:
// 1. Go to https://developers.google.com/maps/documentation/places/web-service/place-id
// 2. Search for "Southbroom Dental" and get the Place ID
//
// Then uncomment and use the fetchGoogleReviews function below

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

// Uncomment this function and add your API key and Place ID to fetch real reviews
/*
async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';
  const PLACE_ID = 'YOUR_PLACE_ID'; // e.g., 'ChIJ...' from Google Maps
  
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    );
    const data = await response.json();
    return data.result?.reviews || [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}
*/

// For now, using placeholder reviews - replace these with actual Google reviews
// You can copy reviews from your Google Business Profile
const googleReviews: GoogleReview[] = [
  {
    author_name: "Patient Review 1",
    rating: 5,
    text: "Excellent service! The team is professional and caring. Highly recommend Southbroom Dental for all your dental needs.",
    time: Math.floor(Date.now() / 1000) - 86400 * 30, // 30 days ago
  },
  {
    author_name: "Patient Review 2",
    rating: 5,
    text: "Outstanding experience from start to finish. The staff made me feel comfortable and the treatment was excellent.",
    time: Math.floor(Date.now() / 1000) - 86400 * 15, // 15 days ago
  },
  {
    author_name: "Patient Review 3",
    rating: 5,
    text: "Best dental practice in the area! Clean, modern facility with a friendly and knowledgeable team.",
    time: Math.floor(Date.now() / 1000) - 86400 * 7, // 7 days ago
  },
];

export function GoogleReviews() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (timestamp: number) => {
    if (!mounted) return "";
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-beach-soft-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Google Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            See what our patients are saying on Google
          </p>
          <a
            href="https://www.google.com/maps/place/Southbroom+dental/@-30.9145812,30.3219928,17z/data=!4m6!3m5!1s0x1e58b1e895ac5a0b:0x8160406db0088d7d!8m2!3d-30.9145812!4d30.3219928!16s%2Fg%2F11c5q8v5qj?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-beach-ocean hover:text-beach-ocean/80 transition-colors font-semibold"
          >
            View all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-[#2E86AB] hover:border-[#2E86AB] relative bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "fill-beach-ocean text-beach-ocean"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    {review.profile_photo_url && (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-semibold text-foreground">
                        {review.author_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(review.time)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png"
                        alt="Google"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
