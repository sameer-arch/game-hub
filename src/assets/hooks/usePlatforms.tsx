interface Platform {
	id: number;
	name: string;
	slug: string;
}

import React from "react";
import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
