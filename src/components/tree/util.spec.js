import { assert } from 'chai';
import Chance from 'chance';
import {
    getAllFileNamesInDirectory,
    isFileASearchMatch,
    setFilesNotInSearch
} from './util';

describe('Tree Actions', () => {
    const chance = new Chance();
    const name1 = chance.word();
    const name2 = chance.word();
    const name3 = chance.word();
    const file1 = chance.word();
    const file2 = chance.word();
    const file3 = chance.word();
    const listing = [
        {
            name: name1,
            contents: [
                {
                    name: name2,
                    contents: [
                        { name: file1 },
                        { name: file2 }
                    ]
                }
            ]
        },
        {
            name: name3,
            contents: [
                { name: file3 }
            ]
        }
    ];

    it('should be able to get all files in a directory', () => {
        assert.deepEqual(getAllFileNamesInDirectory(listing), [file1, file2, file3]);
    });

    it('should be able to determine if a file is a search match', () => {
        const word = chance.word();

        assert.isTrue(isFileASearchMatch('hEllo', 'el'));
        assert.isTrue(isFileASearchMatch('jabertaber', 'tAber'));
        assert.isTrue(isFileASearchMatch(word, word));
        assert.isFalse(isFileASearchMatch('hello', 'elll'));
        assert.isFalse(isFileASearchMatch('jabertaber', 'jer'));
        assert.isFalse(isFileASearchMatch('', 'g'));
    });

    it('should be able to set all files not in search', () => {
        const expectedOutput = [
            {
                name: name1,
                notInSearch: false,
                contents: [
                    {
                        name: name2,
                        notInSearch: false,
                        contents: [
                            { name: file1, notInSearch: true },
                            { name: file2, notInSearch: false }
                        ]
                    }
                ]
            },
            {
                name: name3,
                notInSearch: true,
                contents: [
                    { name: file3, notInSearch: true }
                ]
            }
        ];

        setFilesNotInSearch(listing, file2);

        assert.deepEqual(listing, expectedOutput);
    });
});
