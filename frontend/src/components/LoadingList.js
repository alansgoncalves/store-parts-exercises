import React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";

const LoadingList = () => {
	return (
		<div id="loading-jokes" data-cy="skeleton-joke">
			<Stack gap={1} duration="3000">
				<Skeleton w="100%" h="16" />
				<Skeleton w="100%" h="16" />
				<Skeleton w="100%" h="16" />
				<Skeleton w="100%" h="16" />
				<Skeleton w="100%" h="16" />
				<Skeleton w="100%" h="16" />
			</Stack>
		</div>
	);
};

export default LoadingList;
