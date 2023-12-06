import { allDocs } from 'contentlayer/generated';
export { allDocs, config } from 'contentlayer/generated';

export const notFoundPageName = '_not-found';
export const navLogoName = '_nav-logo';
export const navLinksName = '_nav-links';
export const specialFileNames = [notFoundPageName, navLogoName, navLinksName];

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
  .sort((a, b) => {
    const aFilenameStart = a._raw.sourceFileName.split('-')[0],
      bFilenameStart = b._raw.sourceFileName.split('-')[0];
    return !(isNaN(Number(aFilenameStart)) || isNaN(Number(aFilenameStart)))
      ? Number(aFilenameStart) > Number(bFilenameStart)
        ? 1
        : -1
      : a.url > b.url
        ? 1
        : -1;
  });
