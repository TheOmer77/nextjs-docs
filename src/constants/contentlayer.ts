import { allDocs } from 'contentlayer/generated';
export { allDocs, config } from 'contentlayer/generated';

export const notFoundPageName = '_not-found';
export const navLogoName = '_nav-logo';
export const specialFileNames = [notFoundPageName, navLogoName];

export const filteredDocs = allDocs
  .filter(doc => {
    if (
      !doc.title ||
      !doc.showInSidebar ||
      specialFileNames.includes(doc._raw.flattenedPath)
    )
      return false;
    const parentFolder = doc._raw.flattenedPath
      .split('/')
      .slice(0, -1)
      .join('/');
    return !allDocs.some(
      d =>
        d._raw.flattenedPath === parentFolder &&
        d._id.startsWith(`${parentFolder}/index.`)
    );
  })
  .sort((a, b) => (a._raw.flattenedPath > b._raw.flattenedPath ? 1 : -1));
