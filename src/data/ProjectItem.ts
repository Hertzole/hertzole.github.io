import type { ProcessedImage } from '@data/ProcessedImage';

export type ProjectItem = {
	name: string;
	url: string;
	image?: ProcessedImage;
    description?: string;
    responsibilities?: string[];
    backgroundPosition?: string;
    releaseYear?: string;
    urlDescription?: string;
};
