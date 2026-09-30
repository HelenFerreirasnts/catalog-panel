import { ShowDetails } from '@/components/templates/catalog-panel/components/show-details';
import { ShowGrid } from '@/components/templates/catalog-panel/components/show-grid';
import { GalleryEmptyState } from '@/components/templates/catalog-panel/components/gallery-empty-state';
import { GalleryErrorState } from '@/components/templates/catalog-panel/components/gallery-error-state';
import { GallerySkeleton } from '@/components/templates/catalog-panel/components/gallery-skeleton';
import { GallerySummary } from '@/components/templates/catalog-panel/components/gallery-summary';
import { GalleryToolbar } from '@/components/templates/catalog-panel/components/gallery-toolbar';
import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet';
import { useShowFilters } from '@/components/templates/catalog-panel/hooks/use-show-filters.hook';
import { useGetShows } from '@/hooks/service-hooks/show/use-get-shows.hook';
import { useFavorites } from '@/hooks/util-hooks/use-favorites';

export const CatalogPanel = () => {
    const query = useGetShows();
    const favorites = useFavorites();
    const shows = query.data ?? [];
    const filters = useShowFilters({
        shows,
        favoriteCodes: favorites.codes,
    });

    if (query.isPending) {
        return (
            <section className={styles.section} aria-label='Carregando séries'>
                <GallerySkeleton />
            </section>
        );
    }

    if (query.isError) {
        return (
            <GalleryErrorState
                isRetrying={query.isFetching}
                onRetry={() => {
                    void query.refetch();
                }}
            />
        );
    }

    const hasResults = filters.visibleShows.length > 0;

    return (
        <section className={styles.section} aria-label='Séries do catálogo'>
            <GallerySummary
                visibleCount={filters.visibleShows.length}
                loadedCount={shows.length}
                favoriteCount={favorites.codes.length}
            />
            <GalleryToolbar
                search={filters.search}
                genre={filters.genre}
                status={filters.status}
                sort={filters.sort}
                favoritesOnly={filters.favoritesOnly}
                genres={filters.genres}
                statuses={filters.statuses}
                onSearchChange={filters.setSearch}
                onGenreChange={filters.setGenre}
                onStatusChange={filters.setStatus}
                onSortChange={filters.setSort}
                onFavoritesOnlyChange={filters.setFavoritesOnly}
            />
            {hasResults && (
                <ShowGrid
                    shows={filters.visibleShows}
                    isFavorite={favorites.isFavorite}
                    onSelect={filters.setSelectedId}
                    onToggleFavorite={favorites.toggleFavorite}
                />
            )}
            {!hasResults && (
                <GalleryEmptyState onClear={filters.clearFilters} />
            )}
            <ShowDetails
                show={filters.selectedShow}
                isFavorite={
                    filters.selectedShow
                        ? favorites.isFavorite(filters.selectedShow.id)
                        : false
                }
                onOpenChange={(open: boolean) => {
                    if (open) return;
                    filters.clearSelection();
                }}
                onToggleFavorite={favorites.toggleFavorite}
            />
        </section>
    );
};
