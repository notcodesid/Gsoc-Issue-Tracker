import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background flex justify-center items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">GSOC Issue Tracker</h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        Discover and track organizations participating in Google Summer of Code. Find the perfect project for your skills and interests.
                    </p>
                    
                    <Link href="/organizations">
                        <Button size="lg" className="mb-16">
                            Get Started
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}