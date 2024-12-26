"use client"
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

const years = ['2024', '2023', '2022', '2021', '2020'];
const categories = ['Data Science', 'Healthcare', 'Web Development', 'Mobile', 'AI/ML', 'Cloud'];
const techStacks = ['Python', 'TypeScript', 'JavaScript', 'Java', 'Go', 'Rust', 'C++'];

interface SidebarProps {
  activeFilters: {
    years: string[];
    categories: string[];
    techStacks: string[];
  };
  onFilterChange: (type: 'years' | 'categories' | 'techStacks', value: string) => void;
}

export function Sidebar({ activeFilters, onFilterChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 border-r bg-background`}>
      <div className="p-4 flex justify-between items-center">
        <h2 className={`font-semibold ${!isOpen && 'hidden'}`}>Filters</h2>
        <Button variant="ghost" size="icon" className="hover:bg-transparent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </Button>
      </div>
      
      {isOpen && (
        <ScrollArea className="h-[calc(100vh-5rem)] px-4">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-medium">Year</h3>
              {years.map((year) => (
                <div key={year} className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id={`year-${year}`}
                    checked={activeFilters.years.includes(year)}
                    onCheckedChange={() => onFilterChange('years', year)}
                  />
                  <label htmlFor={`year-${year}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {year}
                  </label>
                </div>
              ))}
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-sm font-medium">Categories</h3>
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={activeFilters.categories.includes(category)}
                    onCheckedChange={() => onFilterChange('categories', category)}
                  />
                  <label htmlFor={`category-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {category}
                  </label>
                </div>
              ))}
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-sm font-medium">Tech Stack</h3>
              {techStacks.map((tech) => (
                <div key={tech} className="flex items-center space-x-2 mb-2">
                  <Checkbox 
                    id={`tech-${tech}`}
                    checked={activeFilters.techStacks.includes(tech)}
                    onCheckedChange={() => onFilterChange('techStacks', tech)}
                  />
                  <label htmlFor={`tech-${tech}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {tech}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      )}
    </div>
  );
}