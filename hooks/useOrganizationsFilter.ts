import { useState, useMemo } from 'react';
import { Organization } from '@/types';

interface Filters {
  years: string[];
  categories: string[];
  techStacks: string[];
}

export function useOrganizationsFilter(organizations: Organization[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<Filters>({
    years: [],
    categories: [],
    techStacks: [],
  });

  const filteredOrganizations = useMemo(() => {
    return organizations.filter((org) => {
      // Search filter
      const searchMatch = !searchQuery || 
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Tech stack filter
      const techStackMatch = activeFilters.techStacks.length === 0 ||
        org.technologies.some(tech => activeFilters.techStacks.includes(tech));

      // For demo purposes, we'll consider all orgs match year/category filters
      // In a real app, you'd have these properties in your Organization type
      const yearMatch = activeFilters.years.length === 0;
      const categoryMatch = activeFilters.categories.length === 0;

      return searchMatch && techStackMatch && yearMatch && categoryMatch;
    });
  }, [organizations, searchQuery, activeFilters]);

  const toggleFilter = (type: keyof Filters, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  return {
    searchQuery,
    setSearchQuery,
    activeFilters,
    toggleFilter,
    filteredOrganizations,
  };
}