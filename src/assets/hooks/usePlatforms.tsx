interface Platform {
	id: number;
	name: string;
	slug: string;
}

import platforms from "../../data/platforms";
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
