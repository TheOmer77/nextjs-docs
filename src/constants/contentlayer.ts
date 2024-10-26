import { allDocs, allConfigs } from 'contentlayer/generated';
export { allDocs } from 'contentlayer/generated';

export const notFoundPageName = '_not-found';
export const navLogoName = '_nav-logo';
export const navLinksName = '_nav-links';
export const specialFileNames = [notFoundPageName, navLogoName, navLinksName];

const filteredDocs = allDocs.filter(doc => {
  if (
    !doc.title ||
    !doc.showInSidebar ||
    specialFileNames.includes(doc._raw.flattenedPath)
  )
    return false;
  const parentFolder = doc._raw.flattenedPath.split('/').slice(0, -1).join('/');
  return !allDocs.some(
    d =>
      d._raw.flattenedPath === parentFolder &&
      d._id.startsWith(`${parentFolder}/index.`)
  );
});

export const sidebarDocs = [
  ...filteredDocs
    .filter(doc => !isNaN(Number(doc._raw.sourceFileName.split('-')[0])))
    .sort((a, b) => {
      const aFilenameNum = Number(a._raw.sourceFileName.split('-')[0]),
        bFilenameNum = Number(b._raw.sourceFileName.split('-')[0]);

      return aFilenameNum > bFilenameNum
        ? 1
        : aFilenameNum < bFilenameNum
          ? -1
          : a.url > b.url
            ? 1
            : a.url < b.url
              ? -1
              : 0;
    }),
  ...filteredDocs
    .filter(doc => isNaN(Number(doc._raw.sourceFileName.split('-')[0])))
    .sort((a, b) => (a.url > b.url ? 1 : a.url < b.url ? -1 : 0)),
];

// Workaround: content Collections doesn't support singletons
if (!allConfigs[0]) throw new Error('Site config (config.json) is missing!');
export const config = allConfigs[0];
