import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ExternalLink, GitFork, Calendar } from 'lucide-react';
import Image from 'next/image';

interface OrganizationCardProps {
  name: string;
  logo: string;
  description: string;
  technologies: string[];
  openIssues: number;
  url: string;
  years: string[];
}

export function OrganizationCard({
  name,
  logo,
  description,
  technologies,
  openIssues,
  url,
  years,
}: OrganizationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{name}</h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <GitFork className="h-4 w-4 mr-1" />
            {openIssues} open issues
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {years.join(', ')}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}