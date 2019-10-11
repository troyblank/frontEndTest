import { cloneDeep } from 'lodash';

export const getAllFileNamesInDirectory = (listing) => {
    let filesInDirectory = [];

    listing.forEach((n) => {
        const { contents, name } = n;

        if (contents) {
            filesInDirectory = filesInDirectory.concat(getAllFileNamesInDirectory(contents));
        } else {
            filesInDirectory.push(name);
        }
    });

    return filesInDirectory;
};

export const isFileASearchMatch = (fileName, searchValue) => fileName.toLowerCase().includes(searchValue.toLowerCase());

export const setFilesNotInSearch = (listing, searchValue) => {
    listing.forEach((n) => {
        const { contents, name } = n;

        if (contents) {
            const allFiles = getAllFileNamesInDirectory(contents);

            // eslint-disable-next-line no-param-reassign
            n.notInSearch = !allFiles.some((fileName) => isFileASearchMatch(fileName, searchValue));
            setFilesNotInSearch(contents, searchValue);
        } else {
            // eslint-disable-next-line no-param-reassign
            n.notInSearch = !isFileASearchMatch(name, searchValue);
        }
    });
};

export const markSearchedPaths = (oldListing, searchValue) => {
    const listing = cloneDeep(oldListing);

    setFilesNotInSearch(listing, searchValue);

    return listing;
};
