"use client"
import { SearchBar } from '@/components/organizations/search-bar';
import { Sidebar } from '@/components/organizations/sidebar';
import { OrganizationGrid } from '@/components/organizations/OrganizationGrid';
import { useOrganizationsFilter } from '@/hooks/useOrganizationsFilter';
import { organizations } from '@/lib/data/organizations';
import Appbar from '@/components/appbar';

export default function OrganizationsPage() {
  const {
    searchQuery,
    setSearchQuery,
    activeFilters,
    toggleFilter,
    filteredOrganizations,
  } = useOrganizationsFilter(organizations);

  return (
    <>
    <Appbar />
    <div className="flex h-screen">
      <Sidebar 
        activeFilters={activeFilters}
        onFilterChange={toggleFilter}
      />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <OrganizationGrid organizations={filteredOrganizations} />
        </div>
      </main>
    </div>
    </>
  );
}