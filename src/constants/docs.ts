import { allConfigs, allDocs } from 'content-collections';
export { allDocs } from 'content-collections';

export const notFoundPageName = '_not-found';
export const navLinksName = '_nav-links';
export const specialFileNames = [notFoundPageName, navLinksName];

const filteredDocs = allDocs.filter(doc => {
  if (
    !doc.title ||
    !doc.includeInSidebar ||
    specialFileNames.includes(doc._meta.path)
  )
    return false;
  const parentFolder = doc._meta.path.split('/').slice(0, -1).join('/');
  return !allDocs.some(
    d =>
      d._meta.path === parentFolder &&
      d._id.startsWith(`${parentFolder}/index.`)
  );
});

export const sidebarDocs = [
  ...filteredDocs
    .filter(doc => !isNaN(Number(doc._meta.fileName.split('-')[0])))
    .sort((a, b) => {
      const aFilenameNum = Number(a._meta.fileName.split('-')[0]),
        bFilenameNum = Number(b._meta.fileName.split('-')[0]);

      switch (true) {
        case aFilenameNum > bFilenameNum:
          return 1;
        case aFilenameNum < bFilenameNum:
          return -1;
        case a.url > b.url:
          return 1;
        case a.url < b.url:
          return -1;
        default:
          return 0;
      }
    }),
  ...filteredDocs
    .filter(doc => isNaN(Number(doc._meta.fileName.split('-')[0])))
    .sort((a, b) => (a.url > b.url ? 1 : a.url < b.url ? -1 : 0)),
];

// Workaround: content Collections doesn't support singletons
if (!allConfigs[0]) throw new Error('Site config (config.json) is missing!');
export const config = allConfigs[0];
